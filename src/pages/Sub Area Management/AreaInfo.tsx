import AreaPricing from '@/components/AreaTabs/AreaPricing';
import AreaSettings from '@/components/AreaTabs/AreaSettings';
import MemberLevel from '@/components/AreaTabs/MemberLevel';
import { UnionIcon } from '@/components/Icons/Union';
import ProfileSide from '@/components/ProfileSide/ProfileSide';
import { getAreaInfo } from '@/services/nebula/area';
import {
  ArrowLeftOutlined,
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Segmented,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';

type LocationStateTypes = {
  area_id: number | any;
};

const AreaInfo: React.FC = () => {
  // const [activeKey, setActiveKey] = React.useState('0');
  const [segmentedKey, setSegmentedKey] = React.useState('Area Settings');
  const searchParams = useLocation();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataArea, setDataArea] = React.useState<any>([]);

  const state = searchParams.state as LocationStateTypes;

  const getData = async () => {
    setLoading(true);
    const data = await getAreaInfo(state?.area_id);
    // console.log(data, 'data area');
    setLoading(false);
    if (!data.error) {
      setDataArea(data.data);
    }
  };

  React.useEffect(() => {
    if (!state.area_id) {
      history.push('/area');
    }
  }, [state]);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      style={{
        backgroundColor: 'white',
      }}
      title={
        <Button type="link" onClick={() => history.push('/area')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/area')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Area Management</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Area</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Detail Area</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>IKI IoT Platform | Detail Area </title>
        <link rel="icon" href="/iki-logo-no-text.png" type="image/x-icon" />
      </Helmet>
      {/* <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={
          {
            // backgroundImage:
            //   'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
          }
        }
      > */}
      <Row gutter={[24, 16]} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', paddingTop: 20 }}>
        <Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18}>
          <Card
            style={{
              borderRadius: 8,
            }}
            loading={loading}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={4}>
                {dataArea.photo && dataArea.photo !== '' ? (
                  <Avatar
                    shape="square"
                    src={dataArea.photo}
                    size={{
                      xs: 124,
                      sm: 124,
                      md: 144,
                      lg: 144,
                      xl: 144,
                      xxl: 144,
                    }}
                  />
                ) : (
                  <Avatar
                    shape="square"
                    icon={<UserOutlined />}
                    size={{
                      xs: 124,
                      sm: 124,
                      md: 144,
                      lg: 144,
                      xl: 144,
                      xxl: 144,
                    }}
                  />
                )}
              </Col>
              <Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18}>
                <div>
                  <Space>
                    <Typography.Title level={4}>{dataArea.area_name}</Typography.Title>
                    <Button
                      icon={<EditOutlined />}
                      type="link"
                      onClick={() => {
                        history.push('/area/edit', {
                          dataEdit: dataArea,
                        });
                      }}
                    />
                  </Space>
                  <Row gutter={[24, 16]}>
                    {/* <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <AreaIcon />
                        <Typography>Company Name</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>{dataArea.company_name}</Typography>
                    </Col> */}
                    {/* <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <DollarOutlined style={{ color: '#1890FF' }} />
                        <Typography>Billing Address</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>
                        {
                          'Kavling De Park Lot 1 No.9-11, Jl. BSD Raya Utama, BSD City Serpong, Pagedangan, Tangerang Selatan'
                        }
                      </Typography>
                    </Col> */}
                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <UnionIcon />
                        <Typography>Area Name</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>{dataArea.area_name}</Typography>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <PhoneOutlined style={{ color: '#1890FF', fontSize: 16 }} />
                        <Typography>Phone</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>{dataArea.phone}</Typography>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <EnvironmentOutlined style={{ color: '#1890FF', fontSize: 16 }} />
                        <Typography>Address</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>{dataArea.address}</Typography>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <UserOutlined style={{ color: '#1890FF', fontSize: 16 }} />
                        <Typography>PIC</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography>{dataArea.pic_name}</Typography>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <MailOutlined style={{ color: '#1890FF', fontSize: 16 }} />
                        <Typography>Email PIC</Typography>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography.Link>{dataArea.email_pic}</Typography.Link>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
                      <Space>
                        <MailOutlined style={{ color: '#1890FF', fontSize: 16 }} />
                        <Space>
                          <Typography>Email PIC Admin </Typography>
                          <Tooltip title="Email PIC Admin">
                            <QuestionCircleOutlined style={{ color: '#1890FF' }} />
                          </Tooltip>
                        </Space>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
                      <Typography.Link>{dataArea.email_pic_admin}</Typography.Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card>
          <Segmented
            options={[
              'Area Settings',
              'Pricing',
              'Member Level',
              // 'Pricing Postpaid',
              // 'Pricing Repaid',
            ]}
            onResize={undefined}
            onResizeCapture={undefined}
            size="large"
            block
            style={{
              maxWidth: 450,
              marginTop: 20,
              marginBottom: 20,
              padding: 6,
              backgroundImage:
                'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
            }}
            onChange={(val) => setSegmentedKey(val.toString())}
          />

          {dataArea.id &&
            (segmentedKey == 'Area Settings' ? (
              <AreaSettings getData={getData} dataArea={dataArea} loadingArea={loading} />
            ) : segmentedKey == 'Member Level' ? (
              <MemberLevel getData={getData} dataArea={dataArea} loadingArea={loading} />
            ) : null)}
        </Col>

        <Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={6}>
          <ProfileSide area_id={state.area_id} />
        </Col>
        <Col span={24}>
          {/* <AreaSettings getData={getData} dataArea={dataArea} loadingArea={loading} /> */}
          {dataArea.id && segmentedKey == 'Pricing' ? (
            <AreaPricing getData={getData} dataArea={dataArea} loadingArea={loading} />
          ) : null}
        </Col>
      </Row>
      {/* </Card> */}
    </PageContainer>
  );
};

export default AreaInfo;
