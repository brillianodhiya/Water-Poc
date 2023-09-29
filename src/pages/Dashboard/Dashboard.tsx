/* eslint-disable @typescript-eslint/no-unused-vars */
import { GatewayIcon } from '@/components/Icons/GatewayIcon';
import { GatewayIcon2 } from '@/components/Icons/GatewayIcon2';
import { OfflineIcon } from '@/components/Icons/OfflineIcon';
import { WifiOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Card, Col, Row, Space, Spin, Tabs, Tag, Typography } from 'antd';
// import { List } from 'antd/lib/form/Form';
import { ModalViewDetailNotification } from '@/components/ModalCustom/ModalViewNotification';
import { getListAlert } from '@/services/badiklat/dashboard';
import { history } from '@umijs/max';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapAction } from './MapAction';
import { ProduksiAir } from './components/ProduksiAir';
import { KualitasAir } from './components/KualitasAir';
import { Grafik } from './Grafik';
import moment from 'moment';
import { WaterUsage } from './components/WaterUsage';
import { WaterPressure } from './components/WaterPressure';
import { WaterPressureVacuum } from './components/WaterVacuum';
import { WaterLosses } from './components/WaterLosses';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Dashboard: React.FC<{ isFocused: boolean }> = ({}) => {
  const [modalNotification, setModalNotification] = React.useState<boolean>(false);
  const [typenotification, setTypeNotification] = React.useState('device');

  const [loading, setLoading] = React.useState(false);
  const [dataAlert, setDataAlert] = React.useState<{
    device_location: any[];
    alert_system: {
      icon_pemakaian_air: string;
      pemakaian_air: string | number;
      tekanan_air: string | number;
    };
    gateway_offline: number;
    gateway_total: number;
    gateway_online: number;
    node_total: number;
    node_offline: number;
    node_online: number;
    pemakaian_tenant: {
      interval_sebelumnya: number | string;
      interval_sekarang: number | string;
    };
    produksi_air: {
      air_bersih: string | number;
      air_beku: string | number;
      air_lumpur: string | number;
    };
    kualitas_air: {
      air_bersih: string | number;
      air_limbah: string | number;
    };
    kualitas_air_v2?: {
      air_bersih: {
        deveui: string;
        field_meter: string;
        id: number;
        unit: string;
        value: number;
      }[];
      air_limbah: {
        deveui: string;
        field_meter: string;
        id: number;
        unit: string;
        value: number;
      }[];
    };
    notification: {
      data: any[];
      total: number;
    };
    water_pressure: any[];
  }>({
    device_location: [],
    alert_system: {
      pemakaian_air: '180.074',
      tekanan_air: '0.03',
      icon_pemakaian_air: '',
    },
    gateway_offline: 0,
    gateway_total: 0,
    gateway_online: 0,
    node_total: 0,
    node_offline: 0,
    node_online: 0,
    pemakaian_tenant: {
      interval_sebelumnya: 151.054,
      interval_sekarang: 180.074,
    },
    produksi_air: {
      air_bersih: '1.041.054',
      air_beku: '1.051.054',
      air_lumpur: '10.000',
    },
    kualitas_air: {
      air_bersih: '8.5',
      air_limbah: '3.5',
    },
    notification: {
      data: [],
      total: 0,
    },
    water_pressure: [],
  });

  const [loadingNotif, setLoadingNotif] = React.useState(false);
  const [dataNotif, setDataNotif] = React.useState<any[]>([]);
  const [tab, setTab] = React.useState('dashboard');

  // const getDataNotif = async () => {
  //   setLoadingNotif(true);
  //   const data = await getListAlertNotif({});
  //   // console.log(data, 'data map');
  //   setLoadingNotif(false);
  //   if (!data.error) {
  //     // setDataMapCount(data.data);
  //     setDataNotif(data.data);
  //   } else {
  //     setDataNotif([]);
  //   }
  // };

  // console.log(dataNotif, 'DATA NOTIF');

  const getDataCountMap = async () => {
    setLoading(true);
    const data = await getListAlert({});
    // console.log(data, 'data map');
    setLoading(false);
    if (!data.error) {
      // setDataMapCount(data.data);
      // console.log(data.data, 'data map');
      // data.data.device_location = [];
      setDataAlert(data.data);
    }
  };

  React.useEffect(() => {
    getDataCountMap();
    // getDataNotif();
  }, []);

  return (
    <PageContainer
      title=" "
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      childrenContentStyle={{
        minHeight: '80vh',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Dashboard</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>

      <ModalViewDetailNotification
        onCancel={() => {
          setModalNotification(false);
        }}
        onOk={() => {
          setModalNotification(false);
        }}
        open={modalNotification}
        typeName={typenotification}
        data={dataNotif}
        loading={loadingNotif}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          marginBottom: '20px',
        }}
      >
        <Tabs
          activeKey={tab}
          onChange={(key) => {
            setTab(key);
          }}
          items={[
            {
              label: `Dashboard`,
              key: 'dashboard',
            },
            {
              label: `Grafik`,
              key: 'grafik',
            },
          ]}
        />
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
            {/* Thu Dec 22 2022 03:35:02 */}
            {moment().format('dddd MMM DD YYYY HH:mm:ss')}
          </Typography>
        </div>
      </div>

      {tab == 'dashboard' ? (
        <Row gutter={[16, 16]}>
          <Col xxl={17} xl={17} md={24} sm={24} xs={24}>
            <Row gutter={[24, 16]}>
              <Col xxl={12} xl={24} md={24} sm={24} xs={24}>
                <Card
                  bodyStyle={{
                    padding: '20px 24px',
                  }}
                  loading={loading}
                  style={{
                    borderRadius: 8,
                    borderTop: '2px solid #1890FF',
                    paddingBottom: 0,
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
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
                      <Typography
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}
                      >
                        Gateway
                      </Typography>
                      {/* <Space size={'large'}> */}
                      {/* <Space
                      style={{
                        background: '#FFF7E6',
                        borderRadius: 8,
                        border: '1px solid #FFD591',
                        padding: '2px 8px',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setModalNotification(true);
                        setTypeNotification('gateway');
                      }}
                    >
                      <img alt="badgedots" src="/Frame 29.svg" />
                      <Typography>Notification</Typography>
                      <Typography>7</Typography>
                    </Space> */}

                      {/* <Button
                      icon={
                        !collapseGateway ? (
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
                      onClick={() => setCollapseGateway(!collapseGateway)}
                    /> */}
                      {/* </Space> */}
                    </Col>
                    <Col
                      span={24}
                      // className={collapseGateway ? 'collabsible active' : 'collabsible'}
                      // style={{
                      //   overflow: collapseGateway ? 'visible' : 'hidden',
                      // }}
                    >
                      <Row gutter={[24, 16]}>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
                            <Avatar
                              src={<GatewayIcon2 />}
                              size={{
                                xs: 54,
                                sm: 54,
                                md: 54,
                                lg: 64,
                                xl: 64,
                                xxl: 64,
                              }}
                              style={{
                                backgroundColor: 'rgba(47, 84, 235, 1)',
                                padding: '6px 4px',
                                boxShadow:
                                  ' 0px 100px 80px rgba(47, 84, 235, 0.07), 0px 41.7776px 33.4221px rgba(47, 84, 235, 0.0668802), 0px 22.3363px 17.869px rgba(47, 84, 235, 0.0637831), 0px 12.5216px 10.0172px rgba(47, 84, 235, 0.0591401), 0px 6.6501px 5.32008px rgba(47, 84, 235, 0.0516068), 0px 2.76726px 2.21381px rgba(47, 84, 235, 0.0382912)',
                              }}
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                }}
                              >
                                Total
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.gateway_total}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
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
                                border: '5px solid #52C41A',
                                boxShadow:
                                  '0px 100px 80px rgba(82, 196, 26, 0.07), 0px 41.7776px 33.4221px rgba(82, 196, 26, 0.0668802), 0px 22.3363px 17.869px rgba(82, 196, 26, 0.0637831), 0px 12.5216px 10.0172px rgba(82, 196, 26, 0.0591401), 0px 6.6501px 5.32008px rgba(82, 196, 26, 0.0516068), 0px 2.76726px 2.21381px rgba(82, 196, 26, 0.0382912)',
                              }}
                            >
                              <WifiOutlined style={{ fontSize: 30, color: '#52C41A' }} />
                            </Avatar>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                }}
                              >
                                Online
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.gateway_online}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
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
                                border: '5px solid #FF4D4F',
                                boxShadow:
                                  '0px 100px 80px rgba(255, 77, 79, 0.07), 0px 41.7776px 33.4221px rgba(255, 77, 79, 0.0668802), 0px 22.3363px 17.869px rgba(255, 77, 79, 0.0637831), 0px 12.5216px 10.0172px rgba(255, 77, 79, 0.0591401), 0px 6.6501px 5.32008px rgba(255, 77, 79, 0.0516068), 0px 2.76726px 2.21381px rgba(255, 77, 79, 0.0382912)',
                              }}
                            >
                              <OfflineIcon style={{ fontSize: 34, color: '#FF4D4F' }} />
                            </Avatar>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                  color: 'rgba(0, 0, 0, 0.65)',
                                }}
                              >
                                Offline
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.gateway_offline}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                      </Row>
                      <Col
                        span={24}
                        style={{
                          textAlign: 'right',
                          marginTop: '12px',
                        }}
                      >
                        <Tag
                          style={{
                            borderRadius: 8,
                            borderWidth: 0,
                            cursor: 'pointer',
                          }}
                          color="blue"
                          onClick={() => {
                            history.push('/gateway');
                          }}
                        >
                          View detail
                        </Tag>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xxl={12} xl={24} md={24} sm={24} xs={24}>
                <Card
                  bodyStyle={{
                    padding: '20px 24px',
                  }}
                  loading={loading}
                  style={{
                    borderRadius: 8,
                    borderTop: '2px solid #1890FF',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
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
                      <Typography
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}
                      >
                        Devices
                      </Typography>
                      <Space size={'large'}>
                        <Spin spinning={loadingNotif}>
                          <Space
                            style={{
                              background: '#FFF7E6',
                              borderRadius: 8,
                              border: '1px solid #FFD591',
                              padding: '2px 8px',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              setModalNotification(true);
                              setTypeNotification('device');
                              setDataNotif(dataAlert.notification.data);
                            }}
                          >
                            <img alt="badgedots" src="/Frame 29.svg" />
                            <Typography>Notification</Typography>
                            <Typography>{dataAlert.notification.total}</Typography>
                          </Space>
                        </Spin>
                        {/* <Button
                        icon={
                          !collapseDevice ? (
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
                        onClick={() => setCollapseDevice(!collapseDevice)}
                      /> */}
                      </Space>
                    </Col>
                    <Col
                      span={24}
                      // className={collapseDevice ? 'collabsible active' : 'collabsible'}
                      // style={{
                      //   overflow: collapseDevice ? 'visible' : 'hidden',
                      // }}
                    >
                      <Row gutter={[24, 16]}>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
                            <Avatar
                              src={<GatewayIcon />}
                              size={{
                                xs: 54,
                                sm: 54,
                                md: 54,
                                lg: 64,
                                xl: 64,
                                xxl: 64,
                              }}
                              style={{
                                backgroundColor: '#1890FF',
                                padding: '6px 4px',
                                boxShadow:
                                  ' 0px 100px 80px rgba(47, 84, 235, 0.07), 0px 41.7776px 33.4221px rgba(47, 84, 235, 0.0668802), 0px 22.3363px 17.869px rgba(47, 84, 235, 0.0637831), 0px 12.5216px 10.0172px rgba(47, 84, 235, 0.0591401), 0px 6.6501px 5.32008px rgba(47, 84, 235, 0.0516068), 0px 2.76726px 2.21381px rgba(47, 84, 235, 0.0382912)',
                              }}
                            />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                }}
                              >
                                Total
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.node_total}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
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
                                border: '5px solid #52C41A',
                                boxShadow:
                                  '0px 100px 80px rgba(82, 196, 26, 0.07), 0px 41.7776px 33.4221px rgba(82, 196, 26, 0.0668802), 0px 22.3363px 17.869px rgba(82, 196, 26, 0.0637831), 0px 12.5216px 10.0172px rgba(82, 196, 26, 0.0591401), 0px 6.6501px 5.32008px rgba(82, 196, 26, 0.0516068), 0px 2.76726px 2.21381px rgba(82, 196, 26, 0.0382912)',
                              }}
                            >
                              <WifiOutlined style={{ fontSize: 30, color: '#52C41A' }} />
                            </Avatar>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                }}
                              >
                                Online
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.node_online}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                        <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
                          <Space size={'middle'}>
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
                                border: '5px solid #FF4D4F',
                                boxShadow:
                                  '0px 100px 80px rgba(255, 77, 79, 0.07), 0px 41.7776px 33.4221px rgba(255, 77, 79, 0.0668802), 0px 22.3363px 17.869px rgba(255, 77, 79, 0.0637831), 0px 12.5216px 10.0172px rgba(255, 77, 79, 0.0591401), 0px 6.6501px 5.32008px rgba(255, 77, 79, 0.0516068), 0px 2.76726px 2.21381px rgba(255, 77, 79, 0.0382912)',
                              }}
                            >
                              <OfflineIcon style={{ fontSize: 34, color: '#FF4D4F' }} />
                            </Avatar>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                              }}
                            >
                              <Typography
                                style={{
                                  padding: 0,
                                  color: 'rgba(0, 0, 0, 0.65)',
                                }}
                              >
                                Offline
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 32,
                                  fontWeight: 'bold',
                                  margin: 0,
                                  padding: 0,
                                }}
                              >
                                {dataAlert?.node_offline}
                              </Typography>
                            </div>
                          </Space>
                        </Col>
                      </Row>
                      <Col
                        span={24}
                        style={{
                          textAlign: 'right',
                          marginTop: '12px',
                        }}
                      >
                        <Tag
                          style={{
                            borderRadius: 8,
                            borderWidth: 0,
                            cursor: 'pointer',
                          }}
                          color="blue"
                          onClick={() => history.push('/device?type=Device')}
                        >
                          View detail
                        </Tag>
                      </Col>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xxl={7} xl={7} md={24} sm={24} xs={24}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <WaterUsage
                  loading={loading}
                  pemakaian_air={dataAlert.alert_system.pemakaian_air}
                  icon={dataAlert.alert_system.icon_pemakaian_air}
                  data={dataAlert.alert_system}
                />
              </Col>
              {/* <Col span={24}>
                <WaterPressure loading={loading} dataWaterPressure={dataAlert.water_pressure} />
              </Col>
              <Col span={24}>
                <WaterPressureVacuum loading={loading} dataWaterPressure={dataAlert.water_vakum} />
              </Col> */}
              {/* <Col span={24}>
                <PemakaianTenant
                  loading={loading}
                  interval_sebelumnya={dataAlert.pemakaian_tenant.interval_sebelumnya}
                  interval_sekarang={dataAlert.pemakaian_tenant.interval_sekarang}
                />
              </Col> */}
            </Row>
          </Col>
          <Col span={24}>
            <Card
              style={{
                borderRadius: 8,
                borderTop: '2px solid #1890FF',
                paddingBottom: 0,
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              loading={loading}
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
                    {/* <div
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
                        <LocationIcon
                          style={{
                            color: '#fff',
                          }}
                        />
                      </div> */}
                    <Typography
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}
                    >
                      Device
                    </Typography>
                  </Space>
                  {/* <Button
                      icon={
                        !collapseDeviceLocation ? (
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
                      onClick={() => setCollapseDeviceLocation(!collapseDeviceLocation)}
                    /> */}
                </Col>
                <Col
                  span={24}
                  // className={collapseDeviceLocation ? 'collabsible active' : 'collabsible'}
                  style={{
                    // overflow: collapseDeviceLocation ? 'visible' : 'hidden',
                    paddingTop: '28px',
                  }}
                >
                  <div
                  // style={{
                  //   opacity: !collapseDeviceLocation ? '0' : '1',
                  // }}
                  >
                    <MapAction
                      loadingGtLamp={false}
                      devices={dataAlert.device_location}
                      // gateway={[]}
                      getDataCountMap={getDataCountMap}
                      // listrik={[]}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
            <ProduksiAir
              loading={loading}
              air_bersih={dataAlert.produksi_air.air_bersih}
              air_lumpur={dataAlert.produksi_air.air_lumpur}
              air_beku={dataAlert.produksi_air.air_beku}
            />
          </Col>
          <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
            <KualitasAir
              loading={loading}
              air_bersih={dataAlert.kualitas_air.air_bersih}
              air_limbah={dataAlert.kualitas_air.air_limbah}
              data={dataAlert.kualitas_air_v2}
            />
          </Col>
          <Col xxl={8} xl={8} md={8} sm={12} xs={24}>
            <WaterLosses loading={loading} />
          </Col> */}
        </Row>
      ) : (
        <Grafik />
      )}
    </PageContainer>
  );
};

export default Dashboard;
