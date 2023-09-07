import { getListTenant } from '@/services/badiklat/tenant';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Row, Spin } from 'antd';
import React from 'react';
import TableReports from './Table';

const Room: React.FC<{ isFocused: boolean }> = ({ isFocused }) => {
  const [active, setActive] = React.useState(0);
  const [activeString, setActiveString] = React.useState('All Room');
  const [dataRoom, setDataRoom] = React.useState<any[]>([]);
  const [loadingList, setLoadingList] = React.useState(false);
  const [arrSelected, setArrSelected] = React.useState<any[]>([]);

  const getData = async () => {
    setLoadingList(true);
    const d = await getListTenant({});
    setLoadingList(false);

    if (!d.error) {
      setDataRoom(d.data);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  React.useEffect(() => {
    // get data report per active id
    if (active == 0 && dataRoom.length > 0) {
      const arr: any[] = [];
      dataRoom.map((val: any) => {
        arr.push(val.id);
      });
      setArrSelected(arr);
    } else {
      setArrSelected([active]);
    }
  }, [active, dataRoom]);

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
          className="container-header"
          style={{
            paddingRight: '20px',
            maxHeight: '90vh',
            overflowX: 'unset',
            overflowY: 'scroll',
          }}
        >
          <Spin spinning={loadingList}>
            <Button
              type={active == 0 ? 'primary' : 'text'}
              size="large"
              block
              onClick={() => {
                setActive(0);
                setActiveString('All Room');
              }}
              style={{
                margin: '4px 8px',
              }}
            >
              All
            </Button>
            {dataRoom.map((val) => {
              return (
                <Button
                  key={val.id}
                  type={active == val.id ? 'primary' : 'text'}
                  size="large"
                  block
                  onClick={() => {
                    setActive(val.id);
                    setActiveString(val.tenant_name);
                  }}
                  style={{
                    margin: '4px 8px',
                  }}
                >
                  {val.tenant_name}
                </Button>
              );
            })}
          </Spin>
        </Col>

        <Col
          xxl={20}
          xl={20}
          lg={18}
          md={17}
          sm={16}
          xs={24}
          style={{ marginTop: '-9px', background: '#FAFAFA', minHeight: '80vh' }}
        >
          <TableReports userId={arrSelected} userType="room" activeString={activeString} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Room;
