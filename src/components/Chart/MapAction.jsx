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
import { FullBatteryIcon, LowBatteryIcon, MediumBatteryIcon } from '@/components/Icons/Battery';
import { GatewayBigIcon } from '@/components/Icons/GatewayIcon';
import { CloseOutlined } from '@ant-design/icons/lib/icons';
import moment from 'moment';

function CalculateCenter(locations) {
  if (locations.length > 1) {
    var latitude = 0,
      longitude = 0;

    for (var location of locations) {
      longitude += location.longitude;
      latitude += location.latitude;
    }
    latitude = latitude / locations.length;
    longitude = longitude / locations.length;

    return {
      latitude,
      longitude,
    };
  } else {
    return locations[0];
  }
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

  React.useEffect(() => {
    if (idLampu) {
      getData();
    }
  }, [idLampu]);

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

function Map({
  gateway = [],
  listrik = [],
  devices = [],
  // setDataModal,
  // setModalOpen,
  // setDimming,
  // setValve,
  // setIdLampu,
  // setModalView,
  // setDetailModal,
}) {
  // console.log(gateway, listrik, 'DEVICE');
  // const center = useMemo(() => {
  //   return { lat: -6.2, lng: 106.816666 };
  // }, []);
  const [center, setCenter] = React.useState({ lat: -6.301217600000018, lng: 106.65063795889552 });
  // const [selected, setSelected] = useState(null);
  const [mapref, setMapRef] = React.useState(null);
  const [infoMarkerId, setInfoMarkerId] = React.useState(null);
  const handleOnLoad = (map) => {
    setMapRef(map);
  };

  React.useEffect(() => {
    if (devices.length) {
      if (mapref) {
        // if (devices.length === 1) {
        //   mapref.setZoom(18);
        // } else {
        //   mapref.setZoom(14);
        // }

        const w = CalculateCenter(devices);
        setCenter({
          lat: w.latitude,
          lng: w.longitude,
        });
      }
    }
  }, [devices, mapref]);

  return (
    <GoogleMap
      zoom={14}
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
      {devices.map((v) => {
        let icon = '/pin_blue.svg';
        let color = '#FAAD14';

        v.iot_nodes.map((w) => {
          if (parseFloat(w.live_battery ?? 0) > 20 && parseFloat(w.live_battery ?? 0) <= 50) {
            icon = '/pin_yellow.svg';
            color = '#FAAD14';
          } else if (parseFloat(w.live_battery ?? 0) <= 20) {
            icon = '/device red.svg';
            color = '#FF4D4F';
          } else if (parseFloat(w.live_battery ?? 0) > 50) {
            icon = '/device green.svg';
            color = '#52C41A';
          }
        });
        // if (v.status == 'close') {
        //   icon = '/LampuRed.svg';
        // } else if (v.is_dimming) {
        //   icon = '/LampuGreen.svg';
        // }

        const content = (
          <div>
            <div>
              <Typography style={{ fontSize: '14px', color: 'gray' }}>Site Name</Typography>
              <Typography style={{ fontSize: '18px' }}>{v.tenant_name}</Typography>
            </div>
            <div
              style={{
                marginTop: '14px',
              }}
            >
              {v.iot_nodes.map((v2) => {
                return (
                  <div
                    key={v.devEui}
                    style={{
                      marginTop: '24px',
                    }}
                  >
                    <Typography style={{ fontSize: '14px', fontWeight: 'bold' }}>
                      {v2.iot_node_type?.type_name}
                    </Typography>
                    <Typography style={{ fontSize: '14px', color: 'gray' }}>
                      {v2?.devEui}
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                      }}
                    >
                      <Typography style={{ fontSize: '14px', color: 'gray' }}>
                        Battery Level
                      </Typography>
                      <Typography style={{ fontSize: '14px' }}>
                        <>
                          {v2.live_battery > 20 && v2.live_battery <= 50 ? (
                            <Space>
                              <MediumBatteryIcon />
                              <span>{v2.live_battery ?? '0'}%</span>
                            </Space>
                          ) : v2.live_battery <= 20 ? (
                            <Space>
                              <LowBatteryIcon />
                              <span>{v2.live_battery ?? '0'}%</span>
                            </Space>
                          ) : v2.live_battery > 50 ? (
                            <Space>
                              <FullBatteryIcon />
                              <span>{v2.live_battery ?? '0'}%</span>
                            </Space>
                          ) : null}
                        </>
                      </Typography>
                    </div>
                    <div
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                        display: v2.iot_node_type.type_id == 32 ? 'none' : 'flex',
                      }}
                    >
                      <Typography style={{ fontSize: '14px', color: 'gray' }}>
                        Current Level
                      </Typography>
                      <div>
                        {v2.live_battery > 20 && v2.live_battery <= 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="#FAAD14">
                            {v2.current_water_level} m3
                          </Tag>
                        ) : v2.live_battery <= 20 ? (
                          <Tag style={{ marginRight: '-4px' }} color="red">
                            {v2.current_water_level} m3
                          </Tag>
                        ) : v2.live_battery > 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="green">
                            {v2.current_water_level} m3
                          </Tag>
                        ) : null}
                      </div>
                    </div>
                    <div
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                        display: v2.iot_node_type.type_id == 32 ? 'none' : 'flex',
                      }}
                    >
                      <Typography style={{ fontSize: '14px', color: 'gray' }}>
                        Sendimentasi
                      </Typography>
                      <div>
                        {v2.live_battery > 20 && v2.live_battery <= 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="#FAAD14">
                            {v2.current_sedimentasi} m3
                          </Tag>
                        ) : v2.live_battery <= 20 ? (
                          <Tag style={{ marginRight: '-4px' }} color="red">
                            {v2.current_sedimentasi} m3
                          </Tag>
                        ) : v2.live_battery > 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="green">
                            {v2.current_sedimentasi} m3
                          </Tag>
                        ) : null}
                      </div>
                    </div>
                    <div
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '8px',
                        display: v2.iot_node_type.type_id == 31 ? 'none' : 'flex',
                      }}
                    >
                      <Typography style={{ fontSize: '14px', color: 'gray' }}>
                        Current Speed
                      </Typography>
                      <div>
                        {v2.live_battery > 20 && v2.live_battery <= 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="#FAAD14">
                            {v2.current_flow_speed} m3
                          </Tag>
                        ) : v2.live_battery <= 20 ? (
                          <Tag style={{ marginRight: '-4px' }} color="red">
                            {v2.current_flow_speed} m3
                          </Tag>
                        ) : v2.live_battery > 50 ? (
                          <Tag style={{ marginRight: '-4px' }} color="green">
                            {v2.current_flow_speed} m3
                          </Tag>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
        if (v.latitude && v.longitude) {
          // console.log(v, 'V');

          return (
            <>
              {' '}
              <Marker
                // onMouseOver={(w) => {
                //   console.log(w, 'W');
                // }}
                key={v.tenant_name}
                icon={{
                  url: icon,
                  scaledSize: { width: 32, height: 32 },
                }}
                // onClick={(props) => {
                //   setModalOpen(true);
                //   setDataModal(v);
                // setValve(v.status == 'open' ? true : false);
                // setDimming(v.brightness);
                // setIdLampu(v.id);
                // }}
                onClick={() => {
                  if (infoMarkerId) {
                    setInfoMarkerId(null);
                  } else {
                    setInfoMarkerId(v.id);
                  }
                }}
                position={{
                  lat: parseFloat(v.latitude),
                  lng: parseFloat(v.longitude),
                }}
              >
                <InfoBox
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}
                  position={{
                    lat: parseFloat(v.latitude),
                    lng: parseFloat(v.longitude),
                  }}
                >
                  <Popover
                    placement="right"
                    key={v.tenant_name}
                    content={content}
                    trigger={['click']}
                    open={infoMarkerId === v.id}
                    overlayInnerStyle={{
                      borderTop: `2px solid ${color}`,
                      borderRadius: 8,
                    }}
                  />

                  {/* </Popover> */}
                </InfoBox>
              </Marker>
            </>
          );
        }
      })}
    </GoogleMap>
  );
}
