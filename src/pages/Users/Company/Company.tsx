import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Breadcrumb, Button, Divider, Segmented, Space, Typography } from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
import { UsersTable } from '@/components/Table/UsersTable';
import { getUserCompany } from '@/services/nebula/user';
import { Helmet, history, useParams } from '@umijs/max';
const Client: React.FC = () => {
  const [segment, setSegment] = React.useState<any>('admin');
  const [dataCompany, setDataCompany] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const params = useParams<string>();

  const getData = async () => {
    setLoading(true);
    let paramsId = {};
    if (segment == 'admin') {
      paramsId = { role_id: 1 };
    } else if (segment == 'finance') {
      paramsId = { role_id: 4 };
    } else if (segment == 'technician') {
      paramsId = { role_id: 5 };
    }
    const data = await getUserCompany({
      params: {
        ...paramsId,
      },
    });
    console.log(data);
    setLoading(false);
    if (!data.error) {
      setDataCompany(data.data);
    }
  };
  React.useEffect(() => {
    getData();
  }, [segment]);

  React.useEffect(() => {
    if (params.type) {
      if (['admin', 'finance', 'technician'].includes(params.type)) {
        setSegment(params.type);
      } else {
        setSegment('admin');
        history.push('/users/company/admin');
      }
    } else {
      setSegment('admin');
      history.push('/users/company/admin');
    }
  }, [params.type]);

  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.push('/users')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/users')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>List Company Users</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      extra={
        <Button
          type="default"
          icon={<PlusOutlined />}
          onClick={() => history.push('/users/company/create')}
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
        <title>AAT IoT Platform | User</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Divider style={{ paddingTop: 0, marginTop: 0 }} />
      <Segmented
        onChange={(val) => {
          history.push(`/users/company/${val}`);
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

      <UsersTable dataSource={dataCompany} subPageName={'company'} loading={loading} />
    </PageContainer>
  );
};

export default Client;
