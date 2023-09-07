import { Area } from '@ant-design/plots';
import { Card, Col, Row, Space, Tabs, Typography } from 'antd';
import React from 'react';
// import { getChart } from '@/services/badiklat/dashboard';

type LineType = {
  data: any[];
  dataType: string;
  isUsage?: boolean;
  isTabs?: boolean;
  onChange?: (value: string) => void;
  total?: any;
  satuan?: string;
};

export const MultilineComponent: React.FC<LineType> = ({
  data,
  dataType,
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
    seriesField: 'category',
    // color: ['#5CDBD3', '#40A9FF', '#FAAD14'],
    // xAxis: {
    //   type: 'time',
    //   mask: 'YYYY',
    // },
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    legend: false,
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
        {Object.keys(total).map((v) => {
          return (
            <Col key={v}>
              <Typography>
                Total {v}{' '}
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
                <Typography.Title level={2}>{total[v]}</Typography.Title>
                {satuan}
              </Space>
            </Col>
          );
        })}
      </Row>
      <Area {...config} />
    </Card>
  );
};
