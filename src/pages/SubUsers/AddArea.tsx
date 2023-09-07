import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { AddUserArea } from '@/services/nebula/user';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
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
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const AddArea: React.FC<Props> = ({}) => {
  const [form] = Form.useForm();
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
    console.log(values);
    setLoading(true);
    const data = await AddUserArea({
      name: values.name,
      phone: values.phone,
      email: values.email,
      role_id: values.role_id,
      password: '12345',
      image: fileList[0].originFileObj,
      area_id: values.area_id,
    });
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          history.push('/users/area');
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
        <Button type="link" onClick={() => history.back()} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.back()}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Add User Area</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Add User</Typography.Title>
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
        <title>BITA | User</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
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
              <Typography>Area Name</Typography>
            </Col>
            <Col span={12}>
              <Form.Item
                name="area_id"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
              >
                <AreaDropdown onChange={() => {}} />
              </Form.Item>
            </Col>
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
                <Input placeholder="Email" />
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
            <Col span={12}>
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
                      value: 1,
                    },
                    {
                      label: 'Finance',
                      value: 4,
                    },
                    {
                      label: 'Technician',
                      value: 5,
                    },
                  ]}
                />
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
                  <Button type="default" htmlType="button">
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

export default AddArea;
