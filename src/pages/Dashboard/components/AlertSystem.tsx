/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Card,
  Space,
  Spin,
  Typography,
  // Typography
} from 'antd';

type ViewLogTypes = {
  loading: boolean;
  pemakaian_air: string | number;
  tekanan_air: string | number;
};

export const AlertSystemWater: FunctionComponent<ViewLogTypes> = ({
  loading,
  pemakaian_air = '180.074',
  tekanan_air = '0.03',
}) => {
  return (
    <Card
      title="Alert System"
      style={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
      }}
      bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Spin spinning={loading}>
        <Space direction="vertical" size={'middle'}>
          <Space size={'middle'}>
            <img alt="exclamation" src="exclamation-circle.svg" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }}>
                Pemakaian Air
              </Typography>

              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                {pemakaian_air} m3
              </Typography>
            </div>
          </Space>
          <Space size={'middle'}>
            <img alt="exclamation" src="check-circle.svg" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }}>
                Tekanan Air
              </Typography>

              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                {tekanan_air} Bar
              </Typography>
            </div>
          </Space>
        </Space>
      </Spin>
    </Card>
  );
};
