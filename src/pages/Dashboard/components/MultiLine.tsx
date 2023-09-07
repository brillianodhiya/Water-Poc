import { converNumberSmNotFixed } from '@/components/config.usage';
import { getProduksiAir } from '@/services/badiklat/dashboard';
import { Area } from '@ant-design/charts';
import { Card, Col, Row, Select, Space, Spin, Tabs, Typography } from 'antd';
import React, { useState } from 'react';

type Props = {};

const MultiLine: React.FC<Props> = () => {
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [tabName, setTabName] = React.useState('today');
  const [type, setType] = React.useState('all');

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  // const data = [
  //   {
  //     year: '0',
  //     value: 15,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '0',
  //     value: 34,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '0',
  //     value: 20,
  //     category: 'Gas fuel',
  //   },
  //   {
  //     year: '1',
  //     value: 10,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '1',
  //     value: 34,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '1',
  //     value: 20,
  //     category: 'Gas fuel',
  //   },
  //   {
  //     year: '2',
  //     value: 20,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '2',
  //     value: 24,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '2',
  //     value: 10,
  //     category: 'Gas fuel',
  //   },
  //   {
  //     year: '3',
  //     value: 10,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '3',
  //     value: 34,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '3',
  //     value: 20,
  //     category: 'Gas fuel',
  //   },
  //   {
  //     year: '4',
  //     value: 10,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '4',
  //     value: 34,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '4',
  //     value: 20,
  //     category: 'Gas fuel',
  //   },
  //   {
  //     year: '5',
  //     value: 50,
  //     category: 'Liquid fuel',
  //   },
  //   {
  //     year: '5',
  //     value: 34,
  //     category: 'Solid fuel',
  //   },
  //   {
  //     year: '5',
  //     value: 80,
  //     category: 'Gas fuel',
  //   },
  // ];

  const getData = async () => {
    setLoading(true);
    const d = await getProduksiAir({
      type,
      filter: tabName,
    });
    // console.log(d, 'data map');
    setLoading(false);
    if (!d.error) {
      // setDataMapCount(data.data);
      // console.log(data.data, 'data map');
      // data.data.device_location = [];
      setTotal(d.total);
      setData(d.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, [tabName]);

  const config = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    seriesField: 'category',
    color: ['#5CDBD3', '#40A9FF', '#FAAD14'],
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

  return (
    <Card>
      <Typography.Title level={5} style={{ marginBottom: '-10px' }}>
        Produksi Air bersih
      </Typography.Title>
      <Spin spinning={loading}>
        <Row justify="space-between">
          <Col style={{ overflowY: 'auto' }}>
            <Tabs
              className="navbar-tab"
              size="small"
              style={{
                marginTop: '28px',
                minWidth: '400px',
              }}
              onChange={setTabName}
              activeKey={tabName}
            >
              <Tabs.TabPane tab="Today" key="today" />
              <Tabs.TabPane tab="Yesterday" key="yesterday" />
              <Tabs.TabPane tab="Last 7 Days" key="7days" />
              <Tabs.TabPane tab="Last 30 Days" key="30days" />
            </Tabs>
          </Col>
          <Col>
            <Space size={'large'}>
              {/* <Select style={{ width: 170 }} onChange={setType} value={type}>
                <Select.Option value="all">
                  <Typography>Semua</Typography>
                </Select.Option>
                <Select.Option value="baku">
                  <Typography>Air Baku</Typography>
                </Select.Option>
                <Select.Option value="bersih">
                  <Typography>Air Bersih</Typography>
                </Select.Option>
                <Select.Option value="lumpur">
                  <Typography>Air Lumpur</Typography>
                </Select.Option>
              </Select> */}
              <div>
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
                  <Typography.Title level={2}>{converNumberSmNotFixed(total)}</Typography.Title>
                  m3
                </Space>
              </div>
            </Space>
          </Col>
        </Row>
        <Area {...config} />
      </Spin>
    </Card>
  );
};

export default MultiLine;
