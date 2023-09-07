import { getArea } from '@/services/nebula/area';
import { Select } from 'antd';
import React, { useState } from 'react';

export const AreaDropdown: React.FC<{
  onChange?: (val: any) => void;
  value?: number;
  style?: any;
  type?: string;
  useAll?: boolean;
  defaultArea0?: boolean;
  disabled?: boolean;
}> = ({ disabled, onChange, value, style, type = 'not-rounded', useAll, defaultArea0 = false }) => {
  const [dataArea, setDataArea] = useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  const getDataArea = async () => {
    setLoading(true);
    const data = await getArea({});
    // console.log(data);
    setLoading(false);
    if (!data.error) {
      setDataArea(data.data);
      if (defaultArea0 && data.data.length > 0) {
        onChange(data.data[0].id);
      }
    }
  };

  React.useEffect(() => {
    getDataArea();
  }, []);

  return (
    <Select
      value={value}
      placeholder="Area Name"
      loading={loading}
      onChange={onChange}
      className={type}
      style={style}
      disabled={disabled}
    >
      {useAll && (
        <Select.Option key={0} value={0}>
          All Area
        </Select.Option>
      )}
      {dataArea.map((v) => {
        return (
          <Select.Option key={v.id} value={v.id}>
            {v.area_name}
          </Select.Option>
        );
      })}
    </Select>
  );
};
