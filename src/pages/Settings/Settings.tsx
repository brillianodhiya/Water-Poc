import { PageContainer } from '@ant-design/pro-components';
import { Card, Col, Row, Spin } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardUsage } from './CardUsage';
import { CardPressure } from './CardPressure';
import { useState, useEffect } from 'react';
import { getSettingParameter } from '@/services/badiklat/nodeList';
import { AirBersih } from './AirBersih';
import { WaterProduction } from './WaterProduction';
import { CardAnomali } from './Anomali';
import { CardVakum } from './Vakum';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const SettingsManagement: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSetting, setDataSetting] = useState<any>({});

  const getData = async () => {
    setLoading(true);
    const data = await getSettingParameter({});
    console.log(data, 'data map');
    setLoading(false);
    if (!data.error) {
      setDataSetting(data.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer
      title="Parameter Setting"
      content="Parameter setting for device."
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>BITA IoT Platform | Settings</title>
        <link rel="icon" href="/logoaat.png" type="image/x-icon" />
      </Helmet>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]}>
          <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
            <CardUsage settings={dataSetting.water_usage} getDataInit={getData} />
          </Col>
          <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
            <CardPressure settings={dataSetting.water_pressure} getDataInit={getData} />
          </Col>
          <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
            <CardVakum settings={dataSetting.water_vakum} getDataInit={getData} />
          </Col>
          <Col span={24}>
            <Card
              title="Water Production"
              style={{
                // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
              }}
              bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
              headStyle={{
                backgroundColor: '#E6F7FF',
                fontWeight: 'bold',
              }}
            >
              <WaterProduction settings={dataSetting.water_production} getDataInit={getData} />
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title="Water Quality"
              style={{
                // boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
              }}
              bodyStyle={{ paddingTop: '16px', paddingBottom: '16px' }}
              headStyle={{
                backgroundColor: '#E6F7FF',
                fontWeight: 'bold',
              }}
            >
              <AirBersih settings={dataSetting.water_quality} getDataInit={getData} />
            </Card>
          </Col>
          <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
            <CardAnomali settings={dataSetting.water_usage_anomali} getDataInit={getData} />
          </Col>
        </Row>
      </Spin>
    </PageContainer>
  );
};

export default SettingsManagement;
