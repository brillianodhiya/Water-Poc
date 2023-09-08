import { DeviceAreaCard } from '@/components/Dashboard/DeviceAreaCard';
import { DeviceCard } from '@/components/Dashboard/DeviceCard';
import { DeviceLocationCard } from '@/components/Dashboard/DeviceLocationCard';
import { NotificationCard } from '@/components/Dashboard/NotificationCard';
import { UsageCard } from '@/components/Dashboard/UsageCard';
import { getDashboard } from '@/services/nebula/device';
import { PageContainer } from '@ant-design/pro-components';
import { Col, Divider, Row, Spin, Typography } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard: React.FC<{ isFocused: boolean }> = ({}) => {
  const [collapseUsage, setCollapseUsage] = React.useState(true);
  const [collapseDevice, setCollapseDevice] = React.useState(true);
  const [collapseChart, setCollapseChart] = React.useState(true);
  const [collapseLocation, setCollapseLocation] = React.useState(true);
  const [collapseNotification, setCollapseNotification] = React.useState(false);
  const [tabName, setTabName] = React.useState('days');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>([]);
  const [areaId, setAreaId] = React.useState(undefined);

  const getDataDashboard = async () => {
    // console.log(areaId, 'AREA ID');
    if (areaId) {
      setLoading(true);

      const d = await getDashboard({
        params: {
          area_id: areaId,
        },
      });

      setLoading(false);
      if (!d.error) {
        setData(d.data);
      }
    }
  };

  React.useEffect(() => {
    getDataDashboard();
  }, [areaId]);

  console.log(data, 'DATA');

  return (
    <PageContainer
      title=" "
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      childrenContentStyle={{
        minHeight: '70vh',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT | Dashboard</title>
        <link rel="icon" href="/logoaat.png" type="image/x-icon" />
      </Helmet>
      <Spin spinning={loading}>
        <Row
          gutter={[16, 16]}
          justify="space-between"
          style={{
            padding: '0px 20px',
          }}
        >
          <Col>
            <div
              style={
                {
                  // paddingLeft: 20,
                }
              }
            >
              <Typography
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                Hallo, John Doe
              </Typography>
              <Typography
                style={{
                  color: 'rgba(0, 0, 0, 0.45)',
                }}
              >
                Welcome Back
              </Typography>
            </div>
          </Col>
          <Col>
            <div
              style={
                {
                  // paddingRight: 20,
                }
              }
            >
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                Last Refresh
              </Typography>
              <Typography
                style={{
                  color: 'rgba(0, 0, 0, 0.45)',
                }}
              >
                Thu Dec 22 2022 03:35:02
              </Typography>
            </div>
          </Col>
        </Row>
        <Divider />

        <Row gutter={[24, 16]} wrap>
          <Col xs={24} md={24} lg={16} xl={16} xxl={16}>
            <Row gutter={[16, 16]}>
              <Col xxl={8} xs={24} sm={24} md={8}>
                <UsageCard
                  collapseUsage={collapseUsage}
                  setCollapseUsage={setCollapseUsage}
                  totalUsage={data.total_usage}
                />
              </Col>
              <Col xxl={16} xs={24} sm={24} md={16}>
                <DeviceCard
                  collapseDevice={collapseDevice}
                  setCollapseDevice={setCollapseDevice}
                  totalDevice={data.total_device}
                  deviceOnline={data.device_online}
                  deviceOffline={data.device_offline}
                />
              </Col>
              <Col span={24}>
                <DeviceAreaCard
                  collapseChart={collapseChart}
                  setCollapseChart={setCollapseChart}
                  tabName={tabName}
                  setTabName={setTabName}
                  setAreaId={setAreaId}
                  areaId={areaId}
                  totalDevice={data.total_device_area}
                  deviceOnline={data.device_online_area}
                  deviceOffline={data.device_offline_area}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <NotificationCard
              collapseNotification={collapseNotification}
              setCollapseNotification={setCollapseNotification}
            />
          </Col>

          <Col span={24}>
            <DeviceLocationCard
              collapseLocation={collapseLocation}
              setCollapseLocation={setCollapseLocation}
            />
          </Col>
        </Row>
      </Spin>
    </PageContainer>
  );
};

export default Dashboard;
