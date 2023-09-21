import { getArea } from '@/services/nebula/area';
import { PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Avatar, Button, Card, Divider, Input, Row, Space, Spin, Typography } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const { Search } = Input;

const AreaManagement: React.FC = () => {
  const [dataArea, setDataArea] = React.useState<any[]>([]);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState;

  // const areaData = [
  //   {
  //     id: 1,
  //     pic_name: 'brilli',
  //     photo: '',
  //     area_name: 'indonesia',
  //     address: 'lorem ipsum dolor sit amet',
  //   },
  // ];

  const onSearch = (val: any) => {
    if (val) {
    } else {
      setShowSearch(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    const data = await getArea({});
    console.log(data);
    setLoading(false);
    if (!data.error) {
      setDataArea(data.data);
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
      title="Area Management"
      content="Management area setting, device and more."
      extra={
        <>
          {showSearch ? (
            <Search
              // size="large"
              // placeholder="Search by Internal Name"
              onSearch={onSearch}
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
          {currentUser.role != 'area' ? (
            <Button
              shape="round"
              onClick={() => {
                history.push('/area/create');
              }}
            >
              <PlusOutlined /> Create Area
            </Button>
          ) : (
            <></>
          )}
        </>
      }
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>AAT IoT Platform | Area</title>
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Divider />
      {/* <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={
          {
            // backgroundImage:
            //   'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
          }
        }
      > */}
      <Spin spinning={loading}>
        <Row>
          {dataArea.map((val) => {
            return (
              <Card
                loading={loading}
                key={val.id}
                className="ant-col ant-col-xs-24
                ant-col-sm-12 ant-col-md-12 ant-col-lg-8 ant-col-xl-8 ant-col-xxl-8 card-hover"
                onClick={() =>
                  history.push('/area/info', {
                    area_id: val.id,
                  })
                }
                style={{
                  cursor: 'pointer',
                }}
                actions={[
                  <Space
                    key={val.id}
                    style={{
                      cursor: 'pointer',
                      float: 'left',
                      paddingLeft: 20,
                    }}
                    onClick={() =>
                      history.push('/area/info', {
                        area_id: val.id,
                      })
                    }
                  >
                    <UserOutlined color="#8C8C8C" />
                    <Typography.Text>{val.pic_name}</Typography.Text>
                  </Space>,
                ]}
              >
                <Space align="center">
                  {val.photo && val.photo !== '' ? (
                    <Avatar src={val.photo} size={48} />
                  ) : (
                    <Avatar icon={<UserOutlined />} size={48} />
                  )}
                  <Typography.Text strong>{val.area_name}</Typography.Text>
                </Space>
                <Typography.Paragraph
                  type="secondary"
                  style={{
                    paddingTop: 15,
                    minHeight: 70,
                  }}
                >
                  {val.address}
                </Typography.Paragraph>
              </Card>
            );
          })}
        </Row>
      </Spin>
      {/* </Card> */}
    </PageContainer>
  );
};

export default AreaManagement;
