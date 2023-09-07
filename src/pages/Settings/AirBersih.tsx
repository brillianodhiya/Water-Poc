/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import {
  Button,
  Col,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  // Typography
} from 'antd';
import { useState, useEffect } from 'react';
import { ApiEditWaterQualitySetting, getWaterQualitySettings } from '@/services/badiklat/nodeList';

type ViewLogTypes = {
  settings: any;
  getDataInit: () => void;
};

export const AirBersih: FunctionComponent<ViewLogTypes> = ({ settings, getDataInit }) => {
  const [loading, setLoading] = useState(false);
  const [dataSetting, setDataSetting] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [devEui, setDevEui] = useState<any[]>([]);

  const [devEui2, setDevEui2] = useState<any[]>([]);

  useEffect(() => {
    if (settings) {
      const arr1: any[] | ((prevState: never[]) => never[]) = [];
      settings.air_bersih.map((v: { device_id: number; field_meter: string }) => {
        arr1.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui(arr1);

      const arr2: any[] | ((prevState: never[]) => never[]) = [];
      settings.air_limbah.map((v: { device_id: number; field_meter: string }) => {
        arr2.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui2(arr2);
    }
  }, [settings]);

  const getData = async () => {
    setLoading(true);
    const data = await getWaterQualitySettings({});
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
        // label: v.deveui.concat(' (', v.field_meter, ') - ', v.Nebula_Tenant?.name),
        label: `${v.deveui} (${v.field_meter}) - ${v.Nebula_Tenant?.name}`,
        value: JSON.stringify({
          id: v.id,
          field_meter: v.field_meter,
        }),
      });
    });
    return opt;
  };

  const options = generateOptions();

  // console.log(options, 'OPTIONS');
  const submitEdit = async () => {
    // console.log({
    //   device_id: devEui,
    //   min_usage: min,
    //   max_usage: max,
    // });
    setIsEdit(false);
    setLoading(true);
    const data = await ApiEditWaterQualitySetting({
      device_id_air_bersih: devEui.map((v: any) => JSON.parse(v)),
      device_id_air_limbah: devEui2.map((v: any) => JSON.parse(v)),
    });

    if (!data.error) {
      setLoading(false);
      getDataInit();
      getData();
    }
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          <Col xxl={12} xl={12} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Air Bersih
              </Typography>
              <Typography>Dev Eui</Typography>
              <Select
                mode="multiple"
                allowClear
                dropdownMatchSelectWidth
                style={{ width: '100%', maxHeight: isEdit ? 'unset' : '130px', overflow: 'scroll' }}
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
          </Col>
          <Col xxl={12} xl={12} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Air Limbah
              </Typography>

              <Typography>Dev Eui</Typography>
              <Select
                mode="multiple"
                allowClear
                dropdownMatchSelectWidth
                style={{ width: '100%', maxHeight: isEdit ? 'unset' : '130px', overflow: 'scroll' }}
                placeholder="Select Dev Eui"
                // defaultValue={['a10', 'c12']}
                onChange={(value) => {
                  // console.log(value);
                  setDevEui2(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui2}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
        </Row>
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
    </div>
  );
};
