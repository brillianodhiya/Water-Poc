import {
  getTechnician,
  getTicketById,
  UpdateStatusTicket,
  UpdateTechnicianTicket,
} from '@/services/nebula/ticket';
import { DownCircleOutlined, EditOutlined, UploadOutlined, WarningFilled } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  Row,
  Select,
  Space,
  Steps,
  Typography,
  Upload,
} from 'antd';

import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import { AttachmentIcon } from '../Icons/Attachment';
import { TicketYellowIcon } from '../Icons/Ticket';
moment.locale('en');
type TicketType = {
  data: any;
};

const TicketingSide: React.FC<TicketType> = ({ data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [dataTicket, setdataTicket] = React.useState<any>([]);
  const [dataTechnician, setDataTechnician] = React.useState<any>([]);
  const [editTechician, setEditTechician] = React.useState(false);
  const [editAttachment, setEditAttachment] = React.useState(false);
  // const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  // const fileList: UploadFile[] = [];

  const getData = async () => {
    setLoading(true);
    const d = await getTicketById(data.id);
    setLoading(false);
    if (!d.error) {
      console.log(d, 'detail data');
      setdataTicket(d.data);
    }
  };

  const getListTechnician = async () => {
    setLoading(true);
    const res = await getTechnician({});
    setLoading(false);
    if (!res.error) {
      setDataTechnician(res.data);
    }
  };

  const onFinish = async (value: any) => {
    console.log(value, 'valuie');
    setLoading(true);
    const d = await UpdateTechnicianTicket({
      no_ticket: dataTicket.no_ticket,
      technician: value.technician,
    });
    setEditTechician(false);
    setLoading(false);
    if (!d.error) {
      Modal.success({
        content: d.message,
      });
      getData();
    } else {
      Modal.error({
        content: d.message,
      });
    }
  };

  const handleCancel = () => {
    Modal.confirm({
      title: 'Are you sure to Cancel  ?',
      icon: <WarningFilled />,
      onOk: async () => {
        setLoading(true);
        const d = await UpdateStatusTicket({
          no_ticket: dataTicket.no_ticket,
          action: 'cancelled',
        });
        setLoading(false);
        if (!d.error) {
          Modal.success({
            content: d.message,
          });
          getData();
        } else {
          Modal.error({
            content: d.message,
          });
        }
      },
      onCancel() {},
    });
  };
  // const getListImage = () => {
  //   dataTicket?.Nebula_Images_Tickets?.map((e: any) =>
  //     fileList.push({
  //       uid: '-1',
  //       name: 'image.png',
  //       status: 'done',
  //       url: e.name_file,
  //     }),
  //   );
  //   console.log({ fileList });
  // };
  React.useEffect(() => {
    if (data.id) {
      getData();
      setEditTechician(false);
    }
  }, [data.id]);

  React.useEffect(() => {
    getListTechnician();
  }, []);
  // React.useEffect(() => {
  //   if (data.id) {
  //     getListImage();
  //   }
  // }, [data.id]);

  const propsUpload: UploadProps = {
    // onChange({ file, fileList }) {
    //   if (file.status !== 'uploading') {
    //     console.log(file, fileList);
    //   }
    // },
    // defaultFileList: [...fileList],
  };

  return (
    <>
      <Col xxl={10} xl={10} lg={10} md={12} sm={24} xs={24} style={{ paddingTop: 20 }}>
        <Row gutter={[16, 16]} justify="space-between">
          <Col>
            <Space>
              <TicketYellowIcon />
              <Typography.Link style={{ fontSize: 16 }}>{dataTicket?.no_ticket}</Typography.Link>
            </Space>
          </Col>
          <Col>
            <Typography>Create Date : {moment().format('DD-MM-YYYY')}</Typography>
          </Col>
        </Row>
        <Typography>Ticket Name</Typography>
        <Typography.Title level={4}>{dataTicket.ticket_name}</Typography.Title>
        <Typography.Text strong>Message</Typography.Text>
        <Typography.Paragraph>{dataTicket.message}</Typography.Paragraph>
        <Card
          style={{
            borderRadius: 8,
            marginBottom: 20,
          }}
          bodyStyle={{
            backgroundColor: ' rgba(230, 247, 255, 0.5)',
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography>Area</Typography>
              <Typography.Text strong>{dataTicket?.Nebula_Area?.area_name}</Typography.Text>
            </Col>
            {/* <Col span={18}>
              <Typography>Installation</Typography>
              <Typography.Text strong>Node</Typography.Text>
            </Col> */}
            <Col span={6}>
              <Typography>Node Type</Typography>
              <Typography.Text strong>{dataTicket?.type_id?.name || '-'}</Typography.Text>
            </Col>
            {/* <Col span={6}>
              <Typography>Scope</Typography>
              <Typography.Text strong>Tenant</Typography.Text>
            </Col> */}
            <Col span={18}>
              <Typography>Tenant Name</Typography>
              <Typography.Text strong>{dataTicket?.Nebula_Tenant?.name}</Typography.Text>
            </Col>
          </Row>
        </Card>
        <Row style={{ width: 500 }} gutter={[8, 8]}>
          <Col span={16}>
            <Typography>Attachment</Typography>
          </Col>
          <Col span={8}>
            <Button icon={<EditOutlined />} type="text" onClick={() => setEditAttachment(true)} />
          </Col>
          {!editAttachment ? (
            dataTicket?.Nebula_Images_Tickets?.map((e: any) => {
              return (
                <>
                  <Col xxl={24}>
                    <Space>
                      <AttachmentIcon />
                      <Typography>
                        {e.name_file.substring(e.name_file.lastIndexOf('/') + 1)}
                      </Typography>
                    </Space>
                  </Col>
                  {/* <Col xxl={8}>
                      <Button icon={<DeleteOutlined />} type="text" />
                    </Col> */}
                </>
              );
              // return e.name_file.substring(e.name_file.lastIndexOf('/') + 1);
            })
          ) : (
            <Col span={24}>
              <Upload {...propsUpload}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Col>
          )}
        </Row>
      </Col>
      <Col
        xxl={6}
        xl={6}
        lg={6}
        md={12}
        sm={12}
        xs={24}
        style={{
          paddingTop: 20,
          paddingLeft: 20,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Space direction="vertical">
              <Typography>Status</Typography>
              {(() => {
                if (dataTicket.status == 'new') {
                  return (
                    <Button
                      shape="round"
                      size="large"
                      style={{
                        backgroundColor: '#52C41A',
                        color: 'white',
                        textTransform: 'capitalize',
                      }}
                    >
                      {dataTicket.status}
                    </Button>
                  );
                } else if (dataTicket.status == 'on progress') {
                  return (
                    <Button
                      shape="round"
                      size="large"
                      style={{
                        backgroundColor: '#1890FF',
                        color: 'white',
                      }}
                    >
                      {dataTicket.status}
                    </Button>
                  );
                } else {
                  return (
                    <Button shape="round" size="large" disabled>
                      {dataTicket.status}
                    </Button>
                  );
                }
              })()}
            </Space>
          </Col>
          <Col span={24}>
            <Space direction="vertical">
              <Typography>Ticket Type</Typography>
              <Button
                shape="round"
                size="large"
                style={{
                  textTransform: 'capitalize',
                }}
              >
                {dataTicket.type_ticket}
              </Button>
            </Space>
          </Col>
          <Col span={16}>
            <Space direction="vertical">
              <Typography.Text>Technician</Typography.Text>
              {!editTechician && (
                <Typography.Text strong>{dataTicket?.technician?.name}</Typography.Text>
              )}
            </Space>
          </Col>
          {dataTicket.status == 'new' ? (
            <Col>
              {!editTechician && (
                <Button type="primary" ghost onClick={() => setEditTechician(true)}>
                  Edit
                </Button>
              )}
            </Col>
          ) : null}
          <Col span={24}>
            {editTechician && (
              <Form form={form} onFinish={onFinish}>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      name="technician"
                      rules={[{ required: true, message: 'Please select Techinician!' }]}
                      requiredMark="optional"
                    >
                      <Select
                        placeholder="Technician"
                        style={{
                          width: 200,
                        }}
                      >
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
                  <Col>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            )}
          </Col>
          <Col span={24}>
            <Space direction="vertical">
              <Typography.Text>Due Date</Typography.Text>
              <Typography.Text
                strong
                style={{
                  fontWeight: 'bold',
                }}
              >
                {moment(dataTicket?.due_date).format('DD-MM-YYYY')}
              </Typography.Text>
            </Space>
          </Col>
          <Col xxl={24}>
            <Space direction="vertical">
              <Space>
                <DownCircleOutlined style={{ color: '#1890FF' }} />
                <Typography.Text>Ticket History</Typography.Text>
              </Space>
              <Steps
                progressDot
                current={1}
                direction="vertical"
                items={[
                  {
                    title: 'Distribution to Sonja Crooks MD',
                    description: '2022-11-17 22:20:44',
                  },
                  {
                    title: 'Assigned to Aliice Bayer',
                    description: '2022-11-17 22:20:44',
                  },
                  {
                    title: 'Created by Admin',
                    description: '2022-11-17 22:20:44',
                  },
                ]}
              />
            </Space>
          </Col>
          <Col xxl={24}>
            {dataTicket.status != 'cancelled' ? (
              <Button
                danger
                block
                size="large"
                style={{ padding: '0px 60px' }}
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            ) : (
              <Button danger block size="large" style={{ padding: '0px 60px' }} onClick={() => {}}>
                Close
              </Button>
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default TicketingSide;
