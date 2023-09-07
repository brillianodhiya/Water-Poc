import React from 'react';
import { SingleLine } from './components/SingleLine';
import { getGrafikExternal } from '@/services/badiklat/dashboard';
import { Spin } from 'antd';

type Props = {};

export const ExternalDevice: React.FC<Props> = () => {
  const [data, setData] = React.useState<any>({});
  const [keys, setKeys] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    const d = await getGrafikExternal({});
    // console.log(d, 'data map');
    setLoading(false);
    if (!d.error) {
      // Object.keys(d.data).forEach((key) => {
      //   d.data[key].forEach((item: any) => {
      //     item.date = item.date.split(' ')[0];
      //   });
      // });
      // setDataMapCount(data.data);
      // console.log(data.data, 'data map');
      // data.data.device_location = [];
      setData(d.data);
      setKeys(Object.keys(d.data));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data, keys);

  return (
    <>
      <Spin spinning={loading}>
        {keys.map((v: string, i: number) => {
          let color = '#FFD666';
          if (i == 0) {
            color = '#FFD666';
          } else if (i == 1) {
            color = '#85A5FF';
          } else if (i == 2) {
            color = '#5CDBD3';
          } else if (i == 3) {
            color = '#95DE64';
          } else if (i == 4) {
            color = '#FF85C0';
          }
          console.log(data[v], 'data v');

          return <SingleLine key={v} data={data[v]} lineColor={color} dataType={v} />;
        })}
        {/* <SingleLine data={data} lineColor={'#FFD666'} dataType={'COD'} />
        <SingleLine data={data} lineColor={'#85A5FF'} dataType={'TSS'} />
        <SingleLine data={data} lineColor={'#5CDBD3'} dataType={'PH'} />
        <SingleLine data={data} lineColor={'#95DE64'} dataType={'NH3N'} />
        <SingleLine data={data} lineColor={'#FF85C0'} dataType={'DEBIT'} /> */}
      </Spin>
    </>
  );
};
