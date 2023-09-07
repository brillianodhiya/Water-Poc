import { getGateway } from '@/services/nebula/device';
import type { InputRef } from 'antd';
import { Button, Space, Tag } from 'antd';
import { Input, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import type { ColumnType } from 'antd/es/table';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
moment.locale('en');

interface DataType {
  id: number;
  updatedAt: string;
  name: string;
  mac_id: string;
  device_type?: string;
  description?: string;
}

type DataIndex = keyof DataType;

const ListGateway: React.FC<{ isFocused: boolean; counter: number }> = ({ isFocused, counter }) => {
  const [dataDevice, setDataDevice] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const searchInput = React.useRef<InputRef>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataFull, setDataFull] = React.useState<any[]>([]);

  const getDataGateway = async () => {
    setLoading(true);
    const data = await getGateway({});
    // console.log(data, 'DATA');
    setLoading(false);
    if (!data.error) {
      setDataDevice(data.data);
      setDataFull(data.data);

      // dummy
    }
  };
  React.useEffect(() => {
    if (isFocused) {
      getDataGateway();
    }
  }, [isFocused, counter]);

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
    <div>
      <Table
        dataSource={dataDevice}
        loading={loading}
        style={{ marginTop: 20 }}
        scroll={{ x: true }}
      >
        <Column
          title="Installation Date"
          dataIndex="installation_date"
          key="installation_date"
          render={(val) => {
            return moment(val).format('MMM DD YYYY HH:mm:ss');
          }}
          sorter={(a: any, b: any) =>
            moment(a.installation_date).unix() - moment(b.installation_date).unix()
          }
        />
        <Column
          title="Last Update"
          dataIndex="last_update"
          key="last_update"
          render={(val) => {
            return moment(val).format('MMM DD YYYY HH:mm:ss');
          }}
          sorter={(a: any, b: any) => moment(a.last_update).unix() - moment(b.last_update).unix()}
        />
        <Column
          {...getColumnSearchProps('name')}
          title="Gateway Name"
          dataIndex="name"
          key="name"
          sorter={(a: any, b: any) => a.device_type.length - b.device_type.length}
        />
        <Column
          {...getColumnSearchProps('mac_id')}
          title="Mac Address"
          dataIndex="mac_id"
          key="mac_id"
        />
        {/* <Column
          title="Device Type"
          dataIndex="device_type"
          sorter={(a: any, b: any) => a.device_type.length - b.device_type.length}
        /> */}
        <Column
          title="Status"
          dataIndex="status"
          render={(text: boolean) => {
            if (text == true) {
              return <Tag color="green">Online</Tag>;
            } else {
              return <Tag color="red">Offline</Tag>;
            }
          }}
        />

        <Column
          title="Description"
          dataIndex="description"
          key="description"
          sorter={(a: any, b: any) => a.description.length - b.description.length}
        />
      </Table>
    </div>
  );
};

export default ListGateway;
