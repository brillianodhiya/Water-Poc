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
import {
  ApiEditWaterProductionSetting,
  getWaterProductionSettings,
} from '@/services/badiklat/nodeList';

type ViewLogTypes = {
  settings: any;
  getDataInit: () => void;
};

export const WaterProduction: FunctionComponent<ViewLogTypes> = ({ settings, getDataInit }) => {
  const [loading, setLoading] = useState(false);
  const [dataSetting, setDataSetting] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [devEui, setDevEui] = useState<string[]>([]);

  const [devEui2, setDevEui2] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [devEui3, setDevEui3] = useState<string[]>([]);
  const [devEui4, setDevEui4] = useState<string[]>([]);
  const [devEui5, setDevEui5] = useState<string[]>([]);
  const [devEui6, setDevEui6] = useState<string[]>([]);
  const [devEui7, setDevEui7] = useState<string[]>([]);
  const [devEui8, setDevEui8] = useState<string[]>([]);
  const [devEui9, setDevEui9] = useState<string[]>([]);

  useEffect(() => {
    if (settings) {
      const arr1: string[] | ((prevState: never[]) => never[]) = [];
      settings.air_bersih.map((v: { device_id: string; field_meter: string }) => {
        arr1.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui(arr1);

      const arr2: string[] | ((prevState: never[]) => never[]) = [];
      settings.air_limbah.map((v: { device_id: string; field_meter: string }) => {
        arr2.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui2(arr2);

      const arr3: string[] | ((prevState: never[]) => never[]) = [];
      settings.air_lumpur.map((v: { device_id: string; field_meter: string }) => {
        arr3.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui3(arr3);

      const arr4: string[] | ((prevState: never[]) => never[]) = [];
      settings.air_baku.map((v: { device_id: string; field_meter: string }) => {
        arr4.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui4(arr4);

      const arr5: string[] | ((prevState: never[]) => never[]) = [];
      settings.sludge.map((v: { device_id: string; field_meter: string }) => {
        arr5.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui5(arr5);

      const arr6: string[] | ((prevState: never[]) => never[]) = [];
      settings.total_distribusi_ki.map((v: { device_id: string; field_meter: string }) => {
        arr6.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui6(arr6);

      const arr7: string[] | ((prevState: never[]) => never[]) = [];
      settings.tranmisi_indotaise.map((v: { device_id: string; field_meter: string }) => {
        arr7.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui7(arr7);

      const arr8: string[] | ((prevState: never[]) => never[]) = [];
      settings.tranmisi_indotaise_2.map((v: { device_id: string; field_meter: string }) => {
        arr8.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui8(arr8);

      const arr9: string[] | ((prevState: never[]) => never[]) = [];
      settings.transmisi_ki.map((v: { device_id: string; field_meter: string }) => {
        arr9.push(
          JSON.stringify({
            id: v.device_id,
            field_meter: v.field_meter,
          }),
        );
      });
      setDevEui9(arr9);
    }
  }, [settings]);

  const getData = async () => {
    setLoading(true);
    const data = await getWaterProductionSettings({});
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
    const data = await ApiEditWaterProductionSetting({
      device_id_air_bersih: devEui.map((v: any) => JSON.parse(v)),
      device_id_air_limbah: devEui2.map((v: any) => JSON.parse(v)),
      // device_id_air_lumpur: devEui3.map((v: any) => JSON.parse(v)),
      device_id_air_lumpur: [],
      device_id_air_baku: devEui4.map((v: any) => JSON.parse(v)),
      device_id_sludge: devEui5.map((v: any) => JSON.parse(v)),
      device_id_total_distribusi_ki: devEui6.map((v: any) => JSON.parse(v)),
      device_id_tranmisi_indotaise: devEui7.map((v: any) => JSON.parse(v)),
      device_id_tranmisi_indotaise_2: devEui8.map((v: any) => JSON.parse(v)),
      device_id_transmisi_ki: devEui9.map((v: any) => JSON.parse(v)),
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
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
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
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
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
          {/* <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Air Lumpur
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
                  setDevEui3(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui3}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col> */}

          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Air Baku
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
                  setDevEui4(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui4}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Sludge
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
                  setDevEui5(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui5}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                {/* Total Distribusi Ki */}
                Total Distribusi BP
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
                  setDevEui6(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui6}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                Transmisi IID 1
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
                  setDevEui7(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui7}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                {/* Transmisi IID 2 1 2 */}
                Tranmisi IID 2
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
                  setDevEui8(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui8}
                filterOption={(input, option: any) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                showSearch
                optionFilterProp="children"
              />
            </div>
          </Col>
          <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
            <div>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                {/* Transmisi Ki */}
                Transmisi BP
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
                  setDevEui9(value);
                }}
                disabled={!isEdit}
                options={options}
                value={devEui9}
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
