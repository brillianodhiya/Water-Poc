/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import {
  Button,
  Card,
  Input,
  Modal,
  Space,
  Table,
  Tag,
  Typography,
  // Typography
} from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled, SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { getListWaterPressure } from '@/services/badiklat/dashboard';
import Highlighter from 'react-highlight-words';
import type { ColumnType } from 'antd/es/table';
// import { history } from '@umijs/max';

type ViewLogTypes = {
  loading: boolean;
  dataWaterPressure?: {
    devEui: string;
    meter_reading: string | number;
    icon: string;
  }[];
};

interface DataType {
  id: number;
  devEui: string;
  icon: string;
  area_name: string;
  tenant_name: string;
  meter_reading: number;
}

type DataIndex = keyof DataType;

export const WaterPressure: FunctionComponent<ViewLogTypes> = ({
  loading,
  dataWaterPressure = [
    // {
    //   devEui: '0000000000000001',
    //   meter_reading: '12',
    //   icon: 'danger',
    // },
    // {
    //   devEui: '0000000000000002',
    //   meter_reading: '12',
    //   icon: 'warning',
    // },
    // {
    //   devEui: '0000000000000003',
    //   meter_reading: '12',
    //   icon: 'green',
    // },
  ],
}) => {
  const [modalDetail, setModalDetail] = React.useState(false);
  const [loadingDetail, setLoadingDetail] = React.useState(false);
  const [dataDetail, setDataDetail] = React.useState<any[]>([]);
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const searchInput = React.useRef<InputRef>(null);

  React.useEffect(() => {
    if (modalDetail) {
      setLoadingDetail(true);
      const getData = async () => {
        const w = await getListWaterPressure({});
        setDataDetail(w.data);
        console.log(w.data, 'DATA');
        setLoadingDetail(false);
      };

      getData();
    }
  }, [modalDetail]);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record: any) =>
      (record[dataIndex] ?? '')
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  return (
    <>
      <Modal
        open={modalDetail}
        onCancel={() => {
          setModalDetail(false);
        }}
        // okButtonProps={{ style: { display: 'none' } }}
        // cancelButtonProps={{ style: { display: 'none' } }}
        title="Water Pressure"
        width={800}
        footer={false}
      >
        <Table dataSource={dataDetail} loading={loadingDetail}>
          <Table.Column
            {...getColumnSearchProps('area_name')}
            title="Area Name"
            dataIndex="area_name"
            key="area_name"
            sorter={(a: any, b: any) => a.area_name.length - b.area_name.length}
          />
          <Table.Column
            {...getColumnSearchProps('tenant_name')}
            width={200}
            title="Tenant"
            dataIndex="tenant_name"
            sorter={(a: any, b: any) => a.tenant_name.length - b.tenant_name.length}
          />
          <Table.Column
            width={200}
            title="Dev Eui"
            dataIndex="devEui"
            key="devEui"
            {...getColumnSearchProps('devEui')}
          />
          <Table.Column
            title="Pressure"
            dataIndex="pressure"
            render={(_, record: any) => {
              return (
                <Space size="small">
                  {record.icon == 'green' && (
                    <CheckCircleFilled
                      style={{
                        color: '#52C41A',
                      }}
                    />
                  )}
                  {record.icon == 'danger' && (
                    <ExclamationCircleFilled
                      style={{
                        color: '#F5222D',
                      }}
                    />
                  )}
                  {record.icon == 'warning' && (
                    <ExclamationCircleFilled
                      style={{
                        color: '#FA8C16',
                      }}
                    />
                  )}
                  <Typography>{record.meter_reading} Bar</Typography>
                </Space>
              );
            }}
          />
        </Table>
      </Modal>
      <Card
        title="Water Pressure"
        style={{
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
        }}
        bodyStyle={{ padding: 0 }}
        extra={
          <Tag
            style={{
              borderRadius: 8,
              borderWidth: 0,
              cursor: 'pointer',
              // marginRight: '-8px',
            }}
            color="blue"
            // onClick={() => history.push('/device?type=Device')}
            onClick={() => setModalDetail(true)}
          >
            View detail
          </Tag>
        }
        // size="small"
      >
        <Table
          scroll={{
            x: true,
          }}
          dataSource={dataWaterPressure}
          loading={loading}
          // size="small"
          pagination={false}
        >
          <Table.Column title="Device Name" dataIndex="description" />
          <Table.Column
            title="Pressure"
            dataIndex="pressure"
            render={(_, record: any) => {
              return (
                <Space size="small">
                  {record.icon == 'green' && (
                    <CheckCircleFilled
                      style={{
                        color: '#52C41A',
                      }}
                    />
                  )}
                  {record.icon == 'danger' && (
                    <ExclamationCircleFilled
                      style={{
                        color: '#F5222D',
                      }}
                    />
                  )}
                  {record.icon == 'warning' && (
                    <ExclamationCircleFilled
                      style={{
                        color: '#FA8C16',
                      }}
                    />
                  )}
                  <Typography>{record.meter_reading} Bar</Typography>
                </Space>
              );
            }}
          />
        </Table>
      </Card>
    </>
  );
};
