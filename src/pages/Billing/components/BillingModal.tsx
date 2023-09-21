import { Col, Form, Input, Modal, Row, Space, Typography } from 'antd';
import React from 'react';

type Props = {
  title: string;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
};

const BillingModal = (props: Props) => {
  const [form] = Form.useForm();
  const onFinish = () => {};
  let emails = [
    'john.doe@example.com',
    'jane.doe@example.com',
    'alex.smith@example.com',
    'emily.nguyen@example.com',
    'david.lee@example.com',
  ];

  return (
    <Modal
      title={
        <Typography style={{ fontSize: 16 }}>
          Send to Customers <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        </Typography>
      }
      open={props.open}
      onOk={() => {}}
      onCancel={() => {
        props.onCancel();
      }}
      width={1200}
    >
      <Form form={form} name="add" onFinish={onFinish} layout="vertical">
        <div
          style={{
            padding: 24,
            marginBottom: 20,
            border: '1px solid  rgba(0, 0, 0, 0.06)',
          }}
        >
          <Row justify={'space-between'}>
            <Col xxl={14} sm={14} xs={24}>
              <Row>
                <Col span={4}>
                  <Typography>No Faktur</Typography>
                </Col>
                <Col span={20}>
                  <Typography style={{ fontSize: 16 }}>
                    : IKI.__DEV__.1658-INV-011122-1658G
                  </Typography>
                </Col>
                <Col span={4}>
                  <Typography>Tanggal Faktur</Typography>
                </Col>
                <Col span={20}>
                  <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                    : Nov 12 2020
                  </Typography>
                </Col>
                <Col span={4}>
                  <Typography>Due Date</Typography>
                </Col>
                <Col span={20}>
                  <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                    : Nov 12 2020
                  </Typography>
                </Col>
                <Col span={4}>
                  <Typography>No eFaktur</Typography>
                </Col>
                <Col span={20}>
                  <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                    : 0eee3ed8-2110-4d9c-b790-593bdb30d3b7
                  </Typography>
                </Col>
              </Row>
            </Col>
            <Col xxl={10} sm={10} xs={24}>
              <Typography.Text strong>Catatan Invoice</Typography.Text>
              <Typography.Paragraph style={{ maxWidth: 400 }}>
                Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco
              </Typography.Paragraph>
            </Col>
          </Row>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Typography>Email</Typography>
            <Row
              style={{
                border: '1px solid rgba(0, 0, 0, 0.06)',
                padding: '24px 16px',
                marginTop: '20px',
              }}
              gutter={[18, 16]}
            >
              {emails.map((e) => {
                return (
                  <Col key={e}>
                    <Typography.Link
                      style={{
                        fontSize: 16,
                        border: '1px solid #91D5FF',
                        padding: '4px 10px',
                      }}
                    >
                      {e} <span style={{ color: ' rgba(0, 0, 0, 0.45)' }}>x</span>
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={24}>
            <Typography>CC</Typography>
            <Row
              style={{
                border: '1px solid rgba(0, 0, 0, 0.06)',
                padding: '24px 16px',
                marginTop: '20px',
              }}
              gutter={[18, 16]}
            >
              {emails.map((e) => {
                return (
                  <Col>
                    <Typography.Link
                      style={{
                        fontSize: 16,
                        border: '1px solid #91D5FF',
                        padding: '4px 10px',
                      }}
                    >
                      {e} <span style={{ color: ' rgba(0, 0, 0, 0.45)' }}>x</span>
                    </Typography.Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Catatan Email"
              name="email_note"
              rules={[{ required: true, message: 'Please input Catatan Email!' }]}
              requiredMark="optional"
            >
              <Input.TextArea placeholder="Catatan Email" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Attach Invoice (Hasil Generate Invoice)"></Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default BillingModal;
