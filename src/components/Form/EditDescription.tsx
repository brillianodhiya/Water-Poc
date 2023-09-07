/* eslint-disable react-hooks/exhaustive-deps */
import { ApiSetDescription } from '@/services/nebula/device';
import { Form, Input, Modal, Spin } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react'; // importing FunctionComponent

type EditDescriptionTypes = {
  devEui: string;
  description: string;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  device_id: number;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const EditDescription: FunctionComponent<EditDescriptionTypes> = ({
  devEui,
  description,
  onOk,
  onCancel,
  open,
  device_id,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    form.setFields([
      {
        name: 'description',
        value: description,
      },
    ]);
  }, [open, description]);

  const onFinish = async (values: any) => {
    console.log(values);

    setLoading(true);
    const d = await ApiSetDescription({
      device_id: device_id,
      description: values.description,
    });
    if (!d.error) {
      setLoading(false);
      Modal.success({
        content: 'Success Edit Description ' + devEui + 'to ' + values.description,
        onOk: () => {
          onOk();
        },
      });
    } else {
      setLoading(false);
      // message.error(d.message);
    }
  };

  return (
    <Modal
      title={'Edit Description ' + devEui}
      open={open}
      onOk={form.submit}
      onCancel={onCancel}
      okText="Save"
    >
      <Spin spinning={loading}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Description" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
