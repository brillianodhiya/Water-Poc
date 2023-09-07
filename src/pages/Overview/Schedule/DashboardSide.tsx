import React from 'react';

import { Typography, Calendar, Badge, Spin } from 'antd';

import type { Moment } from 'moment';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import 'moment/locale/id';
import moment from 'moment';
import { apiGetListEventNoFilter } from '@/services/badiklat/schedule';
import WeeklyScheduleNoHeader from './WeeklySchedule';

export const DashboardSideSchedule: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [selectedCalendar, setSelectedCalendar] = React.useState<Moment>(moment());
  const [scheduleData, setScheduleData] = React.useState<
    {
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
    }[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const [listEventTime, setListEventTime] = React.useState<any[]>([]);

  const getListEvent = async () => {
    // console.log(roomSelected?.concat(internalSelected));
    setLoading(true);
    const d = await apiGetListEventNoFilter({
      date: selectedCalendar.format('YYYY-MM'),
    });

    setLoading(false);
    if (!d.error) {
      // console.log(d.data, 'DATA');
      setScheduleData(d.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getListEvent();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, selectedCalendar]);

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
    <div>
      <Spin spinning={loading}>
        <Calendar
          fullscreen={false}
          headerRender={() => {
            return (
              <div style={{ padding: 8 }}>
                <Typography.Title level={4}>Schedule Today</Typography.Title>
              </div>
            );
          }}
          onSelect={(date: Moment) => {
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
                  <Badge color="red" style={{ position: 'absolute', bottom: -10, right: 13 }} />
                </div>
              );
            } else {
              return '';
            }
          }}
        />
        <WeeklyScheduleNoHeader
          isFocused={isFocused}
          listEventTime={listEventTime}
          selectedCalendar={selectedCalendar}
        />
      </Spin>
    </div>
  );
};
