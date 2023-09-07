import { getAddressFromLatLong } from '@/components/Maps/GetAddress';
import MapPicker from '@/components/Maps/MapPicker';
import { ApiEditArea } from '@/services/nebula/area';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import type { SelectProps } from 'antd';
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  Upload,
} from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import React, { useState } from 'react';
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type LocationStateTypes = {
  dataEdit: {
    company_name: string;
    area_name: string;
    pic_name: string;
    billing_address: string | null;
    photo: any;
    phone: string;
    email_pic: string;
    email_pic_admin: string;
    address: string | null;
    latitude: any;
    longitude: any;
    id: number;
  };
};

const EditArea: React.FC = () => {
  const [form] = Form.useForm();
  const options: SelectProps['options'] = [];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [mapValue, setMapValue] = React.useState({ lat: -6.2, lng: 106.816666 });
  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;

  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const [loading, setLoading] = React.useState(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  console.log(state.dataEdit, 'dataedot');

  React.useEffect(() => {
    if (state.dataEdit) {
      form.setFields([
        {
          name: 'company_name',
          value: state.dataEdit.company_name,
        },
        {
          name: 'phone',
          value: state.dataEdit.phone.split(','),
        },
        {
          name: 'pic_name',
          value: state.dataEdit.pic_name,
        },
        {
          name: 'billing_address',
          value: state.dataEdit.billing_address,
        },
        {
          name: 'area_name',
          value: state.dataEdit.area_name,
        },
        {
          name: 'email_pic',
          value: state.dataEdit.email_pic.split(','),
        },
        {
          name: 'email_pic_admin',
          value: state.dataEdit.email_pic_admin.split(','),
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
      ]);
      setMapValue({
        lat: parseFloat(state.dataEdit.latitude),
        lng: parseFloat(state.dataEdit.longitude),
      });
      setFileList([
        {
          uid: '1',
          name: 'default logo',
          status: 'done',
          url: state.dataEdit.photo,
        },
      ]);
    }
  }, [state.dataEdit]);

  const onFinish = async (values: any) => {
    setLoading(true);
    const data = await ApiEditArea(
      {
        company_name: values.company_name,
        billing_address: values.billing_address,
        image: fileList[0].originFileObj,
        phone: values.phone.join(','),
        email_pic: values.email_pic.join(','),
        email_pic_admin: values.email_pic_admin.join(','),
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
        area_name: values.area_name,
        pic_name: values.pic_name,
      },
      state.dataEdit.id,
    );
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          history.push('/area/info', {
            area_id: state.dataEdit.id,
          });
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
  };

  return (
    <PageContainer
      title={
        <Button
          type="link"
          onClick={() =>
            history.push('/area/info', {
              area_id: state.dataEdit.id,
            })
          }
          size="large"
        >
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() =>
                history.push('/area/info', {
                  area_id: state.dataEdit.id,
                })
              }
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Area Management</Breadcrumb.Item>
                <Breadcrumb.Item>Area</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Edit Area</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Edit Area</Typography.Title>
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
            <Col span={8}>
              {/* <Form.Item
                label="Company Name"
                name="company_name"
                rules={[{ required: true, message: 'Please input company name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Company Name" disabled />
              </Form.Item> */}
              <Form.Item
                // style={{
                //   marginTop: '24px',
                // }}
                label="Area Name"
                name="area_name"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Area Name" />
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
                style={{
                  marginTop: '24px',
                }}
                label="Email"
                name="email_pic"
                rules={[
                  {
                    required: true,
                    message: 'Please input email!',
                    // type: 'email'
                  },
                ]}
                requiredMark="optional"
              >
                <Select
                  className="not-rounded"
                  mode="tags"
                  style={{ width: '100%' }}
                  tokenSeparators={[',']}
                  options={options}
                  placeholder="Email"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                // style={{
                //   marginTop: '24px',
                // }}
                label="Email PIC Admin"
                name="email_pic_admin"
                rules={[
                  {
                    required: true,
                    message: 'Please input email pic admin!',
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
                  placeholder="Email PIC Admin"
                  className="not-rounded"
                />
              </Form.Item>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input Address!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Address" rows={3} />
              </Form.Item>
              {/* <Form.Item
                style={{
                  marginTop: '24px',
                }}
                label="Billing Address"
                name="billing_address"
                rules={[{ required: true, message: 'Please input Billing Address!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Billing Address" rows={3} />
              </Form.Item> */}
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

export default EditArea;
