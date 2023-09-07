// import { MapIcon } from '@/components/Icons/MapIcon';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Row, Space, Col, Table, Typography } from 'antd';
import React from 'react';
import moment from 'moment';
import { getListGateway } from '@/services/badiklat/installation';
import { ModalAddGateway } from '@/components/Form/AddGateway';

const { Search } = Input;

const Gateway: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [dataFill, setDataFill] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [modalAddGateway, setModalAddGateway] = React.useState<boolean>(false);

  const handlegetListGateway = async () => {
    setLoading(true);
    const d = await getListGateway({});
    setLoading(false);
    console.log(d);
    if (!d.error) {
      setData(d.data);
      setDataFill(d.data);
    }
  };

  React.useEffect(() => {
    handlegetListGateway();
  }, []);

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
      <ModalAddGateway
        open={modalAddGateway}
        onCancel={() => setModalAddGateway(false)}
        onOk={() => {
          handlegetListGateway();
          setModalAddGateway(false);
        }}
      />
      <Row>
        <Col span={24}>
          <Typography.Title level={5}>List Gateway</Typography.Title>
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Space wrap>
            {showSearch ? (
              <Search
                // size="large"
                placeholder="Search by Gateway Name"
                onSearch={(value) => {
                  if (value) {
                    setData(
                      dataFill.filter((v) =>
                        v.gateway_name.toLowerCase().includes(value.toLowerCase()),
                      ),
                    );
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
            {/* <Button
              // size="large"
              shape="circle"
              icon={<MapIcon />}
              onClick={() => {}}
            /> */}
            <Button
              type="primary"
              onClick={() => {
                setModalAddGateway(true);
              }}
            >
              Add Gateway
            </Button>
          </Space>
        </Col>
      </Row>
      <Table loading={loading} dataSource={data} size="large" style={{ marginTop: '16px' }}>
        <Table.Column
          title="Last Update"
          dataIndex="last_update"
          render={(text) =>
            moment(text).isValid() ? moment(text).format('DD-MM-YYYY HH:mm:ss') : ''
          }
        />
        <Table.Column title="Mac Address" dataIndex="mac_address" />
        <Table.Column title="Gateway Name" dataIndex="gateway_name" />
        <Table.Column title="Device Type" dataIndex="unit_model" />
        <Table.Column title="Description" dataIndex="description" />
      </Table>
    </Card>
  );
};

export default Gateway;
