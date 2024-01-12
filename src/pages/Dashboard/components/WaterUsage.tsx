/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Avatar,
  Card,
  Space,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { CheckOutlined, ExclamationOutlined } from '@ant-design/icons';
import { converNumberSmNotFixed } from '@/components/config.usage';

type ViewLogTypes = {
  loading: boolean;
  pemakaian_air: string | number;
  icon: string;
  data: any;
};

export const WaterUsage: FunctionComponent<ViewLogTypes> = ({ loading, data }) => {
  return (
    <Card
      title="Today Tenant Consumption"
      style={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
        // background: '#FFF1F0',
      }}
      bodyStyle={{
        paddingTop: '16px',
        paddingBottom: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        // background: '#FFF1F0'
      }}
    >
      <Spin spinning={loading}>
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '12px',
          }}
        >
          <Space direction="vertical" size={'middle'}>
            <Space size={'middle'}>
              {/* <img
              alt="exclamation"
              src={
                icon == 'danger'
                  ? 'exclamation-circle-red.svg'
                  : icon == 'warning'
                  ? 'exclamation-circle.svg'
                  : 'exclamation-circle-green2.svg'
              }
              style={{
                height: '44px',
              }}
            /> */}
              <Avatar
                icon={
                  data.icon_pemakaian_air == 'green' ? <CheckOutlined /> : <ExclamationOutlined />
                }
                size={44}
                style={{
                  background:
                    data.icon_pemakaian_air == 'danger'
                      ? '#E43B37'
                      : data.icon_pemakaian_air == 'warning'
                      ? '#FD931D'
                      : '#68C74F',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}
              >
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
                  {converNumberSmNotFixed(data.pemakaian_air)} m3
                </Typography>
                <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
                  The total consumption of water by tenants.
                </Typography>
              </div>
            </Space>
          </Space>
        </div>
      </Spin>
      {/* <Spin spinning={loading}>
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '12px',
          }}
        >
          <Space direction="vertical" size={'middle'}>
            <Space size={'middle'}>
              <Avatar
                icon={
                  data.icon_IID_Tentant_Consumption == 'green' ? (
                    <CheckOutlined />
                  ) : (
                    <ExclamationOutlined />
                  )
                }
                size={44}
                style={{
                  background:
                    data.icon_IID_Tentant_Consumption == 'danger'
                      ? '#E43B37'
                      : data.icon_IID_Tentant_Consumption == 'warning'
                      ? '#FD931D'
                      : '#68C74F',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}
              >
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
                  {data.IID_Tentant_Consumption} m3
                </Typography>
                <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
                  IID Tenant Consumption
                </Typography>
              </div>
            </Space>
          </Space>
        </div>
      </Spin>
      <Spin spinning={loading}>
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '12px',
          }}
        >
          <Space direction="vertical" size={'middle'}>
            <Space size={'middle'}>
              <Avatar
                icon={
                  data.icon_BP_Tenant_Consumption == 'green' ? (
                    <CheckOutlined />
                  ) : (
                    <ExclamationOutlined />
                  )
                }
                size={44}
                style={{
                  background:
                    data.icon_BP_Tenant_Consumption == 'danger'
                      ? '#E43B37'
                      : data.icon_BP_Tenant_Consumption == 'warning'
                      ? '#FD931D'
                      : '#68C74F',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                }}
              >
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>
                  {data.BP_Tenant_Consumption} m3
                </Typography>
                <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
                  BP Tenant Consumption
                </Typography>
              </div>
            </Space>
          </Space>
        </div>
      </Spin> */}
    </Card>
  );
};
