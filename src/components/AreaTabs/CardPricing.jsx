import { Button, Card, Col, Form, InputNumber, Row, Spin, Typography, notification } from 'antd';
import React from 'react';
import api from '../../../config/axiosConfig';

const CardPricing = (props) => {
  const {
    title,
    defaultData,
    typeId,
    is_member,
    member_id,
    getPricingPostpaid,
    disabled,
    area_id,
    loading,
    setLoading,
  } = props;

  const [isEdit, setIsEdit] = React.useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Received values of form: ', values);
    if (isEdit) {
      setLoading(true);

      // props.onOk(props.devEui, values.pulse, 0);
      api({
        url: '/area/setting/pricing',

        method: 'POST',
        data: {
          is_member: is_member,
          type_id: typeId,
          parameter_1: values.parameter_1,
          price_1: values.price_1,
          parameter_2: values.parameter_2,
          price_2: values.price_2,
          parameter_3: values.parameter_3,
          price_3: values.price_3,
          member_id: member_id,
          area_id: area_id,
        },
      })
        .then((ok) => {
          getPricingPostpaid();
          setLoading(false);
          setIsEdit(false);
        })
        .catch((err) => {
          notification.error({
            message: err.response.data.message,
          });
        });
    } else {
      setIsEdit(true);
    }
  };

  // console.log(form, "FORM");

  const setFields = () => {
    form.setFields([
      {
        name: 'parameter_1',
        value: defaultData.parameter_1,
      },
      {
        name: 'parameter_2',
        value: defaultData.parameter_2,
      },
      {
        name: 'parameter_3',
        value: defaultData.parameter_3,
      },
      {
        name: 'price_1',
        value: defaultData.price_1,
      },
      {
        name: 'price_2',
        value: defaultData.price_2,
      },
      {
        name: 'price_3',
        value: defaultData.price_3,
      },
    ]);
  };

  React.useEffect(() => {
    setFields();
  }, []);

  return (
    <Card
      style={{
        borderRadius: '8px',
      }}
      bodyStyle={{
        padding: '12px 16px',
      }}
    >
      <div>
        <Spin spinning={loading}>
          <Form form={form} name={title} onFinish={handleSubmit} layout="vertical">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      marginTop: '4px',
                    }}
                  >
                    {title}
                  </Typography>
                  {disabled ? null : (
                    <Button type="link" size="large" htmlType="submit">
                      {isEdit ? 'Save' : 'Edit'}
                    </Button>
                  )}
                </div>
              </Col>
              <Col span={8}>
                <Form.Item label="Parameter 1" name={'parameter_1'} required>
                  <InputNumber
                    //   size={"large"}
                    placeholder="Input"
                    style={{ width: '100%' }}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                    addOnBefore={'<'}
                    onChange={(e) =>
                      form.setFields([
                        {
                          name: 'parameter_2',
                          value: e,
                        },
                      ])
                    }
                  />
                </Form.Item>
                <Form.Item label="Price" name={'price_1'} required>
                  <InputNumber
                    //   size={"large"}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                    placeholder="Input"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col
                span={8}
                style={{
                  borderLeft: '1px solid #0000000F',
                  borderRight: '1px solid #0000000F',
                }}
              >
                <Form.Item label="Parameter 2" name={'parameter_2'} required>
                  <InputNumber
                    //   size={"large"}
                    placeholder="Input"
                    style={{ width: '100%' }}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                    addOnBefore={'>='}
                    onChange={(e) =>
                      form.setFields([
                        {
                          name: 'parameter_1',
                          value: e,
                        },
                      ])
                    }
                  />
                </Form.Item>
                <Form.Item label="Price" name={'price_2'} required>
                  <InputNumber
                    //   size={"large"}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                    placeholder="Input"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Parameter 3" name={'parameter_3'} required>
                  <InputNumber
                    //   size={"large"}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                    addOnBefore={'>='}
                    placeholder="Input"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
                <Form.Item label="Price" name={'price_3'} required>
                  <InputNumber
                    //   size={"large"}
                    placeholder="Input"
                    style={{ width: '100%' }}
                    className={!isEdit ? 'edit-to-text' : ''}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Spin>
      </div>
    </Card>
  );
};

export default CardPricing;
