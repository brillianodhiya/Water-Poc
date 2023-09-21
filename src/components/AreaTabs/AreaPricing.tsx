import { Card, Row, Col, Typography, Spin, notification, Radio, message, Modal } from 'antd';
import React from 'react';
import api from '../../../config/axiosConfig';
import CardPricing from './CardPricing';

function reverseRelation(data: any[]) {
  // Inisialisasi objek kosong untuk menyimpan hasil
  const pricing_member = {};

  // Iterasi setiap elemen data
  for (const element of data) {
    // Ambil nilai type_id dan type_name dari elemen
    const { type_id, type_name } = element;

    // Iterasi setiap elemen price_member dari elemen
    for (const member of element.price_member) {
      // Ambil nilai id, name dan price dari member
      const { id, name, price } = member;

      // Cek apakah id sudah ada di objek pricing_member
      if (pricing_member[id]) {
        // Jika sudah ada, tambahkan objek baru ke array types
        pricing_member[id].types.push({
          type_id,
          type_name,
          price,
        });
      } else {
        // Jika belum ada, buat objek baru dengan array types
        pricing_member[id] = {
          id,
          name,
          types: [
            {
              type_id,
              type_name,
              price,
            },
          ],
        };
      }
    }
  }

  // Kembalikan array dari nilai-nilai objek pricing_member sebagai hasil
  return Object.values(pricing_member);
}

const AreaPricing: React.FC<{
  dataArea: any;
  getData: () => void;
  loadingArea: boolean;
}> = ({ dataArea, getData, loadingArea }) => {
  const [radio, setRadio] = React.useState<any>();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [dataMember, setDataMember] = React.useState([]);

  React.useEffect(() => {
    if (dataArea.Nebula_Area_Pricing_tiers && dataArea.Nebula_Area_members) {
      setData(dataArea?.Nebula_Area_Pricing_tiers);
      setDataMember(reverseRelation(dataArea?.Nebula_Area_Pricing_tiers));
      setRadio(dataArea.pricing_type);
    }
  }, [dataArea]);

  console.log(dataMember);

  const changePricingOption = (e: string) => {
    setLoading(true);

    api({
      url: '/area/pricing/type/' + dataArea.id,
      method: 'PUT',
      data: {
        pricing_type: e,
      },
    })
      .then(() => {
        setLoading(false);
        setRadio(e);
        getData();
      })
      .catch((err: any) => {
        message.error(err.response.data.message);
      });
  };

  return (
    <div
      style={{
        paddingBottom: '8em',
      }}
    >
      <Spin spinning={loading || loadingArea}>
        <Row
          gutter={[16, 16]}
          style={{
            marginTop: '24px',
          }}
        >
          <Col xl={10} xxl={8} lg={12} md={24} sm={24} xs={24}>
            <Card
              style={{
                borderRadius: '8px',
                border: radio == 'all' ? '1px solid #1890ff' : undefined,
              }}
              headStyle={{
                backgroundColor: radio == 'all' ? '#1890ff' : '#F0F0F0',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
              title={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Radio
                    onChange={(e) => changePricingOption(e.target.checked ? 'all' : 'member')}
                    checked={radio == 'all' ? true : false}
                  />
                  <Typography
                    style={{
                      color: radio == 'all' ? '#fff' : '#000',
                    }}
                  >
                    One Price For All Customer
                  </Typography>
                </div>
              }
              bodyStyle={{
                background: '#F9F9F9',
                borderRadius: '8px',
              }}
            >
              <Row gutter={[16, 16]}>
                {data.map((v: any) => {
                  return (
                    <Col key={v.type_name} xl={24} xxl={24} lg={24} md={24} sm={24} xs={24}>
                      <CardPricing
                        title={v.type_name}
                        typeId={v.type_id}
                        defaultData={v.price_all}
                        key={v.type_name}
                        is_member={radio == 'all' ? false : true}
                        disabled={radio == 'all' ? false : true}
                        getPricingPostpaid={getData}
                        area_id={dataArea.id}
                        loading={loading}
                        setLoading={setLoading}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>
          <Col xl={14} xxl={16} lg={12} md={24} sm={24} xs={24}>
            <Card
              style={{
                borderRadius: '8px',
                border: radio == 'member' ? '1px solid #1890ff' : undefined,
              }}
              headStyle={{
                backgroundColor: radio == 'member' ? '#1890ff' : '#F0F0F0',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
              title={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <Radio
                    onChange={(e) => changePricingOption(e.target.checked ? 'member' : 'all')}
                    checked={radio == 'all' ? false : true}
                  />
                  <Typography
                    style={{
                      color: radio == 'member' ? '#fff' : '#000',
                    }}
                  >
                    Setting Price Member Level
                  </Typography>
                </div>
              }
              bodyStyle={{
                background: '#F9F9F9',
                borderRadius: '8px',
              }}
            >
              <Row gutter={[16, 16]}>
                {dataMember.map((v: any) => {
                  return (
                    <Col span={24} key={v.id + v.name}>
                      <Card
                        style={{
                          borderRadius: '8px',
                          border: radio == 'member' ? '1px solid #1890ff' : undefined,
                        }}
                        headStyle={{
                          backgroundColor: radio == 'member' ? '#1890ff' : '#F0F0F0',
                          borderTopLeftRadius: '8px',
                          borderTopRightRadius: '8px',
                        }}
                        title={
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                            }}
                          >
                            <Typography
                              style={{
                                color: radio == 'member' ? '#fff' : '#000',
                              }}
                            >
                              {v.name}
                            </Typography>
                          </div>
                        }
                        bodyStyle={{
                          background: '#F9F9F9',
                          borderRadius: '8px',
                        }}
                      >
                        <Row gutter={[16, 16]}>
                          {v.types.map((v2: any) => {
                            return (
                              <Col
                                key={v2.type_name}
                                xl={12}
                                xxl={12}
                                lg={24}
                                md={24}
                                sm={24}
                                xs={24}
                              >
                                <CardPricing
                                  title={v2.type_name}
                                  typeId={v2.type_id}
                                  defaultData={v2.price}
                                  key={v2.type_name}
                                  is_member={radio == 'all' ? false : true}
                                  disabled={radio == 'member' ? false : true}
                                  getPricingPostpaid={getData}
                                  member_id={v.id}
                                  area_id={dataArea.id}
                                  loading={loading}
                                  setLoading={setLoading}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default AreaPricing;
