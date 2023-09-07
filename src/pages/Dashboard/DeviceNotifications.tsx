import { LowBatteryBigIcon } from '@/components/Icons/Battery';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Row,
  Segmented,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';
type Props = {};

const DeviceNotifications: React.FC = (props: Props) => {
  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      style={{
        backgroundColor: 'white',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      title={
        <Button type="link" onClick={() => history.push('/dashboard')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/dashboard')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Device Notifications</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>View All Category</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>BITA | Dashboard </title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Helmet>
      <Divider style={{ marginTop: 0, padding: 0 }} />
      <Row gutter={[16, 16]} justify="start">
        <Col
          span={4}
          xxl={{
            offset: 2,
          }}
        >
          <Select
            size="middle"
            defaultValue="all"
            style={{ width: '100%' }}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'all', label: 'All Area' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </Col>
        <Col span={18}>
          <Segmented
            options={[
              {
                label: (
                  <Typography
                    style={{
                      padding: '0px 20px',
                    }}
                  >
                    All
                  </Typography>
                ),
                value: 'All',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#FF85C0',
                      }}
                    />
                    <Typography>Low Battery</Typography>
                  </Space>
                ),
                value: 'Low Battery',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#13C2C2',
                      }}
                    />
                    <Typography>Anomali No Usage</Typography>
                  </Space>
                ),
                value: 'Anomali No Usage',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#2F54EB',
                      }}
                    />
                    <Typography>Anomali Gas Meter</Typography>
                  </Space>
                ),
                value: 'Anomali Gas Meter',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#A0D911',
                      }}
                    />
                    <Typography>Alert Pressure</Typography>
                  </Space>
                ),
                value: 'Alert Pressure',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#722ED1',
                      }}
                    />
                    <Typography>Anomali Closing Time</Typography>
                  </Space>
                ),
                value: 'Anomali Closing Time',
              },
              {
                label: (
                  <Space>
                    <Avatar
                      size={6}
                      style={{
                        background: '#1890FF',
                      }}
                    />
                    <Typography>Error devices</Typography>
                  </Space>
                ),
                value: 'Error devices',
              },
            ]}
            onResize={undefined}
            onResizeCapture={undefined}
            style={{
              // marginTop: 20,
              // marginBottom: 20,
              padding: 4,
              backgroundImage:
                'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
            }}
          />
        </Col>
        <Col
          span={24}
          xxl={{
            span: 20,
            push: 2,
          }}
        >
          <Space align="start">
            <LowBatteryBigIcon />
            <Row gutter={[16, 4]}>
              <Col
                span={22}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Space size={'large'} align="baseline">
                  <Typography.Title level={4}>Low Battery</Typography.Title>
                  <Tag
                    style={{
                      backgroundColor: '#FF4D4F',
                      border: '1px solid #FF4D4F',
                      color: '#fff',
                      borderRadius: 100,
                      width: 91,
                      height: 24,
                      textAlign: 'center',
                      fontSize: 14,
                      padding: '1px 0px',
                    }}
                  >
                    15%
                  </Tag>
                </Space>
                <Typography
                  style={{
                    color: 'rgba(0, 0, 0, 0.45)',
                  }}
                >
                  07-12-2022
                </Typography>
              </Col>
              <Col span={3}>
                <Typography>Device Type</Typography>
              </Col>
              <Col span={3}>
                <Typography>: Water Level</Typography>
              </Col>
              <Col span={3}>
                <Typography>Dev Eui</Typography>
              </Col>
              <Col span={13}>
                <Typography>: 397293972939729</Typography>
              </Col>
              <Col span={3}>
                <Typography>Area Name</Typography>
              </Col>
              <Col span={3}>
                <Typography>: Reilly</Typography>
              </Col>
              <Col span={3}>
                <Typography>Last Name</Typography>
              </Col>
              <Col span={13}>
                <Typography>: Nov 07 2022 17:52:06</Typography>
              </Col>
              <Col span={3}>
                <Typography>Tenant Name</Typography>
              </Col>
              <Col span={3}>
                <Typography>: Reilly, Fahey and Mayer</Typography>
              </Col>
              <Col span={3}>
                <Typography>Status Valve</Typography>
              </Col>
              <Col span={13}>
                <Tag
                  style={{
                    backgroundColor: '#52C41A',
                    color: '#fff',
                    borderRadius: 100,
                    padding: '0px 6px',
                    fontSize: 9,
                    border: '1px solid #52C41A',
                    width: 40,
                    textAlign: 'center',
                  }}
                >
                  Open
                </Tag>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default DeviceNotifications;
