// import { PageContainer } from '@ant-design/pro-components';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Card, Col, Divider, Row, Space, Tooltip, Typography } from 'antd';

import { history } from '@umijs/max';
import React from 'react';

const User: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  console.log('halaman user');
  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title="User Management"
      content="Management User from company, area and tenant."
    >
      {/* <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
      > */}
      <Divider />
      <Row gutter={[24, 24]}>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
          <Card
            style={{
              borderRadius: 8,
            }}
            actions={[
              <Space key={1} style={{ float: 'left', paddingLeft: 20 }}>
                <Avatar.Group
                  maxCount={6}
                  maxPopoverTrigger="click"
                  size={32}
                  maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                  </Tooltip>
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }}>+99</Avatar>
                </Avatar.Group>
              </Space>,
            ]}
          >
            <Typography.Title
              level={5}
              style={{
                cursor: 'pointer',
              }}
              onClick={() => history.push('/overview/user/company')}
            >
              Company
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Molestiae ut quis rerum est harum. Placeat quia unde iste ut odit. Voluptatem eius
              ipsum. Quia adipisci tempore laudantium minus corrupti omnis ut. Eos veniam minus et
              earum ex magni cupiditate eius.
            </Typography.Paragraph>
          </Card>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
          <Card
            style={{
              borderRadius: 8,
            }}
            actions={[
              <Space key={1} style={{ float: 'left', paddingLeft: 20 }}>
                <Avatar.Group
                  maxCount={6}
                  maxPopoverTrigger="click"
                  size={32}
                  maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                  </Tooltip>
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }}>+99</Avatar>
                </Avatar.Group>
              </Space>,
            ]}
          >
            <Typography.Title
              level={5}
              style={{
                cursor: 'pointer',
              }}
              onClick={() => history.push('/overview/user/area')}
            >
              Area
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Molestiae ut quis rerum est harum. Placeat quia unde iste ut odit. Voluptatem eius
              ipsum. Quia adipisci tempore laudantium minus corrupti omnis ut. Eos veniam minus et
              earum ex magni cupiditate eius.
            </Typography.Paragraph>
          </Card>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
          <Card
            style={{
              borderRadius: 8,
            }}
            actions={[
              <Space key={1} style={{ float: 'left', paddingLeft: 20 }}>
                <Avatar.Group
                  maxCount={6}
                  maxPopoverTrigger="click"
                  size={32}
                  maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                  </Tooltip>
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                  <Avatar style={{ backgroundColor: '#1890ff' }}>+99</Avatar>
                </Avatar.Group>
              </Space>,
            ]}
          >
            <Typography.Title
              level={5}
              style={{
                cursor: 'pointer',
              }}
              onClick={() => history.push('/overview/user/tenant')}
            >
              Tenant
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Molestiae ut quis rerum est harum. Placeat quia unde iste ut odit. Voluptatem eius
              ipsum. Quia adipisci tempore laudantium minus corrupti omnis ut. Eos veniam minus et
              earum ex magni cupiditate eius.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
      {/* </Card> */}
    </PageContainer>
  );
};

export default User;
