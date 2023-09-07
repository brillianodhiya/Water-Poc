import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { DonutChart } from '../Chart/Donut';
import { NotificationIcon } from '../Icons/Notifications';
import { DrawerNotifications } from './DrawerNotifications';

type Props = {
  collapseNotification: boolean;
  setCollapseNotification: (val: any) => void;
};

export const NotificationCard: React.FC<Props> = ({
  collapseNotification,
  setCollapseNotification,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card
      style={{
        borderRadius: 16,
        borderTop: '1px solid #FA8C16',
        boxShadow:
          'inset -1px 0px 0px #F0F0F0, inset 0px -1px 0px #F0F0F0, inset 1px 0px 0px #F0F0F0',
      }}
    >
      <DrawerNotifications type="" open={open} setOpen={setOpen} />
      <Row gutter={[16, 16]}>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Space>
            <div
              style={{
                background: '#FA8C16',
                padding: '8px 4px',
                borderRadius: 999,
                width: 36,
                height: 36,
                textAlign: 'center',
                boxShadow:
                  '0px 100px 80px rgba(250, 140, 22, 0.27), 0px 12.5216px 10.0172px rgba(250, 140, 22, 0.135), 0px 6.6501px 5.32008px rgba(250, 140, 22, 0.109051), 0px 2.76726px 2.21381px rgba(250, 140, 22, 0.0759093)',
              }}
            >
              <NotificationIcon />
            </div>
            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Notifications
            </Typography>
          </Space>
          <Button
            icon={
              collapseNotification ? (
                <DownOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
              ) : (
                <UpOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
              )
            }
            size={'small'}
            style={{
              background: '#E6F7FF',
              border: '1px solid #E6F7FF',
            }}
            onClick={() => setCollapseNotification(!collapseNotification)}
          />
        </Col>
        <Col
          span={24}
          className={collapseNotification ? 'collabsible' : 'collabsible active'}
          style={{
            overflow: collapseNotification ? 'hidden' : 'visible',
          }}
        >
          <Row
            gutter={[16, 16]}
            style={{
              padding: 20,
            }}
          >
            <Col span={24}>
              <DonutChart />
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#FF85C0',
                  }}
                />
                <Typography>Low Battery</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                29
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link onClick={() => setOpen(true)}>View details</Typography.Link>
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#13C2C2',
                  }}
                />
                <Typography>Anomali No Usage</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                547
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link>View details</Typography.Link>
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#2F54EB',
                  }}
                />
                <Typography>Anomali Gas Meter</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                3219
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link>View details</Typography.Link>
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#A0D911',
                  }}
                />
                <Typography>Alert Pressure</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                38
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link>View details</Typography.Link>
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#722ED1',
                  }}
                />
                <Typography>Anomali Closing Time</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                444
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link>View details</Typography.Link>
            </Col>
            <Col span={12}>
              <Space align="center">
                <Avatar
                  size={16}
                  style={{
                    backgroundColor: '#1890FF',
                  }}
                />
                <Typography>Error Devices</Typography>
              </Space>
            </Col>
            <Col span={6}>
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
              >
                48355
              </Typography>
            </Col>
            <Col span={6}>
              <Typography.Link>View details</Typography.Link>
            </Col>
          </Row>
        </Col>
        <Col>
          {collapseNotification && (
            <Space direction="vertical">
              <Typography.Title level={1} style={{ fontWeight: 'bold' }}>
                52632
              </Typography.Title>
              <Typography>Total Notification</Typography>
            </Space>
          )}
        </Col>
      </Row>
    </Card>
  );
};
