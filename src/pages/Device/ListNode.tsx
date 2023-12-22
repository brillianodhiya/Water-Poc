import { EditInterval } from '@/components/Form/EditInterval';
import { FullBatteryIcon, LowBatteryIcon, MediumBatteryIcon } from '@/components/Icons/Battery';
import { ModalViewDetailNode } from '@/components/ModalCustom/ModalViewDetailDevice';
import { ModalViewLog } from '@/components/ModalCustom/ModalViewLog';
import { getDevice, getListDownlink } from '@/services/nebula/device';
import { ApiSetUnsignedInstallation } from '@/services/nebula/nodeList';
import { createFromIconfontCN } from '@ant-design/icons';
import {
  ClockCircleOutlined,
  DashboardOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  MoreOutlined,
  SearchOutlined,
} from '@ant-design/icons/lib/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import type { InputRef } from 'antd';
import { Button, Dropdown, Modal, Input, Menu, Space, Table, Tag, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import moment from 'moment';
import 'moment/locale/id';
import queryString from 'query-string';
import React from 'react';
import { Helmet } from 'react-helmet';
import Highlighter from 'react-highlight-words';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3875475_w5k22iyjel.js',
});

const { Column } = Table;

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
moment.locale('en');

interface DataType {
  id: number;
  instalation_date: string;
  created_by: string;
  area_name: string;
  tenant_name: string;
  description?: string;
  model: string;
  lastUpdate: string;
  interval: number;
  battery: number;
  devEui: string;
  status: string;
  device_type: string;
}

type DataIndex = keyof DataType;

