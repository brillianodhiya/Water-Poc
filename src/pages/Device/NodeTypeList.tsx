import { getDeviceNodeType } from '@/services/nebula/device';
import { BarsOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Avatar, Col, Row, Segmented, Space, Spin, Typography } from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
moment.locale('en');
const ListNodeType: React.FC<{ isFocused: boolean; counter: number }> = ({
  isFocused,
  counter,
}) => {
  const [dataDevice, setDataDevice] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [segment, setSegment] = React.useState<any>('installed');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dataFull, setDataFull] = React.useState<any[]>([]);

  const getData = async () => {
    setLoading(true);
    const data = await getDeviceNodeType({});
    setLoading(false);
    if (!data.error) {
      setDataDevice(data.data);
      setDataFull(data.data);

      // dummy
    }
  };
  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused, counter]);

  return (
    <div>
      <Spin spinning={loading}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Segmented
            className="background-blue-segment"
            onChange={(value) => {
              // history.push('/device/' + value);

              setSegment(value);
            }}
            value={segment}
            options={[
              {
                label: 'Your Type',
                icon: <BarsOutlined />,
                value: 'installed',
              },
              {
                label: 'Available Type',
                icon: <BarsOutlined />,
                value: 'available',
              },
            ]}
          />
        </div>
        {/* <Typography.Title level={4} style={{ fontSize: '16px' }}>
          Your Device
        </Typography.Title> */}

        <Row gutter={[16, 16]}>
          {dataDevice
            .filter((va: any) => {
              if (segment == 'installed') {
                return va.total_device > 0;
              } else {
                return va.total_device == 0;
              }
            })
            .map((val: any) => {
              return (
                <Col key={val.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                  <div
                    style={{
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      borderRadius: '8px',
                      display: 'flex',
                      boxSizing: 'border-box',
                      flexDirection: 'row',
                      padding: '16px 24px',
                    }}
                    className="shadow-hover"
                    onClick={() => {
                      history.push(
                        '/device/Device/list?node_type=' + val.id + '&node_type_name=' + val.name,
                      );
                    }}
                  >
                    <Space size={'large'} align="center">
                      <Avatar src={val.icon} size={48} />
                      <div
                        style={{
                          marginTop: '2px',
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: '16px',
                            fontWeight: 500,
                          }}
                        >
                          {val.name}
                        </Typography>
                        <Typography>Total Device: {val.total_device}</Typography>
                      </div>
                    </Space>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Spin>
    </div>
  );
};

export default ListNodeType;
