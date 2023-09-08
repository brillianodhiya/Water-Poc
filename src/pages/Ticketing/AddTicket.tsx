import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import type { UploadFile, UploadProps } from 'antd';
import {
  Breadcrumb,
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  Upload,
} from 'antd';

import { getDeviceCore, getDeviceNodeType } from '@/services/nebula/device';
import { getTechnician } from '@/services/nebula/ticket';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import api from '../../../config/axiosConfig';
moment.locale('en');
const AddTicket = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [dataTechnician, setDataTechnician] = React.useState<any>([]);
  const [dataNodeType, setDataNodeType] = React.useState<any>([]);
  const [typeTicket, setTypeTicket] = React.useState('installation');
  const [deviceCore, setDeviceCore] = React.useState<any[]>([]);

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
    const data = await getDeviceNodeType({});
    setLoading(false);
    if (!data.error) {
      setDataNodeType(data.data);
    }
  };

  const getDeviceId = async () => {
    setLoading(true);
    const data = await getDeviceCore({});
    console.log(data.data, 'device core data');
    setLoading(false);
    if (!data.error) {
      setDeviceCore(data.data);
    }
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const onFinish = async (values: any) => {
    console.log(values);
    // setLoading(true);
    const formData = new FormData();
    fileList.map((val) => {
      formData.append('images', val.originFileObj);
    });
    formData.append('ticket_name', values.ticket_name);
    formData.append('message', values.message);
    formData.append('area_id', values.area_id);
    formData.append('tenant_id', values.tenant_id);
    formData.append('type_ticket', values.type_ticket);
    formData.append('technician', values.technician);
    formData.append('due_date', values.due_date);
    formData.append('type_id', values.type_id);
    formData.append('deveui', values.deveui);

    const data = await api({
      url: '/ticket',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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
  };

  // const attachment: (RcFile | undefined)[] = [];

  fileList.map((val) => {
    console.log(val.originFileObject, 'data');
  });
  // // console.log(fileList.originFileObj);

  const getDataApi = () => {
    getData();
    getNodeType();
    getDeviceId();
  };

  React.useEffect(() => {
    getDataApi();
  }, []);

  return (
    <PageContainer
      breadcrumb={undefined}
      title={
        <Button type="link" onClick={() => history.back()} size="large">
          <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
            <ArrowLeftOutlined
              onClick={() => history.back()}
              style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <Breadcrumb>
                <Breadcrumb.Item>Ticket</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Add Ticket</Breadcrumb.Item>
              </Breadcrumb>
              <Typography.Title level={5}>Add Ticket</Typography.Title>
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
        <title>AAT | User</title>
        <link rel="icon" href="/logoaat.png" type="image/x-icon" />
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
            <Col span={24}>
              <Form.Item
                label="Ticket Name"
                name="ticket_name"
                rules={[{ required: true, message: 'Please input ticket name!' }]}
                requiredMark="optional"
              >
                <Input placeholder="Ticket Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Description"
                name="message"
                rules={[{ required: true, message: 'Please input message!' }]}
                requiredMark="optional"
              >
                <Input.TextArea placeholder="Message" rows={3} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Select Area"
                name="area_id"
                rules={[{ required: true, message: 'Please input area name!' }]}
                requiredMark="optional"
              >
                <AreaDropdown onChange={() => {}} />
              </Form.Item>

              <Form.Item
                label="Tenant Name"
                name="tenant_id"
                rules={[{ required: true, message: 'Please input tenant name!' }]}
                requiredMark="optional"
              >
                <TenantDropdown onChange={() => {}} />
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
              <Form.Item
                label="Attachment"
                name="attachment"
                rules={[{ required: false, message: 'Please input attachment!' }]}
                requiredMark="optional"
              >
                <Upload name="attachment" onChange={handleChange}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
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
                    { value: 'unassigned', label: 'Unassigned' },
                    // { value: 'preventive_maintenance', label: 'Preventive Maintenance' },
                  ]}
                  placeholder={'Type Ticket'}
                  onChange={(value) => setTypeTicket(value)}
                />
              </Form.Item>

              <Form.Item
                label="Device Type"
                name="type_id"
                rules={[{ required: true, message: 'Please selet Device Type!' }]}
                requiredMark="optional"
              >
                <Select placeholder="Device Type" className="not-rounded">
                  {dataNodeType.map((v: any) => {
                    return (
                      <Select.Option key={v.id} value={v.id}>
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
                  <Select placeholder="DevEui" className="not-rounded">
                    {deviceCore.map((v: any) => {
                      return (
                        <Select.Option key={v.id} value={v.deveui}>
                          {v.deveui}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              )}
              <Form.Item
                label="Due Date"
                name="due_date"
                style={{ width: '100%' }}
                rules={[{ required: true, message: 'Please input due date!' }]}
                requiredMark="optional"
              >
                <DatePicker
                  placeholder="Due Date"
                  className="not-rounded"
                  style={{ width: '100%' }}
                />
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

export default AddTicket;
