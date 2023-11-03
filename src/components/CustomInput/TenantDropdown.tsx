import { getListTenant } from '@/services/nebula/tenant';
import { Select } from 'antd';
import React, { useState } from 'react';

export const TenantDropdown: React.FC<{
  onChange?: (val: any) => void;
  areaId?: number | string;
  value?: number;
  style?: any;
  type?: string;
  useAll?: boolean;
  disabled?: boolean;
}> = ({ onChange, areaId, value, style, type = 'not-rounded', useAll, disabled }) => {
  const [dataTenant, setDataTenant] = useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.children ?? '').toLowerCase().includes(input.toLowerCase());

  const getDataTenant = async () => {
    setLoading(true);
    const data = await getListTenant({
      params: {
        area_id: areaId,
      },
    });
    console.log(data, 'data tenant');
    setLoading(false);
    if (!data.error) {
      setDataTenant(data.data);
    }
  };

  React.useEffect(() => {
    getDataTenant();
    return () => {};
  }, [areaId]);

  return (
    <Select
      showSearch
      value={value}
      placeholder="Tenant Name"
      loading={loading}
      onChange={onChange}
      className={type}
      optionFilterProp="children"
      filterOption={filterOption}
      disabled={disabled}
    >
      {useAll && (
        <Select.Option key={0} value={0}>
          All Tenant
        </Select.Option>
      )}
      {dataTenant.map((v) => {
        return (
          <Select.Option key={v.id} value={v.id}>
            {v.name}
          </Select.Option>
        );
      })}
    </Select>
  );
};
