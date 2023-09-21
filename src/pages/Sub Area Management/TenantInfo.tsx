import { EditDescription } from '@/components/Form/EditDescription';
import { EditInterval } from '@/components/Form/EditInterval';
import { FullBatteryIcon, LowBatteryIcon, MediumBatteryIcon } from '@/components/Icons/Battery';
import { ModalViewDetailNode } from '@/components/ModalCustom/ModalViewDetailDevice';
import { ModalViewLog } from '@/components/ModalCustom/ModalViewLog';
import { getDevice, getListDownlink } from '@/services/nebula/device';
import { getTenantInfo } from '@/services/nebula/tenant';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  createFromIconfontCN,
  DashboardOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MailOutlined,
  MoreOutlined,
  PhoneOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons/lib/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import type { InputRef } from 'antd';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Grid,
  Input,
  Menu,
  Row,
  Segmented,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import { Helmet } from 'react-helmet';
import Highlighter from 'react-highlight-words';

moment.locale('en');

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3875475_w5k22iyjel.js',
});

interface DataType {
  id: number;
  instalation_date: string;
  created_by: string;
  area_name: string;
  tenant_name: string;
  description?: string;
  model: string;
  lastUpdate: string;
  interval: number;
  battery: number;
  devEui: string;
  area_id: number;
}

type DataIndex = keyof DataType;

const { Column } = Table;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type LocationStateTypes = {
  area_id: any;
  tenant_id: number | any;
};

const { useBreakpoint } = Grid;

