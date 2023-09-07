import { CloseOutlined, ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Row, Space, Col, Table, Typography, Switch, Tag, Modal } from 'antd';
import React from 'react';
import moment from 'moment';
import { getNode } from '@/services/badiklat/installation';
import { ApiSetUnsignedInstallation, ApiSetValve } from '@/services/badiklat/nodeList';
import { ModalAddInstallationNode } from '@/components/Form/AddInstallationNode';

const { Search } = Input;

const Nodes: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [dataFill, setDataFill] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [modalAddInstallationNode, setModalAddInstallationNode] = React.useState<boolean>(false);

  const handlegetListNode = async () => {
    setLoading(true);
    const d = await getNode({});

    setLoading(false);
    console.log(d);
    if (!d.error) {
      setData(d.data);
      setDataFill(d.data);
    }
  };

  React.useEffect(() => {
    handlegetListNode();
  }, []);

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
  return (
    <Card
      style={{
        borderRadius: 8,
      }}
      bodyStyle={{
        background: '#FAFAFA',
        minHeight: '85vh',
      }}
    >
      <ModalAddInstallationNode
        open={modalAddInstallationNode}
        onCancel={() => setModalAddInstallationNode(false)}
        onOk={() => {
          handlegetListNode();
          setModalAddInstallationNode(false);
        }}
      />
      <Row>
        <Col span={24}>
          <Typography.Title level={5}>List Device</Typography.Title>
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}>
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
                setModalAddInstallationNode(true);
              }}
            >
              Add Device
            </Button>
          </Space>
        </Col>
      </Row>
      <Table loading={loading} dataSource={data} size="large" style={{ marginTop: '16px' }}>
        <Table.Column
          title="Installation Date"
          dataIndex="installationDate"
          render={(text) =>
            moment(text).isValid() ? moment(text).format('DD-MM-YYYY HH:mm:ss') : ''
          }
        />
        <Table.Column title="Create By" dataIndex="create_by" />

        <Table.Column
          title="Last Update"
          dataIndex="last_update"
          render={(text) =>
            moment(text).isValid() ? moment(text).format('DD-MM-YYYY HH:mm:ss') : ''
          }
        />
        <Table.Column
          title="Room"
          dataIndex="location"
          render={(_, record: any) => {
            if (record.iot_internal) {
              return record.iot_internal.name;
            } else if (record.iot_tenant) {
              return record.iot_tenant.name;
            } else {
              return <Tag color="red">No Location</Tag>;
            }
          }}
        />
        <Table.Column title="Device EUI" dataIndex="devEui" />
        <Table.Column title="Description" dataIndex="description" />
        <Table.Column
          title="Node Type"
          dataIndex={['iot_node_type', 'type_name']}
          render={(text) => {
            if (text == 'ELECTRICITY NON CT') {
              return (
                <Tag color="geekblue" style={{ borderRadius: '100px', padding: '4px 8px' }}>
                  Electricity Non CT
                </Tag>
              );
            } else {
              return (
                <Tag color="warning" style={{ borderRadius: '100px', padding: '4px 8px' }}>
                  Electricity CT
                </Tag>
              );
            }
          }}
        />
        <Table.Column title="Interval" dataIndex="interval" render={(text) => text + ' min'} />
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
  );
};

export default Nodes;
