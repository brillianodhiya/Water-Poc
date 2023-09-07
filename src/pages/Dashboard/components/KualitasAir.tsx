/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Card,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { getDataSparing } from '@/services/badiklat/dashboard';
import { useQuery } from 'react-query';

type ViewLogTypes = {
  loading: boolean;
  air_bersih: string | number;
  air_limbah: string | number;
  data?: {
    air_bersih: {
      deveui: string;
      field_meter: string;
      id: number;
      unit: string;
      value: number;
    }[];
    air_limbah: {
      deveui: string;
      field_meter: string;
      id: number;
      unit: string;
      value: number;
    }[];
  };
};

export const KualitasAir: FunctionComponent<ViewLogTypes> = ({
  loading,
  // air_bersih,
  // air_limbah,
  data,
}) => {
  const { isFetching: loadingSparing, data: dataSparing } = useQuery(['dataSparing'], {
    queryFn: async () => {
      const d = await getDataSparing({});
      if (!d.error) {
        return d.data;
      } else {
        return {};
      }
    },
    retry: 10,
  });

  // console.log(dataSparing);

  return (
    <Card
      title="Kualitas Air"
      style={{
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
      }}
      bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
    >
      <Spin spinning={loading || loadingSparing}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Air bersih</Typography>
            {data?.air_bersih.map((item) => {
              return (
                <div
                  key={item.deveui}
                  style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
                >
                  <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
                    {item.display}
                  </Typography>
                  <Typography style={{ fontSize: 14, fontWeight: 'bold', color: '#1890FF' }}>
                    {item.value} {item.unit}
                  </Typography>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Air Limbah</Typography>
            {data?.air_limbah.map((item) => {
              return (
                <div
                  key={item.deveui}
                  style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
                >
                  <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' }}>
                    {item.deveui} ({item.field_meter})
                  </Typography>
                  <Typography style={{ fontSize: 14, fontWeight: 'bold', color: '#52C41A' }}>
                    {item.value} {item.unit}
                  </Typography>
                </div>
              );
            })}
          </div>
          {dataSparing
            ? Object.keys(dataSparing).map((v, i) => {
                let color = 'blue';
                let unit = '';

                switch (v) {
                  case 'COD':
                    color = 'orange';
                    unit = 'mg/L';
                    break;

                  case 'DEBIT':
                    color = 'brown';
                    unit = 'm3';
                    break;

                  case 'NH3N':
                    color = 'purple';
                    unit = 'mg/L';
                    break;

                  case 'PH':
                    color = 'green';
                    break;

                  case 'TSS':
                    color = 'blue';
                    unit = 'mg/L';
                    break;

                  default:
                    break;
                }

                return (
                  <div
                    key={v}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>{v}</Typography>

                    <Typography style={{ fontSize: 16, fontWeight: 'bold', color: color }}>
                      {dataSparing[v]} {unit}
                    </Typography>
                  </div>
                );
              })
            : null}
        </div>
      </Spin>
    </Card>
  );
};