const ListNode: React.FC<{ isFocused: boolean; counter: number }> = ({ isFocused, counter }) => {
  const [dataDevice, setDataDevice] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState('');
  const [searchedColumn, setSearchedColumn] = React.useState('');
  const searchInput = React.useRef<InputRef>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataFull, setDataFull] = React.useState<any[]>([]);
  const queryParsed = queryString.parse(window.location.search);
  const [modalViewLog, setModalViewLog] = React.useState(false);
  const [dataModal, setDataModal] = React.useState<any>({});
  const [listDownlink, setListDownlink] = React.useState<any[]>([]);
  const [modalInterval, setModalInterval] = React.useState(false);
  const [modalViewDetail, setModalViewDetail] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    const data = await getDevice({
      // params: {
      //   type: queryParsed.node_type,
      // },
    });
    setLoading(false);
    if (!data.error) {
      data.data.map((v: any, idx: number) => {
        data.data[idx].area_name = v.Nebula_Area.area_name;
        data.data[idx].tenant_name = v.Nebula_Tenant.name;
      });
      setDataDevice(data.data);
      setDataFull(data.data);
    }
  };

  const getDataListDownlink = async () => {
    setLoading(true);
    const data = await getListDownlink({}, queryParsed.node_type);
    setLoading(false);
    if (!data.error) {
      setListDownlink(data.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      // console.log('TEST');
      getData();
      getDataListDownlink();
    } else {
      history.push('/device/Node');
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

  const handleUnsigned = (obj: any) => {
    Modal.confirm({
      title: 'Do you Want to unsign these node?',
      icon: <ExclamationCircleOutlined />,
      content: 'Device Eui: ' + obj.devEui,
      onOk: async () => {
        // console.log('OK');
        setLoading(true);
        const d = await ApiSetUnsignedInstallation({
          devEui: obj.devEui,
          node_id: obj.id,
        });
        setLoading(false);
        if (!d.error) {
          Modal.success({
            content: 'Success unsigned node ' + obj.devEui,
            onOk: () => {
              getData();
            },
          });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  // console.log(listDownlink, 'list downlink');

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title={' '}
      extra={undefined}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Device</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <ModalViewLog
        device_id={dataModal.id}
        open={modalViewLog}
        onCancel={() => setModalViewLog(false)}
        onOk={() => {
          setModalViewLog(false);
        }}
        typeName={queryParsed.node_type_name}
        devEui={dataModal.devEui}
        desc={dataModal.description}
      />
      <EditInterval
        devEui={dataModal.devEui}
        open={modalInterval}
        interval={dataModal.interval}
        onCancel={() => {
          setModalInterval(false);
        }}
        onOk={() => {
          setModalInterval(false);
          getData();
        }}
      />
      <ModalViewDetailNode
        devEui={dataModal.devEui}
        dataModal={dataModal}
        open={modalViewDetail}
        onCancel={() => {
          setModalViewDetail(false);
        }}
        onOk={() => {
          setModalViewDetail(false);
        }}
        typeName={queryParsed.node_type_name}
      />
      <Table dataSource={dataDevice} loading={loading} scroll={{ x: 1300 }}>
        {/* <Column
          width={200}
          title="Installation Date"
          dataIndex="instalation_date"
          key="instalation_date"
          render={(val) => {
            return moment(val).format('MMM DD YYYY HH:mm:ss');
          }}
          sorter={(a: any, b: any) =>
            moment(a.instalation_date).unix() - moment(b.instalation_date).unix()
          }
        /> */}
        {/* <Column
          width={200}
          {...getColumnSearchProps('created_by')}
          title="Create By"
          dataIndex="created_by"
          key="created_by"
          sorter={(a: any, b: any) => a.created_by.length - b.created_by.length}
        /> */}
        {/* <Column
          width={200}
          {...getColumnSearchProps('area_name')}
          title="Area Name"
          dataIndex="area_name"
          key="area_name"
          sorter={(a: any, b: any) => a.area_name.length - b.area_name.length}
        /> */}
        <Column
          {...getColumnSearchProps('tenant_name')}
          width={200}
          title="Tenant"
          dataIndex="tenant_name"
          sorter={(a: any, b: any) => a.tenant_name.length - b.tenant_name.length}
        />
        <Column
          width={200}
          title="Device Type"
          dataIndex="device_type"
          key="device_type"
          {...getColumnSearchProps('device_type')}
        />
        <Column
          width={200}
          title="Dev Eui"
          dataIndex="devEui"
          key="devEui"
          {...getColumnSearchProps('devEui')}

          // sorter={(a: any, b: any) => a.devEui.length - b.devEui.length}
        />
        <Column
          width={200}
          title="Meter Id"
          dataIndex="meter_id"
          key="meter_id"
          {...getColumnSearchProps('meter_id')}

          // sorter={(a: any, b: any) => a.devEui.length - b.devEui.length}
        />
        {/* <Column
          width={200}
          title="Mode / Brand"
          dataIndex="model"
          key="model"
          sorter={(a: any, b: any) => a.model.length - b.model.length}
          {...getColumnSearchProps('model')}
        /> */}

        <Column
          width={200}
          title="Last Update"
          dataIndex="lastUpdate"
          key="lastUpdate"
          render={(val) => {
            if (val) {
              return moment(val).format('MMM DD YYYY HH:mm:ss');
            }
          }}
          sorter={(a: any, b: any) => moment(a.lastUpdate).unix() - moment(b.lastUpdate).unix()}
        />
        <Column
          width={200}
          title="Status"
          dataIndex="status"
          key="status"
          {...getColumnSearchProps('status')}
          sorter={(a: any, b: any) => a.status.length - b.status.length}
          render={(text) => {
            if (text === 'ONLINE') {
              return <Tag color="green">{text}</Tag>;
            } else {
              return <Tag color="red">{text}</Tag>;
            }
          }}
        />

        <Column
          width={130}
          title="Interval"
          dataIndex="interval"
          key="interval"
          sorter={(a: any, b: any) => a.interval - b.interval}
          render={(v) => {
            return (
              <Space>
                <ClockCircleOutlined
                  style={{
                    color: 'gray',
                  }}
                />
                <Typography>{v} min</Typography>
              </Space>
            );
          }}
        />

        <Column
          width={150}
          title="Battery Level"
          dataIndex="battery"
          key="battery"
          sorter={(a: any, b: any) => a.battery - b.battery}
          filters={[
            {
              text: (
                <Space>
                  <FullBatteryIcon />
                  50 - 100
                </Space>
              ),
              value: '50-100',
            },
            {
              text: (
                <Space>
                  <MediumBatteryIcon />
                  20 - 50
                </Space>
              ),
              value: '20-50',
            },
            {
              text: (
                <Space>
                  <LowBatteryIcon
                    style={{
                      marginLeft: '3px',
                    }}
                  />{' '}
                  0 - 20
                </Space>
              ),
              value: '0-20',
            },
          ]}
          onFilter={(value: any, record: any) => {
            if (value === '50-100') {
              return record.battery > 50;
            } else if (value === '20-50') {
              return record.battery > 20 && record.battery <= 50;
            } else if (value === '0-20') {
              return record.battery <= 20;
            } else {
              return true;
            }
          }}
          render={(val) => {
            return (
              <>
                {val > 20 && val <= 50 ? (
                  <Space>
                    <MediumBatteryIcon />
                    {val}
                  </Space>
                ) : val <= 20 ? (
                  <Space>
                    <LowBatteryIcon />
                    {val}
                  </Space>
                ) : val > 50 ? (
                  <Space>
                    <FullBatteryIcon />
                    {val}
                  </Space>
                ) : null}
              </>
            );
          }}
        />
        <Column
          width={200}
          title="Description"
          dataIndex="description"
          key="description"
          {...getColumnSearchProps('description')}
        />
        <Column
          dataIndex="id"
          key="id"
          width={80}
          title="Action"
          fixed="right"
          render={(_, record: any) => {
            return (
              <Dropdown
                trigger={['click']}
                overlay={
                  <Menu>
                    <Menu.Item
                      key="1"
                      onClick={() => {
                        setModalViewLog(true);
                        setDataModal(record);
                      }}
                    >
                      <EyeOutlined />
                      {'  '}View Log
                    </Menu.Item>
                    {/* <Menu.Item
                      key="2"
                      onClick={() => {
                        setModalViewDetail(true);
                        setDataModal(record);
                      }}
                    >
                      <InfoCircleOutlined />
                      {'  '}Detail Device
                    </Menu.Item> */}
                    {listDownlink.map((v: any) => {
                      let icon = <EditOutlined />;
                      let funct = () => {
                        setModalInterval(true);
                        setDataModal(record);
                      };
                      switch (v) {
                        case 'interval':
                          icon = <ClockCircleOutlined />;
                          funct = () => {
                            setModalInterval(true);
                            setDataModal(record);
                          };
                          break;

                        case 'meter reading':
                          icon = <DashboardOutlined />;

                          break;

                        case 'valve':
                          icon = <IconFont type="icon-valve" />;

                          break;

                        default:
                          break;
                      }

                      return (
                        <Menu.Item
                          key={v}
                          onClick={() => {
                            funct();
                          }}
                          style={{ textTransform: 'capitalize' }}
                        >
                          {icon} {v}
                        </Menu.Item>
                      );
                    })}
                    <Menu.Item
                      key="3"
                      onClick={() => {
                        // history.push(`/device/${record.id}/delete`);
                        handleUnsigned(record);
                      }}
                      style={{ color: 'red' }}
                    >
                      <DeleteOutlined /> Unsign
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
              >
                <Button type="text">
                  <MoreOutlined />
                </Button>
              </Dropdown>
            );
          }}
        />
      </Table>
    </PageContainer>
  );
};

export default ListNode;
