import { WifiOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Space, Row, Typography, Tag, Avatar, Tabs, Modal, Spin } from 'antd';
import React from 'react';

// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { GatewayBigIcon, GatewayIcon } from '@/components/Icons/GatewayIcon';
import { OfflineIcon } from '@/components/Icons/OfflineIcon';
import { LineChart } from '@/components/Chart/Line';
import { DotIcon } from '@/components/Icons/DotIcon';
import { NodeIcon } from '@/components/Icons/NodeIcon';
import { DashboardSideSchedule } from './Schedule/DashboardSide';
import { apiGetListModalDashboardDetails } from '@/services/badiklat/nodeList';
import List from 'antd/es/list';

import { getChart, getListAlert } from '@/services/badiklat/dashboard';
import moment from 'moment';
import { DeviceBlueIcon } from '@/components/Icons/DeviceIcon';

const Dashboard: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [alertData, setAlertData] = React.useState<any>([]);
  const [tabName, setTabName] = React.useState<string>('days');
  const [modalDetails, setModalDetails] = React.useState<boolean>(false);
  const [modalDetailsType, setModalDetailsType] = React.useState<any>(null);
  const [modalDetailsSubType, setModalDetailsSubType] = React.useState<any>(null);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [dataModal, setDataModal] = React.useState<any[]>([]);
  // const [tabName, setTabName] = React.useState<string>('7days');
  const [chartData, setChartData] = React.useState<
    {
      usage: number;
    }[]
  >([]);
  const [loading, setLoading] = React.useState(false);

  const getAlertData = async () => {
    const data = await getListAlert({});
    // console.log(data);
    if (!data.error) {
      setAlertData(data.data);
    }
  };
  const getChartData = async () => {
    setLoading(true);
    const result = await getChart(tabName);
    // console.log(result)
    setLoading(false);
    if (!result.error) {
      setChartData(result.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getAlertData();
    }
  }, [isFocused]);

  React.useEffect(() => {
    if (modalDetails) {
      setLoadingModal(true);
      const getDataDetails = async () => {
        const d = await apiGetListModalDashboardDetails(modalDetailsType, {
          params: {
            filter: modalDetailsSubType,
          },
        });

        if (!d.error) {
          setLoadingModal(false);
          setDataModal(d.data);
          // console.log(d.data);
        }
      };
      getDataDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalDetails]);

  React.useEffect(() => {
    if (tabName) {
      getChartData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabName]);

  const usages = chartData.map(({ usage }) => usage);
  const getTotalUsage = usages.reduce((a, val) => {
    return a + val;
  }, 0);

  return (
    <PageContainer
      title=" "
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', marginTop: '14px' }}
    >
      <Modal
        open={modalDetails}
        title={
          <span
            style={{
              textTransform: 'capitalize',
            }}
          >
            {'Modal Details ' + modalDetailsType + ' ' + modalDetailsSubType}
          </span>
        }
        onCancel={() => {
          setModalDetails(false);
          setModalDetailsType(null);
          setModalDetailsSubType(null);
        }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Spin spinning={loadingModal}>
          <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            <List
              itemLayout="horizontal"
              dataSource={dataModal}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      modalDetailsType == 'gateway' ? (
                        <Avatar
                          icon={<GatewayIcon />}
                          style={{
                            background:
                              modalDetailsSubType == 'total'
                                ? '#003A8C'
                                : modalDetailsSubType == 'online'
                                ? '#389E0D'
                                : '#F5222D',
                          }}
                        />
                      ) : (
                        <Avatar
                          icon={<NodeIcon />}
                          style={{
                            background:
                              modalDetailsSubType == 'total'
                                ? '#FAAD14'
                                : modalDetailsSubType == 'online'
                                ? '#389E0D'
                                : '#F5222D',
                          }}
                        />
                      )
                    }
                    title={
                      <Typography.Title level={5}>
                        {item.gateway_name ||
                          item.devEui ||
                          moment(item.start_anomali_date).format('YYYY-MM-DD HH:mm:ss')}
                      </Typography.Title>
                    }
                    description={
                      modalDetailsType == 'anomali' ? (
                        <div>
                          Location: {item.location}; Start Anomali Meter: {item.start_anomali_meter}
                          ; Live Last Meter: {item.live_last_meter}
                        </div>
                      ) : (
                        <div>
                          {modalDetailsType == 'gateway'
                            ? 'Mac: ' + item.mac_address + ' Unit Model: ' + item.unit_model
                            : 'Location: ' + item.location}
                        </div>
                      )
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </Spin>
      </Modal>
      <Row>
        <Col xxl={19} xl={18} lg={16} md={16} sm={16} xs={24} style={{ marginTop: '-9px' }}>
          <Row justify={'space-between'} align="bottom">
            <Col
              xxl={4}
              xl={4}
              lg={8}
              md={6}
              sm={8}
              xs={6}
              style={{
                borderLeft: '1px solid #0050B3',
                padding: '0px 0px 0px 20px',
              }}
            >
              <Typography.Title level={4} style={{ minWidth: '200px' }}>
                Gateway
              </Typography.Title>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('gateway');
                  setModalDetailsSubType('total');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  icon={<GatewayBigIcon />}
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 60,
                    xl: 60,
                    xxl: 60,
                  }}
                  style={{
                    backgroundColor: '#003A8C',
                    boxShadow:
                      '0px 100px 80px rgba(2, 76, 181, 0.14), 0px 41.7776px 33.4221px rgba(2, 76, 181, 0.10064), 0px 22.3363px 17.869px rgba(2, 76, 181, 0.083455), 0px 12.5216px 10.0172px rgba(2, 76, 181, 0.07), 0px 6.6501px 5.32008px rgba(2, 76, 181, 0.056545), 0px 2.76726px 2.21381px rgba(2, 76, 181, 0.0393604)',
                  }}
                />
                <Space direction="vertical" align="center">
                  <Typography>Total</Typography>
                  <Typography.Title level={3}>{alertData.gateway_total}</Typography.Title>
                </Space>
              </Space>
            </Col>
            <Col xxl={4} xl={4} lg={8} md={6} sm={6} xs={6}>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('gateway');
                  setModalDetailsSubType('online');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #389E0D',
                    boxShadow:
                      '0px 100px 80px rgba(56, 158, 13, 0.14), 0px 41.7776px 33.4221px rgba(56, 158, 13, 0.10064), 0px 22.3363px 17.869px rgba(56, 158, 13, 0.083455), 0px 12.5216px 10.0172px rgba(56, 158, 13, 0.07), 0px 6.6501px 5.32008px rgba(56, 158, 13, 0.056545), 0px 2.76726px 2.21381px rgba(56, 158,13,0.0393604)',
                  }}
                >
                  <WifiOutlined style={{ fontSize: 24, color: '#389E0D' }} />
                </Avatar>
                <Space direction="vertical" align="center">
                  <Typography>Online</Typography>
                  <Typography.Title level={3}>{alertData.gateway_online}</Typography.Title>
                </Space>
              </Space>
            </Col>
            <Col xxl={4} xl={4} lg={8} md={6} sm={6} xs={8}>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('gateway');
                  setModalDetailsSubType('offline');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #F5222D',
                    boxShadow:
                      '0px 100px 80px rgba(245, 34, 45, 0.14), 0px 41.7776px 33.4221px rgba(245, 34, 45, 0.10064), 0px 22.3363px 17.869px rgba(245, 34, 45, 0.083455), 0px 12.5216px 10.0172px rgba(245, 34, 45, 0.07), 0px 6.6501px 5.32008px rgba(245, 34, 45, 0.056545), 0px 2.76726px 2.21381px rgba(245, 34,45,0.0393604)',
                  }}
                >
                  <OfflineIcon style={{ fontSize: 24, color: '#389E0D' }} />
                </Avatar>
                <Space direction="vertical" align="center">
                  <Typography>Offline</Typography>
                  <Typography.Title level={3}>{alertData.gateway_offline}</Typography.Title>
                </Space>
              </Space>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              style={{
                borderLeft: '1px solid #0050B3',
                padding: '0px 0px 0px 20px',
              }}
            >
              <Typography.Title level={4}>Device</Typography.Title>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('node');
                  setModalDetailsSubType('total');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  icon={<DeviceBlueIcon />}
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 60,
                    xl: 60,
                    xxl: 60,
                  }}
                  style={{
                    backgroundColor: '#FAAD14',
                    boxShadow:
                      '0px 100px 80px rgba(250, 173, 20, 0.07), 0px 41.7776px 33.4221px rgba(250, 173, 20, 0.0503198), 0px 22.3363px 17.869px rgba(250, 173, 20, 0.0417275), 0px 12.5216px 10.0172px rgba(250, 173, 20, 0.035), 0px 6.6501px 5.32008px rgba(250, 173, 20, 0.0282725), 0px 2.76726px 2.21381px rgba(250, 173, 20, 0.0196802)',
                  }}
                />
                <Space direction="vertical" align="center">
                  <Typography>Total</Typography>
                  <Typography.Title level={3}>{alertData.node_total}</Typography.Title>
                </Space>
              </Space>
            </Col>
            <Col xxl={4} xl={4} lg={8} md={6} sm={6} xs={8}>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('node');
                  setModalDetailsSubType('online');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #389E0D',
                    boxShadow:
                      '0px 100px 80px rgba(56, 158, 13, 0.14), 0px 41.7776px 33.4221px rgba(56, 158, 13, 0.10064), 0px 22.3363px 17.869px rgba(56, 158, 13, 0.083455), 0px 12.5216px 10.0172px rgba(56, 158, 13, 0.07), 0px 6.6501px 5.32008px rgba(56, 158, 13, 0.056545), 0px 2.76726px 2.21381px rgba(56, 158,13,0.0393604)',
                  }}
                >
                  <WifiOutlined style={{ fontSize: 24, color: '#389E0D' }} />
                </Avatar>
                <Space direction="vertical" align="center">
                  <Typography>Online</Typography>
                  <Typography.Title level={3}>{alertData.node_online}</Typography.Title>
                </Space>
              </Space>
            </Col>
            <Col xxl={4} xl={4} lg={8} md={6} sm={6} xs={8}>
              <div>
                <Tag
                  color="orange"
                  style={{
                    borderRadius: 8,
                    padding: '2px 10px 2px 10px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                  }}
                  icon={<DotIcon />}
                  onClick={() => {
                    setModalDetails(true);
                    setModalDetailsType('anomali');
                    setModalDetailsSubType('total');
                  }}
                >
                  <Space size={'middle'} align={'start'}>
                    <Typography>Anomali</Typography>
                    <Typography>{alertData.anomali}</Typography>
                  </Space>
                </Tag>
              </div>
              <Space
                size={'middle'}
                onClick={() => {
                  setModalDetails(true);
                  setModalDetailsType('node');
                  setModalDetailsSubType('offline');
                }}
                style={{ cursor: 'pointer' }}
              >
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #F5222D',
                    boxShadow:
                      '0px 100px 80px rgba(245, 34, 45, 0.14), 0px 41.7776px 33.4221px rgba(245, 34, 45, 0.10064), 0px 22.3363px 17.869px rgba(245, 34, 45, 0.083455), 0px 12.5216px 10.0172px rgba(245, 34, 45, 0.07), 0px 6.6501px 5.32008px rgba(245, 34, 45, 0.056545), 0px 2.76726px 2.21381px rgba(245, 34,45,0.0393604)',
                  }}
                >
                  <OfflineIcon style={{ fontSize: 24, color: '#389E0D' }} />
                </Avatar>
                <Space direction="vertical" align="center">
                  <Typography>Offline</Typography>
                  <Typography.Title level={3}>{alertData.node_offline}</Typography.Title>
                </Space>
              </Space>
            </Col>
          </Row>
          <Card
            style={{
              marginTop: 60,
              borderRadius: 24,
              padding: 20,
              boxShadow:
                ' 0px 100px 80px rgba(0, 0, 0, 0.04), 0px 36.5016px 29.2013px rgba(0, 0, 0, 0.0275993), 0px 17.7209px 14.1767px rgba(0, 0, 0, 0.0222516), 0px 8.6871px 6.94968px rgba(0, 0, 0, 0.0177484), 0px 3.43489px 2.74791px rgba(0, 0, 0, 0.0124007)',
              width: '98%',
            }}
          >
            <Typography.Title level={4}>Usage</Typography.Title>
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
                  <Tabs.TabPane tab="Today" key="days" />
                  <Tabs.TabPane tab="Yesterday" key="yesterday" />
                  <Tabs.TabPane tab="Last 7 Days" key="7days" />
                  <Tabs.TabPane tab="Last 30 Days" key="30days" />
                </Tabs>
              </Col>
              <Col>
                <div>
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
                    <Typography.Title level={2}>{getTotalUsage}</Typography.Title>Kwh
                  </Space>
                </div>
              </Col>
            </Row>
            <Spin spinning={loading}>
              Total Usage
              <LineChart data={chartData} />
            </Spin>
          </Card>
        </Col>
        <Col xxl={5} xl={6} lg={8} md={8} sm={8} xs={24} style={{ paddingLeft: 10 }}>
          <DashboardSideSchedule isFocused={isFocused} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Dashboard;
