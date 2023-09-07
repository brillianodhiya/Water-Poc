/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Card,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

type ViewLogTypes = {
  loading: boolean;
  interval_sebelumnya: string | number;
  interval_sekarang: string | number;
};

export const PemakaianTenant: FunctionComponent<ViewLogTypes> = ({
  loading,
  interval_sebelumnya = '151.054',
  interval_sekarang = '180.074',
}) => {
  return (
    <Card
      title="Pemakaian Air Tenant"
      style={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
      }}
      bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Spin spinning={loading}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }}>
              Interval Sebelumnya
            </Typography>

            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
              {interval_sebelumnya} m3
            </Typography>
          </div>
          <div>
            <ArrowRightOutlined
              style={{
                color: '#429C46',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }}>
              Interval Sekarang
            </Typography>

            <Typography style={{ fontSize: 16, fontWeight: 'bold', color: '#429C46' }}>
              {interval_sekarang} m3
            </Typography>
          </div>
        </div>
      </Spin>
    </Card>
  );
};
