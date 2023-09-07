import React from 'react';

import { TinyLine } from '@ant-design/plots';

type ChartType = {
  data: object;
};

export const TinyLineChart: React.FC<ChartType> = ({ data }) => {
  const config = {
    height: 60,
    autoFit: true,
    data,
    smooth: true,
  };

  return <TinyLine {...config} />;
};
