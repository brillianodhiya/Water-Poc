import { getUserTenantById } from '@/services/nebula/user';
import {
  ArrowLeftOutlined,
  EditOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import { Avatar, Breadcrumb, Button, Col, Row, Space, Spin, Steps, Typography } from 'antd';
import React from 'react';
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type LocationStateTypes = {
  user_id: number | any;
};
const DetailTenant: React.FC = () => {
  const [dataUser, setDataUser] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;

  const getData = async () => {
    setLoading(true);
    const data = await getUserTenantById(state?.user_id);
    console.log(data, 'data');
    setLoading(false);
    if (!data.error) {
      setDataUser(data.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (!state.user_id) {
      history.push('/users/tenant');
    }
  }, [state.user_id]);

  return (
    <PageContainer
      breadcrumb={{}}
      title={
        <Button type="link" onClick={() => history.back()} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.back()}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                <Breadcrumb.Item>Tenant</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Detail</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Detail Member</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Row
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          paddingTop: 20,
        }}
      >
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24} style={{ marginBottom: 20 }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Avatar icon={<UserOutlined />} size={84} src={dataUser.photo} />
            </Col>
            <Col span={24}>
              <Space align="start">
                <Typography.Title level={4}>{dataUser.name}</Typography.Title>
                <Button
                  icon={<EditOutlined />}
                  type="link"
                  onClick={() =>
                    history.push('/users/tenant/edit', {
                      dataEdit: dataUser,
                    })
                  }
                />
              </Space>
            </Col>
            <Col span={24}>
              <Typography.Text strong>Detail Info</Typography.Text>
            </Col>
            <Col xs={8} sm={6} md={6} lg={8} xl={8} xxl={4}>
              <Space>
                <MailOutlined style={{ color: '#1890FF' }} />
                <Typography>Email</Typography>
              </Space>
            </Col>
            <Col xs={16} sm={18} md={18} lg={16} xl={16} xxl={20}>
              <Typography.Link>{dataUser.email}</Typography.Link>
            </Col>
            <Col xs={8} sm={6} md={6} lg={8} xl={8} xxl={4}>
              <Space>
                <PhoneOutlined style={{ color: '#1890FF' }} />
                <Typography>Phone</Typography>
              </Space>
            </Col>
            <Col xs={16} sm={18} md={18} lg={16} xl={16} xxl={20}>
              <Typography.Link>{dataUser.phone}</Typography.Link>
            </Col>
            <Col xs={8} sm={8} md={4} lg={8} xl={8} xxl={4}>
              <Space>
                <KeyOutlined style={{ color: '#1890FF' }} />
                <Typography>Password</Typography>
              </Space>
            </Col>
            <Col xs={16} sm={16} md={20} lg={16} xl={16} xxl={20}>
              <Typography.Link
                onClick={() =>
                  history.push('/users/tenant/password', {
                    user_id: dataUser.id,
                    type: 'tenant',
                  })
                }
              >
                Change Password
              </Typography.Link>
            </Col>
            <Col span={24}>
              <Typography.Text strong>Scope</Typography.Text>
            </Col>
            <Col xs={8} sm={6} md={4} lg={8} xl={8} xxl={4}>
              <Typography style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Area</Typography>
            </Col>
            <Col xs={16} sm={18} md={20} lg={16} xl={16} xxl={20}>
              <Typography.Text strong>{dataUser?.Nebula_Area?.area_name}</Typography.Text>
            </Col>
            <Col xs={8} sm={6} md={4} lg={8} xl={8} xxl={4}>
              <Typography style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Tenant</Typography>
            </Col>
            <Col xs={16} sm={18} md={20} lg={16} xl={16} xxl={20}>
              <Typography.Text strong>{dataUser?.Nebula_Tenant?.name}</Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col xxl={16} xl={16} lg={16} md={12} sm={24} xs={24}>
          <Typography.Title level={4}>Activity</Typography.Title>
          <Spin spinning={loading}>
            <Steps
              progressDot
              current={1}
              direction="vertical"
              items={[
                {
                  title: (
                    <Space>
                      <Typography.Text strong>Rolando O'Kon </Typography.Text>
                      <Typography.Text type="secondary">Login</Typography.Text>
                    </Space>
                  ),
                  description: '10-10-2022  22:20:44',
                },
                {
                  title: (
                    <Space>
                      <Typography.Text strong>Rolando O'Kon </Typography.Text>
                      <Typography.Text type="secondary">Logout</Typography.Text>
                    </Space>
                  ),
                  description: '10-10-2022  22:20:44',
                },
                {
                  title: (
                    <Space>
                      <Typography.Text strong>Rolando O'Kon </Typography.Text>
                      <Typography.Text type="secondary">Login</Typography.Text>
                    </Space>
                  ),
                  description: '10-10-2022  22:20:44',
                },
              ]}
            />
          </Spin>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default DetailTenant;
