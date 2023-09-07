import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Card, Col, Row, Select, Tag, Typography } from 'antd';
import React from 'react';
type Props = {
  collapseUsage: boolean;
  setCollapseUsage: (val: any) => void;
  totalUsage: number;
};

export const UsageCard: React.FC<Props> = ({ collapseUsage, setCollapseUsage, totalUsage }) => {
  return (
    <Card
      style={{
        borderRadius: 8,
        background: '#2F54EB',
        color: '#fff',
      }}
      bodyStyle={{
        color: '#fff',
      }}
    >
      <Row gutter={[16, 8]}>
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            style={{
              color: '#fff',
              fontSize: 16,
            }}
          >
            Total Usage
          </Typography>
          <Button
            icon={
              !collapseUsage ? (
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
            onClick={() => setCollapseUsage(!collapseUsage)}
          />
        </Col>
        <Col span={24} className={collapseUsage ? 'collabsible active' : 'collabsible'}>
          <Row
            style={{
              marginTop: 10,
            }}
          >
            <Col span={24}>
              <Select
                defaultValue="water"
                style={{ width: '60%' }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'water', label: 'Water' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Col>
            <Col span={24}>
              <Typography
                style={{
                  color: '#fff',
                  fontSize: 32,
                  fontWeight: 'bold',
                }}
              >
                {totalUsage} m3
              </Typography>
            </Col>
            <Col span={24}>
              <Tag
                style={{
                  borderRadius: 100,
                  padding: '0px 6px',
                  color: '#1890FF',
                  cursor: 'pointer',
                  float: 'right',
                }}
                onClick={() => {
                  history.push('/dashboard/view_graphic');
                }}
              >
                View Graphic
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
