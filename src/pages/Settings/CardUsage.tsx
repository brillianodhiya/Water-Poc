/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Button,
  Card,
  Grid,
  InputNumber,
  Select,
  Space,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { useState, useEffect } from 'react';
import { ApiEditWaterUsageSetting, getWaterUsageSettings } from '@/services/badiklat/nodeList';

const { useBreakpoint } = Grid;

type ViewLogTypes = {
  settings: any;
  getDataInit: () => void;
};

export const CardUsage: FunctionComponent<ViewLogTypes> = ({ settings, getDataInit }) => {
  const screens = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [dataSetting, setDataSetting] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [devEui, setDevEui] = useState<number[]>([]);
  const [min, setMin] = useState<number | null>(0);
  const [max, setMax] = useState<number | null>(0);
  const [unit, setUnit] = useState('');

  useEffect(() => {
    if (settings) {
      const arr1: number[] | ((prevState: never[]) => never[]) = [];
      settings.device.map((v: { device_id: number }) => {
        arr1.push(v.device_id);
      });
      setDevEui(arr1);

      settings.params.map((v: { deveui: string; value: number; unit: string }) => {
        if (v.deveui == 'max_usage') {
          setMax(v.value);
          setUnit(v.unit);
        }

        if (v.deveui == 'min_usage') {
          setMin(v.value);
          setUnit(v.unit);
        }
      });
    }
  }, [settings]);

  const getData = async () => {
    setLoading(true);
    const data = await getWaterUsageSettings({});
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

  const submitEdit = async () => {
    // console.log({
    //   device_id: devEui,
    //   min_usage: min,
    //   max_usage: max,
    // });
    setIsEdit(false);
    setLoading(true);
    const data = await ApiEditWaterUsageSetting({
      device_id_list: devEui,
      max_usage: max,
      min_usage: min,
    });

    if (!data.error) {
      setLoading(false);
      getDataInit();
      getData();
    }
  };

  const generateSize = () => {
    if (screens.xxl) {
      return '860px';
    } else if (screens.xl) {
      return '860px';
    } else if (screens.lg) {
      return '600px';
    } else if (screens.md) {
      return '600px';
    } else {
      return '360px';
    }
  };

  const sizeW = generateSize();

  return (
    <Card
      title="Water Usage"
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
        <div
          style={{
            display: 'flex',
            // justifyContent: 'space-between',
            flexDirection: 'row',
            gap: '18px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Typography>Dev Eui</Typography>
            <Select
              mode="multiple"
              allowClear
              dropdownMatchSelectWidth
              style={{
                width: sizeW,
                maxHeight: isEdit ? 'unset' : '130px',
                overflow: 'scroll',
              }}
              placeholder="Select Dev Eui"
              // defaultValue={['a10', 'c12']}
              onChange={(value) => {
                // console.log(value);
                setDevEui(value);
              }}
              disabled={!isEdit}
              options={options}
              value={devEui}
              filterOption={(input, option: any) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              showSearch
              optionFilterProp="children"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              // border: '1px solid black',
            }}
          >
            <div>
              <Typography>Minimal Usage</Typography>
              {!isEdit ? (
                <Typography
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {min} {unit}
                </Typography>
              ) : (
                <InputNumber
                  addonAfter={unit}
                  value={min}
                  onChange={(v: number | null) => setMin(v)}
                />
              )}
            </div>

            <div>
              <Typography>Average Usage</Typography>
              {!isEdit ? (
                <Typography
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {max} {unit}
                </Typography>
              ) : (
                <InputNumber
                  addonAfter={unit}
                  value={max}
                  onChange={(v: number | null) => setMax(v)}
                />
              )}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginTop: '24px' }}>
          {!isEdit ? (
            <Button
              type="link"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </Button>
          ) : (
            <Space>
              <Button
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                Cancel
              </Button>
              <Button type="primary" onClick={submitEdit}>
                Save
              </Button>
            </Space>
          )}
        </div>
      </Spin>
    </Card>
  );
};
