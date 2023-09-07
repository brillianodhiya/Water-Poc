import { getAddressFromLatLong } from '@/components/Maps/GetAddress';
import MapPicker from '@/components/Maps/MapPicker';
import { getArea } from '@/services/nebula/area';
import { ApiEditTenant } from '@/services/nebula/tenant';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import type { SelectProps } from 'antd';
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  // Switch,
  Typography,
  Upload,
} from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type LocationStateTypes = {
  dataEdit: {
    name: string;
    logo: string;
    phone: string;
    email: string;
    address: string;
    latitude: any;
    longitude: any;
    area_name: string;
    pic_name: string;
    area_id: number;
    customer_id: number;
    type: string;
    id: number;
  };
};

const EditTenant: React.FC = () => {
  const [form] = Form.useForm();
  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;
  const options: SelectProps['options'] = [];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [mapValue, setMapValue] = React.useState({ lat: -6.2, lng: 106.816666 });
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [dataArea, setDataArea] = useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  console.log(state.dataEdit.logo);

  React.useEffect(() => {
    if (state.dataEdit) {
      form.setFields([
        {
          name: 'customer_id',
          value: state.dataEdit.customer_id,
        },
        {
          name: 'phone',
          value: state.dataEdit.phone.split(','),
        },
        {
          name: 'type',
          value: state.dataEdit.type,
        },
        {
          name: 'name',
          value: state.dataEdit.name,
        },
        {
          name: 'area_name',
          value: state.dataEdit.area_name,
        },
        {
          name: 'pic_name',
          value: state.dataEdit.pic_name,
        },
        {
          name: 'email',
          value: state.dataEdit.email.split(','),
        },
        {
          name: 'address',
          value: state.dataEdit.address,
        },
        {
          name: 'latitude',
          value: state.dataEdit.latitude,
        },
        {
          name: 'longitude',
          value: state.dataEdit.longitude,
        },
        {
          name: 'kode_unit',
          value: state.dataEdit.kode_unit,
        },
        {
          name: 'nama_unit',
          value: state.dataEdit.nama_unit,
        },
        {
          name: 'username',
          value: state.dataEdit.username,
        },
        {
          name: 'newPassword',
          value: state.dataEdit.password,
        },
      ]);
      setMapValue({
        lat: state.dataEdit.latitude,
        lng: state.dataEdit.longitude,
      });
      setFileList([
        {
          uid: '1',
          name: 'default logo',
          status: 'done',
          url: state.dataEdit.logo,
        },
      ]);
    }
  }, [state.dataEdit]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const getDataArea = async () => {
    const data = await getArea({});
    // console.log(data);
    if (!data.error) {
      setDataArea(data.data);
    }
  };

  React.useEffect(() => {
    getDataArea();
  }, []);

  const onFinish = async (values: any) => {
    console.log(values);
    setLoading(true);
    const data = await ApiEditTenant({
      name: values.name,
      image: fileList.length > 0 ? fileList[0].originFileObj : null,
      phone: values.phone.join(','),
      email: values.email.join(','),
      address: values.address,
      latitude: values.latitude,
      longitude: values.longitude,
      area_name: values.area_name,
      pic_name: values.pic_name,
      area_id: state.dataEdit.area_id,
      // customer_id: values.customer_id,
      type: values.type,
      id: state.dataEdit.id,
      password: values.retypePassword,
      username: values.username,
      kode_unit: values.kode_unit,
      nama_unit: values.nama_unit,
    });
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          history.back();
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
  };

  console.log(state.dataEdit);

  return (
    <PageContainer
      title={
        <Button
          type="link"
          onClick={() =>
            history.push('/area/tenant', {
              tenant_id: state.dataEdit.id,
              area_id: state.dataEdit.area_id,
            })
          }
          size="large"
        >
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() =>
                history.push('/area/tenant', {
                  tenant_id: state.dataEdit.id,
                  area_id: state.dataEdit.area_id,
                })
              }
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Area Management</Breadcrumb.Item>
                <Breadcrumb.Item>Area</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Edit Tenant</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Edit Tenant</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>BITA IoT Platform | Edit Tenant</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Helmet>
      <Spin spinning={loading}>
        <Form form={form} name="add-area" onFinish={onFinish} layout="vertical">
          <Row
            style={{
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
            gutter={16}
          >
            <Col span={24}>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
              >
                <Space>
                  <div>
                    <Typography style={{ fontSize: 16 }}>Photo</Typography>
                    <Typography style={{ fontSize: 12, color: '#8C8C8C' }}>
                      This wil be displayed on profile.
                    </Typography>
                  </div>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    customRequest={({ onSuccess }) => {
                      if (onSuccess) {
                        setTimeout(() => {
                          onSuccess('ok');
                        }, 0);
                      }
                    }}
                    maxCount={1}
                    multiple={false}
                    accept="image/*"
                    onChange={handleChange}
                    onPreview={handlePreview}
                  >
                    {fileList.length > 0 ? null : (
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    )}
                  </Upload>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={() => setPreviewOpen(false)}
                  >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                  {fileList.length > 0 ? (
                    <Button danger type="text" onClick={() => setFileList([])}>
                      Delete
                    </Button>
                  ) : null}
                </Space>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={8} xxl={8}>
              {/* <Form.Item
                label="Charge Billing"
                name="type"
                valuePropName="checked"
                rules={[{ type: 'boolean' }]}
                initialValue={state.dataEdit.type}
              >
                <Switch checkedChildren="Yes" unCheckedChildren="No" />
              </Form.Item> */}
              <Form.Item
                label="Tenant Name"
                name="name"
                rules={[{ required: true, message: 'Please input tenant name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Tenant Name" />
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
                <Select placeholder="Area Name" className="not-rounded">
                  {dataArea.map((v) => {
                    return (
                      <Select.Option key={v.id} value={v.area_name}>
                        {v.area_name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="PIC Name"
                name="pic_name"
                rules={[{ required: true, message: 'Please input pic name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="PIC Name" />
              </Form.Item>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Email PIC"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input email pic!',
                    // type: 'email'
                  },
                ]}
                requiredMark="optional"
              >
                <Select
                  mode="tags"
                  style={{ width: '100%' }}
                  tokenSeparators={[',']}
                  options={options}
                  placeholder="Email PIC"
                  className="not-rounded"
                />
              </Form.Item>
              <Form.Item
                label="Kode Unit"
                name="kode_unit"
                rules={[{ required: true, message: 'Please input Kode Unit!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Kode Unit" />
              </Form.Item>
              <Form.Item
                label="Nama Unit"
                name="nama_unit"
                rules={[{ required: true, message: 'Please input Nama Unit!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Nama Unit" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl={8} xxl={8}>
              <Form.Item
                style={
                  {
                    // marginTop: '24px',
                  }
                }
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: 'Please input phone!' },
                  // {
                  //   pattern: /^(\+62|62|0)8[1-9][0-9]{6,13}$/g,
                  //   message: 'Phone not valid!',
                  // },
                ]}
                requiredMark="optional"
              >
                <Select
                  mode="tags"
                  style={{ width: '100%' }}
                  tokenSeparators={[',']}
                  options={options}
                  placeholder="Phone"
                  className="not-rounded"
                />
              </Form.Item>

              <Form.Item
                style={
                  {
                    // marginTop: '24px',
                  }
                }
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input Address!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Address" rows={3} />
              </Form.Item>
              <Divider />
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input Username!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="newPassword"
                rules={[{ required: true, message: 'Please input password!' }]}
                requiredMark="optional"
              >
                <Input.Password placeholder="Input Password" />
              </Form.Item>
              <Form.Item
                label="Re-type Password"
                name="retypePassword"
                requiredMark="optional"
                rules={[
                  { required: true, message: 'Please input password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Retype Password" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={8} xxl={8}>
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
                  getAddressFromLatLong(v.lat, v.lng).then((e) => {
                    form.setFields([
                      {
                        name: 'address',
                        value: e,
                      },
                    ]);
                  });
                }}
              />
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
                <Button type="default" onClick={() => history.back()}>
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

export default EditTenant;
