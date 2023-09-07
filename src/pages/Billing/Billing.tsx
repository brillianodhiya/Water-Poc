import { EditOutlined, EllipsisOutlined, ExportOutlined, SearchOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Input,
  Menu,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from 'antd';
import Column from 'antd/lib/table/Column';
import React from 'react';

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
};

const dataSource = [
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Moore and Sons',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'New',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'GAMATECHNO',
    tenant_name: 'PRODUCTION UNIT JAKARTA',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Paid',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Breitenberg - Kub',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Unpaid',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Schowalter LLC',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Cancel',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Bradtke, Abbott and Krajcik',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'New',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'GAMATECHNO',
    tenant_name: 'PRODUCTION UNIT JAKARTA',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Paid',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Okuneva, Larkin and Macejkovic',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Unpaid',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'GAMATECHNO',
    tenant_name: 'PRODUCTION UNIT JAKARTA',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Cancel',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Larson - Huels',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'New',
    amount: '156.00',
  },
  {
    key: '1',
    no_invoice: 'We.__DEV__.400-INV-020622-400G-I',
    date: 'Nov 07 2022',
    area_name: 'Patra Logistik',
    tenant_name: 'Schaden Group',
    periode: 'Nov 07 2022',
    usage: '456.00',
    status: 'Paid',
    amount: '156.00',
  },
];

const Billing: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [dataBilling, setDataBilling] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataEdit, setDataEdit] = React.useState<object>({});
  const [dataFill, setDataFill] = React.useState<any[]>([]);

  const getData = async () => {
    setLoading(true);
    // const data = await
    // console.log(data);
    setLoading(false);
    // if (!data.error) {
    //   setDataBilling(data.data);
    //   setDataFill(data.data);
    // }
  };

  React.useEffect(() => {
    setDataBilling(dataSource);
    // getData();
  }, []);

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title="Transaction Billing"
      content="Manage your billing"
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
        <Row gutter={[16, 16]} justify="space-between" align={'bottom'}>
          <Col>
            <Space direction="vertical">
              <Typography>Search</Typography>
              <Input
                suffix={<SearchOutlined />}
                style={{
                  borderRadius: '20px',
                }}
                placeholder="Search"
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Status</Typography>
              <Select
                defaultValue="all"
                style={{
                  width: 250,
                  borderRadius: 100,
                }}
                onChange={(v) => {
                  console.log(v);
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
              <Typography>Customer</Typography>
              <Select
                defaultValue="area"
                style={{
                  width: 200,
                  borderRadius: 100,
                }}
                onChange={(v) => {
                  console.log(v);
                }}
                options={[
                  {
                    value: 'area',
                    label: 'Area',
                  },
                  {
                    value: 'tenant',
                    label: 'Tenant',
                  },
                ]}
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography>Search</Typography>
              <DatePicker style={{ width: '200px' }} />
            </Space>
          </Col>
          <Col style={{ paddingTop: 20 }}>
            <Button type="primary" icon={<ExportOutlined />}>
              Export
            </Button>
          </Col>
        </Row>
      </Card>
      <Table
        dataSource={dataBilling}
        loading={loading}
        style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
      >
        <Column title="No Invoice" dataIndex="no_invoice" key="no_invoice" />

        <Column
          title="Date"
          dataIndex="date"
          key="date"
          render={(val) => {
            return <>{val && val !== '' ? val : '-'}</>;
          }}
        />
        <Column title="Area Name" dataIndex="area_name" key="area_name" />
        <Column title="Tenant" dataIndex="tenant_name" key="tenant_name" />
        <Column title="Periode" dataIndex="periode" key="periode" />
        <Column title="Usage" dataIndex="usage" key="usage" />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(_, record: DataType) => {
            if (record.status === 'New') {
              return <Badge color={'cyan'} text={record.status} />;
            } else if (record.status === 'Paid') {
              return <Badge color={'green'} text={record.status} />;
            } else if (record.status === 'Unpaid') {
              return <Badge color={'orange'} text={record.status} />;
            } else if (record.status === 'Cancel') {
              return <Badge color={'red'} text={record.status} />;
            } else {
              return <Badge color={'cyan'} text={record.status} />;
            }
          }}
        />
        <Column title="Amount" dataIndex="amount" key="amount" />
        <Column
          title="Action"
          key="action"
          render={(_, record: DataType) => {
            return (
              <Dropdown
                overlay={
                  <Menu
                    onClick={(info) => {
                      if (info.key == 'edit') {
                        // setDataEdit(val);
                      }
                    }}
                    items={[
                      {
                        label: (
                          <Button
                            size="small"
                            type="link"
                            icon={<EditOutlined />}
                            style={{
                              color: '#000',
                            }}
                          >
                            Edit
                          </Button>
                        ),
                        key: 'edit',
                      },
                    ]}
                  />
                }
                trigger={['click']}
              >
                <Button className="edit-icon" shape="circle" icon={<EllipsisOutlined />} />
              </Dropdown>
            );
          }}
        />
      </Table>
    </PageContainer>
  );
};

export default Billing;
