/* eslint-disable react-hooks/exhaustive-deps */
import {
  Badge,
  // Button,
  Col,
  Row,
  // Select,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import type { Moment } from 'moment';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import 'moment/locale/id';
import moment from 'moment';
import { getHour30Events } from './get30Hours';
import { ProfileTenantSchedule } from '@/components/Icons/DefaultTenant';
import { ProfileInternalSchedule } from '@/components/Icons/DefaultInternal';

moment.locale('en');

const WeeklyScheduleNoHeader: React.FC<{
  isFocused: boolean;
  selectedCalendar: Moment;

  listEventTime: any[];
}> = ({
  selectedCalendar,

  listEventTime,
}) => {
  // const [listWeek, setListWeek] = React.useState<any[]>([]);
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
    // setListWeek(arr);
    // console.log(startDay.day(startDay.day() + 1).format('YYYY-MM-DD'));
  }, [selectedCalendar, listEventTime]);

  // console.log(listWeek, 'ARR');
  // console.log(listHours, 'LIST HOURS');

  return (
    <div>
      <div
        className="container-clock"
        style={{
          maxHeight: '45vh',
        }}
      >
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
                      xxl={20}
                      xl={24}
                      lg={24}
                      md={24}
                      sm={24}
                      xs={24}
                      key={v2.id}
                      // style={{ cursor: 'pointer' }}
                      // onClick={() => {
                      //   setDataViewSchedule(v2);
                      //   setModalViewSchedule(true);
                      // }}
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
                            <Space wrap>
                              <Space>
                                <Badge color="#D9D9D9" />
                                {v2.type == 'tenant' ? 'Room' : 'Internal'}
                              </Space>
                              <Space>
                                <Badge color="#D9D9D9" />
                                {moment(v2.scadule_time_start, 'HH:mm:ss').format('HH:mm')} -
                                {moment(v2.scadule_time_end, 'HH:mm:ss').format('HH:mm')}
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
  );
};

export default WeeklyScheduleNoHeader;
