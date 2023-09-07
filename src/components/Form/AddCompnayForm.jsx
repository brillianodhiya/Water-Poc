import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Modal, Space, Spin, Typography, Upload, Input, Select, Row, Col } from 'antd';
import React from 'react';
import api from '../../../config/axiosConfig';


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};
export const AddCompanyForm = ({ title, open, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [imgUp, setImgUp] = React.useState(undefined);
  const [imgView, setImgView] = React.useState(undefined);
  const [loadingUploadImage, setLoadingUploadImage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
    setLoading(true)

    api({

    }).then((res) => {
      if (res.data.responseCode == 200) {
        setLoading(false);
        Modal.success({
          content: 'Success Add Comapny...',
          onOk: () => {
            form.resetFields();
            onOk();
          },
        });
      } else {
        message.error(res.data.message);
      }
    })
      .catch((err) => {
        message.error(err.response?.data?.message);
      });
  };

  return (
    <Modal
      width={580}
      title={title}
      open={open}
      onOk={() => {
        form.submit();
      }}
      onCancel={() => {
        onCancel();
      }}
      okText="Save"
    >
      <Form form={form} name="add-company" onFinish={onFinish} layout="vertical">
        <Form.Item noStyle>
          <Space wrap size={'large'}>
            <Spin spinning={loadingUploadImage}>
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                src={imgView}
                icon={<UserOutlined />}
              // style={{ background: '#fff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
              />
            </Spin>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Space size="large">
                <Upload
                  onChange={async (info) => {
                    console.log(info, 'INFO');
                    if (info.file.originFileObj) {
                      setImgUp(info.file.originFileObj);
                      const base64 = await getBase64(info.file.originFileObj);
                      // console.log(base64, 'BASE 64');
                      // UploadImage(base64);
                      setImgView(base64);
                    }
                  }}
                  fileList={[]}
                  customRequest={dummyRequest}
                  maxCount={1}
                  multiple={false}
                  accept="image/*"
                >
                  <Button
                    type="default"
                    style={{
                      borderColor: '#003A8C',
                    }}
                  >
                    Upload
                  </Button>
                </Upload>

                <Button
                  type="text"
                  onClick={() => {
                    setImgUp(undefined);
                    setImgView(undefined);
                  }}
                >
                  Delete
                </Button>
              </Space>
              <Typography.Text
                style={{
                  marginTop: '18px',
                }}
              >
                If the image is not uploaded it will be the default image
              </Typography.Text>
            </div>
          </Space>
        </Form.Item>
        <Form.Item
          style={{
            marginTop: '24px',
          }}
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select role!' }]}
          requiredMark="optional"
        >
          <Select
            placeholder="Select role"
            style={{ width: 250 }}
          // onChange={(v) => console.log(v)}
          >
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="finance">Finance</Select.Option>
            <Select.Option value="technician">Technician</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          style={{
            marginTop: '24px',
          }}
          label="Full Name"
          name="name"
          rules={[{ required: true, message: 'Please input full name!' }]}
          requiredMark="optional"
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          style={{
            marginTop: '24px',
          }}
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input email!', type: 'email' }]}
          requiredMark="optional"
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input Address!' }]}
          requiredMark="optional"
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input password!' }]}
              requiredMark="optional"
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Retype Password"
              name="confirmPassword"
              requiredMark="optional"
              rules={[
                { required: true, message: 'Please input retype Password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

