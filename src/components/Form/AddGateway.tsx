// import { getArea } from '@/services/badiklat/area';
import { ApiAddGateway, getDeviceCore } from '@/services/nebula/device';
import { Col, Form, Input, Modal, Row, Select, Space, Spin } from 'antd';
import moment from 'moment';
import type { FunctionComponent } from 'react';
import React from 'react';
import MapPicker from '../Maps/MapPicker';
import { getAddressFromLatLong } from '../Maps/GetAddress';

type AddGateway = {
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
};

const ModalAddGateway: FunctionComponent<AddGateway> = ({ onOk, onCancel, open }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  // const [dataArea, setDataArea] = React.useState<any[]>([]);

  const [mapValue, setMapValue] = React.useState({ lat: -6.2, lng: 106.816666 });
  const [listMacId, setListMacId] = React.useState<any[]>([]);

  const getDataDeviceCore = async () => {
    setLoading(true);
    const d = await getDeviceCore({});
    if (!d.error) {
      setLoading(false);
      setListMacId(d.data);
    }
  };

  React.useEffect(() => {
    if (open) {
      // form.setFields([
      //   {
      //     name: 'address',
      //     value: getAddressFromLatLong(mapValue.lat, mapValue.lng),
      //   },
      // ]);
      getDataDeviceCore();
    }
  }, [open]);

  // console.log(listMacId, 'LIST MCD');
  React.useEffect(() => {
    getAddressFromLatLong(mapValue.lat, mapValue.lng).then((e) => {
      form.setFields([
        {
          name: 'address',
          value: e,
        },
      ]);
    });
  }, [mapValue, open]);

  const onFinish = async (values: any) => {
    console.log(values);

    setLoading(true);
    const d = await ApiAddGateway({
      // area_id: values.area,
      mac_id: values.mac_id,
      latitude: values.latitude,
      longitude: values.longitude,
      installation_date: moment().format('YYYY-MM-DD HH:mm:ss'),
      description: values.description,
      gateway_name: values.gateway_name,
      address: values.address,
    });
    if (!d.error) {
      setLoading(false);
      Modal.success({
        content: d.message,
        onOk: () => {
          form.resetFields();
          onOk();
        },
      });
    } else {
      setLoading(false);
      Modal.error({
        content: d.message,
        onOk: () => {},
      });
    }
  };

  return (
    <Modal
      title={'Add Device Gateway'}
      open={open}
      onOk={() => {
        form.submit();
      }}
      onCancel={onCancel}
      okText="Save"
      width={1136}
    >
      <Spin spinning={loading}>
        <Form form={form} name="add-meter" onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              {/* <Form.Item
                requiredMark={'optional'}
                name="mac_id"
                label="Mac Address"
                rules={[{ required: true }]}
              >
                <Input placeholder="Dev Eui" />
              </Form.Item> */}
              <Form.Item
                requiredMark={'optional'}
                name="mac_id"
                label="Mac Address"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select Mac Address"
                  className="not-rounded"
                  optionFilterProp="children"
                  showSearch
                  filterOption={(input, option: any) =>
                    (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  onChange={(_, option: any) => {
                    // console.log(value, option);
                    form.setFields([
                      {
                        name: 'gateway_name',
                        value: option.gatewayName,
                      },
                      {
                        name: 'description',
                        value: option.description,
                      },
                    ]);
                  }}
                >
                  {listMacId.map((val: any) => {
                    return (
                      <Select.Option
                        key={val.deveui}
                        value={val.deveui}
                        gatewayName={val.gateway_name}
                        description={val.description}
                        status={val.status}
                      >
                        {val.deveui.concat(' - ', val.gateway_name)}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="Gateway Name"
                name="gateway_name"
                rules={[{ required: true, message: 'Please input Gateway Name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Gateway Name" />
              </Form.Item>
              {/* <Form.Item
                label="Model"
                name="model"
                rules={[{ required: true, message: 'Please input Model!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Model" />
              </Form.Item> */}

              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false, message: 'Please input Description!' }]}
              >
                <Input.TextArea placeholder="Description (Optional)" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{ paddingLeft: '24px' }}>
              <MapPicker
                center={mapValue}
                onChange={(v) => {
                  setMapValue(v);
                  form.setFields([
                    {
                      name: 'latitude',
                      value: v.lat,
                    },
                    {
                      name: 'longitude',
                      value: v.lng,
                    },
                  ]);
                }}
              />
              <Space wrap size={'large'} style={{ marginTop: '16px' }}>
                <Form.Item
                  requiredMark="optional"
                  name="latitude"
                  label={'Latitude'}
                  initialValue="-6.290690"
                  hidden
                  rules={[{ required: true, message: 'Masukkan Latitude' }]}
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Latitude"
                  />
                </Form.Item>
                <Form.Item
                  requiredMark="optional"
                  name="longitude"
                  label={'Longitude'}
                  initialValue="107.141853"
                  hidden
                  rules={[{ required: true, message: 'Masukkan Longitude' }]}
                >
                  <Input
                    // className="border-bottom"
                    placeholder="Longitude"
                  />
                </Form.Item>
              </Space>
              <Form.Item requiredMark="optional" name="address" label={'Address'}>
                <Input.TextArea
                  // className="border-bottom"
                  placeholder="Address"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </Modal>
  );
};

export default ModalAddGateway;
