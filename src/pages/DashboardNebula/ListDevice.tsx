import { OfflineSmallIcon } from '@/components/Icons/OfflineIcon';
import { ArrowLeftOutlined, WifiOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Helmet, history } from '@umijs/max';
import type { InputRef } from 'antd';
import { Breadcrumb, Button, Divider, Segmented, Space, Table, Typography } from 'antd';
import 'moment/locale/id';
import React from 'react';

const { Column } = Table;

interface DataType {
  id: number;
  instalation_date: string;
  created_by: string;
  area_name: string;
  tenant_name: string;
  description?: string;
  model: string;
  lastUpdate: string;
  interval: number;
  battery: number;
  devEui: string;
}

type DataIndex = keyof DataType;

type Props = {};

const ListDevice: React.FC<Props> = () => {
  const [loading, setLoading] = React.useState(false);
  const [segment, setSegment] = React.useState<any>('online');
  const searchInput = React.useRef<InputRef>(null);

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
                <Breadcrumb.Item href="#">Device</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>List Status</Typography.Title>
            </div>
          </Space>
        </Button>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT | Dashboard </title>
        <link rel="icon" href="/logoaat.png" type="image/x-icon" />
      </Helmet>
      <Divider
        style={{
          margin: '0px 0px 20px 0px',
        }}
      />
      <Segmented
        onChange={(value) => {
          setSegment(value);
        }}
        value={segment}
        options={[
          {
            label: 'Online',
            icon: (
              <WifiOutlined
                style={{
                  color: '#52C41A',
                }}
              />
            ),
            value: 'online',
          },
          {
            label: 'Offline',
            icon: (
              <OfflineSmallIcon
                style={{
                  color: '#FF4D4F',
                }}
              />
            ),
            value: 'offline',
          },
        ]}
      />
      {/* <Table loading={loading} style={{ marginTop: 20 }}>
        <Column
          width={200}
          title="Last Update"
          dataIndex="lastUpdate"
          key="lastUpdate"
          render={(val) => {
            if (val) {
              return moment(val).format('MMM DD YYYY HH:mm:ss');
            }
          }}
          sorter={(a: any, b: any) => moment(a.lastUpdate).unix() - moment(b.lastUpdate).unix()}
        />
        <Column
          width={200}
          //   {...getColumnSearchProps('area_name')}
          title="Area Name"
          dataIndex="area_name"
          key="area_name"
          sorter={(a: any, b: any) => a.area_name.length - b.area_name.length}
        />
      </Table> */}
    </PageContainer>
  );
};

export default ListDevice;
