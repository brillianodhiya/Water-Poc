// import { PageContainer } from '@ant-design/pro-components';
import { AreaIcon } from '@/components/Icons/AreaIcon';
import { TicketIcon } from '@/components/Icons/Ticket';
import {
  DashboardOutlined,
  DollarCircleOutlined,
  NodeExpandOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  history,
  // useModel,
  useParams,
} from '@umijs/max';
import { Result, Tabs } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
import User from './User';

const Area = React.lazy(() => import('../Area Management/AreaManagement'));
const AreaInfo = React.lazy(() => import('../Sub Area Management/AreaInfo'));
const TenantInfo = React.lazy(() => import('../Sub Area Management/TenantInfo'));
const UserArea = React.lazy(() => import('../Users/Area/Area'));
const UserClient = React.lazy(() => import('../Users/Client/Client'));
const UserTenant = React.lazy(() => import('../Users/Tenant/Tenant'));
const Billing = React.lazy(() => import('../Billing/Billing'));
const Ticketing = React.lazy(() => import('../Ticketing/Ticketing'));
const Device = React.lazy(() => import('../Device/Device'));
const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));

const Overview: React.FC = () => {
  const [TabActive, setTabActive] = React.useState('dashboard');
  // const { initialState } = useModel('@@initialState');

  // const internal_name = localStorage.getItem('internal_name')

  const params = useParams<string>();
  React.useEffect(() => {
    if (params.page) {
      if (
        ['dashboard', 'device', 'area', 'ticket', 'billing', 'geolocation', 'user'].includes(
          params.page,
        )
      ) {
        setTabActive(params.page);
      } else {
        setTabActive('dashboard');
        history.push('/overview/dashboard');
      }
    }
  }, [params]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://aetratangerang.co.id/wp-content/uploads/2020/07/cropped-favicon-192x192.png"
          type="image/x-icon"
        />
      </Helmet>
      <Tabs
        activeKey={TabActive}
        className="navbar-tab"
        size="small"
        style={
          {
            // marginTop: '38px',
          }
        }
        onChange={(key) => {
          history.push('/overview/' + key);
        }}
      >
        <Tabs.TabPane
          tab={
            <span>
              <DashboardOutlined
                style={{
                  marginRight: '6px',
                }}
              />
              Dashboard
            </span>
          }
          key="dashboard"
        >
          <Dashboard isFocused={TabActive == 'dashboard' ? true : false} />
          {/* <Result status={'404'} /> */}
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <NodeExpandOutlined
                style={{
                  marginRight: '6px',
                }}
              />
              Device
            </span>
          }
          key="device"
        >
          <Device isFocused={TabActive == 'device' ? true : false} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <AreaIcon
                style={{
                  marginRight: '6px',
                }}
              />
              Area
            </span>
          }
          key="area"
        >
          {params.subpage == 'info' ? (
            <AreaInfo />
          ) : params.subpage == 'tenant' ? (
            <TenantInfo />
          ) : (
            <Area isFocused={TabActive == 'area' ? true : false} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <TicketIcon
                style={{
                  marginRight: '6px',
                }}
              />
              Ticket
            </span>
          }
          key={'ticket'}
        >
          <Ticketing isFocused={TabActive == 'ticket' ? true : false} />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <span>
              <DollarCircleOutlined
                style={{
                  marginRight: '6px',
                }}
              />
              Billing
            </span>
          }
          key="billing"
        >
          <Billing isFocused={TabActive == 'billing' ? true : false} />
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="Geolocation Map" key="geolocation">
          <Result status={'404'} />
        </Tabs.TabPane> */}
        <Tabs.TabPane
          tab={
            <span>
              <UserOutlined
                style={{
                  marginRight: '6px',
                }}
              />
              User
            </span>
          }
          key="user"
        >
          {params.subpage == 'company' ? (
            <UserClient />
          ) : params.subpage == 'tenant' ? (
            <UserTenant />
          ) : params.subpage == 'area' ? (
            <UserArea />
          ) : (
            <User isFocused={TabActive == 'user' ? true : false} />
          )}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Overview;
