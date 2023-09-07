import { UserOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Avatar, Button, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
type Props = {
  dataSource: any;
  subPageName: string;
  loading: boolean;
  showDeleteConfirm: (id: number) => void;
};

export const UsersTable: React.FC<Props> = ({ dataSource, loading, showDeleteConfirm }) => {
  return (
    <Table
      loading={loading}
      dataSource={dataSource}
      style={{
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: 8,
      }}
      pagination={{
        hideOnSinglePage: true,
      }}
    >
      <Table.Column
        title="Name"
        dataIndex="pic_name"
        key="pic_name"
        render={(_, record: any) => {
          return (
            <Space>
              <Avatar src={record.image} size={22} icon={<UserOutlined />} />
              <Typography>{record.name}</Typography>
            </Space>
          );
        }}
      />
      <Table.Column
        title="Role"
        dataIndex="role"
        key="role"
        render={(t) => {
          if (t == 'admin') {
            return <Tag color="blue">Admin</Tag>;
          } else if (t == 'area') {
            return <Tag color="green">Area</Tag>;
          } else if (t == 'teknisi') {
            return <Tag color="orange">Technician</Tag>;
          }
        }}
      />

      <Table.Column title="Phone" dataIndex="phone" key="phone" />
      <Table.Column title="Email" dataIndex="email" key="email" />
      <Table.Column title="Area Name" dataIndex="address" key="address" />
      <Table.Column
        width={20}
        title=""
        dataIndex=""
        key=""
        render={(_, val: any) => {
          return (
            <Space>
              {/* <Button
                type="link"
                onClick={() =>
                  history.push(`/users/view`, {
                    dataEdit: val,
                  })
                }
              >
                View
              </Button> */}
              <Button
                type="link"
                onClick={() =>
                  history.push(`/users/edit`, {
                    dataEdit: val,
                  })
                }
              >
                Edit
              </Button>
              <Button type="link" danger onClick={() => showDeleteConfirm(val.id)}>
                Delete
              </Button>
            </Space>
          );
        }}
      />
    </Table>
  );
};
