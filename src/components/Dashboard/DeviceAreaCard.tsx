import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Col, Row, Select, Space, Tabs, Typography } from 'antd';
import React from 'react';
import { LineChart } from '../Chart/Line';
import { AreaDropdown } from '../CustomInput/AreaDropdown';
import { AreaDeviceIcon } from '../Icons/AreaIcon';
import { DeviceBlueIcon } from '../Icons/DeviceIcon';

type Props = {
  collapseChart: boolean;
  tabName: string;
  setCollapseChart: (val: any) => void;
  setTabName: (val: any) => void;
  areaId?: number;
  setAreaId: (val: any) => void;
  totalDevice: number;
  deviceOnline: number;
  deviceOffline: number;
};

const dataChart = [
  {
    date: '00:00',
    usage: 40,
  },
  {
    date: '01:00',
    usage: 40,
  },
  {
    date: '02:00',
    usage: 60,
  },
  {
    date: '03:00',
    usage: 80,
  },
  {
    date: '04:00',
    usage: 50,
  },
  {
    date: '05:00',
    usage: 30,
  },
  {
    date: '06:00',
    usage: 50,
  },
  {
    date: '07:00',
    usage: 10,
  },
  {
    date: '08:00',
    usage: 50,
  },
  {
    date: '09:00',
    usage: 75,
  },
];

export const DeviceAreaCard: React.FC<Props> = ({
  collapseChart,
  tabName,
  setCollapseChart,
  setTabName,
  areaId,
  setAreaId,
  totalDevice,
  deviceOffline,
  deviceOnline,
}) => {
  return (
    <Card
      style={{
        borderRadius: 8,
        borderTop: '1px solid #1890FF',
        boxShadow:
          'inset -1px 0px 0px #F0F0F0, inset 0px -1px 0px #F0F0F0, inset 1px 0px 0px #F0F0F0',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Space>
            <div
              style={{
                background: '#1890FF',
                padding: '8px 4px',
                borderRadius: 999,
                width: 36,
                height: 36,
                textAlign: 'center',
                boxShadow:
                  '0px 100px 80px rgba(24, 144, 255, 0.27), 0px 12.5216px 10.0172px rgba(24, 144, 255, 0.135), 0px 6.6501px 5.32008px rgba(24, 144, 255, 0.109051), 0px 2.76726px 2.21381px rgba(24, 144, 255, 0.0759093)',
              }}
            >
              <AreaDeviceIcon />
            </div>
            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Devices by Area
            </Typography>
          </Space>
          <Button
            icon={
              !collapseChart ? (
                <DownOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
              ) : (
                <UpOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
              )
            }
            size={'small'}
            style={{
              background: '#E6F7FF',
              border: '1px solid #E6F7FF',
            }}
            onClick={() => setCollapseChart(!collapseChart)}
          />
        </Col>
        <Col span={24} className={collapseChart ? 'collabsible active' : 'collabsible'}>
          <Row gutter={[16, 16]} style={{ marginTop: 10 }}>
            <Col span={6} xs={24} sm={24} md={6}>
              <Row>
                <Col span={24}>
                  <AreaDropdown
                    value={areaId}
                    onChange={(val) => setAreaId(val)}
                    type=""
                    useAll={false}
                    style={{
                      width: '200px',
                    }}
                    defaultArea0={true}
                  />
                </Col>
                <Col
                  xxl={24}
                  lg={24}
                  md={24}
                  sm={10}
                  xs={10}
                  style={{
                    marginTop: 24,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                    }}
                  >
                    {totalDevice ?? 0}
                  </Typography>
                  <Space>
                    <DeviceBlueIcon />
                    Total Device
                  </Space>
                </Col>
                <Col
                  xxl={12}
                  lg={12}
                  md={12}
                  sm={7}
                  xs={7}
                  style={{
                    marginTop: 24,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                    }}
                  >
                    {deviceOnline ?? 0}
                  </Typography>
                  <Space>
                    <Badge status="success" />
                    <Typography>Online</Typography>
                  </Space>
                </Col>
                <Col
                  xxl={12}
                  lg={12}
                  md={12}
                  sm={7}
                  xs={7}
                  style={{
                    marginTop: 24,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 500,
                    }}
                  >
                    {deviceOffline ?? 0}
                  </Typography>
                  <Space>
                    <Badge status="error" />
                    <Typography>Offline</Typography>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={18} xxl={18} span={18}>
              <Typography
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Usage
              </Typography>
              <Row gutter={[16, 16]} justify={'space-between'}>
                <Col xs={24} sm={16} md={16} xxl={12} style={{ overflowY: 'auto' }}>
                  <Tabs
                    className="navbar-tab"
                    size="small"
                    style={{
                      minWidth: '300px',
                      // marginLeft: -80,
                      marginTop: 20,
                    }}
                    onChange={setTabName}
                    activeKey={tabName}
                  >
                    <Tabs.TabPane tab="Today" key="days" />
                    <Tabs.TabPane tab="Yesterday" key="yesterday" />
                    <Tabs.TabPane tab="Last 7 Days" key="7days" />
                    <Tabs.TabPane tab="Last 30 Days" key="30days" />
                  </Tabs>
                </Col>
                <Col xxl={8} md={8} sm={8} xs={12}>
                  <Select
                    defaultValue="water"
                    style={{ width: '60%', marginTop: 20 }}
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'water', label: 'Water' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                      { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                  />
                </Col>
                <Col>
                  <Typography>
                    Total Usage{' '}
                    {tabName == 'days'
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
                    <Typography.Title level={2}>89,290</Typography.Title>
                    <Typography.Paragraph style={{ fontSize: 16 }}>m3</Typography.Paragraph>
                  </Space>
                </Col>
              </Row>
              <LineChart data={dataChart} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
