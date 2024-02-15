// import { IntensitySlider } from '@/components/CustomInput/IntensitySlider';
import { LampuIcon } from '@/components/Icons/LampuIcon';
import { NodeBigIcon } from '@/components/Icons/NodeIcon';
import { GoogleMap, InfoBox, Marker, useLoadScript } from '@react-google-maps/api';
import {
  Avatar,
  Button,
  Col,
  Divider,
  Modal,
  Popover,
  Row,
  Skeleton,
  Space,
  Spin,
  Switch,
  Tag,
  Typography,
} from 'antd';
import React from 'react';
// import { ApiSetDimming, ApiSetValve, getLampu } from '@/services/badiklat/device';
import { converNumberSmNotFixed } from '@/components/config.usage';
import { FullBatteryIcon, LowBatteryIcon, MediumBatteryIcon } from '@/components/Icons/Battery';
import { GatewayBigIcon } from '@/components/Icons/GatewayIcon';
import { CloseOutlined } from '@ant-design/icons/lib/icons';
import moment from 'moment';
import MarkerClusterer from '@react-google-maps/marker-clusterer';
import { history } from '@umijs/max';

function CalculateCenter(locations) {
  if (locations.length === 0) return { lat: 0, lng: 0 };

  const avgLat = locations.reduce((sum, location) => sum + location.latitude, 0) / locations.length;
  const avgLng =
    locations.reduce((sum, location) => sum + location.longitude, 0) / locations.length;

  return { lat: avgLat, lng: avgLng };
}

