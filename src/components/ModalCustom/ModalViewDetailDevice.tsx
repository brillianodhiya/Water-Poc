/* eslint-disable react-hooks/exhaustive-deps */
import { getDetailDevice } from '@/services/nebula/device';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CodeSandboxOutlined,
  DesktopOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  LockOutlined,
  MergeCellsOutlined,
  NodeIndexOutlined,
  PicRightOutlined,
  ShopOutlined,
  StockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Modal, Row, Space, Spin, Tag, Typography } from 'antd';
import type { FunctionComponent } from 'react';
import React from 'react'; // importing FunctionComponent
import { DeviceAreaIcon } from '../Icons/DeviceArea';
import { getAddressFromLatLong } from '../Maps/GetAddress';
import MapPicker from '../Maps/MapPicker';

type ViewDetailNode = {
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  devEui?: string;
  typeName?: any;
  dataModal?: any;
};

export const ModalViewDetailNode: FunctionComponent<ViewDetailNode> = ({
  onOk,
  onCancel,
  open,
  devEui,
  typeName,
  dataModal,
}) => {
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [data, setData] = React.useState<any>(null);

  const getData = async () => {
    setLoading(true);
    const d = await getDetailDevice(devEui);

    setLoading(false);
    if (!d.error) {
      console.log(d.data, 'W');
      setData(d.data);
    }
  };

  console.log(data, 'DATA');

  React.useEffect(() => {
    setLoading(true);
    if (devEui && open) {
      getData();
    } else {
      // setDateFilter([moment().startOf('month'), moment().endOf('month')]);
      // setHeaderData([]);
      // setData([]);
    }
  }, [devEui, open]);

  React.useEffect(() => {
    if (!devEui) {
      setData(null);
    }
  }, [devEui]);

  console.log(dataModal);

  return (
    <>
      <Modal
        width={928}
        title={'Detail Device '}
        open={open}
        onOk={() => {
          setData(null);
          onOk();
        }}
        onCancel={() => {
          setData(null);

          onCancel();
        }}
        okText="Save"
        cancelText="Close"
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Spin spinning={loading}>
          <Card
            style={{
              borderRadius: 8,
            }}
          >
            <Space size={'middle'}>
              <Avatar src={dataModal?.Device_Type?.icon} icon={<UserOutlined />} />
              <Space direction="vertical">
                <Typography
                  style={{
                    color: 'rgba(0, 0, 0, 0.45)',
                  }}
                >
                  Device Type
                </Typography>
                <Typography.Title level={5}>
                  {dataModal?.Device_Type?.type_name || '-'}
                </Typography.Title>
              </Space>
              {data?.data?.valve == 'open' ? (
                <Tag
                  style={{
                    backgroundColor: '#52C41A',
                    color: '#fff',
                    borderRadius: 100,
                    padding: '0px 8px',
                  }}
                >
                  Online
                </Tag>
              ) : data?.data?.valve == 'close' ? (
                <Tag
                  style={{
                    backgroundColor: 'red',
                    color: '#fff',
                    borderRadius: 100,
                    padding: '0px 8px',
                  }}
                >
                  Offline
                </Tag>
              ) : null}
            </Space>
            <Row gutter={[16, 16]} wrap>
              <Col span={12}>
                <Row gutter={[16, 16]} wrap>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <CalendarOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Dev Eui</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.deveui || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <LockOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Application Key</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.application_key || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <NodeIndexOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Application Eui</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.application_eui || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <StockOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Frekuensi</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.region || '-'}</Typography>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row gutter={[16, 16]} wrap>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <CodeSandboxOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Brand/Model</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.brand || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <PicRightOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Profile</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.profile || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <MergeCellsOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Class</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.class || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <DesktopOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Lorawan MAC Version</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>{data?.data?.lora_wan_max_version || '-'}</Typography>
                  </Col>
                  <Col span={12}>
                    <Space size={'middle'}>
                      <ClockCircleOutlined
                        style={{
                          color: '#1890FF',
                        }}
                      />
                      <Typography>Interval</Typography>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Typography>
                      {dataModal?.interval ? dataModal?.interval + ' Minute' : '-'}
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <Row
            gutter={[16, 16]}
            style={{
              padding: 20,
            }}
          >
            <Col span={6}>
              <Space size={'middle'}>
                <DeviceAreaIcon
                  style={{
                    color: '#1890FF',
                  }}
                />
                <Typography>Area Name</Typography>
              </Space>
            </Col>
            <Col span={18}>
              <Typography>{dataModal?.area_name}</Typography>
            </Col>
            <Col span={6}>
              <Space size={'middle'}>
                <ShopOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
                <Typography>Tenant Name</Typography>
              </Space>
            </Col>
            <Col span={18}>
              <Typography>{dataModal?.tenant_name}</Typography>
            </Col>
            <Col span={6}>
              <Space size={'middle'}>
                <FileTextOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
                <Typography>Description</Typography>
              </Space>
            </Col>
            <Col span={18}>
              <Typography>{dataModal?.description}</Typography>
            </Col>
            <Col span={6}>
              <Space size={'middle'}>
                <EnvironmentOutlined
                  style={{
                    color: '#1890FF',
                  }}
                />
                <Typography>Location</Typography>
              </Space>
            </Col>
            <Col span={18}>
              <MapPicker
                center={{
                  lat: dataModal?.latitude,
                  lng: dataModal?.longitude,
                }}
                onChange={(v) => {
                  getAddressFromLatLong(v.lat, v.lng);
                }}
              />
            </Col>
          </Row>
        </Spin>
      </Modal>
    </>
  );
};
