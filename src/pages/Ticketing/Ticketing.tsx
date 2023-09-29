import TicketingSide from '@/components/Ticketing/TicketingSide';
import { getTicket } from '@/services/nebula/ticket';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Badge, Button, Col, Divider, Row, Table, Typography } from 'antd';
import Column from 'antd/lib/table/Column';
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
type DataType = {
  key: string;
  type: string;
  status: string;
  ticket_name: string;
  type_ticket: string;
};

const Ticketing: React.FC<{ isFocused: boolean }> = ({}) => {
  const [dataTicket, setDataTicket] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataSelected, setDataSelected] = React.useState<any>({});

  const getData = async () => {
    setLoading(true);
    const data = await getTicket({});
    setLoading(false);
    if (!data.error) {
      // console.log(data, 'data ticket');
      setDataTicket(data.data);
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setDataSelected(selectedRows[0]);
    },
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (dataTicket[0] && !dataSelected.id) {
      setDataSelected(dataTicket[0]);
    } else {
      const w = dataTicket.filter((v: any) => v.id == dataSelected.id);

      if (w.length > 0) {
        setDataSelected(w[0]);
      }
    }
  }, [dataTicket]);

  // console.log(typeof dataSelected.id, 'id');

  // console.log(dataSelected, 'DATASELECTED');

  return (
    <PageContainer
      title="Ticket Management"
      extra={
        <Button
          shape="round"
          type="primary"
          onClick={() => {
            history.push('/ticket/create');
          }}
        >
          <PlusOutlined /> Create Ticket
        </Button>
      }
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Ticket</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Divider
        style={{
          margin: '0px 0px 20px 0px',
        }}
      />
      <Row gutter={[24, 16]}>
        <Col
          // xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}
          xxl={8}
          xl={8}
          lg={8}
          md={12}
          sm={24}
          xs={24}
        >
          <Table
            dataSource={dataTicket}
            loading={loading}
            style={{ borderRadius: 8, border: '1px solid #f0f0f0' }}
            rowSelection={{
              type: 'radio',
              ...rowSelection,
              selectedRowKeys: [dataSelected.id],
            }}
            rowKey={'id'}
            pagination={false}
          >
            <Column
              title="No Tiket"
              dataIndex="No Tiket"
              key="No Tiket"
              render={(_, record: DataType) => {
                if (record['No Tiket'].length > 25) {
                  return (
                    <Typography.Text strong>
                      {record['No Tiket'].slice(0, 25) + '...'}
                    </Typography.Text>
                  );
                } else {
                  return <Typography.Text strong>{record['No Tiket']}</Typography.Text>;
                }
              }}
            />
            <Column
              title="Ticket Type"
              dataIndex="Ticket Type"
              key="Ticket Type"
              render={(_, record: DataType) => {
                if (record['Ticket Type'] == 'Preventive Maint') {
                  return (
                    <Typography.Text type="secondary">{record['Ticket Type']}</Typography.Text>
                  );
                } else {
                  return <Typography.Text>{record['Ticket Type']}</Typography.Text>;
                }
              }}
            />
            <Column
              title="Status"
              dataIndex="status"
              key="status"
              render={(_, record: DataType) => {
                if (record.status === 'on progress') {
                  return <Badge color={'#1890FF'} text={record.status} />;
                } else if (record.status == 'new') {
                  return <Badge color={'green'} text={record.status} />;
                } else if (record.status === 'close') {
                  return (
                    <Badge
                      color={'#D9D9D9'}
                      style={{
                        color: 'rgba(0, 0, 0, 0.45)',
                      }}
                      text={record.status}
                    />
                  );
                } else {
                  return (
                    <Badge
                      color={'#D9D9D9'}
                      style={{
                        color: 'rgba(0, 0, 0, 0.45)',
                      }}
                      text={record.status}
                    />
                  );
                }
              }}
            />
          </Table>
        </Col>
        <TicketingSide data={dataSelected} getData={getData} />
      </Row>
    </PageContainer>
  );
};

export default Ticketing;