export const MapAction = ({ devices = [], getDataCountMap = () => {}, loadingGtLamp }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI',
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [dataModal, setDataModal] = React.useState({});
  const [idLampu, setIdLampu] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const [valve, setValve] = React.useState(false);
  const [dimming, setDimming] = React.useState(0);

  const [modalView, setModalView] = React.useState(false);
  const [detailModal, setDetailModal] = React.useState({});

  const getData = async () => {
    // setLoading(true);
    // const data = await getLampu({
    //   params: {
    //     id: idLampu,
    //   },
    // });
    // setLoading(false);
    // if (!data.error) {
    //   // console.log(data, 'DATA Lampu');
    //   if (data.data.length > 0) {
    //     const w = data.data[0];
    //     setDimming(w.brightness);
    //     setDataModal({
    //       ...dataModal,
    //       ...w,
    //     });
    //   }
    // }
  };

  const saveData = async (dim, val) => {
    // setLoading(true);
    // const valve = await ApiSetValve({
    //   devEui: dataModal.devEui,
    //   status: val ? 'on' : 'off',
    // });
    // console.log(dimming, 'DIMMING');
    // const dimming = await ApiSetDimming({
    //   devEui: dataModal.devEui,
    //   dimming: dim,
    // });
    // if (!valve.error) {
    //   message.success(valve.message);
    // }
    // if (!dimming.error) {
    //   message.success(dimming.message);
    // }
    // setLoading(false);
    // setIdLampu(0);
    // setModalOpen(false);
    // getDataCountMap();
  };

  // console.log(detailModal, 'DIMMING OUT');

  // React.useEffect(() => {
  //   if (idLampu) {
  //     getData();
  //   }
  // }, [idLampu]);

  if (!isLoaded) return <Skeleton active={true} />;

  return (
    <div
      style={{
        maxWidth: '105%',
        margin: '-24px',
        overflow: 'hidden',
        borderRadius: '16px',
        // borderBottomRightRadius: '16px',
      }}
    >
      <Modal
        open={modalOpen}
        className="modal-setting-dashboard"
        onCancel={() => {
          setModalOpen(false);
          setIdLampu(0);
        }}
        footer={null}
        width={400}
      >
        <Skeleton active loading={loading}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Space>
              <Avatar
                icon={<LampuIcon />}
                size={50}
                style={{
                  background: '#FAAD14',
                }}
              />
              <Typography
                style={{
                  fontSize: '14px',
                }}
              >
                {dataModal?.sm_panel_profile?.panel_name} <br />
                {dataModal.desc || dataModal.devEui}
              </Typography>
            </Space>
            <Switch checked={valve} onChange={(checked) => setValve(checked)} />
          </div>
          <Divider />
          <Row gutter={[8, 8]} style={{ marginBottom: '14px' }}>
            <Col span={24}>
              <Typography.Title level={4}>{dataModal.brand}</Typography.Title>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Installation Date</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {moment(dataModal.installation_date).format('YYYY-MM-DD HH:mm:ss')}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Last Update</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {dataModal.last_update
                  ? moment(dataModal.last_update).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Bright</Typography>
              <Typography style={{ fontSize: '15px' }}>{dataModal.brightness}%</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Act. Power</Typography>
              <Typography style={{ fontSize: '15px' }}>{dataModal.active_power || '-'}</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Act. Energy</Typography>
              <Typography style={{ fontSize: '15px' }}>{dataModal.active_energy || '-'}</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Volt</Typography>
              <Typography style={{ fontSize: '15px' }}>{dataModal.voltage || '-'}</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Temp</Typography>
              <Typography style={{ fontSize: '15px' }}>{dataModal.temperature || '-'}</Typography>
            </Col>
            {/* <Col span={24}>
              <IntensitySlider value={dimming} onChange={(val) => setDimming(val)} />
            </Col> */}
          </Row>
          <div style={{ width: '100%' }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Button
                  type="primary"
                  block
                  onClick={() => {
                    saveData(dimming, valve);
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  block
                  onClick={() => {
                    setModalOpen(false);
                    setIdLampu(0);
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Skeleton>
      </Modal>
      <Modal
        open={modalView}
        onCancel={() => {
          setModalView(false);
          setDetailModal({});
        }}
        className="modal-setting-dashboard"
        footer={null}
        width={400}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Space>
            {!detailModal.area_id ? (
              <Avatar
                size={60}
                style={{
                  marginTop: '8px',
                  paddingTop: '5px',
                  background: '#722ED1',
                }}
              >
                <GatewayBigIcon />
              </Avatar>
            ) : (
              <Avatar
                icon={<NodeBigIcon />}
                size={60}
                style={{
                  marginTop: '8px',

                  background: '#1890FF',
                }}
              />
            )}
            <Typography
              style={{
                fontSize: '14px',
              }}
            >
              {detailModal?.sm_panel_profile?.panel_name || detailModal.gateway_name} <br />
              {detailModal.devEui}
            </Typography>
          </Space>
          <Button
            onClick={() => {
              setModalView(false);
              setDetailModal({});
            }}
            size="large"
            type="text"
            icon={<CloseOutlined />}
          />
        </div>
        <Divider />
        {!detailModal.area_id ? (
          <Row gutter={[8, 8]} style={{ marginBottom: '14px' }}>
            <Col span={24}>
              <Typography.Title level={4}>{detailModal.brand}</Typography.Title>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Installation Date</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {moment(detailModal.installation_date).format('YYYY-MM-DD HH:mm:ss')}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Last Active</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {detailModal.last_update
                  ? moment(detailModal.last_update).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Model</Typography>
              <Typography style={{ fontSize: '15px' }}>{detailModal.model || '-'}</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Status</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {detailModal.status ? 'Online' : 'Offline'}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Description</Typography>
              <Typography style={{ fontSize: '15px' }}>{detailModal.description || '-'}</Typography>
            </Col>
          </Row>
        ) : (
          <Row gutter={[8, 8]} style={{ marginBottom: '14px' }}>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Area</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {detailModal?.sm_area_profile?.area_name}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Panel</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {detailModal?.sm_panel_profile?.panel_name}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Installation Date</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {moment(detailModal.installation_date).format('YYYY-MM-DD HH:mm:ss')}
              </Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Last Update</Typography>
              <Typography style={{ fontSize: '15px' }}>
                {detailModal.last_update
                  ? moment(detailModal.last_update).format('YYYY-MM-DD HH:mm:ss')
                  : '-'}
              </Typography>
            </Col>

            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Battery</Typography>
              <Typography style={{ fontSize: '15px' }}>{detailModal.battery}%</Typography>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: '15px' }}>Relay</Typography>
              <Typography style={{ fontSize: '15px' }}>{detailModal.status}</Typography>
            </Col>
          </Row>
        )}
      </Modal>
      <Spin spinning={loadingGtLamp}>
        <Map
          devices={devices}
          setValve={setValve}
          setDimming={setDimming}
          setDataModal={setDataModal}
          setModalOpen={setModalOpen}
          setIdLampu={setIdLampu}
          setModalView={setModalView}
          setDetailModal={setDetailModal}
        />
      </Spin>
    </div>
  );
};

function Map({ gateway = [], listrik = [], devices = [] }) {
  const [center, setCenter] = React.useState({ lat: -6.1636608, lng: 106.7286528 });
  const [tenantName, setTenantName] = React.useState(undefined);
  const [contentPopOver, setContentPopOver] = React.useState(<div>test</div>);
  const [colorPopOver, setColorPopOver] = React.useState('blue');
  const [visible, setVisible] = React.useState(false);

  const [mapref, setMapRef] = React.useState(null);
  const [infoMarkerId, setInfoMarkerId] = React.useState(null);
  const handleOnLoad = (map) => {
    setMapRef(map);
  };

  React.useEffect(() => {
    if (devices.length > 0) {
      if (mapref) {
        const w = CalculateCenter(devices);

        setTimeout(() => {
          setCenter({
            lat: devices[0].latitude,
            lng: devices[0].longitude,
          });
        }, 1000);
      }
    }
  }, [devices, mapref]);

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      onDragStart={() => setInfoMarkerId(null)}
      onLoad={handleOnLoad}
      options={{
        styles: [
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          { elementType: 'labels', featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
        ],
      }}
    >
      {/* <MarkerClusterer options={clusterOptions}> */}
      {/* {renderClusterer} */}
      {devices.map((v) => {
        let icon = '/pin_blue.svg';
        let color = '#FAAD14';

        // console.log(v.title, 'TITLE');

        // v.iot_nodes?.map((w) => {
        if (v.icon == 'warning') {
          icon = `/map_${v.title}_yellow.svg`;
          color = '#FAAD14';
        } else if (v.icon == 'danger') {
          icon = `/map_${v.title}_red.svg`;
          color = '#FF4D4F';
        } else {
          icon = `/pin_${v.title}_blue.svg`;
          color = '#52C41A';
        }

        const content = (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Typography style={{ fontSize: '14px', color: 'gray' }}>Tenant Name</Typography>
                <Typography style={{ fontSize: '18px' }}>{v.Tenant}</Typography>
              </div>
              <Button
                type="text"
                onClick={() => {
                  setInfoMarkerId(null);
                  setVisible(false);
                }}
              >
                <CloseOutlined />
              </Button>
            </div>
            <div
              style={{
                marginTop: '14px',
              }}
            >
              <div
                key={v.devEui}
                style={{
                  marginTop: '24px',
                }}
              >
                <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>{v.title}</Typography>
                <Typography
                  style={{ fontSize: '14px', color: 'blue', cursor: 'pointer' }}
                  onClick={() => {
                    window.open(`/device?id=${v.device_id}`);
                  }}
                >
                  {v?.devEui}
                </Typography>

                {v.log.map((v3) => {
                  if (v3.type == 'battery') {
                    return (
                      <div
                        key={v3.name}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: '8px',
                          display: 'flex',
                          gap: '20px',
                        }}
                      >
                        <Typography style={{ fontSize: '14px', color: 'gray' }}>
                          {v3.name}
                        </Typography>
                        <div>
                          {v3.value > 20 && v3.value <= 50 ? (
                            <Tag style={{ marginRight: '-4px' }} color="#FAAD14">
                              {converNumberSmNotFixed(v3.value)} {v3.unit}
                            </Tag>
                          ) : v3.value <= 20 ? (
                            <Tag style={{ marginRight: '-4px' }} color="red">
                              {converNumberSmNotFixed(v3.value)} {v3.unit}
                            </Tag>
                          ) : v3.value > 50 ? (
                            <Tag style={{ marginRight: '-4px' }} color="green">
                              {converNumberSmNotFixed(v3.value)} {v3.unit}
                            </Tag>
                          ) : null}
                        </div>
                      </div>
                    );
                  } else if (v3.type == 'status') {
                    return (
                      <div
                        key={v3.name}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: '8px',
                          display: 'flex',
                          gap: '20px',
                        }}
                      >
                        <Typography style={{ fontSize: '14px', color: 'gray' }}>
                          {v3.name}
                        </Typography>
                        <div>
                          {v3.value == 'ONLINE' ? (
                            <Tag style={{ marginRight: '-4px' }} color="green">
                              {v3.value}
                            </Tag>
                          ) : v3.value == 'OFFLINE' ? (
                            <Tag style={{ marginRight: '-4px' }} color="red">
                              {v3.value}
                            </Tag>
                          ) : null}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={v3.name}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: '8px',
                          display: 'flex',
                          gap: '20px',
                        }}
                      >
                        <Typography style={{ fontSize: '14px', color: 'gray' }}>
                          {v3.name}
                        </Typography>
                        <div>
                          {v3.value} {v3.unit}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        );
        if (v.latitude && v.longitude) {
          return [
            <Marker
              key={v.title}
              icon={{
                url: icon,
                scaledSize: { width: 32, height: 32 },
              }}
              onClick={() => {
                setCenter({
                  lat: v.latitude,
                  lng: v.longitude,
                });
                if (infoMarkerId) {
                  setInfoMarkerId(null);
                  setVisible(false);
                } else {
                  setInfoMarkerId(v.device_id);
                  setTenantName(v.Tenant);
                  setContentPopOver(content);
                  setVisible(true);
                  if (v.icon == 'warning') {
                    setColorPopOver('#FAAD14');
                  } else if (v.icon == 'danger') {
                    setColorPopOver('#FF4D4F');
                  } else {
                    setColorPopOver('#52C41A');
                  }
                }
              }}
              position={{
                lat: v.latitude,
                lng: v.longitude,
              }}
            />,
          ];
        }
      })}
      <InfoBox
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
        position={{
          lat: center.latitude,
          lng: center.longitude,
        }}
      >
        <Popover
          placement="top"
          key={tenantName}
          content={contentPopOver}
          // trigger={['click']}
          open={visible}
          overlayInnerStyle={{
            borderTop: `2px solid ${colorPopOver}`,
            borderRadius: 8,
          }}
        />
      </InfoBox>
      {/* <>
              <InfoBox
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
                position={{
                  lat: v.latitude,
                  lng: v.longitude,
                }}
              >
                <Popover
                  placement="top"
                  key={v.tenant_name}
                  content={content}
                  trigger={['click']}
                  open={infoMarkerId === v.device_id}
                  overlayInnerStyle={{
                    borderTop: `2px solid ${color}`,
                    borderRadius: 8,
                  }}
                />
              </InfoBox>
            </> */}
      {/* </MarkerClusterer> */}
    </GoogleMap>
  );
}
