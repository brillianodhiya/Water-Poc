import { Segmented, Space, Typography } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react';
import { ExternalDevice } from './ExternalDevice';
import { InternalDevice } from './InternalDevice';
import { TenantConsumtion } from './TenantConsumption';
import { KualitasAirBersih } from './KualitasAirBersih';
import { WaterLosses } from './WaterLosses';

type ViewLogTypes = {};

export const Grafik: FunctionComponent<ViewLogTypes> = ({}) => {
  const [segment, setSegment] = React.useState<any>('internal');
  const [segment2, setSegment2] = React.useState<any>('kualitas air limbah');
  // const [tabName, setTabName] = React.useState('today');

  return (
    <>
      <Space align="start" style={{ marginBottom: 10 }}>
        <Typography.Title level={4}>Devices</Typography.Title>
        <Segmented
          onChange={(value) => {
            setSegment(value);
          }}
          value={segment}
          size={'middle'}
          options={[
            // {
            //   label: 'Production',
            //   value: 'internal',
            // },
            // {
            //   label: 'Quality',
            //   value: 'external',
            // },
            {
              label: 'Tenant Consumption',
              value: 'tenant_consumption',
            },
            // {
            //   label: 'Water Losses',
            //   value: 'water_losses',
            // },
          ]}
        />
      </Space>
      {segment == 'internal' ? (
        <InternalDevice />
      ) : segment == 'tenant_consumption' ? (
        <TenantConsumtion />
      ) : segment == 'water_losses' ? (
        <WaterLosses />
      ) : (
        <div>
          <Segmented
            onChange={(value) => {
              setSegment2(value);
            }}
            value={segment2}
            size={'middle'}
            options={[
              {
                label: 'Kualitas Air Limbah',
                value: 'kualitas air limbah',
              },

              {
                label: 'Kualitas Air Bersih',
                value: 'kualitas air bersih',
              },
            ]}
          />
          {segment2 == 'kualitas air limbah' ? <ExternalDevice /> : <KualitasAirBersih />}
        </div>
      )}
      {/* <Card>
        <Typography.Title level={4} style={{ marginBottom: '-10px' }}>
          Produksi Air
        </Typography.Title>
        <Row justify="space-between">
          <Col style={{ overflowY: 'auto' }}>
            <Tabs
              className="navbar-tab"
              size="small"
              style={{
                marginTop: '28px',
                minWidth: '400px',
              }}
              onChange={setTabName}
              activeKey={tabName}
            >
              <Tabs.TabPane tab="Today" key="today" />
              <Tabs.TabPane tab="Yesterday" key="yesterday" />
              <Tabs.TabPane tab="Last 7 Days" key="sevenday" />
              <Tabs.TabPane tab="Last 30 Days" key="thirtyday" />
            </Tabs>
          </Col>
          <Col>
            <Space size={'large'}>
              <Select style={{ width: 170 }} defaultValue={'all'}>
                <Select.Option value="all">
                  <Typography>Semua</Typography>
                </Select.Option>
                <Select.Option value="baku">
                  <Typography>Air Baku</Typography>
                </Select.Option>
                <Select.Option value="bersih">
                  <Typography>Air Bersih</Typography>
                </Select.Option>
                <Select.Option value="Lumpur">
                  <Typography>Air Lumpur</Typography>
                </Select.Option>
              </Select>
              <div>
                <Typography>
                  Total Usage{' '}
                  {tabName == 'today'
                    ? ' Today'
                    : tabName == 'yesterday'
                    ? ' Yesterday'
                    : tabName == 'sevenday'
                    ? ' 7 Days'
                    : tabName == 'thirtyday'
                    ? ' 30 Days'
                    : ''}
                </Typography>
                <Space align="start">
                  <Typography.Title level={2}>999999</Typography.Title>
                  m3
                </Space>
              </div>
            </Space>
          </Col>
        </Row>
      </Card> */}
    </>
  );
};
