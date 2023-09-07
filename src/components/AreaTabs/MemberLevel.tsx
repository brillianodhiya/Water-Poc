import { Card, Row, Col, Typography, Space, Button, Input, Divider } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react';

type Props = {};

const MemberLevel: FunctionComponent<Props> = () => {
  return (
    <Card
      style={{
        borderRadius: 8,
        maxWidth: 350,
      }}
    >
      <Space size={'large'}>
        <Input placeholder="Input Name" style={{ borderRadius: 6 }} />
        <Button type="primary" shape="round">
          Save
        </Button>
      </Space>
      <Divider />
      <div>
        <Typography.Paragraph strong>List Member Level</Typography.Paragraph>

        <Row justify={'space-between'} gutter={[16, 16]}>
          {[...Array(2)].map(() => {
            return (
              <>
                <Col span={18}>
                  <Typography>Pelanggan </Typography>
                </Col>
                <Col span={6}>
                  <Typography.Link>Edit</Typography.Link>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </Card>
  );
};

export default MemberLevel;
