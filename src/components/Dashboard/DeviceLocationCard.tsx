import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Card, Row, Col, Space, Typography, Button } from 'antd';
import React from 'react';
import { DeviceLocationIcon } from '../Icons/DeviceIcon';
import { MapAction } from '../Chart/MapAction';

type Props = {
  collapseLocation: boolean;
  setCollapseLocation: (val: any) => void;
};

export const DeviceLocationCard: React.FC<Props> = ({ collapseLocation, setCollapseLocation }) => {
  return (
    <Card
      style={{
        borderRadius: 8,
        borderTop: '1px solid #1890FF',
        boxShadow:
          'inset -1px 0px 0px #F0F0F0, inset 0px -1px 0px #F0F0F0, inset 1px 0px 0px #F0F0F0',
      }}
    >
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
              <DeviceLocationIcon />
            </div>
            <Typography
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Devices Location
            </Typography>
          </Space>
          <Button
            icon={
              !collapseLocation ? (
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
            onClick={() => setCollapseLocation(!collapseLocation)}
          />
        </Col>
        <Col
          span={24}
          className={collapseLocation ? 'collabsible active' : 'collabsible'}
          style={{
            overflow: collapseLocation ? 'visible' : 'hidden',
            paddingTop: '28px',
          }}
        >
          <div
            style={{
              opacity: !collapseLocation ? '0' : '1',
            }}
          >
            <MapAction
              loadingGtLamp={false}
              devices={[]}
              // gateway={[]}
              getDataCountMap={() => {}}
              // listrik={[]}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
