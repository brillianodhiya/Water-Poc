/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Button, Col, Row, Typography } from 'antd';
import moment from 'moment';
import 'moment/locale/id';
import React from 'react';
import { Helmet } from 'react-helmet';
import ListNode from './ListNode';
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
moment.locale('en');
const Device: React.FC = () => {
  // const [segment, setSegment] = React.useState<any>('Gateway');
  const [counterLoad, setCounterLoad] = React.useState<number>(1);
  // const [modalAddGateway, setModalAddGateway] = React.useState(false);
  const params = useParams<string>();

  // React.useEffect(() => {
  //   if (params.type) {
  //     if (['Gateway', 'Device'].includes(params.type)) {
  //       setSegment(params.type);
  //     } else {
  //       setSegment('Gateway');
  //       history.push('/device/Gateway');
  //     }
  //   } else {
  //     setSegment('Gateway');
  //     history.push('/device/Gateway');
  //   }
  // }, [params.type]);

  if (params.sub == 'list') {
    return <ListNode isFocused={true} counter={counterLoad} />;
  }
  return (
    <PageContainer
      title=" "
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      childrenContentStyle={{
        minHeight: '75vh',
      }}
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
      {/* <AddDeviceForm
          title={'Add Device'}
          open={modalAddDevice}
          onOk={() => {
            getDataGateway();
            setModalAddDevice(false);
          }}
          onCancel={() => setModalAddDevice(false)}
        />
        <EditDeviceForm
          title="Edit Device"
          open={modalEditDevice}
          onOk={() => {
            getDataGateway();
            setModalEditDevice(false);
          }}
          onCancel={() => setModalEditDevice(false)}
          dataEdit={dataEdit}
        /> */}
      {/* <ModalAddGateway
        onOk={() => {
          setCounterLoad((e) => e + 1);
          setModalAddGateway(false);
        }}
        onCancel={() => {
          setModalAddGateway(false);
        }}
        open={modalAddGateway}
      /> */}
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          xxl={24}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            paddingBottom: '18px',
          }}
        >
          <Typography.Title level={4}>Device Management</Typography.Title>
          {params.id ? (
            <Button
              style={
                {
                  // display: params.sub == 'list' || params.type == 'Gateway' ? '' : 'none'
                }
              }
              onClick={() => {
                // if (segment == 'Gateway') {
                // setModalAddGateway(true);
                // } else {
                history.push('/device/create');
                // }
              }}
            >
              <PlusOutlined /> Add Device
            </Button>
          ) : null}
        </Col>
        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Segmented
            onChange={(value) => {
              history.push('/device/' + value);

              // setSegment(value)
            }}
            value={segment}
            options={['Gateway', 'Device']}
          />
        </Col> */}
        <Col span={24}>
          {/* {segment == 'Gateway' ? (
            <ListGateway isFocused={segment == 'Gateway'} counter={counterLoad} />
          ) : segment == 'Device' ? (
            <div> */}
          {/* <ListNodeType isFocused={true} counter={counterLoad} /> */}
          <ListNode isFocused={true} counter={0} />
          {/* </div>
          ) : null} */}
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Device;
