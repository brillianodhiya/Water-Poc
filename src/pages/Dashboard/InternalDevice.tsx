import React from 'react';
import MultiLine from './components/MultiLine';
import { PemakaianAir } from './PemakaianAir';

type Props = {};

export const InternalDevice: React.FC<Props> = () => {
  return (
    <>
      <MultiLine />
      {/* <PemakaianAir /> */}
      {/* <TekananAir /> */}
    </>
  );
};
