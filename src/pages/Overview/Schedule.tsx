/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { PageContainer } from '@ant-design/pro-components';
import {
  Badge,
  Button,
  Calendar,
  Card,
  Col,
  Dropdown,
  Menu,
  Modal,
  Row,
  Space,
  Spin,
  Typography,
} from 'antd';
import React from 'react';
import type { Moment } from 'moment';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import 'moment/locale/id';
import moment from 'moment';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import RoomFilter from '@/components/ScheduleFilter/RoomFilter';
// import InternalFilter from '@/components/ScheduleFilter/InternalFilter';
import { SetSchedule } from '@/components/Form/SetSchedule';
import { ApiDeleteSchedule, apiGetListEvent } from '@/services/badiklat/schedule';
import { EditSchedule } from '@/components/Form/EditSchedule';
import FullMonthCalendar from './Schedule/FullMonthCalendar';
import { ScheduleSide } from '@/components/ProfileSide/ScheduleSide';
// import { useElementSize } from 'use-element-size';

moment.locale('en');

const Schedule: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [roomSelected, setRoomSelected] = React.useState<any[]>();
  const [internalSelected, setInternalSelected] = React.useState<any[]>();
  const [typeView, setTypeView] = React.useState('weekly');
  const [modalSetSchedule, setModalSetSchedule] = React.useState(false);
  const [selectedCalendar, setSelectedCalendar] = React.useState<Moment>(moment());
  const [scheduleData, setScheduleData] = React.useState<
    {
      date: number;
      full_date: string;
      schedule: {
        scedule_type: string;

        type: string;
        name: string;
        time: string;
        other: string;
        scadule_time_start: string;
        scadule_time_end: string;
        id: number;
        id_schedule: number;
        iots_scedule_days: any[];
      }[];
    }[]
  >([]);
  const [modalViewSchedule, setModalViewSchedule] = React.useState(false);
  const [dataViewSchedule, setDataViewSchedule] = React.useState<{
    type?: string;
    name?: string;
    time?: string;
    other?: string;
    scadule_time_start?: string;
    scadule_time_end?: string;
    id?: number;
    id_schedule?: number;
    iots_scedule_days?: any[];
    scedule_type?: string;
  }>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState(false);
  const [loadingTenant, setLoadingTenant] = React.useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingInternal, setLoadingInternal] = React.useState(true);
  const [modalEditSchedule, setModalEditSchedule] = React.useState(false);
  const [listEventTime, setListEventTime] = React.useState<any[]>([]);

  React.useEffect(() => {}, [typeView]);

  const getListEvent = async () => {
    // console.log(roomSelected?.concat(internalSelected));
    setLoading(true);
    const d = await apiGetListEvent({
      date: selectedCalendar.format('YYYY-MM'),
      // room_type: ['tenant', 'internal'],
      room_type: ['tenant'],
      // room_id: roomSelected?.concat(internalSelected),
      room_id: roomSelected,
    });

    setLoading(false);
    if (!d.error) {
      // console.log(d.data, 'DATA');
      setScheduleData(d.data);
    }
  };

  React.useEffect(() => {
    if (isFocused && !loadingTenant) {
      // if (isFocused && !loadingInternal && !loadingTenant) {
      getListEvent();
    }

    return () => {};
  }, [isFocused, roomSelected, internalSelected, selectedCalendar]);

  const handleDeleteSchedule = () => {
    Modal.confirm({
      title: 'Do you Want to unsign these node?',
      icon: <ExclamationCircleOutlined />,
      content: dataViewSchedule.name,
      onOk: async () => {
        setLoading(true);
        const d = await ApiDeleteSchedule({
          id: dataViewSchedule.id_schedule,
        });
        setLoading(false);
        if (!d.error) {
          Modal.success({
            content: d.message,
            onOk: () => {
              getListEvent();
              setModalViewSchedule(false);
            },
          });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  // console.log(roomSelected, internalSelected, 'WW');
  // console.log(dataViewSchedule, 'DATA');
  // const [widthLeft, setWidthLeft] = React.useState<any>(0);
  // const LeftWidthRef = useElementSize((size) => {
  //   // console.log({ size, prevSize, elem });
  //   setWidthLeft(size?.width);
  // });

  React.useEffect(() => {
    if (scheduleData.length > 0) {
      // console.log(scheduleData, 'SCHEDULE');
      let w: any[] = [];
      const d = selectedCalendar.date();
      scheduleData.map((v: any) => {
        if (d == v.date) {
          w = v.schedule;
        }
      });
      // console.log(w);
      setListEventTime(w);
    }
  }, [selectedCalendar, scheduleData]);

  return (
    <PageContainer
      title="Schedule"
      className="schedule-page"
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', marginTop: '14px' }}
    >
      <Modal
        title={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography.Title level={4}>Schedule</Typography.Title>

            <Space wrap size={'middle'}>
              <Dropdown
                overlay={
                  <Menu
                    items={[
                      {
                        key: '1',
                        label: (
                          <Button
                            style={{ textAlign: 'left' }}
                            type="text"
                            block
                            icon={<EditOutlined />}
                            onClick={() => {
                              setModalEditSchedule(true);
                            }}
                          >
                            Edit Schedule
                          </Button>
                        ),
                      },
                      {
                        key: '2',
                        label: (
                          <Button
                            style={{ textAlign: 'left' }}
                            type="text"
                            block
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => {
                              handleDeleteSchedule();
                            }}
                          >
                            Delete
                          </Button>
                        ),
                      },
                    ]}
                  />
                }
                placement="bottom"
                trigger={['click']}
              >
                <Button type="text" icon={<MoreOutlined />} />
              </Dropdown>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => {
                  setModalViewSchedule(false);
                  setDataViewSchedule({});
                }}
              />
            </Space>
          </div>
        }
        className={
          dataViewSchedule.type == 'tenant'
            ? 'modal-hide-close internal '
            : 'modal-hide-close tenant'
        }
        open={modalViewSchedule}
        onCancel={() => {
          setModalViewSchedule(false);
          setDataViewSchedule({});
        }}
        footer={false}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Typography style={{ paddingBottom: '0', marginBottom: '0' }}>
              {dataViewSchedule.type == 'tenant' ? 'Room' : 'Internal'}
            </Typography>
            <Typography.Title level={4} style={{ paddingTop: '0', marginTop: '0' }}>
              <Badge
                className="badge-size"
                color={dataViewSchedule.type !== 'tenant' ? 'blue' : 'orange'}
              />{' '}
              {dataViewSchedule.name}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Space size={'large'} wrap>
              <Typography style={{ paddingBottom: '0', marginBottom: '0' }}>
                {selectedCalendar.format('dddd, DD MMM YYYY')}
              </Typography>
              <Typography style={{ paddingBottom: '0', marginBottom: '0' }}>
                {moment(dataViewSchedule.scadule_time_start, 'HH:mm:ss').format('HH:mm')} -{' '}
                {moment(dataViewSchedule.scadule_time_end, 'HH:mm:ss').format('HH:mm')}
              </Typography>
            </Space>
            <Typography style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
              {dataViewSchedule.scedule_type == 'none'
                ? 'No Repeat'
                : dataViewSchedule.scedule_type}
            </Typography>
          </Col>
        </Row>
      </Modal>
      <SetSchedule
        onCancel={() => {
          setModalSetSchedule(false);
        }}
        open={modalSetSchedule}
        onOk={() => {
          setModalSetSchedule(false);
          getListEvent();
        }}
        dateNow={selectedCalendar}
      />
      <EditSchedule
        onCancel={() => {
          setModalEditSchedule(false);
        }}
        open={modalEditSchedule}
        onOk={() => {
          setModalEditSchedule(false);
          setModalViewSchedule(false);
          getListEvent();
        }}
        dateNow={selectedCalendar}
        dataEdit={dataViewSchedule}
      />
      <Spin spinning={false}>
        <Row style={{ marginLeft: '-50px', padding: '0px 20px', marginRight: '-40px' }}>
          <Col
            // xxl={5}
            // xl={6}
            // lg={8}
            // md={8}
            // sm={8}
            // xs={0}
            xxl={0}
            xl={0}
            lg={0}
            md={0}
            sm={0}
            xs={0}
            style={{
              position: 'relative',
            }}
            // ref={LeftWidthRef}
          >
            <div
              style={{
                maxHeight: '82vh',
                overflowY: 'scroll',
                overflowX: 'hidden',
                // width: widthLeft,
              }}
              className="schedule-left-scroll"
            >
              <div style={{ position: 'relative' }}>
                <Calendar
                  fullscreen={false}
                  headerRender={({ value, onChange }) => {
                    // const current = value.clone();
                    // const localeData = value.localeData();

                    // const year = value.year();
                    const month = value.month();

                    return (
                      <div style={{ padding: 8 }}>
                        <div
                          style={{
                            textAlign: 'left',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography.Title level={4}>{value.format('MMMM YYYY')}</Typography.Title>
                          <Space>
                            <Button
                              icon={<ArrowLeftOutlined />}
                              type="text"
                              onClick={() => {
                                const now = value.clone().month(month - 1);
                                onChange(now);
                              }}
                            />
                            <Button
                              icon={<ArrowRightOutlined />}
                              type="text"
                              onClick={() => {
                                const now = value.clone().month(month + 1);
                                onChange(now);
                              }}
                            />
                          </Space>
                        </div>
                      </div>
                    );
                  }}
                  // onPanelChange={onPanelChange}
                  onSelect={(date: Moment) => {
                    // console.log(date, 'DATE');
                    setSelectedCalendar(date);
                  }}
                  className="mini-calender-custom"
                  dateCellRender={(date: Moment) => {
                    const d = date.format('MM-DD');
                    const w = scheduleData.filter((val) => {
                      const l = selectedCalendar.format('MM-') + val.date.toString();
                      return l == d;
                    });

                    if (w.length > 0) {
                      return (
                        <div style={{ position: 'relative' }}>
                          <Badge
                            color="red"
                            style={{ position: 'absolute', bottom: -10, right: 13 }}
                          />
                        </div>
                      );
                    } else {
                      return '';
                    }
                  }}
                  value={selectedCalendar}
                />
                <RoomFilter
                  setData={setRoomSelected}
                  isFocused={isFocused}
                  setLoading={setLoadingTenant}
                />
                {/* <InternalFilter
                  setData={setInternalSelected}
                  isFocused={isFocused}
                  setLoading={setLoadingInternal}
                /> */}
              </div>
            </div>
          </Col>
          <Col
            xxl={19}
            xl={18}
            lg={16}
            md={16}
            sm={24}
            xs={24}
            style={{
              marginTop: '-9px',
              background: '#FAFAFA',
              maxHeight: '82vh',
              overflowY: 'scroll',
              overflowX: 'hidden',
            }}
            className="schedule-left-scroll"
          >
            <Card
              style={{
                borderRadius: 8,
              }}
              bodyStyle={{
                background: '#FAFAFA',
              }}
            >
              <FullMonthCalendar
                isFocused={isFocused}
                scheduleData={scheduleData}
                selectedCalendar={selectedCalendar}
                setDataViewSchedule={setDataViewSchedule}
                setModalSetSchedule={setModalSetSchedule}
                setModalViewSchedule={setModalViewSchedule}
                setSelectedCalendar={setSelectedCalendar}
                setTypeView={setTypeView}
                typeView={typeView}
                listEventTime={listEventTime}
              />
            </Card>
          </Col>
          <Col
            xxl={5}
            xl={6}
            lg={8}
            md={8}
            sm={24}
            xs={24}
            style={{
              paddingLeft: '20px',
            }}
            // ref={LeftWidthRef}
          >
            <ScheduleSide
              isFocused={isFocused}
              loadingTenant={loadingTenant}
              roomSelected={roomSelected}
              scheduleData2={scheduleData}
              setDataViewSchedule={setDataViewSchedule}
              setModalViewSchedule={setModalViewSchedule}
            />
          </Col>
        </Row>
      </Spin>
    </PageContainer>
  );
};

export default Schedule;
