import { DeviceIcon, DeviceInActiveIcon } from '@/components/Icons/DeviceIcon';
import { GatewayIcon } from '@/components/Icons/GatewayIcon';
import { NodeIcon } from '@/components/Icons/NodeIcon';
import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import Gateway from './SubInstallation/Gateway';
import Nodes from './SubInstallation/Nodes';

const Installation: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const params = useParams<string>();

  const [active, setActive] = React.useState(params.subpage ? params.subpage : 'gateway');

  React.useEffect(() => {}, [isFocused]);

  return (
    <PageContainer
      title="Installation"
      className="schedule-page"
      breadcrumb={{}}
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.06)', marginTop: '14px' }}
    >
      <Row>
        <Col
          xxl={4}
          xl={4}
          lg={6}
          md={7}
          sm={8}
          xs={24}
          style={{ paddingRight: '20px' }}
          className="container-header"
        >
          <Typography.Title level={4} style={{ fontWeight: '500', marginBottom: '20px' }}>
            Installation
          </Typography.Title>
          <Button
            type={active == 'gateway' ? 'primary' : 'default'}
            size="large"
            block
            icon={<GatewayIcon />}
            onClick={() => {
              setActive('gateway');
              history.push('/overview/installation/gateway');
            }}
          >
            Gateway
          </Button>
          <Button
            type={active == 'node' ? 'primary' : 'default'}
            size="large"
            block
            icon={active == 'node' ? <DeviceIcon /> : <DeviceInActiveIcon />}
            onClick={() => {
              setActive('node');
              history.push('/overview/installation/node');
            }}
            style={{ marginTop: '18px' }}
          >
            Device
          </Button>
        </Col>

        <Col
          xxl={20}
          xl={20}
          lg={18}
          md={17}
          sm={16}
          xs={24}
          style={{ marginTop: '-9px', background: '#FAFAFA' }}
        >
          {active == 'node' ? <Nodes /> : <Gateway />}
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Installation;
