import Footer from '@/components/Footer';
import { Button, Checkbox, Col, Divider, Form, Input, Row, Typography } from 'antd';

import React from 'react';
import styles from './index.less';

const Register: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {/* {SelectLang && <SelectLang />} */}
      </div>
      <div className={styles.content}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img alt="logo" src="/nebula.svg" />
            </div>
            <Row gutter={[24, 16]}>
              <Col span={12}>
                <Typography.Title style={{ color: '#42505C' }}>
                  Input your information
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography style={{ maxWidth: 300 }}>
                  We need you to help us with some basic information for your account creation. Here
                  are our <Typography.Link>terms and conditins.</Typography.Link> Please read them
                  carefully. We are GDRP compliiant
                </Typography>
              </Col>
            </Row>
            <Form layout="vertical" style={{ maxWidth: 760 }}>
              <Row justify={'space-between'} gutter={[24, 8]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Fullname"
                    name="fullname"
                    rules={[{ required: true, message: 'Please input Full name!' }]}
                    requiredMark="optional"
                  >
                    <Input placeholder="Your Name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input Email!', type: 'email' }]}
                    requiredMark="optional"
                  >
                    <Input placeholder="Enter Your Email" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item label="Company (Optional)" name="company">
                    <Input placeholder="Company Name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      { required: true, message: 'Please input Phone!' },
                      {
                        pattern: /^(\+62|62|0)8[1-9][0-9]{6,13}$/g,
                        message: 'Phone not valid!',
                      },
                    ]}
                    requiredMark="optional"
                  >
                    <Input placeholder="Phone Number" type="number" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: false, message: 'Please input Address!' }]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Autosize height based on content lines"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Divider />
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Password"
                    name="Password"
                    rules={[{ required: false, message: 'Please input Password!' }]}
                  >
                    <Input placeholder="Password" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      { required: false, message: 'Please confirm password!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('Password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Passwords not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input placeholder="Confirm Password" size="large" />
                  </Form.Item>
                </Col>
                <Divider />
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>
                    I agree with <Typography.Link>terms and conditins.</Typography.Link>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" shape="round" size="large" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
