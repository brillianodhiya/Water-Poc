import React from 'react';
import { ElectricityNonCTFilledIcon } from '../Icons/Electricity';
import { GasFilledIcon } from '../Icons/Gas';
import { PJUFilledIcon } from '../Icons/PJU';
import { PressurePTFilledIcon } from '../Icons/Pressure';
import { RTUFilledIcon } from '../Icons/RTU';
import { TempFilledIcon } from '../Icons/Temp';
import { WaterFilledIcon, WaterPressureFilledIcon } from '../Icons/Water';

type NodeDataType = {
  id: number;
};

export const NodeType: React.FC<NodeDataType> = ({ id }) => {
  if (id == 1) {
    return <GasFilledIcon />;
  } else if (id == 2) {
    return <WaterFilledIcon />;
  } else if (id == 3) {
    return <ElectricityNonCTFilledIcon />;
  } else if (id == 4) {
    return <RTUFilledIcon />;
  } else if (id == 5) {
    return <></>;
  } else if (id == 6) {
    return <TempFilledIcon />;
  } else if (id == 7) {
    return <></>;
  } else if (id == 8) {
    return <WaterPressureFilledIcon />;
  } else if (id == 9) {
    return <PressurePTFilledIcon />;
  } else if (id == 10) {
    return <PJUFilledIcon />;
  } else if (id == 11) {
    return <></>;
  } else if (id == 12) {
    return <></>;
  } else if (id == 13) {
    return <></>;
  } else if (id == 14) {
    return <></>;
  } else if (id == 15) {
    return <></>;
  } else if (id == 16) {
    return <></>;
  } else if (id == 17) {
    return <></>;
  } else if (id == 18) {
    return <></>;
  } else if (id == 19) {
    return <></>;
  } else if (id == 20) {
    return <></>;
  } else if (id == 21) {
    return <></>;
  } else if (id == 22) {
    return <></>;
  } else if (id == 23) {
    return <></>;
  } else {
    return <>{id}</>;
  }
};
