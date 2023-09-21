/* eslint-disable @typescript-eslint/no-unused-vars */
// import { PageContainer } from '@ant-design/pro-components';
import { ExportOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, DatePicker, Divider, Row, Space, Table, Typography } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
// import Internal from './Internal';
import _ from 'lodash';
import type { Moment } from 'moment';
import moment from 'moment';

import { getListReportNotif } from '@/services/nebula/nodeList';
import { CSVLink } from 'react-csv';

const { Column } = Table;
moment.locale('en');

const ReportsNotif: React.FC = () => {
  const [DataReports, setDataReports] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const [periode, setPeriode] = React.useState<[Moment, Moment]>([
    moment().day(moment().day() - 3),
    moment(),
  ]);

  const getReportData = async () => {
    setLoading(true);
    const d = await getListReportNotif({
      params: {
        start_date: periode[0].format('YYYY-MM-DD'),
        end_date: periode[1].format('YYYY-MM-DD'),
      },
    });

    setLoading(false);
    if (!d.error) {
      setDataReports(d.data);
    }
  };

  React.useEffect(() => {
    getReportData();
    return () => {};
  }, [periode]);

  const generateDataForCSV = () => {
    const arr: any[] = [];
    const header: { label: any; key: any }[] = [];

    if (DataReports.length > 0) {
      if (DataReports[0].length > 0) {
        DataReports[0].map((item: { name: any }) => {
          header.push({
            label: item.name,
            key: item.name,
          });
        });
      }

      DataReports.map((item) => {
        // console.log(item, 'item');
        const obj: any = {};
        item.map((item2: { name: any; value: any }) => {
          obj[item2.name] = item2.value;
        });
        arr.push(obj);
      });
    }

    // DataReports.map((item, index) => {
    //   // console.log(item, 'item');
    // });

    return {
      header: header,
      data: arr,
    };
  };

  const useData = generateDataForCSV();

  return (
    <>
      {/* <Room isFocused={true} /> */}
      <PageContainer
        childrenContentStyle={{
          minHeight: '70vh',
        }}
        title="Notification"
        content="Manage Your Notification"
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>AAT IoT Platform | Notification</title>
          <link
            rel="icon"
            href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
            type="image/x-icon"
          />
        </Helmet>
        <Divider />
        <Card
          style={{
            borderRadius: 8,
            marginBottom: 20,
          }}
          bodyStyle={{
            background: ' rgba(230, 247, 255, 0.5)',
          }}
        >
          <Row gutter={[16, 16]} align={'bottom'}>
            <Col span={24} style={{ textAlign: 'left' }}>
              <Space size={'large'} wrap>
                <Space direction="vertical">
                  <Typography>Date</Typography>
                  <DatePicker.RangePicker
                    allowClear={false}
                    onChange={(v: any) => setPeriode(v)}
                    value={periode}
                  />
                </Space>
              </Space>
              <CSVLink
                data={useData.data}
                headers={useData.header}
                filename={`Reports_Notification_${periode[0].format('YYYY-MM')}-${periode[1].format(
                  'YYYY-MM',
                )}_${moment().unix()}.csv`}
              >
                <Button
                  style={{ float: 'right', marginTop: '24px' }}
                  type="primary"
                  icon={<ExportOutlined />}
                  // onClick={handleExportCsv}
                >
                  Export
                </Button>
              </CSVLink>
            </Col>
          </Row>
        </Card>
        <Table
          dataSource={useData.data}
          loading={loading}
          style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
          size="small"
          bordered
          scroll={{
            x: true,
          }}
        >
          {useData.header.map((val) => {
            return <Column title={val.label} dataIndex={val.key} key={val.key} />;
          })}
        </Table>
      </PageContainer>
    </>
  );
};

export default ReportsNotif;
