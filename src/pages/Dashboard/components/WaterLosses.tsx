/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Card,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { useQuery } from 'react-query';
import { getDataWaterLosses } from '@/services/badiklat/dashboard';

const titleCase = (s: string) =>
  s.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()));

type ViewLogTypes = {
  loading: boolean;
};

export const WaterLosses: FunctionComponent<ViewLogTypes> = ({
  loading,
  // air_bersih,
  // air_lumpur,
  // air_beku,
}) => {
  const { isFetching, data } = useQuery(['waterlosses'], {
    queryFn: async () => {
      const d = await getDataWaterLosses({});
      if (!d.error) {
        return d.data;
      } else {
        return {};
      }
    },
    retry: 10,
  });

  // console.log(data, 'data');

  return (
    <Card
      title="Water Losses"
      style={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
      }}
      bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Spin spinning={loading || isFetching}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.45)' }}>
              Air Bersih
            </Typography>

            <Typography style={{ fontSize: 16, fontWeight: 'bold', color: '#1890FF' }}>
              {air_bersih} m3
            </Typography>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.45)' }}>
              Air Limbah
            </Typography>

            <Typography style={{ fontSize: 16, fontWeight: 'bold', color: '#52C41A' }}>
              {air_beku} m3
            </Typography>
          </div> */}

          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.45)' }}>
              Air Lumpur
            </Typography>

            <Typography style={{ fontSize: 16, fontWeight: 'bold', color: '#AD6800' }}>
              {air_lumpur} m3
            </Typography>
          </div> */}

          {data
            ? Object.keys(data).map((v) => {
                let color = '#1890FF';
                if (v == 'air_bersih') {
                  color = '#1890FF';
                } else if (v == 'air_lumpur') {
                  color = '#AD6800';
                } else {
                  color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                }
                if (
                  !['distribusi_loss', 'Transmisi_loss', 'produksi_loss', 'air_lumpur'].includes(v)
                ) {
                  return (
                    <div
                      key={v}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.45)' }}>
                        {titleCase(v)}
                      </Typography>

                      <Typography
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: color,
                        }}
                      >
                        {data[v]} m3
                      </Typography>
                    </div>
                  );
                }
              })
            : null}
        </div>
      </Spin>
    </Card>
  );
};
