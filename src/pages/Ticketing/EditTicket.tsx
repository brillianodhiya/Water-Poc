import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Typography,
} from 'antd';

import { getDevice, getTechnician, getTicket, getTicketNodeType } from '@/services/nebula/ticket';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../../config/axiosConfig';
moment.locale('en');
const EditTicket = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [dataTechnician, setDataTechnician] = React.useState<any>([]);
  const [dataNodeType, setDataNodeType] = React.useState<any>([]);
  const [typeTicket, setTypeTicket] = React.useState('installation');
  const [deviceCore, setDeviceCore] = React.useState<any[]>([]);
  const [selectedTenant, setSelectedTenant] = React.useState(1);
  const [selectedType, setSelectedType] = React.useState(1);
  const [dataTicket, setDataTicket] = React.useState([]);
  const params = useParams();
  console.log(params, 'params');

  const getDataTicket = async () => {
    setLoading(true);
    const data = await getTicket({
      params: {
        id: params.id,
      },
    });
    setLoading(false);
    if (!data.error) {
      setDataTicket(data.data[0]);
    }
  };
  console.log(dataTicket, 'data ticket');

  const getData = async () => {
    setLoading(true);
    const data = await getTechnician({});
    setLoading(false);
    if (!data.error) {
      setDataTechnician(data.data);
    }
  };

  const getNodeType = async () => {
    setLoading(true);
    const data = await getTicketNodeType({});
    console.log(data.data, 'ticket node type data');
    setLoading(false);
    if (!data.error) {
      setDataNodeType(data.data);
    }
  };

  const getDeviceId = async () => {
    setLoading(true);
    const data = await getDevice({
      params: {
        type: selectedType,
        tenant_id: selectedTenant,
      },
    });
    console.log(data.data, 'device core data');
    setLoading(false);
    if (!data.error) {
      setDeviceCore(data.data);
    }
  };

  const onFinish = async (values: any) => {
    console.log(values);
    // setLoading(true);
    const body = {
      area_id: values.area_id,
      tenant_id: values.tenant_id,
      type_id: values.type_id,
      technician_id: values.technician,
      note: values.note,
      ticket_type: values.type_ticket,
      node_id: values.deveui,
    };

    const data = await api({
      url: '/ticket/iki/edit/' + params.id,
      method: 'PATCH',
      data: body,
    });
    setLoading(false);
    if (data) {
      Modal.success({
        content: data.data.message,
        onOk: () => {
          history.push('/ticket');
        },
      });
    } else {
      Modal.error({
        content: data.message,
      });
    }
    console.log(body, 'body');
  };

  // const attachment: (RcFile | undefined)[] = [];
  // // console.log(fileList.originFileObj);

  const getDataApi = () => {
    getData();
    getNodeType();
    getDeviceId();
    getDataTicket();
  };

  React.useEffect(() => {
    getDataApi();
  }, [selectedType, selectedTenant]);

  React.useEffect(() => {
    if (dataTicket) {
      form.setFields([
        {
          name: 'area_id',
          value: dataTicket?.area_id,
        },
        {
          name: 'tenant_id',
          value: dataTicket?.tenant_id,
        },
        {
          name: 'type_id',
          value: dataTicket?.type_id,
        },
        {
          name: 'technician',
          value: dataTicket?.technician_id,
        },
        {
          name: 'type_ticket',
          value: dataTicket['Ticket Type'],
        },
        {
          name: 'deveui',
          value: dataTicket?.node_id,
        },
        {
          name: 'note',
          value: dataTicket.Note,
        },
      ]);
    }
  }, [dataTicket]);

  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.push('/ticket')} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.push('/ticket')}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Ticket</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Edit Ticket</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Edit Ticket</Typography.Title>
            </div>
          </Space>
        </Button>
      }
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      childrenContentStyle={{
        minHeight: '70vh',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | User</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Divider style={{ paddingTop: 0, marginTop: 0 }} />
      <Spin spinning={loading}>
        <Form
          form={form}
          name="add-area"
          onFinish={onFinish}
          layout="vertical"
          style={{
            margin: '0px auto',
            width: 700,
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="Select Area"
                name="area_id"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
              >
                <AreaDropdown
                  onChange={(value) => {
                    console.log(value, 'area id');
                  }}
                  disabled
                />
              </Form.Item>

              <Form.Item
                label="Tenant Name"
                name="tenant_id"
                rules={[{ required: true, message: 'Please input tenant name!' }]}
                requiredMark="optional"
              >
                <TenantDropdown
                  onChange={(value) => {
                    console.log('tenant id', value);
                    setSelectedTenant(value);
                  }}
                  disabled
                />
              </Form.Item>
              <Form.Item
                label="Technician"
                name="technician"
                rules={[{ required: true, message: 'Please select Techinician!' }]}
                requiredMark="optional"
              >
                <Select placeholder="Technician" className="not-rounded">
                  {dataTechnician.map((v: any) => {
                    return (
                      <Select.Option key={v.id} value={v.id}>
                        {v.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Type Ticket"
                name="type_ticket"
                rules={[{ required: true, message: 'Please input Type Ticket!' }]}
                requiredMark="optional"
              >
                <Select
                  className="not-rounded"
                  options={[
                    { value: 'installation', label: 'Installation' },
                    { value: 'maintenance', label: 'Maintenance' },
                    // { value: 'unassigned', label: 'Unassigned' },
                    // { value: 'preventive_maintenance', label: 'Preventive Maintenance' },
                  ]}
                  placeholder={'Type Ticket'}
                  onChange={(value) => setTypeTicket(value)}
                  disabled
                />
              </Form.Item>

              <Form.Item
                label="Device Type"
                name="type_id"
                rules={[{ required: true, message: 'Please selet Device Type!' }]}
                requiredMark="optional"
              >
                <Select
                  disabled
                  placeholder="Device Type"
                  onChange={(value) => {
                    console.log(value, 'device type');
                    setSelectedType(value);
                  }}
                  className="not-rounded"
                >
                  {dataNodeType.map((v: any) => {
                    return (
                      <Select.Option key={v.type_id} value={v.type_id}>
                        {v.name}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
              {typeTicket != 'installation' && (
                <Form.Item
                  label="DevEui"
                  name="deveui"
                  rules={[{ required: true, message: 'Please selet DevEui!' }]}
                  requiredMark="optional"
                >
                  <Select placeholder="DevEui" className="not-rounded" disabled>
                    {deviceCore.map((v: any) => {
                      return (
                        <Select.Option key={v.id} value={v.devEui}>
                          {v.deveui}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              )}
            </Col>
            <Col span={24}>
              <Form.Item
                label="Note"
                name="note"
                rules={[{ required: false, message: 'Please input note!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Message" rows={3} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Divider style={{ padding: 0, margin: 0 }} />
            </Col>
            <Col span={24}>
              <div style={{ textAlign: 'right' }}>
                <Space>
                  <Form.Item>
                    <Button
                      type="default"
                      htmlType="button"
                      onClick={() => history.push('/ticket')}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Space>
              </div>
            </Col>
          </Row>
        </Form>
      </Spin>
    </PageContainer>
  );
};

export default EditTicket;
