/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Button, Calendar, Col, Row, Select, Space, Tag, Typography } from 'antd';
import React from 'react';
import type { Moment } from 'moment';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import 'moment/locale/id';
import moment from 'moment';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { getHour30Events } from './get30Hours';
import { ProfileTenantSchedule } from '@/components/Icons/DefaultTenant';
import { ProfileInternalSchedule } from '@/components/Icons/DefaultInternal';

moment.locale('en');

const FullMonthCalendar: React.FC<{
  isFocused: boolean;
  selectedCalendar: Moment;
  setSelectedCalendar: (v: Moment) => void;
  scheduleData: {
    date: number;
    schedule: {
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
  }[];
  setTypeView: (v: string) => void;
  setModalSetSchedule: (v: boolean) => void;
  setModalViewSchedule: (v: boolean) => void;
  setDataViewSchedule: (v: {
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
  }) => void;
  typeView: string;
  listEventTime: any[];
}> = ({
  selectedCalendar,
  setSelectedCalendar,
  scheduleData,
  setTypeView,
  setModalSetSchedule,
  setModalViewSchedule,
  setDataViewSchedule,
  typeView,
  listEventTime,
}) => {
  const [listWeek, setListWeek] = React.useState<any[]>([]);
  const [listHours, setListHour] = React.useState<
    {
      time: string;
      events: any[];
    }[]
  >([]);

  React.useEffect(() => {
    const startDay = selectedCalendar.clone().startOf('week');
    const endDate = selectedCalendar.clone().endOf('week');

    const arr = [];
    let lastValue: Moment | undefined = undefined;

    do {
      // console.log('DSDSD');

      if (lastValue == undefined) {
        lastValue = startDay.clone();
        arr.push(startDay.format('YYYY-MM-DD'));
      } else {
        lastValue = lastValue.clone().day(lastValue.day() + 1);
        arr.push(lastValue.format('YYYY-MM-DD'));
      }
    } while (lastValue?.format('YYYY-MM-DD') !== endDate.format('YYYY-MM-DD'));

    const hours24 = getHour30Events();
    // console.log(hours24, 'HOURS');
    hours24.map((val: { time: string; events: any[] }, idx: number) => {
      const start = moment(val.time, 'HH:mm');
      const end = start.clone().add(30, 'minute');

      // console.log(start.format('HH:mm'), end.format('HH:mm'), 'TIME');
      listEventTime.map((v2: any) => {
        const timeEvent = moment(v2.scadule_time_start, 'HH:mm');
        // console.log(timeEvent.format('HH:mm'));
        const btwen = timeEvent.isBetween(start, end, 'minutes', '[)');
        // console.log(btwen, 'W');
        if (btwen) {
          hours24[idx].events.push(v2);
        }
      });
    });
    setListHour(hours24);

    // console.log(arr, 'ARR');
    setListWeek(arr);
    // console.log(startDay.day(startDay.day() + 1).format('YYYY-MM-DD'));
  }, [selectedCalendar, listEventTime]);

  // console.log(listWeek, 'ARR');
  // console.log(listHours, 'LIST HOURS');

  return (
    <div>
      <div style={{ padding: 8 }}>
        <Row gutter={[16, 16]}>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Space wrap size={'middle'} align="center">
              <Typography.Title level={4}>Schedule</Typography.Title>
              <Button
                style={{ marginBottom: '8px' }}
                onClick={() => {
                  setSelectedCalendar(moment());
                }}
              >
                Today
              </Button>
              <Space style={{ marginBottom: '8px' }}>
                <Button
                  icon={<ArrowLeftOutlined />}
                  type="text"
                  onClick={() => {
                    if (typeView == 'month') {
                      const month = selectedCalendar.month();
                      const now = selectedCalendar.clone().month(month - 1);
                      setSelectedCalendar(now);
                    } else {
                      const week = selectedCalendar.week();
                      const now = selectedCalendar.clone().week(week - 1);
                      setSelectedCalendar(now);
                    }
                  }}
                />
                <Button
                  icon={<ArrowRightOutlined />}
                  type="text"
                  onClick={() => {
                    if (typeView == 'month') {
                      const month = selectedCalendar.month();

                      const now = selectedCalendar.clone().month(month + 1);
                      setSelectedCalendar(now);
                    } else {
                      const week = selectedCalendar.week();

                      const now = selectedCalendar.clone().week(week + 1);
                      setSelectedCalendar(now);
                    }
                  }}
                />
              </Space>
              <Typography.Title
                level={5}
                style={{ fontSize: '16px', fontWeight: 500, marginTop: '4px' }}
              >
                {selectedCalendar.format('MMMM YYYY')}
              </Typography.Title>
            </Space>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Space wrap size={'middle'} style={{ float: 'right' }}>
              <Select
                style={{
                  width: 100,
                }}
                value={typeView}
                onChange={(v) => {
                  setTypeView(v);
                }}
                className="rounded-select"
              >
                <Select.Option value={'weekly'}>Weekly</Select.Option>
                <Select.Option value={'month'}>Month</Select.Option>
              </Select>
              <Button
                type="primary"
                onClick={() => {
                  setModalSetSchedule(true);
                }}
              >
                Add Schedule
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
      {typeView == 'month' ? (
        <Calendar
          value={selectedCalendar}
          headerRender={() => {
            return null;
          }}
          // onPanelChange={onPanelChangeCalenderFull}
          fullscreen
          style={{ background: '#fafafa' }}
          onChange={(date: Moment) => {
            // console.log(date, 'DATE');
            setSelectedCalendar(date);
          }}
          dateCellRender={(date: Moment) => {
            const d = date.format('MM-DD');
            const w = scheduleData.filter((val) => {
              const l = selectedCalendar.format('MM-') + val.date.toString();
              return l == d;
            });

            if (w.length > 0) {
              return (
                <ul className="events">
                  {w[0].schedule.map((item: any) => (
                    <li key={item.name}>
                      <a
                        onClick={() => {
                          setDataViewSchedule(item);
                          setModalViewSchedule(true);
                        }}
                      >
                        <Tag
                          style={{ color: 'rgba(0, 0, 0, 0.85)' }}
                          color={item.type == 'tenant' ? '#ADC6FF' : '#FFE58F'}
                        >
                          {item.name}
                        </Tag>
                      </a>
                    </li>
                  ))}
                </ul>
              );
            } else {
              return;
            }
          }}
        />
      ) : (
        <div>
          <div className="listWeek">
            {listWeek.map((val: any) => {
              const date = moment(val, 'YYYY-MM-DD').date();
              const dateString = moment(val, 'YYYY-MM-DD').format('dd');
              const selectDate = selectedCalendar.date();

              return (
                <div key={val} className="container-date-week">
                  <Button
                    shape="circle"
                    size="large"
                    style={{
                      width: '48px',
                      height: '48px',
                      fontSize: '24px',
                      fontWeight: 500,
                      padding: '0',
                    }}
                    type={selectDate == date ? 'primary' : 'text'}
                    onClick={() => {
                      setSelectedCalendar(moment(val, 'YYYY-MM-DD'));
                    }}
                    className={selectDate == date ? 'button-weekly-selected' : undefined}
                  >
                    {date}
                  </Button>
                  <Typography.Text style={{ marginTop: '24px', fontSize: '14px', fontWeight: 400 }}>
                    {dateString}
                  </Typography.Text>
                </div>
              );
            })}
          </div>
          <div className="container-clock">
            {listHours.map((v) => {
              return (
                <div key={v.time} className="timeline-list-event">
                  <div className="title-hours">{v.time}</div>
                  <div className="wrapper-line">
                    <div className="line-dot" />
                  </div>
                  <Row style={{ width: '96%' }} gutter={16}>
                    {v.events.map((v2: any) => {
                      return (
                        <Col
                          xxl={5}
                          xl={7}
                          lg={12}
                          md={24}
                          sm={24}
                          xs={24}
                          key={v2.id}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setDataViewSchedule(v2);
                            setModalViewSchedule(true);
                          }}
                        >
                          <div
                            className={
                              v2.type == 'tenant' ? 'card-events-room' : 'card-events-internal'
                            }
                          >
                            <Space>
                              {v2.type == 'tenant' ? (
                                <ProfileTenantSchedule style={{ marginTop: '4px' }} />
                              ) : (
                                <ProfileInternalSchedule style={{ marginTop: '4px' }} />
                              )}
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography.Text
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                  }}
                                >
                                  {v2.name}
                                </Typography.Text>
                                <Space wrap size={'small'} className="Wrapp-card">
                                  <Space>
                                    <Badge color="#D9D9D9" />
                                    {v2.type == 'tenant' ? 'Room' : 'Internal'}
                                  </Space>
                                  <Space>
                                    <Badge color="#D9D9D9" />
                                    {moment(v2.scadule_time_start, 'HH:mm:ss').format(
                                      'HH:mm',
                                    )} - {moment(v2.scadule_time_end, 'HH:mm:ss').format('HH:mm')}
                                  </Space>
                                </Space>
                              </div>
                            </Space>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FullMonthCalendar;
