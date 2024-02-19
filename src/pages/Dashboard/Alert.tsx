import { getListAlertCard, getListAlertDetail } from '@/services/badiklat/dashboard';
import { Button, Card, Modal, Space, Spin, Table } from 'antd';
import Typography from 'antd/lib/typography/Typography';
import React from 'react';
import { useQuery } from 'react-query';

const AlertComponent = () => {
  const [modalDetail, setModalDetail] = React.useState(false);
  const [modalKey, setModalKey] = React.useState('');
  const { isFetching, data } = useQuery({
    queryKey: ['alert'],
    queryFn: async () => {
      const response = await getListAlertCard({});
      return {
        data: response.data,
        warna: response.warna,
      };
    },
    refetchInterval: 900000,
    refetchOnWindowFocus: false,
    initialData: {
      data: {},
      warna: [],
    },
  });

  const { isFetching: isFetchingModal, data: dataModal } = useQuery({
    queryKey: ['alert', modalKey, modalDetail],
    queryFn: async () => {
      if (modalKey == '') {
        return [];
      }
      const response = await getListAlertDetail({}, modalKey);
      return response.data;
    },
    refetchInterval: 900000,
    refetchOnWindowFocus: false,
    initialData: [],
  });

  return (
    <div>
      <Modal
        title={
          <span
            style={{
              textTransform: 'capitalize',
              fontSize: '16px',
            }}
          >
            {modalKey}
          </span>
        }
        open={modalDetail}
        onCancel={() => setModalDetail(false)}
        footer={null}
        width={800}
      >
        <Table
          dataSource={dataModal}
          loading={isFetchingModal}
          scroll={{
            x: 800,
          }}
        >
          {Object.keys(dataModal ? (dataModal.length > 0 ? dataModal[0] : []) : []).map((val) => {
            return <Table.Column title={val} dataIndex={val} key={val} />;
          })}
        </Table>
      </Modal>
      <Card title="Alert">
        <Spin spinning={isFetching}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              flexWrap: 'wrap',
            }}
          >
            {Object.keys(data?.data).map((val, idx) => {
              const color = data?.warna[idx];
              return (
                <div
                  key={val}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <Space>
                    <div
                      style={{
                        backgroundColor: '#' + color,
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                      }}
                    />
                    {/* <Badge size="default" color={'#' + color} text={val} /> */}
                    <Typography
                      style={{
                        textTransform: 'capitalize',
                        fontSize: '16px',
                      }}
                    >
                      {val}
                    </Typography>
                  </Space>

                  <Space size={'small'}>
                    {/* <Badge size="default" color={'#' + color} text={val} /> */}
                    <Typography
                      style={{
                        fontWeight: 'bold',
                        fontSize: '16px',
                      }}
                    >
                      {data?.data[val]}
                    </Typography>
                    <Button
                      type="link"
                      onClick={() => {
                        setModalKey(val);
                        setModalDetail(true);
                      }}
                    >
                      View Detail
                    </Button>
                  </Space>
                </div>
              );
            })}
          </div>
        </Spin>
      </Card>
    </div>
  );
};

export default AlertComponent;
