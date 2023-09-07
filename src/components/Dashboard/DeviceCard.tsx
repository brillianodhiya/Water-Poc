import { DownOutlined, UpOutlined, WifiOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Avatar, Button, Card, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { DeviceMediumIcon } from '../Icons/DeviceIcon';
import { GatewayIcon } from '../Icons/GatewayIcon';
import { OfflineIcon } from '../Icons/OfflineIcon';

type Props = {
  collapseDevice: boolean;
  setCollapseDevice: (val: any) => void;
  totalDevice: number;
  deviceOnline: number;
  deviceOffline: number;
};

export const DeviceCard: React.FC<Props> = ({
  collapseDevice,
  setCollapseDevice,
  totalDevice,
  deviceOnline,
  deviceOffline,
}) => {
  return (
    <Card
      style={{
        borderRadius: 8,
        borderTop: '1px solid #1890FF',
        boxShadow:
          'inset -1px 0px 0px #F0F0F0, inset 0px -1px 0px #F0F0F0, inset 1px 0px 0px #F0F0F0',
      }}
    >
      <Row gutter={[16, 16]} wrap>
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
                background: '#1890FF',
                padding: '8px 4px',
                borderRadius: 999,
                width: 36,
                height: 36,
                textAlign: 'center',
                boxShadow:
                  '0px 100px 80px rgba(24, 144, 255, 0.27), 0px 12.5216px 10.0172px rgba(24, 144, 255, 0.135), 0px 6.6501px 5.32008px rgba(24, 144, 255, 0.109051), 0px 2.76726px 2.21381px rgba(24, 144, 255, 0.0759093)',
              }}
            >
              <DeviceMediumIcon />
            </div>
            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Devices
            </Typography>
          </Space>
          <Button
            icon={
              !collapseDevice ? (
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
            onClick={() => setCollapseDevice(!collapseDevice)}
          />
        </Col>
        <Col
          span={24}
          className={collapseDevice ? 'collabsible active' : 'collabsible'}
          style={{
            overflow: collapseDevice ? 'visible' : 'hidden',
          }}
        >
          <Row gutter={[24, 16]} wrap>
            <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
              <Space size={'middle'}>
                <Avatar
                  src={<GatewayIcon />}
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#1890FF',
                    padding: '6px 4px',
                    boxShadow:
                      ' 0px 100px 80px rgba(47, 84, 235, 0.07), 0px 41.7776px 33.4221px rgba(47, 84, 235, 0.0668802), 0px 22.3363px 17.869px rgba(47, 84, 235, 0.0637831), 0px 12.5216px 10.0172px rgba(47, 84, 235, 0.0591401), 0px 6.6501px 5.32008px rgba(47, 84, 235, 0.0516068), 0px 2.76726px 2.21381px rgba(47, 84, 235, 0.0382912)',
                  }}
                />
                <Space direction="vertical" align="center" size={'small'}>
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {totalDevice}
                  </Typography>
                  <Typography
                    style={{
                      marginTop: -5,
                      padding: 0,
                    }}
                  >
                    Total Device
                  </Typography>
                </Space>
              </Space>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
              <Space size={'middle'}>
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #52C41A',
                    boxShadow:
                      '0px 100px 80px rgba(82, 196, 26, 0.07), 0px 41.7776px 33.4221px rgba(82, 196, 26, 0.0668802), 0px 22.3363px 17.869px rgba(82, 196, 26, 0.0637831), 0px 12.5216px 10.0172px rgba(82, 196, 26, 0.0591401), 0px 6.6501px 5.32008px rgba(82, 196, 26, 0.0516068), 0px 2.76726px 2.21381px rgba(82, 196, 26, 0.0382912)',
                  }}
                >
                  <WifiOutlined style={{ fontSize: 30, color: '#52C41A' }} />
                </Avatar>
                <Space direction="vertical" align="center" size={'small'}>
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {deviceOnline}
                  </Typography>
                  <Typography
                    style={{
                      marginTop: -5,
                      padding: 0,
                    }}
                  >
                    Online
                  </Typography>
                </Space>
              </Space>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
              <Space size={'middle'}>
                <Avatar
                  size={{
                    xs: 54,
                    sm: 54,
                    md: 54,
                    lg: 64,
                    xl: 64,
                    xxl: 64,
                  }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '5px solid #FF4D4F',
                    boxShadow:
                      '0px 100px 80px rgba(255, 77, 79, 0.07), 0px 41.7776px 33.4221px rgba(255, 77, 79, 0.0668802), 0px 22.3363px 17.869px rgba(255, 77, 79, 0.0637831), 0px 12.5216px 10.0172px rgba(255, 77, 79, 0.0591401), 0px 6.6501px 5.32008px rgba(255, 77, 79, 0.0516068), 0px 2.76726px 2.21381px rgba(255, 77, 79, 0.0382912)',
                  }}
                >
                  <OfflineIcon style={{ fontSize: 34, color: '#FF4D4F' }} />
                </Avatar>
                <Space direction="vertical" align="center" size={'small'}>
                  <Typography
                    style={{
                      fontSize: 32,
                      fontWeight: 'bold',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {deviceOffline}
                  </Typography>
                  <Typography
                    style={{
                      marginTop: -5,
                      padding: 0,
                      color: 'rgba(0, 0, 0, 0.65)',
                    }}
                  >
                    Offline
                  </Typography>
                </Space>
              </Space>
            </Col>
          </Row>
          <Col span={24}>
            <Typography.Link
              style={{
                float: 'right',
              }}
              onClick={() => history.push('/dashboard/list_device')}
            >
              View detail
            </Typography.Link>
          </Col>
        </Col>
      </Row>
    </Card>
  );
};
