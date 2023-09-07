import React, { useState } from 'react';
import { getTenantConsumption } from '@/services/badiklat/dashboard';
import { Spin } from 'antd';
import { MultilineComponent } from './components/MultilineComponent';

type Props = {};

export const TenantConsumtion: React.FC<Props> = () => {
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [tabName, setTabName] = useState('today');

  const getData = async () => {
    setLoading(true);
    const d = await getTenantConsumption({
      filter: tabName,
    });
    // console.log(d, 'data map');
    setLoading(false);
    if (!d.error) {
      console.log(d, 'ddd');
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
      <MultilineComponent
        data={data}
        onChange={setTabName}
        // lineColor={'#85A5FF'}
        dataType={'Tenant Consumption'}
        isTabs={true}
        isUsage={true}
        total={total}
        satuan="m3"
      />
    </Spin>
  );
};
