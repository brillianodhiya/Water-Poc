import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Modal, Space, Spin, Typography, Upload, Input } from 'antd';
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
export const EditCompanyForm = ({ title, open, onOk, onCancel, dataEdit }) => {
  const [form] = Form.useForm();
  const [imgUp, setImgUp] = React.useState(undefined);
  const [imgView, setImgView] = React.useState(undefined);
  const [loadingUploadImage, setLoadingUploadImage] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {

    if (open) {
      console.log(dataEdit)
      setImgView(dataEdit.photo);
      form.setFields([
        {
          name: 'name',
          value: dataEdit.pic_name
        },
        {
          name: 'phone',
          value: dataEdit.phone
        },
        {
          name: 'email',
          value: dataEdit.email
        },
        {
          name: 'area_name',
          value: dataEdit.area_name
        },
      ])
    }

  }, [open, dataEdit])


  const onFinish = (values) => {
    setLoading(true)

    api({

    }).then((res) => {
      if (res.data.responseCode == 200) {
        setLoading(false);
        Modal.success({
          content: 'Success Edit Company...',
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
      <Form form={form} name="edit-company" onFinish={onFinish} layout="vertical">
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
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
          requiredMark="optional"
        >
          <Input placeholder="Name" className="border-bottom" />
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
          <Input placeholder="Email" className="border-bottom" />
        </Form.Item>
        <Form.Item
          style={{
            marginTop: '24px',
          }}
          label="Phone"
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
          <Input placeholder="Phone" className="border-bottom" />
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
          <Input placeholder="Area Name" className="border-bottom" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

