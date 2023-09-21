import {
  Row,
  Col,
  Typography,
  Space,
  Button,
  Input,
  Spin,
  Form,
  Empty,
  message,
  Modal,
} from 'antd';
import type { FunctionComponent } from 'react';
import _ from 'lodash';
import React from 'react';
import { ApiCreateMemberLevel, ApiEditPricingMember } from '@/services/nebula/area';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import api from '../../../config/axiosConfig';

type Props = {
  dataArea: any;
  getData: () => void;
  loadingArea: boolean;
};

const colors = [
  {
    backgroundColor: '#E6F7FF',
    borderColor: '#91D5FF',
  },
  {
    backgroundColor: '#FFF1F0',
    borderColor: '#FFA39E',
  },
  {
    backgroundColor: '#F9F0FF',
    borderColor: '#D3ADF7',
  },
  {
    backgroundColor: '#E6FFFB',
    borderColor: '#87E8DE',
  },
  {
    backgroundColor: '#FFF7E6',
    borderColor: '#FFD591',
  },
  {
    backgroundColor: '#FCFFE6',
    borderColor: '#EAFF8F',
  },
  {
    backgroundColor: '#F6FFED',
    borderColor: '#B7EB8F',
  },
];

const MemberLevel: FunctionComponent<Props> = ({ dataArea, getData, loadingArea }) => {
  console.log(dataArea, 'AREA');
  const [inputAn, setInputAn] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dataMemberLevel, setDataMemberLevel] = React.useState<any[]>([]);
  const [form] = Form.useForm();
  const [activeEdit, setActiveEdit] = React.useState<any[]>([]);

  console.log(dataArea, 'AREA');
  const getDataMemberLevel = () => {
    const arr: React.SetStateAction<any[]> = [];
    if (dataArea.Nebula_Area_members) {
      dataArea.Nebula_Area_members.map((v: any) => {
        const c = _.sample(colors);
        arr.push({
          ...v,
          backgroundColor: c?.backgroundColor,
          borderColor: c?.borderColor,
        });
      });
      setDataMemberLevel(arr);
    }
  };

  React.useEffect(() => {
    getDataMemberLevel();
  }, [dataArea]);

  const AddMemberLevel = async () => {
    if (inputAn !== '' && inputAn != undefined) {
      setLoading(true);
      const data = await ApiCreateMemberLevel({
        member_name: inputAn,
        area_id: dataArea.id,
      });
      setLoading(false);
      if (!data.error) {
        getData();

        setInputAn('');
      }
    }
  };

  const onFinish = async (values: any) => {
    console.log(values, 'VALUES');
    // setLoading(true);
    const arr: { id: number; name: any }[] = [];
    Object.keys(values[activeEdit[0]]).map((v) => {
      arr.push({
        id: parseInt(v),
        name: values[activeEdit[0]][v],
      });
    });
    console.log(arr, 'ARR');
    setLoading(false);
    const d = await ApiEditPricingMember(arr);
    if (!d.error) {
      message.success(d.message);
      getData();
      setActiveEdit([]);
    }
  };

  const handleDelete = (id: number, name: string) => {
    Modal.confirm({
      title: 'Are you sure to delete this member level ?',
      content: name,
      okText: 'Yes',
      cancelText: 'No',
      onOk: async () => {
        try {
          const d = await api.delete('/area/delete/member/' + id);

          message.success(d.data.message);
          getData();
        } catch (error) {
          message.error(error.message);
        }
      },
    });
  };
  // console.log(activeEdit, 'ACTOVE');

  return (
    <div style={{ textAlign: 'center' }}>
      <Spin spinning={loading || loadingArea}>
        <Typography.Title level={5} style={{ textAlign: 'center' }}>
          Create Member Level
        </Typography.Title>
        <Space.Compact style={{ maxWidth: 550 }} size="large">
          <Input
            placeholder="Create Member Level"
            size="large"
            style={{
              borderTopLeftRadius: '24px',
              borderBottomLeftRadius: '24px',
            }}
            value={inputAn}
            onChange={(e) => setInputAn(e.target.value)}
            onPressEnter={AddMemberLevel}
          />
          <Button type="primary" className="member-level-save" onClick={AddMemberLevel}>
            Save
          </Button>
        </Space.Compact>
        <Form size="middle" form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[24, 24]} style={{ marginTop: 20 }}>
            {dataMemberLevel.length > 0 ? (
              dataMemberLevel.map((e: any) => {
                return (
                  <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} key={e} style={{}}>
                    <div
                      style={{
                        borderRadius: '2px',

                        padding: '12px 16px',
                        border: `1px solid ${e?.borderColor}`,
                        backgroundColor: `${e?.backgroundColor}`,
                        textAlign: 'left',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Form.Item
                          key={e.id.toString()}
                          name={[e.id.toString(), e.id.toString()]}
                          // name={[e.member_name, v.id.toString()]}
                          label={
                            activeEdit.includes(e.id) ? (
                              <Typography.Text type="secondary">{e.name}</Typography.Text>
                            ) : null
                          }
                          initialValue={e.name}
                          noStyle
                        >
                          {activeEdit.includes(e.id) ? (
                            <Input placeholder="Input" />
                          ) : (
                            <Typography
                              style={{
                                marginTop: '6px',
                              }}
                            >
                              {e?.name}
                            </Typography>
                          )}
                        </Form.Item>

                        <Space>
                          <Button
                            shape="circle"
                            ghost
                            onClick={() => {
                              if (activeEdit.includes(e.id)) {
                                form.submit();
                                // setActiveEdit(activeEdit.filter((v) => v !== e.id));
                              } else {
                                setActiveEdit([e.id]);
                              }
                            }}
                            style={{
                              color: 'black',
                            }}
                          >
                            {activeEdit.includes(e.id) ? <CheckOutlined /> : <EditOutlined />}
                          </Button>
                          <Button
                            danger
                            type="link"
                            shape="circle"
                            onClick={() => handleDelete(e.id, e.name)}
                          >
                            <DeleteOutlined />
                          </Button>
                        </Space>
                      </div>
                    </div>
                  </Col>
                );
              })
            ) : (
              <Col span={24}>
                <Empty />
              </Col>
            )}
          </Row>
        </Form>
      </Spin>
    </div>
  );
};

export default MemberLevel;
