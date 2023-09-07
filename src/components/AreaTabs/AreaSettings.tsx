import { ApiEditAreaSettings } from '@/services/nebula/area';
import { getAreaSetting } from '@/services/nebula/device';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Form,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Tag,
  TimePicker,
  Typography,
} from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
moment.locale('en');
const AreaSettings: React.FC<{
  dataArea: any;
  getData: () => void;
  loadingArea: boolean;
}> = ({ dataArea, getData, loadingArea }) => {
  const [show, setShow] = React.useState(false);
  const [billing, setBilling] = React.useState(dataArea?.cut_off_order);
  const [editSettings, setEditSettings] = React.useState(false);
  const [cutOff, setcutOff] = React.useState<any[]>(dataArea?.Nebula_Areas_Cut_offs);
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [loadingCutoff, setLoadingCutoff] = React.useState(false);

  const dataDay = Array.from({ length: 28 });

  React.useEffect(() => {
    form.setFields([
      {
        name: 'ppn',
        value: dataArea.ppn,
      },
      {
        name: 'min_charge_gas',
        value: dataArea.min_charge_gas,
      },
      {
        name: 'min_charge_water',
        value: dataArea.min_charge_water,
      },
      {
        name: 'min_charge_electrict_ct',
        value: dataArea.min_charge_electrict_ct,
      },
      {
        name: 'min_charge_electrict_non_ct',
        value: dataArea.min_charge_electrict_non_ct,
      },
      {
        name: 'stamp_number',
        value: dataArea.stamp_number,
      },
      {
        name: 'stamp_date',
        value: dataArea.stamp_date,
      },
    ]);
    setcutOff(dataArea?.Nebula_Areas_Cut_offs ? dataArea?.Nebula_Areas_Cut_offs : []);
    setBilling(dataArea?.cut_off_order ? dataArea?.cut_off_order : []);
  }, [dataArea]);

  const generateCutOff = async (val: number) => {
    // const arr: React.SetStateAction<any[]> = [];
    // Array.from({ length: val }).map((_, i) => {
    //   arr.push({
    //     day: '01',
    //     order: i + 1,
    //     area_id: dataArea.id,
    //     time: '00:00:00',
    //   });
    // });
    // setcutOff(arr);
    setLoadingCutoff(true);
    const data = await getAreaSetting(dataArea.id, val);
    setLoadingCutoff(false);

    if (!data.error) {
      // console.log(data.data, 'DATA');
      setcutOff(data.data);
    }
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    const data = await ApiEditAreaSettings(
      {
        ...values,
        cut_off: cutOff,
        cut_off_order: billing,
      },
      dataArea.id,
    );
    setLoading(false);
    if (!data.error) {
      Modal.success({
        content: data.message,
        onOk: () => {
          setEditSettings(false);
          getData();
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
  };

  return (
    <Card
      style={{
        borderRadius: 8,
        marginTop: '20px',
      }}
      loading={loading}
    >
      <Form name="add-area" layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={[16, 16]} justify={'space-between'}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Row justify={'space-between'}>
              <Col>
                <Typography>Automatic Billing</Typography>
              </Col>
              <Col>
                {editSettings ? (
                  <Select
                    value={billing}
                    onChange={(val) => {
                      setBilling(val);
                      generateCutOff(val);
                    }}
                    className="not-rounded"
                  >
                    <Select.Option value={1}>Monthly 1</Select.Option>
                    <Select.Option value={2}>Monthly 2</Select.Option>
                    <Select.Option value={3}>Monthly 3</Select.Option>
                    <Select.Option value={4}>Monthly 4</Select.Option>
                  </Select>
                ) : (
                  <Typography>Monthly {dataArea?.Nebula_Areas_Cut_offs?.length}x</Typography>
                )}
              </Col>
            </Row>

            <Card
              style={{
                marginTop: 10,
                borderRadius: 8,
              }}
            >
              <Spin spinning={loadingCutoff}>
                <Row gutter={[16, 16]} justify="space-between">
                  {cutOff?.map((v, i) => {
                    return (
                      <Col key={v} xs={12} sm={12} md={12} lg={12} xxl={12}>
                        <Space direction="vertical">
                          <Typography>Cutt Off Date {i + 1}x</Typography>
                          {editSettings ? (
                            <Space>
                              <Select
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option: any) =>
                                  (option?.children ?? '')
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                                className="not-rounded"
                                value={v.day}
                                style={{
                                  width: '80px',
                                }}
                                onChange={(w) => {
                                  const arr = [...cutOff];
                                  arr[i].day = w;
                                  setcutOff(arr);
                                }}
                              >
                                {dataDay?.map((_, i2) => {
                                  if (i2 < 9) {
                                    return (
                                      <Select.Option key={1} value={'0' + (i2 + 1).toString()}>
                                        {'0' + (i2 + 1).toString()}
                                      </Select.Option>
                                    );
                                  } else {
                                    return (
                                      <Select.Option key={1} value={(i2 + 1).toString()}>
                                        {(i2 + 1).toString()}
                                      </Select.Option>
                                    );
                                  }
                                })}
                              </Select>
                              <TimePicker
                                className="not-rounded"
                                value={moment(v.time, 'HH:mm:ss')}
                                onChange={(w) => {
                                  const arr = [...cutOff];
                                  arr[i].time = w?.format('HH:mm:ss');
                                  setcutOff(arr);
                                }}
                                format={'HH:mm'}
                              />
                            </Space>
                          ) : (
                            <Space>
                              <Tag
                                color="#E6F7FF"
                                style={{
                                  borderRadius: 6,
                                  color: '#1890FF',
                                  padding: '0px 10px 0px 10px',
                                }}
                              >
                                {v.day}
                              </Tag>
                              <Tag
                                icon={<ClockCircleOutlined />}
                                color="#E6F7FF"
                                style={{
                                  borderRadius: 6,
                                  color: '#1890FF',
                                  padding: '0px 10px 0px 10px',
                                }}
                              >
                                {moment(v.time, 'HH:mm:ss').format('HH:mm')}
                              </Tag>
                            </Space>
                          )}
                        </Space>
                      </Col>
                    );
                  })}
                </Row>
              </Spin>
            </Card>
            {/* <Row gutter={[16, 16]} justify="space-between" style={{ paddingTop: 20 }} wrap>
              <Col span={20}>PPN </Col>
              <Col span={4}>
                {editSettings ? (
                  <>
                    <Form.Item
                      name="ppn"
                      requiredMark="optional"
                      noStyle
                      initialValue={dataArea.ppn}
                      rules={[
                        {
                          required: true,
                          message: 'Please input ppn!',
                        },
                      ]}
                    >
                      <InputNumber placeholder="PPN" />
                    </Form.Item>
                  </>
                ) : (
                  <>
                    {show ? (
                      <>{dataArea.ppn}</>
                    ) : (
                      <Tag
                        color="#E6F7FF"
                        style={{ borderRadius: 8, color: '#1890FF', cursor: 'pointer' }}
                        onClick={() => setShow(true)}
                      >
                        Show
                      </Tag>
                    )}
                  </>
                )}
              </Col>
              <Col span={20}>
                <Typography>Min. Charge Gas (M3)</Typography>
              </Col>
              <Col span={4}>
                {editSettings ? (
                  <Form.Item
                    name="min_charge_gas"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.min_charge_gas}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Min Charge Gas!',
                      },
                    ]}
                  >
                    <InputNumber placeholder="Min Charge Gas" />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.min_charge_gas}</Typography>
                )}
              </Col>
              <Col span={20}>
                <Typography>Min. Charge Water (M3)</Typography>
              </Col>
              <Col span={4}>
                {editSettings ? (
                  <Form.Item
                    name="min_charge_water"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.min_charge_water}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Min Charge Water!',
                      },
                    ]}
                  >
                    <InputNumber placeholder="Min Charge Water" />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.min_charge_water}</Typography>
                )}
              </Col>
              <Col span={20}>
                <Typography>Min. Charge Electrict CT (Kwh)</Typography>
              </Col>
              <Col span={4}>
                {editSettings ? (
                  <Form.Item
                    name="min_charge_electrict_ct"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.min_charge_electrict_ct}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Min Charge Electrict CT!',
                      },
                    ]}
                  >
                    <InputNumber placeholder="Min Charge Electrict CT" />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.min_charge_electrict_ct}</Typography>
                )}
              </Col>
              <Col span={20}>
                <Typography>Min. Charge Electrict Non CT (Kwh)</Typography>
              </Col>
              <Col span={4}>
                {editSettings ? (
                  <Form.Item
                    name="min_charge_electrict_non_ct"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.min_charge_electrict_non_ct}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Min Charge Electrict Non CT!',
                      },
                    ]}
                  >
                    <InputNumber placeholder="Min Charge Electrict Non CT" />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.min_charge_electrict_non_ct}</Typography>
                )}
              </Col>
            </Row> */}
          </Col>

          {/* <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Row gutter={[16, 16]} justify="space-between" style={{ paddingTop: 40 }} wrap>
              <Col span={16}>
                <Typography>Stamp Number</Typography>
              </Col>
              <Col
                span={8}
                style={{
                  textAlign: 'right',
                }}
              >
                {editSettings ? (
                  <Form.Item
                    name="stamp_number"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.stamp_number}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Stamp Number!',
                      },
                    ]}
                  >
                    <InputNumber
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.stamp_number || '-'}</Typography>
                )}
              </Col>
              <Col span={16}>
                <Typography>Stamp Date</Typography>
              </Col>
              <Col
                span={8}
                style={{
                  textAlign: 'right',
                }}
              >
                {editSettings ? (
                  <Form.Item
                    name="stamp_date"
                    requiredMark="optional"
                    noStyle
                    initialValue={dataArea.stamp_date}
                    rules={[
                      {
                        required: true,
                        message: 'Please input Stamp Date!',
                      },
                    ]}
                  >
                    <InputNumber
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>
                ) : (
                  <Typography>{dataArea.stamp_date || '-'} </Typography>
                )}
              </Col>
            </Row>
          </Col> */}
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}
          >
            {editSettings ? (
              <Button
                onClick={() => {
                  form.submit();
                }}
              >
                Save
              </Button>
            ) : (
              <Button onClick={() => setEditSettings(true)}>Edit</Button>
            )}
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default AreaSettings;
