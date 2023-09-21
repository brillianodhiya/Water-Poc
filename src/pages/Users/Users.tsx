// import { PageContainer } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Divider, message, Modal, Row } from 'antd';

import { UsersTable } from '@/components/Table/UsersTable';
import { ApiDeleteUser, getListUser } from '@/services/badiklat/user';
import { ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import { Helmet, history } from '@umijs/max';
import queryparse from 'query-string';
import React from 'react';

const { confirm } = Modal;

const Users: React.FC = () => {
  const query = queryparse.parse(window.location.search);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataUser, setDataUser] = React.useState<any>([]);

  const getUserList = async () => {
    setLoading(true);
    const data = await getListUser({});
    setLoading(false);
    if (!data.error) {
      setDataUser(data.data);
    }
  };

  React.useEffect(() => {
    getUserList();
  }, []);

  const showDeleteConfirm = (id: number) => {
    confirm({
      title: 'Are you sure delete this user?',
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        // console.log('OK');
        const data = await ApiDeleteUser(id);
        if (!data.error) {
          message.success('Delete User Success');
          getUserList();
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <PageContainer
      title="User Management"
      content="Management User from Admin and Site."
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | User Management</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>

      <Divider />
      <Row>
        <Col span={24}>
          {/* <Segmented
            onChange={(val: any) => {
              history.push(`/users?type=${val.toLowerCase()}`);
              setSegment(val);
            }}
            options={[
              { label: 'Admin', value: 'ADMIN' },
              { label: 'Site', value: 'SITE' },
            ]}
            value={segment}
            style={{
              marginBottom: 20,
            }}
          /> */}
          <Button
            style={{
              float: 'right',
              marginBottom: 20,
            }}
            icon={<PlusOutlined />}
            onClick={() => history.push('/users/create')}
          >
            Add User
          </Button>
        </Col>
        <Col span={24}>
          <UsersTable
            showDeleteConfirm={showDeleteConfirm}
            dataSource={dataUser}
            subPageName={'area'}
            loading={loading}
          />
        </Col>
      </Row>
      {/* </Card> */}
    </PageContainer>
  );
};

export default Users;
