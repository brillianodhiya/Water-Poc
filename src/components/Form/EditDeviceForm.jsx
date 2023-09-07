import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Modal, Space, Spin, Typography, Upload, Input } from 'antd';
import React from 'react';
import api from '../../../config/axiosConfig';

const EditDeviceForm = ({ title, open, onOk, onCancel, dataEdit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {

    if (open) {
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
        {
          name: 'tenant_name',
          value: dataEdit.name
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
          content: 'Success Edit Device...',
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
      <Form form={form} name="edit-device" onFinish={onFinish} layout="vertical">
        <Form.Item
          style={{
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
        <Form.Item
          style={{
            marginTop: '24px',
          }}
          label="Tenant Name"
          name="tenant_name"
          rules={[{ required: true, message: 'Please input tenant name!' }]}
          requiredMark="optional"
        >
          <Input placeholder="Tenant Name" className="border-bottom" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditDeviceForm;
