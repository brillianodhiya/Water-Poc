/* eslint-disable react-hooks/exhaustive-deps */
import { AddNode } from '@/components/Form/AddNodes';
import { ProfileSide } from '@/components/ProfileSide/ProfileSide';
import {
  ApiSetInterval,
  ApiSetUnsigned,
  ApiSetValve,
  getListNode,
} from '@/services/badiklat/nodeList';
import {
  CloseOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
  LeftOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useLocation, useParams } from '@umijs/max';
import {
  Button,
  Card,
  Col,
  Input,
  Modal,
  Row,
  Space,
  Switch,
  Table,
  Typography,
  Form,
  InputNumber,
  message,
} from 'antd';
import type { FormInstance } from 'antd/es/form';
import moment from 'moment';
import React from 'react';
import ViewLog from './ViewLog';

type LocationStateTypes = {
  type: string;
  id: number | any;
  area_id: number | any;
  node_type_id: number | any;
  devEui: any;
  meter_id: any;
};

const { Search } = Input;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface Item {
  key: string;
  last_update: string;
  devEui: string;
  meter_id: string;
  interval: number;
  live_valve: string;
  id: string;
}

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const form = React.useContext(EditableContext)!;

  React.useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
          {
            min: 15,
            message: 'Min. 15',
            type: 'number',
          },
        ]}
      >
        <InputNumber
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          // formatter={(value) => `${value}min`}
          // parser={(value) => value!.replace('min', '')}
        />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const ListNode: React.FC = () => {
  const searchParams = useLocation();
  const params = useParams<string>();

  const state = searchParams.state as LocationStateTypes;

  const [loading, setLoading] = React.useState(false);
  const [typeId, setTypeId] = React.useState(state.node_type_id);
  const [data, setData] = React.useState<any[]>([]);
  const [dataFill, setDataFill] = React.useState<any[]>([]);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [modalAddNode, setModalAddNode] = React.useState<boolean>(false);

  const getTypeId = (val: number) => {
    if (val) {
      setTypeId(val);
    }
  };

  // console.log(searchParams, 'SEARCH');
  React.useEffect(() => {
    if (!state.id) {
      history.push('/overview/room');
    }
  }, [state]);

  const handlegetListNode = async () => {
    setLoading(true);
    const d = await getListNode({
      params: {
        // typeId,
        tenantId: state.type == 'tenant' ? state.id : undefined,
        internalId: state.type == 'internal' ? state.id : undefined,
        areaId: state.area_id,
      },
    });

    setLoading(false);
    // console.log(d);
    if (!d.error) {
      setData(d.data);
      setDataFill(d.data);
    }
  };

  React.useEffect(() => {
    if (typeId) {
      handlegetListNode();

      const interval = setInterval(() => {
        handlegetListNode();
      }, 30000);

      return () => clearInterval(interval);
    }
    return () => {};
  }, [typeId]);

  const handleUnsigned = (obj: any) => {
    Modal.confirm({
      title: 'Do you Want to unsign these node?',
      icon: <ExclamationCircleOutlined />,
      content: 'Device Eui: ' + obj.devEui,
      onOk: async () => {
        // console.log('OK');
        setLoading(true);
        const d = await ApiSetUnsigned({
          devEui: obj.devEui,
          node_id: obj.id,
          type_id: obj.typeId,
        });
        setLoading(false);
        if (!d.error) {
          Modal.success({
            content: 'Success unsigned node ' + obj.devEui,
            onOk: () => {
              handlegetListNode();
            },
          });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleSetRelay = async (obj: any, status: boolean) => {
    Modal.confirm({
      title: `Do you Want to change status to ${status ? `"ON"` : `"OFF"`} for this node?`,
      icon: <ExclamationCircleOutlined />,
      content: 'Device Eui: ' + obj.devEui,
      onOk: async () => {
        setLoading(true);
        const d = await ApiSetValve({
          devEui: obj.devEui,
          status: status,
        });
        setLoading(false);
        if (!d.error) {
          handlegetListNode();
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  // console.log(params, 'PARAMS');

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      breadcrumb={{}}
      // backIcon={<BackwardOutlined />}
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        marginTop: '14px',
      }}
      className="no-padding"
      // onBack={() => history.push('/overview/room')}
    >
      <AddNode
        id={state.id}
        type={state.type}
        onOk={() => {
          setModalAddNode(false);
          handlegetListNode();
        }}
        onCancel={() => setModalAddNode(false)}
        open={modalAddNode}
        typeId={state.node_type_id}
      />
      <Row>
        <Col xxl={5} xl={6} lg={8} md={8} sm={8} xs={0} style={{ paddingLeft: '20px' }}>
          <Button type="text" icon={<LeftOutlined />} onClick={() => history.back()}>
            Back
          </Button>
          <ProfileSide
            key="profileside"
            type={state.type}
            id={state.id}
            setTypeId={getTypeId}
            devEui={state.devEui}
            meter_id={state.meter_id}
          />
        </Col>
        <Col
          xxl={19}
          xl={18}
          lg={16}
          md={16}
          sm={16}
          xs={24}
          style={{ marginTop: '-9px', background: '#FAFAFA' }}
        >
          {params.subsubpage == 'log' ? (
            <ViewLog />
          ) : (
            <Card
              bordered={false}
              style={{
                background: '#FAFAFA',
                minHeight: '85vh',
                textAlign: 'right',
              }}
            >
              <Typography.Title level={3} style={{ float: 'left' }}>
                List Device
              </Typography.Title>
              <Space wrap>
                {showSearch ? (
                  <Search
                    // size="large"
                    placeholder="Search by Device Eui"
                    onSearch={(value) => {
                      if (value) {
                        setData(dataFill.filter((v) => v.devEui.includes(value)));
                      } else {
                        setShowSearch(false);
                        setData(dataFill);
                      }
                    }}
                    style={{ width: 200 }}
                    className="search-rounded"
                    allowClear
                  />
                ) : (
                  <Button
                    // size="large"
                    shape="circle"
                    icon={<SearchOutlined />}
                    onClick={() => {
                      setShowSearch(true);
                    }}
                  />
                )}
                <Button
                  type="primary"
                  onClick={() => {
                    setModalAddNode(true);
                  }}
                >
                  Add Node
                </Button>
              </Space>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                    row: EditableRow,
                  },
                }}
                loading={loading}
                dataSource={data}
                size="large"
                style={{ marginTop: '16px' }}
              >
                <Table.Column
                  title="Last Update"
                  dataIndex="last_update"
                  render={(text) =>
                    moment(text).isValid() ? moment(text).format('DD-MM-YYYY HH:mm:ss') : ''
                  }
                />
                <Table.Column title="Device Eui" dataIndex="devEui" />
                <Table.Column title="Meter Id" dataIndex="meter_id" />
                <Table.Column
                  title="Interval"
                  dataIndex="interval"
                  render={(text) => {
                    return (
                      <Typography>
                        {text} min <EditOutlined style={{ color: '#003a8c' }} />
                      </Typography>
                    );
                  }}
                  onCell={(record: any) => ({
                    contentEditable: false,
                    editable: true,
                    handleSave: async (e: Item) => {
                      setLoading(true);
                      const d = await ApiSetInterval({
                        devEui: e.devEui,
                        interval: e.interval,
                      });
                      setLoading(false);
                      if (!d.error) {
                        // message.success(d.message);
                        Modal.success({
                          content: d.message,
                        });
                      } else {
                        message.error(d.message);
                      }
                      handlegetListNode();
                    },
                    dataIndex: 'interval',
                    title: 'Interval',
                    record,
                  })}
                />
                <Table.Column
                  title="Status"
                  dataIndex="live_valve"
                  render={(text, record: any) => {
                    let v = text == 'open' ? true : false;

                    return (
                      <Switch
                        checkedChildren="ON"
                        unCheckedChildren="OFF"
                        checked={v}
                        onChange={(checked) => {
                          v = checked;
                          handleSetRelay(record, v);
                        }}
                      />
                    );
                  }}
                />
                <Table.Column
                  dataIndex="id"
                  width={10}
                  render={(_, record: any) => {
                    return (
                      <Button
                        icon={<FileSearchOutlined />}
                        onClick={() => {
                          history.push('/overview/' + params.page + '/view/' + 'log', {
                            ...state,
                            device_id: _,
                            devEui: record.devEui,
                            meter_id: record.meter_id,
                          });
                        }}
                      />
                    );
                  }}
                />
                <Table.Column
                  width={10}
                  dataIndex="id"
                  render={(_, record: any) => {
                    return (
                      <Button
                        danger
                        icon={<CloseOutlined />}
                        onClick={() => {
                          handleUnsigned(record);
                        }}
                      />
                    );
                  }}
                />
              </Table>
            </Card>
          )}
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ListNode;
