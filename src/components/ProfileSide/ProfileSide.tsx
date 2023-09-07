import { getListTenant } from '@/services/nebula/tenant';
import { PhoneOutlined, PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Avatar, Button, Card, Col, Input, Row, Space, Typography } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react';

const ProfileSide: FunctionComponent<any> = ({ area_id }) => {
  // const [listType, setListType] = React.useState('tenant');
  const [dataTenant, setDataTenant] = React.useState<any[]>([]);
  const [dataTenantFill, setDataTenantFill] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getDataTenant = async () => {
    setLoading(true);
    const data = await getListTenant({
      params: {
        area_id: area_id,
      },
    });
    console.log(data, 'data tenant');
    setLoading(false);
    if (!data.error) {
      setDataTenant(data.data);
      setDataTenantFill(data.data);
    }
  };

  React.useEffect(() => {
    getDataTenant();
  }, []);

  return (
    <>
      <Row gutter={[8, 20]}>
        <Col
          span={18}
          style={{
            paddingLeft: 20,
            paddingTop: 10,
          }}
        >
          {/* <Space>
            <Typography.Text strong style={{ fontSize: 16 }}>
              List Tenant (100)
            </Typography.Text>
            <Button icon={<DownOutlined />} type="link" />
          </Space> */}
          {/* <Select
            value={listType}
            onChange={(v) => {
              setListType(v);
            }}
            bordered={false}
          >
            <Select.Option value="tenant"> */}
          <Typography.Text strong style={{ fontSize: 16 }}>
            List Tenant ({dataTenant.length})
          </Typography.Text>
          {/* </Select.Option>
            <Select.Option value="iternal">
              <Typography.Text strong style={{ fontSize: 16 }}>
                List Internal ({dataInternal.length})
              </Typography.Text>
            </Select.Option>
          </Select> */}
        </Col>
        <Col span={6}>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            shape="round"
            size="large"
            onClick={() =>
              history.push('/tenant/create', {
                area_id: area_id,
              })
            }
          >
            Add
          </Button>
        </Col>

        <Col span={24} style={{ paddingLeft: 20 }}>
          <Input
            suffix={<SearchOutlined />}
            size="large"
            style={{
              borderRadius: '20px',
            }}
            placeholder="Search Tenant Name"
            onChange={(e) => {
              setDataTenant(
                dataTenantFill.filter((v: any) =>
                  v.name.toLowerCase().includes(e.target.value.toLowerCase()),
                ),
              );
            }}
          />
        </Col>

        <Col span={24} style={{ paddingLeft: 20, maxHeight: '80vh', overflow: 'scroll' }}>
          {dataTenant.length > 0 && !loading
            ? dataTenant.map((val) => {
                return (
                  <Card
                    loading={loading}
                    bordered={false}
                    key={val.id}
                    style={{
                      //   borderRadius: 9,
                      marginBottom: 8,
                    }}
                    bodyStyle={{
                      backgroundColor: '#FAFAFA',
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '24px',
                        overflow: 'visible',
                      }}
                      onClick={() =>
                        history.push('/area/tenant', {
                          tenant_id: val.id,
                          area_id: area_id,
                        })
                      }
                    >
                      <div>
                        {val.logo && val.logo !== '' ? (
                          <Avatar icon={<UserOutlined />} size={60} shape="square" src={val.logo} />
                        ) : (
                          <Avatar icon={<UserOutlined />} size={60} shape="square" />
                        )}
                      </div>
                      <div
                        style={{
                          width: '100%',
                          overflow: 'visible',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            flexDirection: 'column',
                            gap: '14px',
                          }}
                        >
                          <div>
                            <Typography.Text style={{ fontSize: 16 }}>{val.name}</Typography.Text>
                          </div>
                          <div
                            style={{
                              width: '100%',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '100%',
                              }}
                            >
                              <Space>
                                <UserOutlined style={{ color: '#1890FF' }} />
                                <Typography>{val.pic_name}</Typography>
                              </Space>
                              <Space style={{ float: 'right' }}>
                                <PhoneOutlined style={{ color: '#1890FF' }} />
                                <Typography>{val.phone}</Typography>
                              </Space>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })
            : null}
        </Col>
      </Row>
    </>
  );
};

export default ProfileSide;
