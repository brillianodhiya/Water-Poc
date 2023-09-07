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
import { convertNumberSm } from '@/components/config.usage';
import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { exportExcelv2AntTable } from '@/components/ExcelExport/ExportExcel';
import { getListReport } from '@/services/nebula/nodeList';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import { CSVLink } from 'react-csv';

const { Column } = Table;
moment.locale('en');

const Reports: React.FC = () => {
  const [DataReports, setDataReports] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [areaId, setAreaId] = React.useState<any>(0);
  const [tenantId, setTenantId] = React.useState<any>(0);
  const [periode, setPeriode] = React.useState<Moment>(moment());

  const handleExportCsv = () => {
    exportExcelv2AntTable()('reports-log', 'Reports Log ', 'Reports Log ' + moment().unix());
  };

  const getReportData = async () => {
    setLoading(true);
    const d = await getListReport({
      params: {
        area_id: areaId ? areaId : undefined,
        tenant_id: tenantId ? tenantId : undefined,
        periode: periode.format('YYYY-MM'),
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
  }, [periode, areaId, tenantId]);

  console.log(DataReports);

  const generateDataForCSV = () => {
    const arr = [
      {
        A1: '',
        A2: '',
        A3: 'PT. BUKIT INDAH TIRTA ALAM',
        A4: '',
        A5: '',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        A10: '',
      },
      {
        A1: '',
        A2: '',
        A3: '',
        A4: '',
        A5: '',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        A10: '',
      },
      {
        A1: '',
        A2: '',
        A3: 'Usage List',
        A4: '',
        A5: '',
        A6: '',
        A7: '',
        A8: '',
        A9: '',
        A10: '',
      },
      {
        A1: '',
        A2: '',
        A3: '',
        A4: '',
        A5: '',
        A6: 'Period',
        A7: '',
        A8: 'Meter',
        A9: '',
        A10: '',
      },
      {
        A1: '#',
        A2: 'Kode Unit',
        A3: 'Unit Name',
        A4: 'Meter No.',
        A5: 'Customer Name',
        A6: 'From',
        A7: 'To',
        A8: 'From',
        A9: 'To',
        A10: 'Balance',
      },
    ];

    DataReports.map((item, index) => {
      arr.push({
        A1: (index + 1).toString(),
        A2: item.kode_unit,
        A3: item.unit_name,
        A4: item.meter_id,
        A5: item.tenant_name,
        A6: moment(item.start_date).format('DD/MM/YYYY'),
        A7: moment(item.end_date).format('DD/MM/YYYY'),
        A8: parseInt(item.start_totalizer).toString(),
        A9: parseInt(item.end_totalizer).toString(),
        A10: parseInt(item.usage).toString(),
      });
    });

    return arr;
  };

  const useDataCSV = generateDataForCSV();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Helmet>
      {/* <Room isFocused={true} /> */}
      <PageContainer
        childrenContentStyle={{
          minHeight: '70vh',
        }}
        title="Report"
        content="Report Totalizer of device "
      >
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
                  <Typography>Periode</Typography>
                  <DatePicker.MonthPicker
                    allowClear={false}
                    value={periode}
                    onChange={(v: any) => setPeriode(v)}
                  />
                </Space>
                <Space direction="vertical">
                  <Typography>Area Name</Typography>
                  <AreaDropdown
                    onChange={(val) => {
                      setAreaId(val);
                    }}
                    style={{ width: '200px' }}
                    type="rounded"
                    useAll
                    value={areaId}
                  />
                </Space>
                <Space direction="vertical">
                  <Typography>Tenant Name</Typography>
                  <TenantDropdown
                    onChange={(val) => {
                      // console.log(val, 'VAL');
                      setTenantId(val);
                    }}
                    areaId={areaId == 0 ? undefined : areaId}
                    style={{ width: '200px' }}
                    type="rounded"
                    useAll
                    value={tenantId}
                  />
                </Space>
              </Space>
              <CSVLink
                data={useDataCSV}
                headers={[
                  { label: '', key: 'A1' },
                  { label: '', key: 'A2' },
                  { label: '', key: 'A3' },
                  { label: '', key: 'A4' },
                  { label: '', key: 'A5' },
                  { label: '', key: 'A6' },
                  { label: '', key: 'A7' },
                  { label: '', key: 'A8' },
                  { label: '', key: 'A9' },
                  { label: '', key: 'A10' },
                ]}
                filename={`Reports_Log_${moment().format('YYYY-MM')}_${moment().unix()}.csv`}
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
          dataSource={DataReports}
          loading={loading}
          style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
          size="small"
          bordered
          scroll={{
            x: true,
          }}
        >
          <Column title="Area Name" dataIndex={'area_name'} key="area_name" />

          <Column title="Kode Unit" dataIndex={'kode_unit'} key="kode_unit" />
          <Column title="Unit Name" dataIndex={'unit_name'} key="unit_name" />
          <Column title="DevEui" dataIndex={'deveui'} key="deveui" />
          <Column title="Meter Id" dataIndex={'meter_id'} key="meter_id" />
          <Column title="Customer Name" dataIndex={'tenant_name'} key="tenant_name" />

          <Column
            title="Periode"
            dataIndex="periode"
            key="periode"
            render={(v) => {
              return moment(v).format('MMM YYYY');
            }}
          />
          <Column
            title="Start Date"
            dataIndex="start_date"
            key="start_date"
            render={(v) => {
              return moment(v).format('DD/MM/YYYY');
            }}
          />
          <Column
            title="End Date"
            dataIndex="end_date"
            key="end_date"
            render={(v) => {
              return moment(v).format('DD/MM/YYYY');
            }}
          />
          <ColumnGroup title="Meter">
            <Column
              title="Start Totalizer"
              dataIndex="start_totalizer"
              key="start_totalizer"
              render={(text) => convertNumberSm(text)}
            />
            <Column
              title="End Totalizer"
              dataIndex="end_totalizer"
              key="end_totalizer"
              render={(text) => convertNumberSm(text)}
            />

            <Column
              title="Usage"
              dataIndex="usage"
              key="usage"
              render={(text) => convertNumberSm(text)}
            />
          </ColumnGroup>

          {/* <Column title="Unit" dataIndex={['node_type', 'satuan']} /> */}
        </Table>

        <div style={{ opacity: 0, position: 'fixed' }}>
          <a id="dlink" />
          <Table
            dataSource={DataReports}
            loading={loading}
            style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
            // size="small"
            bordered
            pagination={false}
          >
            <Column title="Area Name" dataIndex={'area_name'} key="area_name" />

            <Column title="Kode Unit" dataIndex={'kode_unit'} key="kode_unit" />
            <Column title="Unit Name" dataIndex={'unit_name'} key="unit_name" />
            <Column title="DevEui" dataIndex={'deveui'} key="deveui" />
            <Column title="Meter Id" dataIndex={'meter_id'} key="meter_id" />
            <Column title="Customer Name" dataIndex={'tenant_name'} key="tenant_name" />

            <Column
              title="Periode"
              dataIndex="periode"
              key="periode"
              render={(v) => {
                return moment(v).format('MMM YYYY');
              }}
            />
            <Column
              title="Start Date"
              dataIndex="start_date"
              key="start_date"
              render={(v) => {
                return moment(v).format('DD/MM/YYYY');
              }}
            />
            <Column
              title="End Date"
              dataIndex="end_date"
              key="end_date"
              render={(v) => {
                return moment(v).format('DD/MM/YYYY');
              }}
            />
            <ColumnGroup title="Meter">
              <Column
                title="Start Totalizer"
                dataIndex="start_totalizer"
                key="start_totalizer"
                render={(text) => convertNumberSm(text)}
              />
              <Column
                title="End Totalizer"
                dataIndex="end_totalizer"
                key="end_totalizer"
                render={(text) => convertNumberSm(text)}
              />

              <Column
                title="Usage"
                dataIndex="usage"
                key="usage"
                render={(text) => convertNumberSm(text)}
              />
            </ColumnGroup>

            {/* <Column title="Unit" dataIndex={['node_type', 'satuan']} /> */}
          </Table>
        </div>
      </PageContainer>
    </>
  );
};

export default Reports;
