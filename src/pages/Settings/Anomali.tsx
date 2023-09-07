/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Card,
  Spin,
  message,
  // Typography
} from 'antd';
import { useState, useEffect } from 'react';
import { ApiEditWaterUsageAnomali, getWaterUsageAnomaliList } from '@/services/badiklat/nodeList';
import { DynamicForm } from './DynamicForm';

type ViewLogTypes = {
  settings: any;
  getDataInit: () => void;
};

export const CardAnomali: FunctionComponent<ViewLogTypes> = ({ settings, getDataInit }) => {
  const [loading, setLoading] = useState(false);
  const [dataSetting, setDataSetting] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await getWaterUsageAnomaliList({});
    // console.log(data, 'data map');
    setLoading(false);
    if (!data.error) {
      setDataSetting(data.data);
      // setDataMapCount(data.data);
      // console.log(data.data, 'data map');
      // data.data.device_location = [];
      // setDataAlert(data.data);
    }
  };

  useEffect(() => {
    getData();
    // getDataNotif();
  }, []);

  const generateOptions = () => {
    const opt: { label: any; value: any }[] = [];
    dataSetting.map((v: any) => {
      opt.push({
        label: `${v.deveui} - ${v.Nebula_Tenant?.name}`,
        value: v.id,
      });
    });
    return opt;
  };

  const options = generateOptions();

  const onFinish = async (values: any) => {
    console.log('Received values of form:', values);
    setIsEdit(false);
    setLoading(true);
    const data = await ApiEditWaterUsageAnomali(values.device);

    if (!data.error) {
      message.success(data.message);
      setLoading(false);
      getDataInit();
      getData();
    }
  };

  return (
    <Card
      title="Water Usage Anomali"
      style={{
        // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
      }}
      bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
      headStyle={{
        backgroundColor: '#E6F7FF',
        fontWeight: 'bold',
      }}
    >
      <Spin spinning={loading}>
        <DynamicForm
          settings={settings}
          onFinish={onFinish}
          options={options}
          maxLabel="Average Usage"
          minLabel="Minimal Usage"
          unit="M3"
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </Spin>
    </Card>
  );
};
