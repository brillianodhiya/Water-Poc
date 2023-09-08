import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { getAddressFromLatLong } from '@/components/Maps/GetAddress';
import MapPicker from '@/components/Maps/MapPicker';
import { ApiAddDevice, getDeviceCore } from '@/services/nebula/device';
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CodeSandboxOutlined,
  DesktopOutlined,
  LockOutlined,
  MergeCellsOutlined,
  NodeIndexOutlined,
  PicRightOutlined,
  StockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Helmet, history } from '@umijs/max';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Tag,
  Typography,
} from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import queryString from 'query-string';
import React from 'react';

moment.locale('en');
const AddDevice: React.FC = () => {
  const [form] = Form.useForm();
  const [typeIcon, setTypeIcon] = React.useState('');
  const [typeId, setTypeId] = React.useState(0);
  const [mapValue, setMapValue] = React.useState({ lat: -6.2, lng: 106.816666 });

  const [detailDeviceCore, setDetailDeviceCore] = React.useState<any[]>([]);

  const [loading, setLoading] = React.useState(false);
  const [deviceCore, setDeviceCore] = React.useState<any[]>([]);
  const queryParsed = queryString.parse(window.location.search);
  const [areaId, setareaId] = React.useState<any>(undefined);

  const getDeviceId = async () => {
    setLoading(true);
    const data = await getDeviceCore({});
    console.log(data.data, 'device core data');
    setLoading(false);
    if (!data.error) {
      setDeviceCore(data.data);
    }
  };

  console.log(queryParsed);

  React.useEffect(() => {
    if (queryParsed.area_id) {
      setareaId(parseInt(queryParsed.area_id));
      form.setFields([
        {
          name: 'area_name',
          value: parseInt(queryParsed.area_id),
        },
        {
          name: 'tenant_name',
          value: parseInt(queryParsed.tenant_id),
        },
      ]);
    }
  }, [queryParsed.area_id]);

  React.useEffect(() => {
    getDeviceId();
  }, []);

  React.useEffect(() => {
    getAddressFromLatLong(mapValue.lat, mapValue.lng).then((e) => {
      form.setFields([
        {
          name: 'address',
          value: e,
        },
      ]);
    });
  }, [mapValue]);

  const onFinish = async (values: any) => {
    console.log(values, 'values');
    setLoading(true);
    const data = await ApiAddDevice({
      devEui: values.device_id,
      area_id: areaId,
      model: detailDeviceCore[0]?.brand,
      installation_date: moment().format('YYYY-MM-DD HH:mm:ss'),
      description: values.description,
      latitude: values.latitude,
      longitude: values.longitude,
      address: values.address,
      interval: 15,
      typeId: typeId,
      tenant_id: values.tenant_name,
    });
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          try {
            history.back();
          } catch (error) {
            history.push('/device');
          }
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
  };

  // console.log(deviceCore.filter((val) => val.deveui == '0800000070010dc2'));
  console.log(detailDeviceCore);
  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title={
        <Button
          type="link"
          onClick={() => {
            try {
              history.back();
            } catch (error) {
              history.push('/device');
            }
          }}
          size="large"
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>AAT | Device</title>
            <link rel="icon" href="/logoaat.png" type="image/x-icon" />
          </Helmet>
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => {
                try {
                  history.back();
                } catch (error) {
                  history.push('/device');
                }
              }}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Device Management</Breadcrumb.Item>
                <Breadcrumb.Item>List Device</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Add Device</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Add Device</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Spin spinning={loading}>
        <Form form={form} name="add-area" onFinish={onFinish} layout="vertical">
          <Row
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
              paddingTop: 20,
            }}
            gutter={16}
          >
            <Col xxl={8} lg={8} md={10} xs={24}>
              <Space
                wrap
                style={{
                  width: '100%',
                }}
                align={'baseline'}
              >
                <Typography>Please Select Dev Eui : </Typography>
                <Form.Item
                  // style={{
                  //   marginTop: '24px',
                  // }}
                  // label="Please Select Dev Eui"
                  name="device_id"
                  rules={[
                    {
                      required: true,
                      message: 'Please input Dev Eui!',
                    },
                  ]}
                  requiredMark="optional"
                >
                  <Select
                    style={{ width: 280 }}
                    tokenSeparators={[',']}
                    placeholder="Dev Eui"
                    className="not-rounded"
                    onChange={(value, option: any) => {
                      setDetailDeviceCore(deviceCore.filter((val) => val.deveui == value));
                      setTypeIcon(option.icon);
                      setTypeId(option.typeId);
                    }}
                  >
                    {deviceCore.map((v) => {
                      return (
                        <Select.Option
                          key={v.id}
                          icon={v.DeviceType.icon}
                          typeName={v.DeviceType.name}
                          typeId={v.DeviceType.id}
                          brand={v.brand}
                          value={v.deveui}
                        >
                          {v.deveui}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Space>
              <Card
                style={{
                  marginBottom: 20,
                }}
              >
                <Space size={'middle'}>
                  <Avatar src={detailDeviceCore[0]?.DeviceType?.icon} icon={<UserOutlined />} />
                  <Space direction="vertical">
                    <Typography
                      style={{
                        color: 'rgba(0, 0, 0, 0.45)',
                      }}
                    >
                      Device Type
                    </Typography>
                    <Typography.Title level={5}>
                      {detailDeviceCore[0]?.DeviceType?.name || '-'}
                    </Typography.Title>
                  </Space>
                  {detailDeviceCore[0]?.valve == 'open' ? (
                    <Tag
                      style={{
                        backgroundColor: '#52C41A',
                        color: '#fff',
                        borderRadius: 100,
                        padding: '0px 8px',
                      }}
                    >
                      Online
                    </Tag>
                  ) : detailDeviceCore[0]?.valve == 'close' ? (
                    <Tag
                      style={{
                        backgroundColor: 'red',
                        color: '#fff',
                        borderRadius: 100,
                        padding: '0px 8px',
                      }}
                    >
                      Offline
                    </Tag>
                  ) : null}
                </Space>
                <Row
                  gutter={[16, 16]}
                  wrap
                  style={{
                    padding: 20,
                  }}
                >
                  <Col span={12}>
                    <Space>
                      <CalendarOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Dev Eui</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.deveui || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <LockOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Application Key</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.application_key || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <NodeIndexOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Application Eui</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.application_eui || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <StockOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Frekuensi</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.region || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <CodeSandboxOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Brand/Model</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.brand || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <PicRightOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Profile</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.profile || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <MergeCellsOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Class</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.class || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <DesktopOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Lorawan MAC Version</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{detailDeviceCore[0]?.lora_wan_max_version || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space>
                      <ClockCircleOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Interval</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>
                      {detailDeviceCore[0]?.interval
                        ? detailDeviceCore[0]?.interval + ' Minute'
                        : '-'}
                    </Typography>
                  </Col>
                </Row>
                {detailDeviceCore[0]?.description && (
                  <Card
                    bodyStyle={{
                      background: '#E6F7FF',
                      border: '1px solid #91D5FF',
                    }}
                  >
                    {detailDeviceCore[0]?.description}
                  </Card>
                )}
              </Card>
            </Col>
            <Col xxl={16} lg={16} md={14} xs={24}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    style={
                      {
                        // marginTop: '24px',
                      }
                    }
                    label="Area Name"
                    name="area_name"
                    rules={[{ required: true, message: 'Please input area name!' }]}
                    requiredMark="optional"
                    className="not-rounded"
                  >
                    <AreaDropdown
                      onChange={(val) => {
                        setareaId(val);
                      }}
                      style={undefined}
                      type={''}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    noStyle
                    shouldUpdate={(preValue, curValue) => preValue.area_name !== curValue.area_name}
                  >
                    {() => {
                      return (
                        <Form.Item
                          style={
                            {
                              // marginTop: '24px',
                            }
                          }
                          label="Tenant Name"
                          name="tenant_name"
                          rules={[{ required: true, message: 'Please input tenant name!' }]}
                          requiredMark="optional"
                          className="not-rounded"
                        >
                          <TenantDropdown
                            onChange={() => {}}
                            areaId={areaId}
                            style={undefined}
                            type={''}
                          />
                        </Form.Item>
                      );
                    }}
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                style={
                  {
                    // marginTop: '24px',
                  }
                }
                label="Description"
                name="description"
                rules={[{ required: false, message: 'Please input description!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Description" rows={3} />
              </Form.Item>
              <MapPicker
                center={mapValue}
                onChange={(v) => {
                  setMapValue(v);
                  form.setFields([
                    {
                      name: 'latitude',
                      value: v.lat,
                    },
                    {
                      name: 'longitude',
                      value: v.lng,
                    },
                  ]);
                }}
              />
              <Form.Item
                style={{
                  marginTop: 24,
                }}
                requiredMark="optional"
                name="address"
                label={'Address'}
              >
                <Input.TextArea
                  // className="border-bottom"
                  placeholder="Address"
                />
              </Form.Item>
              <Space wrap size={'large'} style={{ marginTop: '16px' }}>
                <Form.Item
                  requiredMark="optional"
                  name="latitude"
                  label={'Latitude'}
                  initialValue="-6.290690"
                  rules={[{ required: true, message: 'Masukkan Latitude' }]}
                  hidden
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Latitude"
                  />
                </Form.Item>
                <Form.Item
                  requiredMark="optional"
                  name="longitude"
                  label={'Longitude'}
                  initialValue="107.141853"
                  rules={[{ required: true, message: 'Masukkan Longitude' }]}
                  hidden
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Longitude"
                  />
                </Form.Item>
              </Space>
            </Col>
            {/* <Col span={8}>
              <Form.Item
                label="Installation Date"
                name="installation_date"
                rules={[{ required: true, message: 'Please input installation date!' }]}
                requiredMark="optional"
                initialValue={moment()}
              >
                <DatePicker disabled className="not-rounded" />
              </Form.Item>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Area Name"
                name="area_name"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
              >
                <AreaDropdown
                  onChange={(val) => {
                    setareaId(val);
                  }}
                />
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(preValue, curValue) => preValue.area_name !== curValue.area_name}
              >
                {() => {
                  return (
                    <Form.Item
                      style={{
                        marginTop: '24px',
                      }}
                      label="Tenant Name"
                      name="tenant_name"
                      rules={[{ required: true, message: 'Please input tenant name!' }]}
                      requiredMark="optional"
                    >
                      <TenantDropdown onChange={() => {}} areaId={areaId} />
                    </Form.Item>
                  );
                }}
              </Form.Item>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Description"
                name="description"
                rules={[{ required: false, message: 'Please input description!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Description" rows={3} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                // style={{
                //   marginTop: '24px',
                // }}
                label="Device Type"
                name="device_type"
                rules={[
                  {
                    required: true,
                    message: 'Please input Device Type!',
                  },
                ]}
                requiredMark="optional"
              >
                <Input
                  prefix={typeIcon ? <img src={typeIcon} width={24} height={24} /> : ''}
                  placeholder="Device Type"
                  disabled
                />
              </Form.Item>
              <Form.Item
                // style={{
                //   marginTop: '24px',
                // }}
                label="Device Id"
                name="device_id"
                rules={[
                  {
                    required: true,
                    message: 'Please input Device Id!',
                  },
                ]}
                requiredMark="optional"
              >
                <Select
                  style={{ width: '100%' }}
                  tokenSeparators={[',']}
                  placeholder="Device Id"
                  className="not-rounded"
                  onChange={(value, option: any) => {
                    form.setFields([
                      {
                        name: 'device_type',
                        value: option.typeName,
                      },
                      {
                        name: 'brand',
                        value: option.brand,
                      },
                    ]);
                    setTypeIcon(option.icon);
                    setTypeId(option.typeId);
                  }}
                >
                  {deviceCore.map((v) => {
                    return (
                      <Select.Option
                        key={v.id}
                        icon={v.DeviceType.icon}
                        typeName={v.DeviceType.name}
                        typeId={v.DeviceType.id}
                        brand={v.brand}
                        value={v.deveui}
                      >
                        {v.deveui}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Model/Brand"
                name="brand"
                rules={[{ required: false, message: 'Please input Model/Brand!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Model/Brand" disabled />
              </Form.Item>
              <Form.Item
                extra={'Minute'}
                style={{
                  marginTop: '24px',
                }}
                label="Interval"
                name="interval"
                rules={[{ required: true, message: 'Please input Interval!' }]}
                requiredMark="optional"
                initialValue={15}
              >
                <InputNumber prefix={<ClockCircleOutlined />} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <MapPicker
                center={mapValue}
                onChange={(v) => {
                  setMapValue(v);
                  form.setFields([
                    {
                      name: 'latitude',
                      value: v.lat,
                    },
                    {
                      name: 'longitude',
                      value: v.lng,
                    },
                  ]);
                }}
              />
              <Form.Item requiredMark="optional" name="address" label={'Address'}>
                <Input.TextArea
                  // className="border-bottom"
                  placeholder="Address"
                />
              </Form.Item>
              <Space wrap size={'large'} style={{ marginTop: '16px' }}>
                <Form.Item
                  requiredMark="optional"
                  name="latitude"
                  label={'Latitude'}
                  initialValue="-6.290690"
                  rules={[{ required: true, message: 'Masukkan Latitude' }]}
                  hidden
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Latitude"
                  />
                </Form.Item>
                <Form.Item
                  requiredMark="optional"
                  name="longitude"
                  label={'Longitude'}
                  initialValue="107.141853"
                  rules={[{ required: true, message: 'Masukkan Longitude' }]}
                  hidden
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Longitude"
                  />
                </Form.Item>
              </Space>
            </Col> */}
          </Row>
          <div style={{ marginTop: 20, textAlign: 'right' }}>
            <Space>
              <Form.Item>
                <Button type="default" htmlType="button">
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Space>
          </div>
        </Form>
      </Spin>
    </PageContainer>
  );
};

export default AddDevice;
