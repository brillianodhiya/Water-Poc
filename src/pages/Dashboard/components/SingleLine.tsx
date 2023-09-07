import { Area } from '@ant-design/plots';
import { Card, Col, Row, Space, Tabs, Typography } from 'antd';
import React from 'react';
// import { getChart } from '@/services/badiklat/dashboard';

type LineType = {
  data: any[];
  lineColor: string;
  dataType: string;
  isUsage?: boolean;
  isTabs?: boolean;
  onChange?: (value: string) => void;
  total?: number;
  satuan?: string;
};

export const SingleLine: React.FC<LineType> = ({
  data,
  dataType,
  lineColor,
  isUsage,
  isTabs,
  onChange = () => {},
  total,
  satuan = 'm3',
}) => {
  const [tabName, setTabName] = React.useState('today');

  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    color: lineColor ?? '#1890FF',
    point: {
      shape: 'circle',
    },
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    smooth: true,
    areaStyle: {
      fill: `l(270) 0:#ffffff 1:${lineColor}`,
    },
    tooltip: {
      domStyles: {
        'g2-tooltip': {
          // width: '150px',
          // padding: 0,
          color: '#ffffff',
          background: lineColor ?? '#1890FF',
        },
      },
      customContent: (title: any, items: any) => {
        return (
          <>
            <h5 style={{ marginTop: 16, color: '#ffffff' }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item: any, index: number) => {
                const { name, value } = item;
                return (
                  <div key={item.value} className="g2-tooltip-list-item" data-index={index}>
                    <span className="g2-tooltip-list-item-value">
                      {' '}
                      {`Total ${name} : ${value} ${satuan}`}
                    </span>
                  </div>
                );
              })}
            </ul>
          </>
        );
      },
    },
  };
  console.log(data, 'DATA');
  return (
    <Card style={{ margin: '20px 0' }}>
      {data.length > 0 ? (
        <Typography.Title
          level={5}
          hidden={!data[0].tenant_name}
          style={{ marginBottom: 0, padding: 0 }}
        >
          {data[0].tenant_name}
        </Typography.Title>
      ) : null}
      <Typography.Title level={5} style={{ marginBottom: '20px', marginTop: 0 }}>
        {dataType}
        {data.length > 0 ? (
          <span hidden={!data[0].description}> - {data[0].description}</span>
        ) : null}
      </Typography.Title>
      <Row justify="space-between">
        {isTabs && (
          <Col style={{ overflowY: 'auto', marginTop: '-30px' }}>
            <Tabs
              className="navbar-tab"
              size="small"
              style={{
                marginTop: '28px',
                minWidth: '400px',
              }}
              onChange={(v) => {
                setTabName(v);
                onChange(v);
              }}
              activeKey={tabName}
            >
              <Tabs.TabPane tab="Today" key="today" />
              <Tabs.TabPane tab="Yesterday" key="yesterday" />
              <Tabs.TabPane tab="Last 7 Days" key="7days" />
              <Tabs.TabPane tab="Last 30 Days" key="30days" />
            </Tabs>
          </Col>
        )}
        {isUsage && (
          <Col>
            <Typography>
              Total Usage{' '}
              {tabName == 'today'
                ? ' Today'
                : tabName == 'yesterday'
                ? ' Yesterday'
                : tabName == '7days'
                ? ' 7 Days'
                : tabName == '30days'
                ? ' 30 Days'
                : ''}
            </Typography>
            <Space align="start">
              <Typography.Title level={2}>{total}</Typography.Title>
              {satuan}
            </Space>
          </Col>
        )}
      </Row>
      <Area {...config} />
    </Card>
  );
};
