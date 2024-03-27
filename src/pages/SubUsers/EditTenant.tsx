import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { EditUserTenant } from '@/services/nebula/user';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import type { UploadFile, UploadProps } from 'antd';
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
  Typography,
  Upload,
} from 'antd';
import type { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
type Props = {};
type LocationStateTypes = {
  dataEdit: {
    id: number;
    username: string;
    email: string;
    name: string;
    phone: string;
    role: string;
    tenant_id: number;
    createdAt: string;
    updatedAt: string;
    photo?: string;
    area_id: number;
    address: string;
  };
};
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const EditTenant: React.FC<Props> = ({}) => {
  const [form] = Form.useForm();
  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
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

  console.log(state.dataEdit);

  React.useEffect(() => {
    if (state.dataEdit) {
      form.setFields([
        {
          name: 'name',
          value: state.dataEdit.name,
        },
        {
          name: 'email',
          value: state.dataEdit.email,
        },
        {
          name: 'email',
          value: state.dataEdit.email,
        },
        {
          name: 'phone',
          value: state.dataEdit.phone,
        },
        {
          name: 'role',
          value: state.dataEdit.role,
        },
        {
          name: 'area_id',
          value: state.dataEdit?.Nebula_Area?.id,
        },
        {
          name: 'address',
          value: state.dataEdit.address,
        },
      ]);
      setFileList([
        {
          uid: '1',
          name: 'default logo',
          status: 'done',
          url: state.dataEdit.photo,
        },
      ]);
    } else {
      history.push('/users/company');
    }
  }, [state.dataEdit]);

  const onFinish = async (values: any) => {
    console.log(values);
    setLoading(true);
    const data = await EditUserTenant({
      name: values.name,
      phone: values.phone,
      email: values.email,
      // image: fileList[0].originFileObj,
      id: state.dataEdit.id,
      password: values.newPassword,
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
  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.push('/users')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/users')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>User Management</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Edit User</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Edit User</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>IKI IoT Platform | User Management</title>
        <link rel="icon" href="/Sinar-mas.png" type="image/x-icon" />
      </Helmet>
      <Divider style={{ paddingTop: 0, marginTop: 0 }} />
      <Spin spinning={loading}>
        <Form
          form={form}
          name="add-area"
          onFinish={onFinish}
          style={{ width: 500, margin: '0px auto', paddingTop: 20 }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Typography>Full Name</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input full name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Full Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Typography>Email</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input email!', type: 'email' }]}
                requiredMark="optional"
              >
                <Input placeholder="Email" disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography>Phone</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: 'Please input phone!' },
                  {
                    pattern: /^(\+62|62|0)8[1-9][0-9]{6,13}$/g,
                    message: 'Phone not valid!',
                  },
                ]}
                requiredMark="optional"
              >
                <Input placeholder="Phone" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Typography>Role</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="role"
                rules={[{ required: true, message: 'Please select role!' }]}
                requiredMark="optional"
              >
                <Select
                  placeholder="Select Role"
                  className="not-rounded"
                  disabled
                  options={[
                    {
                      label: 'Admin',
                      value: 'admin',
                    },
                    {
                      label: 'Area',
                      value: 'area',
                    },
                  ]}
                  onChange={() => {
                    form.setFieldsValue({ area_id: undefined });
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) => prevValues.role_id !== curValues.role_id}
              >
                {() => {
                  if (form.getFieldValue('role') == 'area') {
                    return <Typography>Area</Typography>;
                  } else {
                    return null;
                  }
                }}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) => prevValues.role_id !== curValues.role_id}
              >
                {() => {
                  if (form.getFieldValue('role') == 'area') {
                    return (
                      <Form.Item
                        name="area_id"
                        rules={[{ required: true, message: 'Please input Area!' }]}
                        requiredMark="optional"
                      >
                        <AreaDropdown disabled />
                      </Form.Item>
                    );
                  } else {
                    return null;
                  }
                }}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography>Address</Typography>
            </Col>
            <Col span={12}>
              <Form.Item name="address" requiredMark="optional">
                <Input.TextArea placeholder="Address" />
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Typography>Role</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="role_id"
                rules={[{ required: true, message: 'Please select role!' }]}
                requiredMark="optional"
              >
                <Select
                  placeholder="Select Role"
                  className="not-rounded"
                  options={[
                    {
                      label: 'Admin',
                      value: 'ADMIN',
                    },
                    {
                      label: 'Site',
                      value: 'SITE',
                    },
                  ]}
                  onChange={() => {
                    form.setFieldsValue({ site: undefined });
                  }}
                />
              </Form.Item>
            </Col> */}

            <Col span={24}>
              <Divider />
            </Col>
            <Col span={12}>
              <Typography>New Password</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="newPassword"
                rules={[{ required: true, message: 'Please input password!' }]}
                requiredMark="optional"
              >
                <Input.Password placeholder="Input Password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography>Retype Password</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
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
            <Col offset={16}>
              <Space>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type="default" htmlType="button" onClick={() => history.push('/users')}>
                    Cancel
                  </Button>
                </Form.Item>
              </Space>
            </Col>
          </Row>
        </Form>
      </Spin>
    </PageContainer>
  );
};

export default EditTenant;
