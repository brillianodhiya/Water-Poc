// import { AddTenantModalForm } from '@/components/Form/AddTenantForm';
import { AddTenantModalFormJs } from '@/components/Form/AddTenantFormJs';
import { EditTenantModalFormJs } from '@/components/Form/EditTenantFormJs';
import { DefaultTenant } from '@/components/Icons/DefaultTenant';
import { getListTenant } from '@/services/badiklat/tenant';
import {
  // DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Input, Space, Table, Tag, Typography } from 'antd';
import React from 'react';
import { history } from '@umijs/max';
import type { ColumnsType } from 'antd/lib/table';
import { UserFilledIcon } from '@/components/Icons/UserIcon';

const { Search } = Input;

const Room: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [dataTenant, setDataTenant] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalAddTenant, setModalAddTenant] = React.useState<boolean>(false);
  const [modalEditTenant, setModalEditTenant] = React.useState<boolean>(false);
  const [dataEdit, setDataEdit] = React.useState<object>({});
  const [dataFull, setDataFull] = React.useState<any[]>([]);

  const tenant_name = localStorage.getItem('tenant_name');

  const onSearch = (val: any) => {
    // console.log(val, 'VAL');
    if (val) {
      // console.log('SEARCH');
      setDataTenant(
        dataFull.filter((v) => v.tenant_name.toLowerCase().includes(val.toLowerCase())),
      );
    } else {
      setShowSearch(false);
      setDataTenant(dataFull);
    }
  };

  // console.log(isFocused, 'IS FOCUSED');
  const getData = async () => {
    setLoading(true);
    const data = await getListTenant({});
    // console.log(data, 'DATA');
    setLoading(false);
    if (!data.error) {
      setDataTenant(data.data);
      setDataFull(data.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
    return () => {};
  }, [isFocused]);

  type DataType = {
    key: string;
    username: string;
    image: string;
    info: string;
    tenant_name: string;
    allocation_types: [];
    id: number;
    area_id: number;
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <Space size="middle">
          {image && image !== '' ? (
            <Avatar
              size={48}
              icon={<DefaultTenant />}
              src={image.replace(
                'https://ems.idu.ac.id:4005',
                'https://badiklat-dummy-be.iots.eu.org',
              )}
              style={{
                background: '#fff',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                // overflow: 'visible',
              }}
            />
          ) : (
            <DefaultTenant />
          )}
        </Space>
      ),
    },
    {
      title: 'Tenant Name',
      dataIndex: ['tenant_name', 'info'],
      render: (_, record) => (
        <Space direction="vertical">
          <Typography.Text strong>{record.tenant_name}</Typography.Text>
          <Typography.Text type="secondary">{record.info}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Allocation',
      dataIndex: ['allocation_types', 'id', 'area_id'],
      key: 'Allocation',
      render: (_, record) => (
        <Space wrap>
          {record.allocation_types.map((val2: any) => {
            if (val2.type_id == 3) {
              return (
                <a
                  onClick={() => {
                    history.push('/overview/room/view', {
                      id: record.id,
                      type: 'tenant',
                      area_id: record.area_id,
                      node_type_id: val2.type_id,
                    });
                  }}
                >
                  <Tag color="geekblue" style={{ borderRadius: '100px', padding: '4px 8px' }}>
                    Electricity Non CT
                  </Tag>
                </a>
              );
            } else {
              return (
                <a
                  onClick={() => {
                    history.push('/overview/room/view', {
                      id: record.id,
                      type: 'tenant',
                      area_id: record.area_id,
                      node_type_id: val2.type_id,
                    });
                  }}
                >
                  <Tag color="warning" style={{ borderRadius: '100px', padding: '4px 8px' }}>
                    Electricity CT
                  </Tag>
                </a>
              );
            }
          })}
        </Space>
      ),
    },
    {
      title: 'PIC',
      dataIndex: 'username',
      render: (username) => (
        <Space>
          <UserFilledIcon />
          <Typography>{username}</Typography>
        </Space>
      ),
    },
    {
      title: 'Action',
      render: (record) => (
        <Space>
          <Button
            type="link"
            style={{
              color: 'gray',
            }}
            onClick={() => {
              // console.log(record)
              setModalEditTenant(true);
              setDataEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            type="link"
            style={{
              color: 'gray',
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer
      title={tenant_name}
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', marginTop: '14px' }}
      extra={
        <>
          {showSearch ? (
            <Search
              // size="large"
              placeholder="Search by Room Name"
              onSearch={onSearch}
              style={{ width: 200 }}
              className="search-rounded"
              allowClear
            />
          ) : (
            <Button
              // size="large"
              shape="circle"
              icon={<SearchOutlined />}
              onClick={() => {
                setShowSearch(true);
              }}
            />
          )}
          <Button
            type="primary"
            onClick={() => {
              setModalAddTenant(true);
            }}
          >
            Add {tenant_name}
          </Button>
        </>
      }
    >
      <AddTenantModalFormJs
        title="Add Tenant"
        onOk={() => {
          getData();
          setModalAddTenant(false);
        }}
        onCancel={() => setModalAddTenant(false)}
        open={modalAddTenant}
      />
      <EditTenantModalFormJs
        title="Edit Tenant"
        onOk={() => {
          getData();
          setModalEditTenant(false);
        }}
        onCancel={() => setModalEditTenant(false)}
        open={modalEditTenant}
        dataEdit={dataEdit}
      />
      {/* <Card loading={loading}> */}
      <Table
        scroll={{
          x: true,
        }}
        loading={loading}
        dataSource={dataTenant}
        size="large"
        showHeader={false}
        columns={columns}
      />

      {/* // </Card> */}
    </PageContainer>
  );
};

export default Room;
