import React, { useState } from 'react';
import { SingleLine } from './components/SingleLine';
import { getTekananAir } from '@/services/badiklat/dashboard';
import { Spin } from 'antd';

type Props = {};

export const TekananAir: React.FC<Props> = () => {
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [tabName, setTabName] = useState('today');

  const getData = async () => {
    setLoading(true);
    const d = await getTekananAir({
      filter: tabName,
    });
    // console.log(d, 'data map');
    setLoading(false);
    if (!d.error) {
      // setDataMapCount(data.data);
      // console.log(data.data, 'data map');
      // data.data.device_location = [];
      setTotal(d.total);
      setData(d.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, [tabName]);

  return (
    <Spin spinning={loading}>
      <SingleLine
        data={data}
        onChange={setTabName}
        lineColor={'#FF7875'}
        dataType={'Produksi Air lumpur'}
        isTabs={true}
        total={total}
        satuan="Bar"
      />
    </Spin>
  );
};
