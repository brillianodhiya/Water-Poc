import { Card, Row, Col, Space } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react';
import { ElectricityBigIcon, ElectricityNCTBigIcon } from '../Icons/Electricity';
import { GasBigIcon } from '../Icons/Gas';
import { WaterBigIcon } from '../Icons/Water';
import { RepaidTable } from '../Table/RepaidTable';

type Props = {};

const PricingRepaid: FunctionComponent<Props> = () => {
  const [active, setActive] = React.useState('Gas');

  return (
    // <Card
    //   style={{
    //     borderRadius: 8,
    //   }}
    // >

    // </Card>
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <Card
          bodyStyle={{
            padding: 0,
            // margin: 0,
          }}
        >
          <Space
            style={{
              background: active == 'Gas' ? '#E6F7FF' : '',
              width: '100%',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
            onClick={() => setActive('Gas')}
          >
            <GasBigIcon />
            Gas
          </Space>
          <Space
            style={{
              background: active == 'Water' ? '#E6F7FF' : '',
              width: '100%',
              cursor: 'pointer',
              padding: '5px 10px',
            }}
            onClick={() => setActive('Water')}
          >
            <WaterBigIcon />
            Water
          </Space>
          <Space
            style={{
              background: active == 'Electricity Non City' ? '#E6F7FF' : '',
              width: '100%',
              cursor: 'pointer',
              padding: '5px 10px',
            }}
            onClick={() => setActive('Electricity Non City')}
          >
            <ElectricityNCTBigIcon />
            Electricity Non City
          </Space>
          <Space
            style={{
              background: active == 'Electricity' ? '#E6F7FF' : '',
              width: '100%',
              cursor: 'pointer',
              padding: '5px 10px',
            }}
            onClick={() => setActive('Electricity')}
          >
            <ElectricityBigIcon />
            Electricity
          </Space>
        </Card>
      </Col>
      <Col span={20}>
        <RepaidTable name={active} />
      </Col>
    </Row>
  );
};

export default PricingRepaid;
