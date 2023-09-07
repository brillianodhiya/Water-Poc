import { Pie } from '@ant-design/plots';
import { Typography } from 'antd';

export const DonutChart = () => {
  const data = [
    {
      type: 'Low battery',
      value: 29,
    },
    {
      type: 'Anomali No Usage',
      value: 47,
    },
    {
      type: 'Anomali Gas Meter',
      value: 29,
    },
    {
      type: 'Alert Pressure',
      value: 38,
    },
    {
      type: 'Anomali Closing Time',
      value: 44,
    },
    {
      type: 'Error Devices',
      value: 55,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    color: ['#F759AB', '#40A9FF', '#9254DE', '#BAE637', '#597EF7', '#36CFC9'],
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    legend: false,
    statistic: {
      title: {
        style: {
          fontSize: '2rem',
        },
        offsetY: 15,
        customHtml: () => {
          return <Typography>52632</Typography>;
        },
      },
      content: {
        style: {
          fontSize: '15px',
          color: 'rgba(0, 0, 0, 0.65)',
        },
        offsetY: 20,
        customHtml: () => {
          return <Typography.Paragraph type="secondary">Notification</Typography.Paragraph>;
        },
      },
    },
    theme: {
      padding: 100,
    },
  };
  return <Pie {...config} />;
};
