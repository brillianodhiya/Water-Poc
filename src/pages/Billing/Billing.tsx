import { AreaDropdown } from '@/components/CustomInput/AreaDropdown';
import { TenantDropdown } from '@/components/CustomInput/TenantDropdown';
import { exportExcelv2AntTable } from '@/components/ExcelExport/ExportExcel';
import { converNumberSmNotFixed, rupiahFormat } from '@/components/config.usage';
import { getBilling } from '@/services/nebula/billing';
import { ExportOutlined, EyeOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import Column from 'antd/lib/table/Column';
import moment from 'moment';
import React from 'react';
import { CSVLink } from 'react-csv';
import { Helmet } from 'react-helmet';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type DataType = {
  key: string;
  no_invoice: string;
  date: string;
  area_name: string;
  tenant_name: string;
  periode: string;
  usage: string;
  status: string;
  amount: string;
  id: number;
};

const Billing: React.FC = ({}) => {
  const [dataBilling, setDataBilling] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [areaId, setAreaId] = React.useState(0);
  const [tenantId, setTenantId] = React.useState(0);
  const [periode, setPeriode] = React.useState<any>(undefined);
  const [status, setStatus] = React.useState('all');
  const [search, setSearch] = React.useState('');

  const getData = async () => {
    setLoading(true);
    const data = await getBilling({
      params: {
        area_id: areaId ? areaId : undefined,
        tenant_id: tenantId ? tenantId : undefined,
        periode: periode ? periode.format('YYYY-MM') : undefined,
        status: status !== 'all' ? status : undefined,
        search: search ? search : undefined,
      },
    });
    setLoading(false);
    if (!data.error) {
      setDataBilling(data.data);
    }
  };

  React.useEffect(() => {
    // setDataBilling(dataSource);
    getData();
  }, [areaId, tenantId, periode, status, search]);

  const handleExportCsv = () => {
    exportExcelv2AntTable()('billing', 'Billing ', 'Billing ' + moment().unix());
  };

  const generateDataForCSV = () => {
    const arr: {
      invoice: any;
      area_name: any;
      tenant_name: any;
      periode: any;
      usage: string;
      status: any;
      grand_total: any;
    }[] = [];

    dataBilling.map((item) => {
      arr.push({
        invoice: item.invoice,
        area_name: item.Nebula_Area.area_name,
        tenant_name: item.Nebula_Tenant.name,
        periode: item.periode,
        usage: converNumberSmNotFixed(item.usage),
        status: item.status,
        grand_total: rupiahFormat(item.grand_total),
      });
    });

    return arr;
  };

  const useDataCSV = generateDataForCSV();

  return (
    <div>
      <Card
        style={{
          borderRadius: 8,
          marginBottom: 20,
        }}
        bodyStyle={{
          background: ' rgba(230, 247, 255, 0.5)',
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>IKI IoT Platform | Transaction</title>
          <link rel="icon" href="/iki-logo-no-text.png" type="image/x-icon" />
        </Helmet>
        <Row gutter={[16, 16]} justify="space-between" align={'bottom'}>
          <Col>
            <Space direction="vertical">
              <Typography>Search</Typography>
              <Input.Search
                onSearch={(v) => setSearch(v)}
                style={{
                  borderRadius: '20px',
                }}
                placeholder="No Invoice"
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Status</Typography>
              <Select
                value={status}
                style={{
                  width: 150,
                  borderRadius: 100,
                }}
                onChange={(v) => {
                  setStatus(v);
                }}
                options={[
                  {
                    value: 'all',
                    label: <Badge color={'blue'} text={'All'} />,
                  },
                  {
                    value: 'new',
                    label: <Badge color={'cyan'} text={'New'} />,
                  },
                  {
                    value: 'paid',
                    label: <Badge color={'green'} text={'Paid'} />,
                  },
                  {
                    value: 'unpaid',
                    label: <Badge color={'orange'} text={'Unpaid'} />,
                  },
                  {
                    value: 'cancel',
                    label: <Badge color={'red'} text={'Cancel'} />,
                  },
                ]}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Area</Typography>
              <AreaDropdown
                useAll={true}
                defaultArea0={false}
                value={areaId}
                onChange={(val) => setAreaId(val)}
                type="rounded"
                disabled={false}
                style={{
                  width: '200px',
                }}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Tenant</Typography>
              <TenantDropdown
                useAll={true}
                onChange={(val) => setTenantId(val)}
                style={{
                  width: '200px',
                }}
                type="rounded"
                areaId={areaId == 0 ? undefined : areaId}
                value={tenantId}
                disabled={false}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Priode</Typography>
              <DatePicker.MonthPicker value={periode} onChange={(v: any) => setPeriode(v)} />
            </Space>
          </Col>
          <Col style={{ paddingTop: 20 }}>
            <CSVLink
              data={useDataCSV}
              headers={[
                { label: 'No Invoice', key: 'invoice' },
                { label: 'Area Name', key: 'area_name' },
                { label: 'Tenant', key: 'tenant_name' },
                { label: 'Periode', key: 'periode' },
                { label: 'Usage', key: 'usage' },
                { label: 'Status', key: 'status' },
                { label: 'Amount', key: 'grand_total' },
              ]}
              filename={`Billing_${moment().format('YYYY-MM')}_${moment().unix()}.csv`}
            >
              <Button
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
        dataSource={dataBilling}
        loading={loading}
        style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
      >
        <Column title="No Invoice" dataIndex="invoice" key="invoice" />

        <Column title="Area Name" dataIndex={['Nebula_Area', 'area_name']} key="area_name" />

        <Column title="Tenant" dataIndex={['Nebula_Tenant', 'name']} key="tenant_name" />
        <Column title="Periode" dataIndex="periode" key="periode" />
        <Column
          title="Usage"
          dataIndex="usage"
          key="usage"
          render={(_) => {
            return converNumberSmNotFixed(_);
          }}
        />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(_, record: DataType) => {
            if (record.status === 'new') {
              return <Badge color={'cyan'} text="New" />;
            } else if (record.status === 'paid') {
              return <Badge color={'green'} text="Paid" />;
            } else if (record.status === 'unpaid') {
              return <Badge color={'orange'} text="Unpaid" />;
            } else if (record.status === 'cancel') {
              return <Badge color={'red'} text="Cancel" />;
            } else {
              return <Badge color={'cyan'} text="Paid" />;
            }
          }}
        />
        <Column
          title="Amount"
          dataIndex="grand_total"
          key="grand_total"
          render={(_) => {
            return rupiahFormat(_);
          }}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record: DataType) => {
            // return (
            //   <Dropdown
            //     overlay={
            //       <Menu
            //         onClick={(info) => {
            //           if (info.key == 'edit') {
            //             // setDataEdit(val);
            //           }
            //         }}
            //         items={[
            //           {
            //             label: (
            //               <Button
            //                 size="small"
            //                 type="link"
            //                 icon={<EditOutlined />}
            //                 style={{
            //                   color: '#000',
            //                 }}
            //               >
            //                 Edit
            //               </Button>
            //             ),
            //             key: 'edit',
            //           },
            //         ]}
            //       />
            //     }
            //     trigger={['click']}
            //   >
            //     <Button className="edit-icon" shape="circle" icon={<EllipsisOutlined />} />
            //   </Dropdown>
            // );
            return (
              <Button
                size="small"
                type="primary"
                ghost
                onClick={() => {
                  console.log(record);
                  history.push('/billing/detail/' + record.id);
                }}
              >
                <EyeOutlined />
                View Detail
              </Button>
            );
          }}
        />
      </Table>

      {/* <div style={{ opacity: 0, position: 'fixed' }}>
        <a id="dlink"></a>

        <Table id="billing" dataSource={dataBilling} loading={loading} pagination={false}>
          <Column title="No Invoice" dataIndex="invoice" key="invoice" />

          <Column title="Area Name" dataIndex={['Nebula_Area', 'area_name']} key="area_name" />
          <Column title="Tenant" dataIndex={['Nebula_Tenant', 'name']} key="tenant_name" />
          <Column title="Periode" dataIndex="periode" key="periode" />
          <Column
            title="Usage"
            dataIndex="usage"
            key="usage"
            // render={(_) => {
            //   return converNumberSmNotFixed(_);
            // }}
          />
          <Column
            title="Status"
            dataIndex="status"
            key="status"
            render={(_, record: DataType) => {
              if (record.status === 'new') {
                return <Badge color={'cyan'} text="New" />;
              } else if (record.status === 'paid') {
                return <Badge color={'green'} text="Paid" />;
              } else if (record.status === 'unpaid') {
                return <Badge color={'orange'} text="Unpaid" />;
              } else if (record.status === 'cancel') {
                return <Badge color={'red'} text="Paid" />;
              } else {
                return <Badge color={'cyan'} text="Paid" />;
              }
            }}
          />
          <Column
            title="Amount"
            dataIndex="grand_total"
            key="grand_total"
            render={(_) => {
              return rupiahFormat(_);
            }}
          />
        </Table>
      </div> */}
    </div>
  );
};

export default Billing;