const TenantInfo: React.FC = () => {
  const [dataTenant, setDataTenant] = React.useState<any>({
    node_type: [],
  });
  const [dataDevice, setDataDevice] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  // const [dataFill, setDataFill] = React.useState<any[]>([]);
  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;
  const [segmentedKey, setsegmentedKey] = React.useState<any>(0);
  const [segmentedKeyName, setsegmentedKeyName] = React.useState<any>('');
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const searchInput = React.useRef<InputRef>(null);

  const [modalViewLog, setModalViewLog] = React.useState(false);
  const [dataModal, setDataModal] = React.useState<any>({});
  const [listDownlink, setListDownlink] = React.useState<any[]>([]);
  const [modalInterval, setModalInterval] = React.useState(false);
  const [modalDescription, setModalDescription] = React.useState(false);
  const [modalViewDetail, setModalViewDetail] = React.useState(false);

  const screens = useBreakpoint();

  const getDataListDownlink = async () => {
    setLoading(true);
    const data = await getListDownlink({}, segmentedKey);
    setLoading(false);
    if (!data.error) {
      setListDownlink(data.data);
    }
  };

  React.useEffect(() => {
    if (segmentedKey) {
      getDataListDownlink();
    }
  }, [segmentedKey]);

  const getData = async () => {
    setLoading(true);
    const data = await getTenantInfo(state?.tenant_id);
    setLoading(false);
    if (!data.error) {
      setDataTenant(data.data);
      if (data.data.node_type.length > 0) {
        setsegmentedKey(data.data.node_type[0].id);
      }
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const options = dataTenant
    ? dataTenant.node_type.length > 0
      ? dataTenant.node_type.map((val: any) => {
          return {
            label: val.name,
            value: val.id,
          };
        })
      : []
    : [];

  const getDataDevice = async () => {
    setLoading(true);
    const data = await getDevice({
      params: {
        type: segmentedKey,
        tenant_id: state?.tenant_id,
      },
    });
    setLoading(false);
    if (!data.error) {
      data.data.map((v: any, idx: number) => {
        data.data[idx].area_name = v.Nebula_Area.area_name;
        data.data[idx].tenant_name = v.Nebula_Tenant.name;
      });
      setDataDevice(data.data);
    }
  };

  React.useEffect(() => {
    if (segmentedKey) {
      getDataDevice();
    }
  }, [segmentedKey]);

  console.log(segmentedKey, 'DATA DEVICE');

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record: any) =>
      (record[dataIndex] ?? '')
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // console.log(state, 'STATE');

  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button
          type="link"
          onClick={() =>
            history.push('/area/info', {
              area_id: state.area_id,
            })
          }
          size="large"
        >
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() =>
                history.push('/area/info', {
                  area_id: state.area_id,
                })
              }
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Area Management</Breadcrumb.Item>
                <Breadcrumb.Item>Area</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Tenant</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Detail Tenant</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      childrenContentStyle={{
        minHeight: '80vh',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Detail Tenant </title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      {/* <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
      > */}
      <ModalViewLog
        device_id={dataModal.id}
        open={modalViewLog}
        onCancel={() => setModalViewLog(false)}
        onOk={() => {
          setModalViewLog(false);
        }}
        typeName={segmentedKeyName}
        devEui={dataModal.devEui}
        desc={dataModal.description}
      />
      <EditInterval
        devEui={dataModal.devEui}
        open={modalInterval}
        interval={dataModal.interval}
        onCancel={() => {
          setModalInterval(false);
        }}
        onOk={() => {
          setModalInterval(false);
          getData();
        }}
      />
      <EditDescription
        devEui={dataModal.devEui}
        open={modalDescription}
        description={dataModal.description}
        device_id={dataModal.id}
        onCancel={() => {
          setModalDescription(false);
        }}
        onOk={() => {
          setModalDescription(false);
          getData();
        }}
      />
      <ModalViewDetailNode
        devEui={dataModal.devEui}
        open={modalViewDetail}
        onCancel={() => {
          setModalViewDetail(false);
        }}
        onOk={() => {
          setModalViewDetail(false);
        }}
        typeName={segmentedKeyName}
      />
      <Card
        loading={loading}
        style={{
          borderRadius: 8,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8} md={6} lg={6} xl={6} xxl={4}>
            <Avatar
              shape="square"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: 8,
              }}
              icon={<UserOutlined />}
              size={{
                xs: 124,
                sm: 124,
                md: 144,
                lg: 144,
                xl: 190,
                xxl: 200,
              }}
              src={dataTenant.logo}
            />
          </Col>
          <Col xs={24} sm={16} md={18} lg={18} xl={18} xxl={20}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <Space>
                  <Typography.Text type="secondary">Area</Typography.Text>
                  <ArrowRightOutlined style={{ color: '#BEBEBE' }} />
                  <Typography.Text type="secondary">
                    {dataTenant?.Nebula_Area?.area_name}
                  </Typography.Text>
                </Space>
              </Col>
              <Col span={24}>
                <Tag
                  color="processing"
                  style={{
                    borderRadius: 100,
                  }}
                >
                  Member since {moment(dataTenant.cretedAt).format('MMMM YYYY')}
                </Tag>
              </Col>
              <Col span={24}>
                <Space align="center">
                  <Typography.Title
                    level={2}
                    style={{
                      marginBottom: '0px',
                    }}
                  >
                    {dataTenant.name}
                  </Typography.Title>
                  <Button
                    icon={<EditOutlined />}
                    type="link"
                    style={{ marginBottom: '12px' }}
                    onClick={() =>
                      history.push('/tenant/edit', {
                        dataEdit: dataTenant,
                      })
                    }
                  />
                </Space>
              </Col>

              <Col span={24}>
                <Typography>{dataTenant.address}</Typography>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xxl={3}>
                <Space>
                  <UserOutlined style={{ color: '#1890FF' }} />
                  <Typography>{dataTenant.pic_name}</Typography>
                </Space>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xxl={3}>
                <Space>
                  <PhoneOutlined style={{ color: '#1890FF' }} />
                  <Typography>{dataTenant.phone}</Typography>
                </Space>
              </Col>
              <Col xs={12} sm={12} md={6} lg={4} xxl={3}>
                <Space>
                  <MailOutlined style={{ color: '#1890FF' }} />
                  <Typography>{dataTenant.email}</Typography>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      {screens.xs && (
        <Segmented
          options={options}
          onResize={undefined}
          onResizeCapture={undefined}
          size="large"
          block
          style={{
            maxWidth: 300,
            marginTop: 20,
            marginBottom: 20,
            padding: 6,
            backgroundImage:
              'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
          }}
          onChange={(val) => {
            setsegmentedKey(val);
            setsegmentedKeyName(options.find((item: any) => item.value === val).label);
          }}
          value={segmentedKey}
        />
      )}

      {/* <Segmented
        options={options}
        onResize={undefined}
        onResizeCapture={undefined}
        size="large"
        block
        style={{
          maxWidth: 300,
          marginTop: 20,
          marginBottom: 20,
          padding: 6,
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
        onChange={(val) => setsegmentedKey(val)}
        value={segmentedKey}
      /> */}
      <Row
        justify={'space-between'}
        style={{ border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: 8, marginTop: 20 }}
        // gutter={16}
      >
        <Col style={{ padding: '24px 20px 15px 20px', fontSize: 16 }}>List Device</Col>
        <Col style={{ padding: '24px 20px 15px' }}>
          <Button
            icon={<PlusOutlined />}
            onClick={() =>
              history.push(
                `/device/create?area_id=${dataTenant.area_id}&tenant_id=${dataTenant.id}`,
                {
                  area_id: dataTenant.area_id,
                  tenant_id: dataTenant.id,
                },
              )
            }
          >
            Add Device
          </Button>
        </Col>
        <Divider style={{ margin: 0, padding: 0 }} />
        <Col xxl={3} xl={3} md={5} sm={6} xs={0}>
          {dataTenant.node_type.map((val: any) => {
            return (
              <Space
                key={val.id}
                style={{
                  background: val.id == segmentedKey ? '#E6F7FF' : '#fff',
                  width: '100%',
                  padding: '5px 12px',
                }}
              >
                <img
                  src={val.icon}
                  alt={val.name}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginBottom: '2px',
                  }}
                />
                <Typography
                  style={{
                    cursor: 'pointer',
                    fontWeight: val.id == segmentedKey ? 'bold' : 'normal',
                  }}
                  onClick={() => {
                    setsegmentedKey(val.id);
                    segmentedKeyName(val.name);
                  }}
                >
                  {val.name}
                </Typography>
              </Space>
            );
          })}
        </Col>
        <Col
          xxl={21}
          xl={21}
          md={19}
          sm={18}
          xs={24}
          style={{ padding: 10, background: '#E6F7FF' }}
        >
          <Card
            bodyStyle={{
              padding: 0,
              margin: 0,
            }}
          >
            <Table dataSource={dataDevice} loading={loading} scroll={{ x: 1300 }}>
              <Column
                width={200}
                title="Installation Date"
                dataIndex="instalation_date"
                key="instalation_date"
                render={(val) => {
                  return moment(val).format('MMM DD YYYY HH:mm:ss');
                }}
                sorter={(a: any, b: any) =>
                  moment(a.instalation_date).unix() - moment(b.instalation_date).unix()
                }
              />

              <Column
                width={200}
                title="Dev Eui"
                dataIndex="devEui"
                key="devEui"
                {...getColumnSearchProps('devEui')}

                // sorter={(a: any, b: any) => a.devEui.length - b.devEui.length}
              />
              <Column
                width={200}
                title="Mode / Brand"
                dataIndex="model"
                key="model"
                sorter={(a: any, b: any) => a.model.length - b.model.length}
                {...getColumnSearchProps('model')}
              />

              <Column
                width={200}
                title="Last Update"
                dataIndex="lastUpdate"
                key="lastUpdate"
                render={(val) => {
                  if (val) {
                    return moment(val).format('MMM DD YYYY HH:mm:ss');
                  }
                }}
                sorter={(a: any, b: any) =>
                  moment(a.lastUpdate).unix() - moment(b.lastUpdate).unix()
                }
              />

              <Column
                width={130}
                title="Interval"
                dataIndex="interval"
                key="interval"
                sorter={(a: any, b: any) => a.interval - b.interval}
                render={(v) => {
                  return (
                    <Space>
                      <ClockCircleOutlined
                        style={{
                          color: 'gray',
                        }}
                      />
                      <Typography>{v} min</Typography>
                    </Space>
                  );
                }}
              />

              <Column
                width={150}
                title="Battery Level"
                dataIndex="battery"
                key="battery"
                sorter={(a: any, b: any) => a.battery - b.battery}
                filters={[
                  {
                    text: (
                      <Space>
                        <FullBatteryIcon />
                        50 - 100
                      </Space>
                    ),
                    value: '50-100',
                  },
                  {
                    text: (
                      <Space>
                        <MediumBatteryIcon />
                        20 - 50
                      </Space>
                    ),
                    value: '20-50',
                  },
                  {
                    text: (
                      <Space>
                        <LowBatteryIcon
                          style={{
                            marginLeft: '3px',
                          }}
                        />{' '}
                        0 - 20
                      </Space>
                    ),
                    value: '0-20',
                  },
                ]}
                onFilter={(value: any, record: any) => {
                  if (value === '50-100') {
                    return record.battery > 50;
                  } else if (value === '20-50') {
                    return record.battery > 20 && record.battery <= 50;
                  } else if (value === '0-20') {
                    return record.battery <= 20;
                  } else {
                    return true;
                  }
                }}
                render={(val) => {
                  return (
                    <>
                      {val > 20 && val <= 50 ? (
                        <Space>
                          <MediumBatteryIcon />
                          {val}
                        </Space>
                      ) : val <= 20 ? (
                        <Space>
                          <LowBatteryIcon />
                          {val}
                        </Space>
                      ) : val > 50 ? (
                        <Space>
                          <FullBatteryIcon />
                          {val}
                        </Space>
                      ) : null}
                    </>
                  );
                }}
              />
              <Column
                width={200}
                title="Description"
                dataIndex="description"
                key="description"
                {...getColumnSearchProps('description')}
              />
              <Column
                dataIndex="id"
                key="id"
                title="Action"
                fixed="right"
                width={80}
                render={(_, record: any) => {
                  return (
                    <Dropdown
                      trigger={['click']}
                      overlay={
                        <Menu>
                          <Menu.Item
                            key="1"
                            onClick={() => {
                              setModalViewLog(true);
                              setDataModal(record);
                            }}
                          >
                            <EyeOutlined />
                            {'  '}View Log
                          </Menu.Item>
                          {/* <Menu.Item
                            key="2"
                            onClick={() => {
                              setModalViewDetail(true);
                              setDataModal(record);
                            }}
                          >
                            <InfoCircleOutlined />
                            {'  '}Detail Device
                          </Menu.Item> */}
                          {listDownlink.map((v: any) => {
                            if (v == 'interval') {
                              let icon = <EditOutlined />;
                              let funct = () => {
                                setModalInterval(true);
                                setDataModal(record);
                              };
                              switch (v) {
                                case 'interval':
                                  icon = <ClockCircleOutlined />;
                                  funct = () => {
                                    setModalInterval(true);
                                    setDataModal(record);
                                  };
                                  break;

                                case 'meter reading':
                                  icon = <DashboardOutlined />;

                                  break;

                                case 'valve':
                                  icon = <IconFont type="icon-valve" />;

                                  break;

                                default:
                                  break;
                              }

                              return (
                                <Menu.Item
                                  key={v}
                                  onClick={() => {
                                    funct();
                                  }}
                                  style={{ textTransform: 'capitalize' }}
                                >
                                  {icon} {v}
                                </Menu.Item>
                              );
                            }
                          })}
                          <Menu.Item
                            key={'description'}
                            onClick={() => {
                              setModalDescription(true);
                              setDataModal(record);
                            }}
                            style={{ textTransform: 'capitalize' }}
                          >
                            <InfoCircleOutlined /> Edit Descripton
                          </Menu.Item>
                          <Menu.Item
                            key="3"
                            onClick={() => {
                              history.push(`/device/${record.id}/delete`);
                            }}
                            style={{ color: 'red' }}
                          >
                            <DeleteOutlined /> Unsign
                          </Menu.Item>
                        </Menu>
                      }
                      placement="bottomRight"
                    >
                      <Button type="text">
                        <MoreOutlined />
                      </Button>
                    </Dropdown>
                  );
                }}
              />
            </Table>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default TenantInfo;
