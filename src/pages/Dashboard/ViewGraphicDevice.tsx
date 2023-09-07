import { PageContainer } from '@ant-design/pro-components';
import { Breadcrumb, Button, Col, Divider, Row, Space, Spin, Typography } from 'antd';
import React from 'react';
import { history } from '@umijs/max';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { getDeviceNodeType } from '@/services/nebula/device';
import { DownOutlined, UpOutlined } from '@ant-design/icons/lib/icons';
import GraphicComponents from './components/GraphicComponents';

const ViewGraphic: React.FC = () => {
  const [dataDevice, setDataDevice] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const data = await getDeviceNodeType({});
    setLoading(false);
    if (!data.error) {
      setDataDevice(data.data);

      // dummy
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title={
        <div>
          <Button type="link" onClick={() => history.push('/dashboard')} size="large">
            <Space style={{ cursor: 'pointer' }} align="start" size={'large'}>
              <ArrowLeftOutlined
                onClick={() => history.push('/dashboard')}
                style={{ marginTop: '12px', fontSize: '24px', color: '#000' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <Breadcrumb>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item>Total Usage</Breadcrumb.Item>
                </Breadcrumb>
                <Typography.Title level={5}>View Graphic</Typography.Title>
              </div>
            </Space>
          </Button>

          <Divider />
        </div>
      }
    >
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          {dataDevice.map((item) => {
            if (item.total_device > 0) {
              return (
                <Col
                  span={24}
                  key={item.name}
                  style={{
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    padding: '16px',
                    borderRadius: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Space>
                      <img
                        alt={item.name}
                        src={item.icon}
                        style={{
                          height: '32px',
                        }}
                      />
                      <Typography
                        style={{
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Space>
                    <Button
                      icon={
                        !item.collapse ? (
                          <DownOutlined
                            style={{
                              color: '#1890FF',
                              // fontSize: '24px',
                            }}
                          />
                        ) : (
                          <UpOutlined
                            style={{
                              color: '#1890FF',
                              // fontSize: '24px',
                            }}
                          />
                        )
                      }
                      size={'middle'}
                      // onClick={() => setCollapseUsage(!collapseUsage)}
                      onClick={() => {
                        const data = dataDevice.map((val) => {
                          if (val.id === item.id) {
                            return {
                              ...val,
                              collapse: !val.collapse,
                            };
                          }
                          return val;
                        });
                        setDataDevice(data);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: '16px',
                    }}
                    className={item.collapse ? 'collabsible active' : 'collabsible'}
                  >
                    <GraphicComponents />
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </Spin>
    </PageContainer>
  );
};

export default ViewGraphic;
