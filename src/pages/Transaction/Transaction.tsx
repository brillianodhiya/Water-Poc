import { PageContainer } from '@ant-design/pro-components';
import { Tabs } from 'antd';

import React from 'react';
import Reports from '../Reports/Reports';
import Billing from '../Billing/Billing';
import query from 'query-string';
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Transaction: React.FC<{ isFocused: boolean }> = ({}) => {
  const [activeKey, setActiveKey] = React.useState('usage');

  const q = query.parse(window.location.search);

  console.log(q, 'QQ');

  React.useEffect(() => {
    if (q.tab) {
      setActiveKey(q.tab as string);
    }
  }, [q]);

  return (
    <PageContainer
      childrenContentStyle={{
        minHeight: '70vh',
      }}
      title="Transaction"
      content="Manage your Transaction"
    >
      <Tabs
        defaultActiveKey="usage"
        items={[
          {
            label: `Usage`,
            key: 'usage',
            children: <Reports />,
          },
          {
            label: `Billing`,
            key: 'billing',
            children: <Billing />,
          },
        ]}
        activeKey={activeKey}
        onChange={(key) => {
          setActiveKey(key);
          window.history.pushState(null, '', `?tab=${key}`);
        }}
      />
    </PageContainer>
  );
};

export default Transaction;
