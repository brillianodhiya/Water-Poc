import React from 'react'
import { Area } from '@ant-design/plots';
// import { getChart } from '@/services/badiklat/dashboard';

type LineType = {
    data: object
}

export const LineChart: React.FC<LineType> = ({
    data
}) => {
    const config = {
        data,
        padding: 'auto',
        xField: 'date',
        yField: 'usage',
        color: '#1890FF',
        point: {
            shape: 'circle'
        },
        xAxis: {
            range: [0, 1],
            tickCount: 5,
        },
        smooth: true,
        areaStyle: {
            fill: 'l(270) 0:#ffffff 1:#1890FF',
        },
        tooltip: {
            domStyles: {
                'g2-tooltip': {
                    // width: '150px',
                    // padding: 0,
                    color: "#ffffff",
                    background: "#1890FF"
                },
            },
            customContent: (title, items) => {
                return (
                    <>
                        <h5 style={{ marginTop: 16, color: '#ffffff' }}>{title}</h5>
                        <ul style={{ paddingLeft: 0 }}>
                            {items?.map((item, index) => {
                                const { name, value } = item;
                                return (
                                    <div
                                        key={item.value}
                                        className="g2-tooltip-list-item"
                                        data-index={index}
                                    >
                                        <span className="g2-tooltip-list-item-value"> {`Total ${name} : ${value} Kwh`}</span>
                                    </div>
                                );
                            })}
                        </ul>
                    </>
                )
            }
        }
    };
    return (
        <Area {...config} />
    )

}