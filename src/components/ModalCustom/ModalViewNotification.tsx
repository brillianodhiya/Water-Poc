/* eslint-disable react-hooks/exhaustive-deps */
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Col, Drawer, List, Row, Spin, Typography } from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import type { FunctionComponent } from 'react';
import { LowBatteryBigIcon, MediumBatteryBigIcon } from '../Icons/Battery';

moment.locale('id');

type ViewDetailNode = {
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  typeName?: any;
  data?: any[];
  loading: boolean;
};

export const ModalViewDetailNotification: FunctionComponent<ViewDetailNode> = ({
  // onOk,
  onCancel,
  open,
  // typeName,
  data = [],
  loading,
}) => {
  // const generateData = () => {
  //   const arr: {}[] = [];
  //   data.map((v: any) => {
  //     const arr2 = {};
  //     v.map((v2: any) => {
  //       arr2[v2.name] = v2.value;
  //     });
  //     arr.push(arr2);
  //   });

  //   return arr;
  // };

  // const useData = generateData();

  // console.log(useData, 'USEDATA');

  return (
    <>
      <Drawer
        width={500}
        title="Device Notification"
        placement="right"
        onClose={onCancel}
        open={open}
        closable={false}
        extra={
          <Button type="text" onClick={() => onCancel()}>
            <CloseOutlined />
          </Button>
        }
      >
        <Spin spinning={loading}>
          <List
            dataSource={data}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Card
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      border:
                        item.type == 'battery' && item.value < 20
                          ? '1px solid #FFA39E'
                          : '1px solid #FFE58F',
                    }}
                    // title={item.title}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '16px',
                      }}
                    >
                      {item.type == 'battery' ? (
                        <div>
                          {item.value <= 20 ? <LowBatteryBigIcon /> : <MediumBatteryBigIcon />}
                        </div>
                      ) : (
                        <div>
                          <img src="/notification.png" alt="notification red" width={32} />
                        </div>
                      )}
                      <div
                        style={{
                          width: '100%',
                        }}
                      >
                        <Typography.Text
                          style={{
                            color: 'rgba(0, 0, 0, 0.85)',
                          }}
                        >
                          {item.device_type}
                        </Typography.Text>
                        <br />
                        <Typography.Text
                          style={{
                            color: 'rgba(0, 0, 0, 0.85)',
                            fontSize: '18px',
                            fontWeight: '500',
                            marginTop: '12px',
                          }}
                        >
                          {item.title}
                        </Typography.Text>
                        <br />
                        <Row
                          style={{
                            // border: '1px solid #F0F0F0',
                            width: '100%',
                          }}
                        >
                          {item.data.map((v: any) => {
                            return [
                              <Col span={10} key={v.name}>
                                <Typography.Text
                                  style={{
                                    color: 'rgba(0, 0, 0, 0.85)',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                  }}
                                >
                                  {v.name}
                                </Typography.Text>
                              </Col>,
                              <Col span={14} key={v.name}>
                                <Typography.Text
                                  style={{
                                    color: 'rgba(0, 0, 0, 0.85)',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                  }}
                                >
                                  : {v.value}
                                </Typography.Text>
                              </Col>,
                            ];
                          })}
                        </Row>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              );
            }}
          />
        </Spin>
      </Drawer>
    </>
  );
};
