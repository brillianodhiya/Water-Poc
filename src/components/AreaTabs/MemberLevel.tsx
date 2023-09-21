import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Typography,
  Space,
  Button,
  Input,
  Spin,
  Form,
  InputNumber,
  Empty,
  message,
} from 'antd';
import type { FunctionComponent } from 'react';
import _ from 'lodash';
import React from 'react';
import { ApiCreateMemberLevel, ApiEditPricingMember } from '@/services/nebula/area';
import { converNumberSmNotFixed } from '../config.usage';

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
    // console.log(values, 'VALUES');
    setLoading(true);
    const arr: { id: number; price_per_device_type: any }[] = [];
    Object.keys(values[activeEdit[0]]).map((v) => {
      arr.push({
        id: parseInt(v),
        price_per_device_type: values[activeEdit[0]][v],
      });
    });
    // console.log(arr, 'ARR');
    setLoading(false);
    const d = await ApiEditPricingMember(arr);
    if (!d.error) {
      message.success(d.message);
      getData();
      setActiveEdit([]);
    }
  };

  console.log(activeEdit, 'ACTOVE');

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
                        <Typography>{e?.member_name}</Typography>
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
                      </div>
                      <div
                        style={{
                          marginTop: '12px',
                        }}
                      >
                        {e?.Nebula_Area_Pricing_members?.map((v: any) => {
                          return (
                            <Form.Item
                              key={v.device_type}
                              name={[e.id.toString(), v.id.toString()]}
                              // name={[e.member_name, v.id.toString()]}
                              label={
                                <Typography.Text type="secondary">
                                  {v.device_type} (/{v.satuan})
                                </Typography.Text>
                              }
                              initialValue={v.price_per_device_type}
                            >
                              {activeEdit.includes(e.id) ? (
                                <InputNumber addonBefore="Rp." placeholder="Input Price" />
                              ) : (
                                <Typography.Text>
                                  Rp.{converNumberSmNotFixed(v.price_per_device_type)}
                                </Typography.Text>
                              )}
                            </Form.Item>
                          );
                        })}
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
