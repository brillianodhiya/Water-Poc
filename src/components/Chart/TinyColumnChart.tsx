import React from 'react';

import { TinyColumn } from '@ant-design/plots';

type ChartType = {
  data: object;
};

export const TinyColumnChart: React.FC<ChartType> = ({ data }) => {
  const config = {
    height: 60,
    autoFit: true,
    data,
    smooth: true,
  };

  return <TinyColumn {...config} />;
};
