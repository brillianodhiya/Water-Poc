import { ClockCircleOutlined } from '@ant-design/icons';
import { Card, Row, Col, Typography, Space, Tag, Checkbox, Input } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react';
import { ElectricityNonCityIcon, ElectricityIcon } from '../Icons/Electricity';
import { GasIcon } from '../Icons/Gas';
import { WaterIcon } from '../Icons/Water';

type Props = {};

const PricingPostpaid: FunctionComponent<Props> = () => {
  const [checkedAll, setCheckedAll] = React.useState(true);
  const [checkedMember, setCheckedMember] = React.useState(false);

  return (
    <>
      <Card
        style={{
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Checkbox
          checked={checkedAll}
          onChange={() => {
            setCheckedAll(!checkedAll);
            setCheckedMember(!checkedMember);
          }}
          style={{
            paddingBottom: 10,
          }}
        >
          One Price For All Customer
        </Checkbox>
        <Card
          style={{
            borderRadius: 8,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <GasIcon />
                      <Typography>Gas</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Input type="number" placeholder="Rp." />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <WaterIcon />
                      <Typography>Water</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Input type="number" placeholder="Rp." />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityNonCityIcon />
                      <Typography>Electricity Non City</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Input type="number" placeholder="Rp." />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityIcon />
                      <Typography>Electricity</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Input type="number" placeholder="Rp." />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </Card>
      <Card
        style={{
          borderRadius: 8,
        }}
      >
        <Checkbox
          checked={checkedMember}
          onChange={() => {
            setCheckedMember(!checkedMember);
            setCheckedAll(!checkedAll);
          }}
          style={{
            paddingBottom: 10,
          }}
        >
          Setting Price Member Level
        </Checkbox>
        <Card
          title="Pelanggan 1"
          style={{
            marginBottom: 20,
            borderRadius: 8,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <GasIcon />
                      <Typography>Gas</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <WaterIcon />
                      <Typography>Water</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityNonCityIcon />
                      <Typography>Electricity Non City</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityIcon />
                      <Typography>Electricity</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>-</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
        <Card
          title="Pelanggan 2"
          style={{
            borderRadius: 8,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <GasIcon />
                      <Typography>Gas</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <WaterIcon />
                      <Typography>Water</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 m3</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityNonCityIcon />
                      <Typography>Electricity Non City</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>4G WIFI Modem Router B310</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <Row gutter={[16, 8]}>
                  <Col span={20}>
                    <Space>
                      <ElectricityIcon />
                      <Typography>Electricity</Typography>
                    </Space>
                  </Col>
                  <Col span={4}>
                    <Typography.Link>Edit</Typography.Link>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">Price 1 Kwh</Typography.Text>
                    <Typography.Paragraph>Rp. 400</Typography.Paragraph>
                  </Col>
                  <Col span={24}>
                    <Typography.Text type="secondary">ERP Item</Typography.Text>
                    <Typography.Paragraph>-</Typography.Paragraph>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Card>
      </Card>
    </>
  );
};

export default PricingPostpaid;
