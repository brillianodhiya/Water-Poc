import { getListTenant } from '@/services/nebula/tenant';
import { getUserTenant } from '@/services/nebula/user';
import {
  ArrowLeftOutlined,
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  UpOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Row,
  Space,
  Spin,
  Table,
  Typography,
} from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Tenant: React.FC = () => {
  const [dataUser, setDataUser] = React.useState<any[]>([]);
  const [dataTenant, setDataTenant] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(true);
  const [activeTenant, setActiveTenant] = React.useState('');
  const getData = async () => {
    setLoading(true);
    const data = await getListTenant({});
    console.log(data);
    setLoading(false);
    if (!data.error) {
      setDataTenant(data.data);
      setActiveTenant(data.data[0].id);
    }
  };

  const getUser = async () => {
    setLoading(false);
    const data = await getUserTenant({
      params: {
        tenant_id: activeTenant,
      },
    });
    console.log(data);
    setLoading(false);
    if (!data.error) {
      setDataUser(data.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getUser();
  }, [activeTenant]);

  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.push('/users')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined style={{ marginTop: '12px', fontSize: '24px', color: '#000' }} />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Tenant</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>List Tenant Users</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      extra={
        <Button
          type="default"
          onClick={() => history.push('/users/tenant/create')}
          icon={<PlusOutlined />}
        >
          Add Team Member
        </Button>
      }
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT | User</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Divider style={{ padding: 0, margin: 0 }} />
      <Row gutter={18} style={{ marginTop: 20 }}>
        <Col span={4}>
          <div
            style={{
              border: '1px solid rgba(0, 0, 0, 0.06)',
              background: '#fafafa',
              display: 'flex',
              justifyContent: 'space-between',
              padding: 16,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <Typography.Title level={5}>Tenant Name</Typography.Title>
            <Space size={'middle'}>
              <SearchOutlined />
              {show ? (
                <DownOutlined
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setShow(!show)}
                />
              ) : (
                <UpOutlined
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setShow(!show)}
                />
              )}
            </Space>
          </div>
          <Spin spinning={loading}>
            {show && (
              <div
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  paddingTop: 16,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                {dataTenant.map((v) => {
                  return (
                    <Typography.Paragraph
                      style={{
                        color: activeTenant == v.id ? '#1890FF' : '#000000',
                        background: activeTenant == v.id ? '#E6F7FF' : '#ffffff',
                        padding: '16px 24px',
                        cursor: 'pointer',
                      }}
                      key={v.id}
                      onClick={() => setActiveTenant(v.id)}
                    >
                      {v.name}
                    </Typography.Paragraph>
                  );
                })}
              </div>
            )}
          </Spin>
        </Col>
        <Col span={20}>
          <Table
            pagination={{
              hideOnSinglePage: true,
            }}
            style={{
              border: '1px solid rgba(0, 0, 0, 0.06)',
              borderRadius: 8,
            }}
            dataSource={dataUser}
            loading={loading}
          >
            <Table.Column
              title="Name"
              dataIndex="name"
              key="name"
              render={(_, record: any) => {
                return (
                  <Space>
                    <Avatar src={record.photo} size={22} icon={<UserOutlined />} />
                    <Typography>{record.name}</Typography>
                  </Space>
                );
              }}
            />
            <Table.Column title="Phone" dataIndex="phone" key="phone" />
            <Table.Column title="Email" dataIndex="email" key="email" />
            <Table.Column
              title="Tenant Name"
              dataIndex="tenant_name"
              key="tenantName"
              render={(_, val: any) => {
                return <Typography>{val.Nebula_Tenant.name}</Typography>;
              }}
            />
            <Table.Column
              title=""
              dataIndex=""
              key=""
              render={(_, val: any) => {
                return (
                  <Space>
                    <Button
                      type="link"
                      onClick={() =>
                        history.push('/users/tenant/detail', {
                          user_id: val.id,
                        })
                      }
                    >
                      View
                    </Button>
                    <Button
                      type="link"
                      onClick={() =>
                        history.push('/users/tenant/edit', {
                          dataEdit: val,
                        })
                      }
                    >
                      Edit
                    </Button>
                    <Button type="link" danger>
                      Delete
                    </Button>
                  </Space>
                );
              }}
            />
          </Table>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Tenant;
