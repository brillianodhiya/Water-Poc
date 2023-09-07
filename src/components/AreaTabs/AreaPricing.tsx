import { Card, Row, Col, Typography, Space, Form, InputNumber, Modal } from 'antd';
import React from 'react';
import { WeCurrency } from '../Formatter/config.currency';
import { ApiEditAreaPricing } from '@/services/nebula/area';

const AreaPricing: React.FC<{
  dataArea: any;
  getData: () => void;
}> = ({ dataArea, getData }) => {
  const [form] = Form.useForm();
  const [areaPricing, setAreaPricing] = React.useState<
    {
      area_id: number;
      createdAt?: string;
      device_type: string;
      id?: number;
      price_per_device_type: number;
      updatedAt?: string;
      icon: string;
      open?: boolean;
    }[]
  >(dataArea.Nebula_Area_Pricings);

  React.useEffect(() => {
    setAreaPricing(dataArea.Nebula_Area_Pricings);
  }, [dataArea]);

  const onFinish = async (values: any) => {
    console.log(values);

    const data = await ApiEditAreaPricing(areaPricing);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          getData();
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
  };

  return (
    <Form name="add-area" layout="vertical" form={form} onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        {areaPricing.map((val, idx) => {
          return (
            <Col key={val.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <img src={val.icon} alt={val.device_type} width={24} />
                      <Typography>{val.device_type}</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    {val.open ? (
                      <Typography.Link
                        onClick={() => {
                          form.submit();
                        }}
                      >
                        Save
                      </Typography.Link>
                    ) : (
                      <Typography.Link
                        onClick={() => {
                          const newArr = [...areaPricing];
                          newArr[idx].open = true;
                          setAreaPricing(newArr);

                          form.setFields([
                            {
                              name: val.device_type + '_amount',
                              value: val.price_per_device_type,
                            },
                          ]);
                        }}
                      >
                        Edit
                      </Typography.Link>
                    )}
                  </Col>
                  <Col
                    span={24}
                    style={{
                      marginTop: '12px',
                    }}
                  >
                    <Typography.Text type="secondary">
                      Price 1 {val.device_type.toLowerCase().includes('electricity') ? 'Kwh' : 'm3'}
                    </Typography.Text>
                    {val.open ? (
                      <Form.Item
                        name={val.device_type + '_amount'}
                        rules={[
                          {
                            required: true,
                          },
                          {
                            type: 'number',
                            message: 'price must be a number',
                          },
                        ]}
                      >
                        <InputNumber
                          onChange={(value) => {
                            const newArr = [...areaPricing];
                            newArr[idx].price_per_device_type = value;
                            setAreaPricing(newArr);
                          }}
                          style={{ width: '200px' }}
                          placeholder={'Input Nominal'}
                          formatter={(value) => `Rp.${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                          parser={(value: any) => value.replace(/(Rp.)\s?|(\.*)/g, '')}
                        />
                      </Form.Item>
                    ) : (
                      <Typography.Paragraph>
                        {WeCurrency(val.price_per_device_type)}
                      </Typography.Paragraph>
                    )}
                  </Col>
                  {/* <Col span={24}>
                  <Typography.Text type="secondary">ERP Item</Typography.Text>
                  <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                </Col> */}
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default AreaPricing;
