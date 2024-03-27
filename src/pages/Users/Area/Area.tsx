import { UsersTable } from '@/components/Table/UsersTable';
import { getArea } from '@/services/nebula/area';
import { getUserArea } from '@/services/nebula/user';
import {
  ArrowLeftOutlined,
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Breadcrumb, Button, Col, Divider, Row, Segmented, Space, Spin, Typography } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Area: React.FC = () => {
  const [dataArea, setDataArea] = React.useState<any[]>([]);
  const [dataUser, setDataUser] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(true);
  const [activeArea, setActiveArea] = React.useState('');
  const [segment, setSegment] = React.useState<any>('admin');
  const params = useParams<string>();

  const getAreaName = async () => {
    setLoading(true);
    const data = await getArea({});
    // console.log(data, 'data area');
    setLoading(false);
    if (!data.error) {
      setDataArea(data.data);
      setActiveArea(data.data[0].id);
    }
  };

  const getUser = async () => {
    setLoading(false);
    let paramsId = {};
    if (segment == 'admin') {
      paramsId = { role_id: 1, area_id: activeArea };
    } else if (segment == 'finance') {
      paramsId = { role_id: 4, area_id: activeArea };
    } else if (segment == 'technician') {
      paramsId = { role_id: 5, area_id: activeArea };
    }
    const data = await getUserArea({
      params: {
        ...paramsId,
      },
    });
    console.log(data, 'data user area');
    setLoading(false);
    if (!data.error) {
      setDataUser(data.data);
    }
  };

  React.useEffect(() => {
    getAreaName();
  }, []);

  React.useEffect(() => {
    getUser();
  }, [segment, activeArea]);

  React.useEffect(() => {
    if (params.type) {
      if (['admin', 'finance', 'technician'].includes(params.type)) {
        setSegment(params.type);
      } else {
        setSegment('admin');
        history.push('/users/area/admin');
      }
    } else {
      setSegment('admin');
      history.push('/users/area/admin');
    }
  }, [params.type]);
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
                <Breadcrumb.Item href="#">Area</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>List Area Users</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      extra={
        <Button
          type="default"
          icon={<PlusOutlined />}
          onClick={() => {
            history.push('/users/area/create');
          }}
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
        <title>IKI IoT Platform | User</title>
        <link rel="icon" href="/iki-logo-no-text.png" type="image/x-icon" />
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
            <Typography.Title level={5}>Area Name</Typography.Title>
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
                {dataArea.map((v) => {
                  return (
                    <Typography.Paragraph
                      style={{
                        color: activeArea == v.id ? '#1890FF' : '#000000',
                        background: activeArea == v.id ? '#E6F7FF' : '#ffffff',
                        padding: '16px 24px',
                        cursor: 'pointer',
                      }}
                      key={v.id}
                      onClick={() => setActiveArea(v.id)}
                    >
                      {v.area_name}
                    </Typography.Paragraph>
                  );
                })}
              </div>
            )}
          </Spin>
        </Col>
        <Col span={20}>
          <Segmented
            onChange={(val) => {
              history.push(`/users/area/${val}`);
            }}
            options={[
              { label: 'Admin', value: 'admin' },
              { label: 'Finance', value: 'finance' },
              { label: 'Technician', value: 'technician' },
            ]}
            value={segment}
            style={{
              marginBottom: 20,
            }}
          />
          <UsersTable dataSource={dataUser} subPageName={'area'} loading={loading} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Area;
