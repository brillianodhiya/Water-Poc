/* eslint-disable react-hooks/exhaustive-deps */
import { ApiSetInterval } from '@/services/nebula/device';
import { Form, InputNumber, Modal, Spin } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react'; // importing FunctionComponent

type EditIntervalTypes = {
  devEui: string;
  interval: string;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const EditInterval: FunctionComponent<EditIntervalTypes> = ({
  devEui,
  interval,
  onOk,
  onCancel,
  open,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    form.setFields([
      {
        name: 'interval',
        value: parseInt(interval),
      },
    ]);
  }, [open, interval]);

  const onFinish = async (values: any) => {
    console.log(values);

    setLoading(true);
    const d = await ApiSetInterval({
      devEui: devEui,
      interval: values.interval,
    });
    if (!d.error) {
      setLoading(false);
      Modal.success({
        content: 'Success Edit Interval ' + devEui + 'to ' + values.interval,
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
      title={'Edit Interval ' + devEui}
      open={open}
      onOk={form.submit}
      onCancel={onCancel}
      okText="Save"
    >
      <Spin spinning={loading}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="interval"
            label="Interval"
            rules={[
              { required: true },
              {
                min: 5,
                message: 'Min. 5',
                type: 'number',
              },
            ]}
          >
            <InputNumber placeholder="interval" addonAfter="Min" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};
