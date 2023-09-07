import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const AreaUnion = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_171292_29290)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.4219V1.97748C0 0.99704 0.797333 0.199707 1.77778 0.199707H14.2222C15.2027 0.199707 16 0.99704 16 1.97748V14.4219C16 15.4024 15.2027 16.1997 14.2222 16.1997H1.77778C0.797333 16.1997 0 15.4024 0 14.4219ZM1.33333 1.53304V14.8664H14.6667V1.53304H1.33333ZM12.4444 8.19971H11.1111V5.0886H8V3.75526H12.4444V8.19971ZM4.88889 11.3108H8V12.6442H3.55556V8.19971H4.88889V11.3108Z"
        fill="#1890FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_171292_29290">
        <rect width="16" height="16" fill="white" transform="translate(0 0.199707)" />
      </clipPath>
    </defs>
  </svg>
);

export const UnionIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={AreaUnion} {...props} />
);
