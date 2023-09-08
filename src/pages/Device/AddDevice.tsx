/* eslint-disable @typescript-eslint/no-unused-vars */
import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { getAddressFromLatLong } from '@/components/Maps/GetAddress';
import MapPicker from '@/components/Maps/MapPicker';
import { ApiAddNodeInstallation, ApiCheckNodeInstallation } from '@/services/badiklat/nodeList';
import { ArrowLeftOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import {
  Breadcrumb,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Spin,
  Typography,
} from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import queryparse from 'query-string';
import React from 'react';
import { Helmet } from 'react-helmet';

moment.locale('en');
const AddDevice: React.FC = () => {
  const [form] = Form.useForm();
  const [mapValue, setMapValue] = React.useState({ lat: -6.2, lng: 106.816666 });

  const [loadingCheck, setLoadingCheck] = React.useState(false);
  const [devEui, setDevEui] = React.useState('');
  const typingTimer = React.useRef<number | null>(null);
  const [notFound, setNotFound] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const query = queryparse.parse(window.location.search);

  React.useEffect(() => {
    if (query.area_id) {
      form.setFields([
        {
          name: 'area_id',
          value: parseInt(query?.area_id),
        },
        {
          name: 'tenant_id',
          value: parseInt(query?.tenant_id),
        },
      ]);
    }
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
    console.log(values);
    setLoading(true);
    const data = await ApiAddNodeInstallation({
      devEui: values.devEui.split(' ').join(''),
      model: values.brand,
      description: values.description,
      latitude: values.latitude,
      longitude: values.longitude,
      interval: values.interval,
      tenant_id: values.tenant_id,
      area_id: values.area_id,
      meter_id: values.meter_id,
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

  const getDataCheckNode = async () => {
    // cobanodenonct123
    // cobanodenonct124
    // cobanodect123567
    // cobanodect123568
    setLoadingCheck(true);
    const d = await ApiCheckNodeInstallation({
      devEui: devEui.split(' ').join(''),
    });

    setLoadingCheck(false);

    if (!d.error) {
      setNotFound(false);
      // if (d.data.length > 0) {
      //   console.log(d.data);
      //   setListNode(d.data);
      // }
      if (!d.data?.data) {
        setNotFound(true);
        // setListNode([]);
        // form.setFields([
        //   {
        //     name: 'devEui',
        //     errors: ['Device Id Not Found'],
        //   },
        // ]);
      }
    } else {
      setNotFound(true);
      // setListNode([]);
      form.setFields([
        {
          name: 'devEui',
          errors: ['Device Id Not Found'],
        },
      ]);
    }
  };

  return (
    <PageContainer
      title={
        <Button
          type="link"
          onClick={() => {
            if (query.area_id) {
              history.push('/area/tenant', {
                area_id: query.area_id,
                tenant_id: query.tenant_id || '',
              });
            } else {
              history.push('/device');
            }

            // try {
            //   history.back();
            // } catch (error) {
            //   history.push('/device');
            // }
          }}
          size="large"
        >
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => {
                if (query.area_id) {
                  history.push('/area/tenant', {
                    area_id: query.area_id,
                    tenant_id: query.tenant_id || '',
                  });
                } else {
                  history.push('/device');
                }
              }}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Device Management</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Add Device</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Add Device</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT | Device</title>
        <link rel="icon" href="/logos.png" type="image/x-icon" />
      </Helmet>
      <Spin spinning={loading}>
        <Form form={form} name="add-area" onFinish={onFinish} layout="vertical">
          <Row
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
              paddingTop: 20,
            }}
            gutter={[24, 24]}
          >
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}>
              <Form.Item
                label="Installation Date"
                name="installation_date"
                rules={[{ required: true, message: 'Please input installation date!' }]}
                requiredMark="optional"
                initialValue={moment()}
              >
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                  disabled
                  className="not-rounded"
                />
              </Form.Item>

              <Form.Item
                style={
                  {
                    // marginTop: '24px',
                  }
                }
                label="Area Name"
                name="area_id"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
                className="not-rounded"
              >
                <AreaDropdown
                  style={undefined}
                  type={''}
                  defaultArea0={false}
                  onChange={() => {
                    form.setFields([
                      {
                        name: 'tenant_id',
                        value: undefined,
                      },
                    ]);
                  }}
                />
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(preValue, curValue) => preValue.area_id !== curValue.area_id}
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
                      name="tenant_id"
                      rules={[{ required: true, message: 'Please input tenant name!' }]}
                      requiredMark="optional"
                      className="not-rounded"
                    >
                      <TenantDropdown
                        onChange={() => {}}
                        areaId={form.getFieldValue('area_id')}
                        style={undefined}
                        type={''}
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>

              <Form.Item noStyle shouldUpdate>
                {() => {
                  return (
                    <Form.Item
                      requiredMark="optional"
                      name="devEui"
                      label="Device Eui"
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="Device Eui"
                        // className="border-bottom"
                        onChange={(e) => {
                          setDevEui(e.target.value);
                          form.setFields([
                            {
                              name: 'devEui',
                              value: e.target.value
                                .replace(/\s/g, '')
                                .replace(/(.{4})/g, '$1 ')
                                .trim(),
                            },
                          ]);
                        }}
                        onKeyUp={() => {
                          if (typingTimer.current !== null) {
                            window.clearTimeout(typingTimer.current);
                          }
                          typingTimer.current = window.setTimeout(() => {
                            // console.log(devEui, 'TEST');
                            getDataCheckNode();
                          }, 1000);
                        }}
                        onKeyDown={() => {
                          if (typingTimer.current !== null) {
                            window.clearTimeout(typingTimer.current);
                          }
                        }}
                        suffix={<Spin spinning={loadingCheck} />}
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}>
              <Form.Item
                label="Meter Id"
                name="meter_id"
                rules={[{ required: false, message: 'Please input Meter Id!' }]}
                // requiredMark="optional"
              >
                <Input placeholder="Meter Id" />
              </Form.Item>
              <Form.Item
                label="Model/Brand"
                name="brand"
                rules={[{ required: false, message: 'Please input Model/Brand!' }]}
                // requiredMark="optional"
              >
                <Input placeholder="Model/Brand" />
              </Form.Item>

              <Form.Item
                extra={'Minute'}
                label="Interval"
                name="interval"
                initialValue={15}
                rules={[{ required: true, message: 'Please input Interval!' }]}
                requiredMark="optional"
              >
                <InputNumber prefix={<ClockCircleOutlined />} />
              </Form.Item>
              <Form.Item
                // style={{
                //   marginTop: '-24px',
                // }}
                label="Description"
                name="description"
                rules={[{ required: false, message: 'Please input description!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Description" rows={3} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={8}>
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
            </Col>
          </Row>
          <div style={{ marginTop: 20, textAlign: 'right' }}>
            <Space>
              <Form.Item>
                <Button
                  type="default"
                  htmlType="button"
                  onClick={() => {
                    try {
                      history.back();
                    } catch (error) {
                      history.push('/device');
                    }
                  }}
                >
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    if (notFound) {
                      form.setFields([
                        {
                          name: 'devEui',
                          errors: ['Device Id Not Found'],
                        },
                      ]);
                    } else {
                      form.submit();
                    }
                  }}
                >
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
