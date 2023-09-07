// import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Descriptions, Row, Space, Typography } from 'antd';
import React from 'react';
import { Avatar } from 'antd';
import {
  EditFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { getArea } from '@/services/badiklat/area';
import { EditAreaModalFormJs } from '@/components/Form/EditAreaFormJs';
import { DefaultArea } from '@/components/Icons/DefaultArea';

const Area: React.FC<{ isFocused: boolean }> = () => {
  console.log('asww');
  const [dataArea, setDataArea] = React.useState<any>({});
  const [modalEditArea, setModalEditArea] = React.useState<boolean>(false);
  // const [loading, setLoading] = React.useState<boolean>(false);
  const [dataEdit, setDataEdit] = React.useState<object>({});
  // const [dataFull, setDataFull] = React.useState<any[]>([]);

  const getData = async () => {
    // setLoading(true);
    const data = await getArea({});
    console.log(data, 'DATA');
    // setLoading(false);
    if (!data.error) {
      setDataArea(data.data);
    }
  };
  React.useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <>
      <EditAreaModalFormJs
        title="Edit Area"
        onOk={() => {
          getData();
          setModalEditArea(false);
        }}
        onCancel={() => setModalEditArea(false)}
        open={modalEditArea}
        dataEdit={dataEdit}
      />
      <div
        style={{
          height: 130,
          overflow: 'hidden',
        }}
      >
        <img
          src="/bg.svg"
          alt="area background"
          style={{
            width: '100%',
          }}
        />
      </div>
      <Row justify="center">
        <Col xxl={2} xl={4} lg={6} md={6} sm={6} xs={8}>
          <Avatar
            src={dataArea.image}
            size={122}
            style={{
              // position: 'absolute',
              marginTop: -45,
              border: '4px solid #FFFFFF',
              boxShadow:
                '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
            }}
          />
        </Col>
        <Col xxl={4} xl={4} lg={6} md={6} sm={6} xs={12}>
          <Space direction="vertical">
            <Space>
              <span
                style={{
                  marginTop: 10,
                  fontSize: '1.8em',
                }}
              >
                {dataArea.area_name}
              </span>
              <Button
                onClick={() => {
                  setDataEdit(dataArea);
                  setModalEditArea(true);
                }}
                icon={<EditFilled />}
              />
            </Space>
            <Typography.Text
              type="secondary"
              style={{
                fontSize: '1.5em',
              }}
            >
              {dataArea.handphone}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row
          gutter={[16, 24]}
          style={{
            width: 600,
            marginTop: 50,
          }}
          justify="center"
        >
          <Col xxl={{ offset: 2 }} xs={10}>
            <Space size={'large'}>
              <DefaultArea />
              <Typography.Text>Area Name</Typography.Text>
            </Space>
          </Col>
          <Col xxl={12} xs={10}>
            <Typography.Text>{dataArea.area_name}</Typography.Text>
          </Col>
          <Col xs={10}>
            <Space size={'large'}>
              <MailOutlined />
              <Typography.Text>Email</Typography.Text>
            </Space>
          </Col>
          <Col xs={10}>
            <Typography.Text>{dataArea.email}</Typography.Text>
          </Col>
          <Col xs={10}>
            <Space size={'large'}>
              <PhoneOutlined />
              <Typography.Text>Phone</Typography.Text>
            </Space>
          </Col>
          <Col xs={10}>
            <Typography.Text>{dataArea.handphone}</Typography.Text>
          </Col>
          <Col xs={10}>
            <Space size={'large'}>
              <EnvironmentOutlined />
              <Typography.Text>Address</Typography.Text>
            </Space>
          </Col>
          <Col xs={10}>
            <Typography.Text>{dataArea.address}</Typography.Text>
          </Col>
          <Col xs={10}>
            <Space size={'large'}>
              <UserOutlined />
              <Typography.Text>PIC</Typography.Text>
            </Space>
          </Col>
          <Col xs={10}>
            <Typography.Text>{dataArea.pic_name}</Typography.Text>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Area;
