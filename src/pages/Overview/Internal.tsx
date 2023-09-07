// import { AddTenantModalForm } from '@/components/Form/AddTenantForm';
import {
  // DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Col, Input, Result, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { history } from '@umijs/max';
import { getListInternal } from '@/services/badiklat/internal';
import { AddInternalModalFormJs } from '@/components/Form/AddInternalFormJs';
import { DefaultInternal } from '@/components/Icons/DefaultInternal';
import { EditInternalModalFormJs } from '@/components/Form/EditInternalFormJs';

const { Search } = Input;

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const Internal: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [dataInternal, setDataInternal] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalAddInternal, setModalAddInternal] = React.useState<boolean>(false);
  const [modalEditInternal, setModalEditInternal] = React.useState<boolean>(false);
  const [dataEdit, setDataEdit] = React.useState<object>({});
  const [dataFull, setDataFull] = React.useState<any[]>([]);

  const internal_name = localStorage.getItem('internal_name')

  const onSearch = (val: any) => {
    // console.log(val, 'VAL');
    if (val) {
      // console.log('SEARCH');
      setDataInternal(
        dataFull.filter((v) => v.internal_name.toLowerCase().includes(val.toLowerCase())),
      );
    } else {
      setShowSearch(false);
      setDataInternal(dataFull);
    }
  };

  // console.log(isFocused, 'IS FOCUSED');
  const getData = async () => {
    setLoading(true);
    const data = await getListInternal({});
    // console.log(data, 'DATA');
    setLoading(false);
    if (!data.error) {
      setDataInternal(data.data);
      setDataFull(data.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
    return () => {};
  }, [isFocused]);

  return (
    <PageContainer
      title={internal_name}
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', marginTop: '14px' }}
      extra={
        <>
          {showSearch ? (
            <Search
              // size="large"
              placeholder="Search by Internal Name"
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
          <Button
            type="primary"
            onClick={() => {
              setModalAddInternal(true);
            }}
          >
            Add {internal_name}
          </Button>
        </>
      }
    >
      <AddInternalModalFormJs
        title="Add Internal"
        onOk={() => {
          getData();
          setModalAddInternal(false);
        }}
        onCancel={() => setModalAddInternal(false)}
        open={modalAddInternal}
      />
      <EditInternalModalFormJs
        title="Edit Internal"
        onOk={() => {
          getData();
          setModalEditInternal(false);
        }}
        onCancel={() => setModalEditInternal(false)}
        open={modalEditInternal}
        dataEdit={dataEdit}
      />
      <Card loading={loading}>
        {dataInternal.length > 0 && !loading ? (
          dataInternal.map((val) => {
            return (
              <Card.Grid key={val.id} style={gridStyle}>
                <Row key={val.id} gutter={[16, 16]}>
                  <Col
                    span={24}
                    key={val.id}
                    style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Space>
                      {val.image && val.image !== '' ? (
                        <Avatar
                          size={48}
                          icon={<DefaultInternal />}
                          // src={val.image.replace(
                          //   'https://ems.idu.ac.id:4005',
                          //   'https://badiklat-dummy-be.iots.eu.org',
                          // )}
                          src={val.image}
                          style={{ background: '#fff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                        />
                      ) : (
                        <DefaultInternal />
                      )}
                      <Typography.Title level={5}>{val.internal_name}</Typography.Title>
                    </Space>

                    <Button
                      shape="circle"
                      icon={<EditOutlined />}
                      onClick={() => {
                        setModalEditInternal(true);
                        setDataEdit(val);
                      }}
                      className="edit-icon"
                    />
                  </Col>
                  <Col span={24} style={{ textAlign: 'left', height: '48px' }}>
                    <Typography.Paragraph
                      style={{
                        color: 'rgba(0, 0, 0, 0.45)',
                      }}
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                      }}
                    >
                      {val.info ? val.info : '-'}
                    </Typography.Paragraph>
                  </Col>
                  <Col span={24} style={{ textAlign: 'left' }}>
                    <Space>
                      <Avatar
                        style={{ backgroundColor: '#003a8c' }}
                        size="small"
                        icon={<UserOutlined />}
                      />
                      <Typography>{val.username || val.pic}</Typography>
                    </Space>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      textAlign: 'left',
                      // display: 'flex',
                      // justifyContent: 'space-between',
                      borderTop: '1px solid #F5F5F5',
                      paddingTop: '20px',
                    }}
                  >
                    <Space wrap>
                      {val.allocation_types.map((val2: any) => {
                        if (val2.type_id == 3) {
                          return (
                            <a
                              onClick={() => {
                                history.push('/overview/internal/view', {
                                  id: val.id,
                                  type: 'internal',
                                  area_id: val.area_id,
                                  // node_type_id: val.allocation_types[0].type_id,
                                  node_type_id: val2.type_id,
                                });
                              }}
                            >
                              <Tag
                                color="geekblue"
                                style={{ borderRadius: '100px', padding: '4px 8px' }}
                              >
                                Electricity Non CT
                              </Tag>
                            </a>
                          );
                        } else {
                          return (
                            <a
                              onClick={() => {
                                history.push('/overview/internal/view', {
                                  id: val.id,
                                  type: 'internal',
                                  area_id: val.area_id,
                                  // node_type_id: val.allocation_types[0].type_id,
                                  node_type_id: val2.type_id,
                                });
                              }}
                            >
                              <Tag
                                color="warning"
                                style={{ borderRadius: '100px', padding: '4px 8px' }}
                              >
                                Electricity CT
                              </Tag>
                            </a>
                          );
                        }
                      })}
                    </Space>

                    {/* <Tag color="#87d068" style={{ borderRadius: '100px', padding: '4px 8px' }}>
                    Aktif
                  </Tag> */}
                  </Col>
                </Row>
              </Card.Grid>
            );
          })
        ) : (
          <Result status="404" title="No Data" />
        )}
      </Card>
    </PageContainer>
  );
};

export default Internal;
