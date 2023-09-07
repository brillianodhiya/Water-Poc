import { GasOutlineIcon } from '@/components/Icons/Gas';
import { getUserCompanyById } from '@/services/nebula/user';
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
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Space,
  Steps,
  Table,
  Tag,
  Typography,
} from 'antd';
import React from 'react';

const { Column } = Table;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type DataType = {
  key: string;
  ticket_name: string;
  type: string;
  status: string;
  due_date: string;
};

const dataSource = [
  {
    key: '1',
    ticket_name: 'Nostrum quam beatae ipsam distinctio aperiam.',
    type: 'Installation',
    status: 'New',
    due_date: '13-10-2022',
  },
  {
    key: '2',
    ticket_name: 'Ratione mollitia consectetur minima sed voluptatem cupiditate placeat omnis.',
    type: 'Installation',
    status: 'On Progress',
    due_date: '13-10-2022',
  },
  {
    key: '3',
    ticket_name: 'Consequatur vero veniam velit dolores quam laborum pariatur est.',
    type: 'Installation',
    status: 'New',
    due_date: '13-10-2022',
  },
];
type LocationStateTypes = {
  user_id: number | any;
};
const DetailCompany: React.FC = () => {
  const [dataUser, setDataUser] = React.useState<any>({
    Node_Type: [],
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;

  const getData = async () => {
    setLoading(true);
    const data = await getUserCompanyById(state?.user_id);
    console.log(data, 'data');
    setLoading(false);
    if (!data.error) {
      // console.log(data.data, 'DATA');
      setDataUser(data?.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (!state.user_id) {
      history.push('/users/area');
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
                <Breadcrumb.Item>Company</Breadcrumb.Item>
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
        gutter={[16, 16]}
        style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          paddingTop: 20,
        }}
      >
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Avatar icon={<UserOutlined />} size={84} src={dataUser?.photo} />
            </Col>
            <Col span={24}>
              <Space align="start">
                <Typography.Title level={4}>{dataUser?.name}</Typography.Title>
                <Button
                  icon={<EditOutlined />}
                  type="link"
                  onClick={() =>
                    history.push('/users/company/edit', {
                      dataEdit: dataUser,
                    })
                  }
                />
              </Space>
            </Col>
            <Col span={24}>
              <Typography.Text strong>Detail Info</Typography.Text>
            </Col>
            <Col xs={8} sm={8} md={4} lg={8} xl={8} xxl={4}>
              <Space>
                <MailOutlined style={{ color: '#1890FF' }} />
                <Typography>Email</Typography>
              </Space>
            </Col>
            <Col xs={16} sm={16} md={20} lg={16} xl={16} xxl={20}>
              <Typography.Link>{dataUser.email}</Typography.Link>
            </Col>
            <Col xs={8} sm={8} md={4} lg={8} xl={8} xxl={4}>
              <Space>
                <PhoneOutlined style={{ color: '#1890FF' }} />
                <Typography>Phone</Typography>
              </Space>
            </Col>
            <Col xs={16} sm={16} md={20} lg={16} xl={16} xxl={20}>
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
                  history.push('/users/company/password', {
                    user_id: dataUser.id,
                    type: 'company',
                  })
                }
              >
                Change Password
              </Typography.Link>
            </Col>
            <Col xs={8} sm={8} md={4} lg={8} xl={8} xxl={4}>
              <Typography.Text>Role User</Typography.Text>
            </Col>
            <Col xs={16} sm={16} md={20} lg={16} xl={16} xxl={20}>
              <Tag
                color={
                  dataUser?.Nebula_Role?.role_name == 'Admin'
                    ? 'blue'
                    : dataUser?.Nebula_Role?.role_name == 'Finance'
                    ? 'green'
                    : '#FA8C16'
                }
                style={{
                  borderRadius: 100,
                }}
              >
                {dataUser?.Nebula_Role?.role_name}
              </Tag>
            </Col>
            <Col span={24}>
              <Space size={'small'}>
                <Typography.Text strong>Device Type</Typography.Text>
                <Button icon={<EditOutlined />} type="link" />
              </Space>
            </Col>
            <Col>
              <Space wrap>
                {dataUser?.Node_Type?.length > 0
                  ? dataUser?.Node_Type.map((val: any) => {
                      return (
                        <Tag
                          key={val.name}
                          color="blue"
                          style={{
                            borderRadius: 100,
                            // color: 'red',
                            padding: '1px 8px',
                          }}
                          icon={
                            <img
                              style={{
                                height: '16px',
                                marginBottom: '3px',
                                marginRight: '5px',
                              }}
                              alt={val.name}
                              src={val.icon}
                            />
                          }
                        >
                          {val.name}
                        </Tag>
                      );
                    })
                  : null}
                {/* <Tag
                  color="#FFF1F0"
                  style={{
                    borderRadius: 100,
                    color: 'red',
                    padding: '1px 8px',
                  }}
                  icon={<GasOutlineIcon />}
                >
                  Gas
                </Tag>
                <Tag
                  color="#FFF7E6"
                  style={{
                    borderRadius: 100,
                    color: 'orange',
                    padding: '1px 8px',
                  }}
                  icon={<RTUIcon />}
                >
                  RTU
                </Tag>
                <Tag
                  color="#F9F0FF"
                  style={{
                    borderRadius: 100,
                    color: 'purple',
                    padding: '1px 8px',
                  }}
                  icon={<LowPressureIcon />}
                >
                  Low Pressure
                </Tag>
                <Tag
                  color="#FFF0F6"
                  style={{
                    borderRadius: 100,
                    color: '#EB2F96 ',
                    padding: '1px 8px',
                  }}
                  icon={<HihgPressureIcon />}
                >
                  High Pressure
                </Tag>
                <Tag
                  color="#FFFBE6"
                  style={{
                    borderRadius: 100,
                    color: '#FAAD14',
                    padding: '1px 8px',
                  }}
                  icon={<PressureIcon />}
                >
                  Pressure
                </Tag>
                <Tag
                  color="#E6FFFB"
                  style={{
                    borderRadius: 100,
                    color: '#13C2C2',
                    padding: '1px 8px',
                  }}
                  icon={<PressurePTIcon />}
                >
                  Pressure PT
                </Tag> */}
              </Space>
            </Col>
          </Row>
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: 20,
              borderRadius: 8,
            }}
            bodyStyle={{
              background: 'rgba(0, 0, 0, 0.02)',
            }}
          >
            <Row justify={'space-between'} style={{ padding: '0px 8px' }}>
              <Col>
                <Typography.Title level={4}>Latest Task</Typography.Title>
              </Col>
              <Col>
                <Typography.Link>View All</Typography.Link>
              </Col>
            </Row>
            <Table
              dataSource={dataSource}
              pagination={{ hideOnSinglePage: true }}
              loading={loading}
            >
              <Column
                title="Ticket Name"
                dataIndex="ticket_name"
                key="ticket_name"
                render={(_, record: DataType) => {
                  // console.log(typeof record);
                  if (record.ticket_name.length > 50) {
                    return (
                      <Typography.Text strong>
                        {record.ticket_name.slice(0, 50) + '...'}
                      </Typography.Text>
                    );
                  } else {
                    return <Typography.Text strong>{record.ticket_name}</Typography.Text>;
                  }
                }}
              />
              <Column title="Type" dataIndex="type" key="type" />
              <Column
                title="Status"
                dataIndex="status"
                key="status"
                render={(_, record: DataType) => {
                  if (record.status === 'New') {
                    return <Badge color={'green'} text={record.status} />;
                  } else {
                    return <Badge color={'blue'} text={record.status} />;
                  }
                }}
              />
              <Column title="Due Date" dataIndex="due_date" key="due_date" />
              <Column title="" key="action" render={() => <Button type="link">View</Button>} />
            </Table>
          </Card>
          <Typography.Title level={4}>Activity</Typography.Title>
          <Steps
            progressDot
            current={1}
            direction="vertical"
            items={[
              {
                title: (
                  <Space wrap>
                    <Typography.Text strong>Rolando O Kon </Typography.Text>
                    <Typography.Text type="secondary">Change ticket status </Typography.Text>
                    <Badge
                      color="#D9D9D9"
                      text={<Typography.Text strong>Close</Typography.Text>}
                      style={{
                        background: 'rgba(0, 0, 0, 0.06)',
                        borderRadius: 100,
                        padding: '0px 15px',
                      }}
                    />
                    <Typography.Text type="secondary">
                      No Ticket : 2022-05-__DEV__-913
                    </Typography.Text>
                  </Space>
                ),
                description: '10-10-2022 22:20:44',
              },
              {
                title: (
                  <Space wrap>
                    <Typography.Text strong>Rolando O Kon </Typography.Text>
                    <Typography.Text type="secondary">Change ticket status </Typography.Text>
                    <Badge
                      color="#1890FF"
                      text={<Typography.Text strong>On Progress</Typography.Text>}
                      style={{
                        background: '#E6F7FF',
                        borderRadius: 100,
                        padding: '0px 15px',
                      }}
                    />
                    <Typography.Text type="secondary">
                      No Ticket : 2022-05-__DEV__-913
                    </Typography.Text>
                  </Space>
                ),
                description: '10-10-2022 22:20:44',
              },
              {
                title: (
                  <Space wrap>
                    <Typography.Text strong>Rolando O Kon </Typography.Text>
                    <Typography.Text type="secondary">Distribution to </Typography.Text>
                    <Typography.Link style={{ fontWeight: 'bold' }}>
                      Sonja Crooks MD
                    </Typography.Link>
                    <Typography.Text type="secondary">
                      No Ticket : 2022-05-__DEV__-913
                    </Typography.Text>
                  </Space>
                ),
                description: '10-10-2022 22:20:44',
              },
            ]}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default DetailCompany;
