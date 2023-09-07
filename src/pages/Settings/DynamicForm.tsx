/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Button,
  Form,
  Grid,
  InputNumber,
  Select,
  Space,

  // Typography
} from 'antd';
import { useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

type ViewLogTypes = {
  options: any[];
  settings: any[];
  onFinish: (values: any) => void;
  minLabel: string;
  maxLabel: string;
  unit: string;
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
};

export const DynamicForm: FunctionComponent<ViewLogTypes> = ({
  settings,
  options = [],
  onFinish,
  minLabel,
  maxLabel,
  unit,
  isEdit,
  setIsEdit,
}) => {
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  useEffect(() => {
    if (settings) {
      const arr: { device_id: any; max_usage: any; min_usage: any }[] = [];
      settings.map((value) => {
        arr.push({
          device_id: value.device_id,
          max_usage: value.max_usage,
          min_usage: value.min_usage,
        });
      });

      // console.log(settings, 'SDS');
      // console.log(arr, 'ARR');
      // form.setFields(arr);
      form.setFieldsValue({
        device: arr,
      });
    }
  }, [settings]);

  const generateSize = () => {
    if (screens.xxl) {
      return '360px';
    } else if (screens.xl) {
      return '360px';
    } else if (screens.lg) {
      return '600px';
    } else if (screens.md) {
      return '600px';
    } else {
      return '360px';
    }
  };

  const sizeW = generateSize();

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        name="dynamic_form_complex"
        onFinish={onFinish}
        autoComplete="off"
      >
        <div
          style={{
            maxHeight: isEdit ? 'unset' : '160px',
            overflow: 'scroll',
          }}
        >
          <Form.List name="device">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => {
                  console.log(field.name, 'NAME');
                  return (
                    <Space key={field.key} align="center" wrap>
                      <Form.Item
                        {...field}
                        label="Dev Eui"
                        name={[field.name, 'device_id']}
                        rules={[{ required: true, message: 'Please Select Dev Eui' }]}
                      >
                        <Select
                          style={{ width: sizeW }}
                          options={options}
                          filterOption={(input, option: any) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                          }
                          showSearch
                          optionFilterProp="children"
                          disabled={!isEdit}
                          allowClear
                          dropdownMatchSelectWidth
                          placeholder="Select Device"
                        />
                      </Form.Item>

                      <Form.Item
                        {...field}
                        label={minLabel}
                        name={[field.name, 'min_usage']}
                        initialValue={0}
                        rules={[{ required: true, message: 'Please Enter Min. Value' }]}
                      >
                        <InputNumber min={0} addonAfter={unit} disabled={!isEdit} />
                      </Form.Item>

                      <Form.Item
                        {...field}
                        label={maxLabel}
                        name={[field.name, 'max_usage']}
                        initialValue={0}
                        rules={[{ required: true, message: 'Please Enter Max. Value' }]}
                      >
                        <InputNumber min={0} addonAfter={unit} disabled={!isEdit} />
                      </Form.Item>
                      {isEdit ? <MinusCircleOutlined onClick={() => remove(field.name)} /> : null}
                    </Space>
                  );
                })}

                {isEdit ? (
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add Device
                    </Button>
                  </Form.Item>
                ) : null}
              </>
            )}
          </Form.List>
        </div>
        <Form.Item
          style={{
            textAlign: 'right',
            borderTop: isEdit ? 'unset' : '1px solid rgba(0, 0, 0, 0.2)',
            paddingTop: isEdit ? 'unset' : '12px',
          }}
        >
          {!isEdit ? (
            <Button
              type="link"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </Button>
          ) : (
            <Space>
              <Button
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" onClick={form.submit}>
                Save
              </Button>
            </Space>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
