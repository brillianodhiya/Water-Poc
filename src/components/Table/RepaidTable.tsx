import Column from 'antd/lib/table/Column';
import { Table, Typography, Badge, Row, Col, Button, Card } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
type Props = {
  name: string;
};

type DataType = {
  value: number;
  status: string;
  price: number;
  product_name: string;
};
const dataSource = [
  {
    key: '1',
    value: 60753,
    status: 'Active',
    product_name: 'et magnam voluptatem',
    price: 3672,
  },
  {
    key: '2',
    value: 76647,
    status: 'Active',
    product_name: 'quasi in ut',
    price: 9971,
  },
  {
    key: '3',
    value: 17788,
    status: 'Active',
    product_name: 'consequatur velit ratione',
    price: 5495,
  },
  {
    key: '4',
    value: 57711,
    status: 'Active',
    product_name: 'sit omnis facilis',
    price: 9680,
  },
  {
    key: '5',
    value: 42151,
    status: 'Active',
    product_name: 'eos laboriosam aperiam',
    price: 2470,
  },
];
export const RepaidTable: React.FC<Props> = ({ name }) => {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    setLoading(false);
    setData(dataSource);
  };

  React.useEffect(() => {
    getData();
  }, [name]);

  return (
    <Card
      style={{
        borderRadius: 8,
      }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <Row justify={'space-between'} style={{ padding: 20 }}>
        <Col>
          <Typography.Text strong>{name}</Typography.Text>
        </Col>
        <Col>
          <Button type="primary" icon={<SearchOutlined />}>
            Add
          </Button>
        </Col>
      </Row>
      <Table dataSource={data} loading={loading}>
        <Column title="Product Name" dataIndex="product_name" key="product_name" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Value" dataIndex="value" key="value" />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(_, record: DataType) => {
            if (record.status === 'Active') {
              return <Badge color={'green'} text={record.status} />;
            } else {
              return <Badge color={'blue'} text={record.status} />;
            }
          }}
        />
      </Table>
    </Card>
  );
};
