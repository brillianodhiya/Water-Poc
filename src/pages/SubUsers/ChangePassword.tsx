import {
  ChangeUserAreaPassword,
  ChangeUserCompanyPassword,
  ChangeUserTenantPassword,
} from '@/services/nebula/user';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation } from '@umijs/max';
import { Button, Col, Form, Input, Modal, Row, Space, Spin, Typography } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';
type Props = {};
type LocationStateTypes = {
  user_id: number;
  type: string;
};
const ChangePassword: React.FC<Props> = ({}) => {
  const [form] = Form.useForm();
  const searchParams = useLocation();
  const state = searchParams.state as LocationStateTypes;
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!state.user_id) {
      history.push('/users/' + state.type);
    }
  }, [state.user_id]);

  const onFinish = async (value: any) => {
    console.log(value);
    setLoading(true);
    let data = await ChangeUserCompanyPassword({
      password: value.newPassword,
      id: state.user_id,
    });
    if (state.type == 'compnay') {
      data = await ChangeUserCompanyPassword({
        password: value.newPassword,
        id: state.user_id,
      });
    } else if (state.type == 'area') {
      data = await ChangeUserAreaPassword({
        password: value.newPassword,
        id: state.user_id,
      });
    } else if (state.type == 'tenant') {
      data = await ChangeUserTenantPassword({
        password: value.newPassword,
        id: state.user_id,
      });
    }
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          history.back();
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
      title={' '}
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | User</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <div
        style={{
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        <Spin spinning={loading}>
          <Form
            form={form}
            name="add-area"
            onFinish={onFinish}
            style={{ width: 500, margin: '0px auto', paddingTop: 100 }}
          >
            <Typography.Title
              level={3}
              style={{
                paddingBottom: 40,
              }}
            >
              Change Password
            </Typography.Title>
            <Row gutter={16}>
              <Col span={12}>
                <Typography>New Password</Typography>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="newPassword"
                  rules={[{ required: true, message: 'Please input password!' }]}
                  requiredMark="optional"
                >
                  <Input.Password placeholder="Input Password" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Typography>Retype Password</Typography>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="retypePassword"
                  requiredMark="optional"
                  rules={[
                    { required: true, message: 'Please input password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Retype Password" />
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
                    <Button type="default" htmlType="button" onClick={() => history.back()}>
                      Cancel
                    </Button>
                  </Form.Item>
                </Space>
              </Col>
            </Row>
          </Form>
        </Spin>
      </div>
    </PageContainer>
  );
};

export default ChangePassword;
