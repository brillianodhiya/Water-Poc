/* eslint-disable react-hooks/exhaustive-deps */
import { exportExcelv2AntTable } from '@/components/ExcelExport/ExportExcel';
import { convertNumberSm } from '@/components/NumberFormatter';
import { getListNodeLog, getListNodeLogDaily } from '@/services/badiklat/nodeList';
import { useLocation } from '@umijs/max';
import { Button, Card, DatePicker, Select, Space, Table, Typography } from 'antd';
import { isNumber } from 'lodash';
import moment from 'moment';
import React from 'react';

type LocationStateTypes = {
  type: string;
  id: number | any;
  area_id: number | any;
  node_type_id: number | any;
  device_id: number;
};

const ViewLog: React.FC = () => {
  const searchParams = useLocation();

  const state = searchParams.state as LocationStateTypes;

  const [loading, setLoading] = React.useState(true);
  const [typeFilter, setTypeFilter] = React.useState('day');
  const [dateFilter, setDateFilter] = React.useState<any>(undefined);
  const [headerData, setHeaderData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);

  const getData = async () => {
    const p = {
      start_date: undefined,
      end_date: undefined,
    };
    if (typeFilter == 'day' && dateFilter) {
      p.start_date = dateFilter.format('YYYY-MM-DD');
    } else if (dateFilter) {
      p.start_date = dateFilter[0].format('YYYY-MM-DD');
      p.end_date = dateFilter[1].format('YYYY-MM-DD');
    }

    const d = await getListNodeLog(
      {
        params: p,
      },
      state.device_id,
    );

    setLoading(false);
    if (!d.error) {
      if (d.data.length > 0) {
        const header: any[] = [];
        d.data[0].map((val: any) => {
          header.push(val.name);
        });
        d.data.map((val: any, idx: number) => {
          val.map((val2: any) => {
            d.data[idx][val2.name] = val2.value;
          });
        });
        setData(d.data);
        setHeaderData(header);
      }
      // console.log(header, 'HEADER');
    }
  };

  const getDataDaily = async () => {
    if (dateFilter) {
      const d = await getListNodeLogDaily(
        {},
        state.device_id,
        dateFilter[0].format('YYYY-MM-DD'),
        dateFilter[1].format('YYYY-MM-DD'),
      );

      setLoading(false);
      if (!d.error) {
        // console.log(d.data);
        setData(d.data);
      }
    }
  };

  React.useEffect(() => {
    setLoading(false);
    if (typeFilter == 'daily') {
      getDataDaily();
    } else {
      getData();
    }
  }, [state, typeFilter, dateFilter]);

  const handleExport = () => {
    exportExcelv2AntTable()(
      'view-log',
      'View Log',
      'Export Ticket ' + typeFilter + moment().unix(),
    );
  };

  return (
    <Card
      bordered={false}
      style={{
        background: '#FAFAFA',
        minHeight: '79vh',
        textAlign: 'right',
      }}
    >
      <a id="dlink"></a>
      <Typography.Title level={3} style={{ textAlign: 'left' }}>
        View Log Device
      </Typography.Title>
      <Space style={{ float: 'left' }}>
        <Select
          value={typeFilter}
          onChange={(v) => {
            setTypeFilter(v);
            setDateFilter(undefined);
            setData([]);
            setHeaderData([]);
          }}
          className="rounded-select"
        >
          <Select.Option value="day">Day</Select.Option>
          <Select.Option value="range">Range</Select.Option>
          <Select.Option value="daily">Daily</Select.Option>
        </Select>

        {typeFilter == 'day' ? (
          <DatePicker
            className="rounded-picker"
            value={dateFilter}
            allowClear
            onChange={(value) => setDateFilter(value)}
          />
        ) : (
          <DatePicker.RangePicker
            className="rounded-picker"
            value={dateFilter}
            allowClear
            onChange={(value) => setDateFilter(value)}
          />
        )}
      </Space>
      <Button type="primary" loading={loading} onClick={handleExport}>
        Download
      </Button>
      {typeFilter == 'daily' ? (
        <Table dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
          <Table.Column title="Last Update" dataIndex="last_update" />
          <Table.Column
            title="Totalizer (Kwh)"
            dataIndex="totalizer"
            render={(text) => convertNumberSm(text)}
          />
          <Table.Column
            title="Usage (Kwh)"
            dataIndex="usage"
            render={(text) => convertNumberSm(text)}
          />
        </Table>
      ) : (
        <Table dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
          {headerData.map((val) => {
            const key = Math.random();
            return (
              <Table.Column
                key={key}
                align="left"
                title={val}
                dataIndex={val}
                render={(text) => {
                  if (isNumber(text)) {
                    return convertNumberSm(text);
                  } else {
                    return text;
                  }
                }}
              />
            );
          })}
        </Table>
      )}
      <div style={{ opacity: 0, position: 'fixed', pointerEvents: 'none', zIndex: 'revert-layer' }}>
        <div
          style={{
            width: '1090px',
            // objectFit: "cover",
            position: 'absolute',
            padding: '20px',
          }}
        >
          {typeFilter == 'daily' ? (
            <Table id="view-log" dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
              <Table.Column title="Last Update" dataIndex="last_update" />
              <Table.Column title="Totalizer (Kwh)" dataIndex="totalizer" />
              <Table.Column title="Usage (Kwh)" dataIndex="usage" />
            </Table>
          ) : (
            <Table id="view-log" dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
              {headerData.map((val) => {
                const key = Math.random();
                return <Table.Column key={key} align="left" title={val} dataIndex={val} />;
              })}
            </Table>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ViewLog;
