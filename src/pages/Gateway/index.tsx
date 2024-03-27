import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';

import ListGateway from '../Device/Gateway';
import { PlusOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const SettingsManagement: React.FC = () => {
  return (
    <PageContainer
      title="Gateway"
      content="This is a gateway management system for IKI's IOT platform."
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>IKI IoT Platform | Gateway</title>
        <link rel="icon" href="/iki-logo-no-text.png" type="image/x-icon" />
      </Helmet>
      <Row gutter={[8, 8]}>
        <Col
          xxl={24}
          xl={24}
          md={24}
          sm={24}
          xs={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            onClick={() => {
              history.push('/gateway/create');
            }}
          >
            <PlusOutlined /> Add Gateway
          </Button>
        </Col>
        <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
          <ListGateway isFocused={true} counter={1} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default SettingsManagement;
