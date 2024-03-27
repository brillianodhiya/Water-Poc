import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Helmet, history, useLocation } from '@umijs/max';
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
  Space,
  Spin,
  Typography,
  Upload,
} from 'antd';
import type { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react';
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
    image?: string;
  };
};
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const ViewUsers: React.FC<Props> = ({}) => {
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

  const onFinish = async (values: any) => {
    // console.log(values);
    // setLoading(true);
    // const data = await AddUsers({
    //   name: values.name,
    //   phone: values.phone,
    //   email: values.email,
    //   role: values.role_id,
    //   password: values.newPassword,
    //   image: fileList[0].originFileObj,
    //   tenant_id: values.site,
    //   username: values.username,
    // });
    // setLoading(false);
    // if (!data.error) {
    //   Modal.success({
    //     content: data.message,
    //     onOk: () => {
    //       history.push('/users');
    //     },
    //   });
    // } else {
    //   Modal.error({
    //     content: data.message,
    //   });
    // }
  };

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
          name: 'role_id',
          value: state.dataEdit.role,
        },
        {
          name: 'site',
          value: state.dataEdit.tenant_id,
        },
        {
          name: 'username',
          value: state.dataEdit.username,
        },
      ]);
      setFileList([
        {
          uid: '1',
          name: 'default logo',
          status: 'done',
          url: state.dataEdit.image,
        },
      ]);
    } else {
      history.push('/users/company');
    }
  }, [state.dataEdit]);
  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.back()} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.back()}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>User Management</Breadcrumb.Item>
                <Breadcrumb.Item href="#">View User</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>View User</Typography.Title>
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
                <Input disabled placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography>Username</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input username!' }]}
                requiredMark="optional"
              >
                <Input disabled placeholder="Username" />
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
                <Input disabled placeholder="Email" />
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
                <Input disabled placeholder="Phone" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Typography>
                <div>
                  <Typography style={{ fontSize: 16 }}>Photo</Typography>
                  <Typography style={{ fontSize: 12, color: '#8C8C8C' }}>
                    This wil be displayed on profile.
                  </Typography>
                </div>
              </Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                style={{
                  marginTop: '24px',
                }}
              >
                <Space>
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
                    disabled
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
                  {/* {fileList.length > 0 ? (
                    <Button danger type="text" onClick={() => setFileList([])}>
                      Delete
                    </Button>
                  ) : null} */}
                </Space>
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
                  disabled
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
            <Col span={12}>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) => prevValues.role_id !== curValues.role_id}
              >
                {() => {
                  if (form.getFieldValue('role_id') == 'SITE') {
                    return <Typography>Site</Typography>;
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
                  if (form.getFieldValue('role_id') == 'SITE') {
                    return (
                      <Form.Item
                        name="site"
                        rules={[{ required: true, message: 'Please select role!' }]}
                        requiredMark="optional"
                      >
                        <TenantDropdown disabled type="not-rounded" />
                      </Form.Item>
                    );
                  } else {
                    return null;
                  }
                }}
              </Form.Item>
            </Col>

            <Col offset={16} style={{ textAlign: 'right' }}>
              {/* <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item> */}
              <Button type="default" htmlType="button" onClick={() => history.push('/users')}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Spin>
    </PageContainer>
  );
};

export default ViewUsers;
