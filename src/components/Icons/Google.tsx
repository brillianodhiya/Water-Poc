import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const GoogleLogo = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_170428_25101)">
      <rect
        width="14"
        height="14"
        transform="translate(0.5 0.200684)"
        fill="white"
        fillOpacity="0.01"
      />
      <g clipPath="url(#clip1_170428_25101)">
        <g clipPath="url(#clip2_170428_25101)">
          <path
            d="M3.57195 5.89666C4.11596 4.24822 5.6651 3.06432 7.5 3.06432C8.48636 3.06432 9.37727 3.41432 10.0773 3.98705L12.1136 1.95068C10.8727 0.868865 9.28182 0.200684 7.5 0.200684C4.74087 0.200684 2.36535 1.77469 1.22333 4.07986L3.57195 5.89666Z"
            fill="#EA4335"
          />
          <path
            d="M9.8571 10.7079C9.22138 11.1184 8.41356 11.3369 7.50001 11.3369C5.67213 11.3369 4.12783 10.162 3.57825 8.52344L1.22186 10.3126C2.36247 12.6218 4.73793 14.2005 7.50001 14.2005C9.21083 14.2005 10.8456 13.5923 12.07 12.4503L9.8571 10.7079Z"
            fill="#34A853"
          />
          <path
            d="M12.0699 12.4502C13.3503 11.2559 14.1818 9.4776 14.1818 7.20046C14.1818 6.78683 14.1182 6.34137 14.0227 5.92773H7.5V8.63228H11.2545C11.0693 9.54174 10.572 10.2462 9.85709 10.7078L12.0699 12.4502Z"
            fill="#4A90E2"
          />
          <path
            d="M3.57824 8.52383C3.43902 8.10875 3.36364 7.66392 3.36364 7.2009C3.36364 6.74489 3.43675 6.30654 3.57195 5.89687L1.22333 4.08008C0.754676 5.01948 0.5 6.0782 0.5 7.2009C0.5 8.32063 0.759455 9.37683 1.22185 10.313L3.57824 8.52383Z"
            fill="#FBBC05"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_170428_25101">
        <rect width="14" height="14" fill="white" transform="translate(0.5 0.200684)" />
      </clipPath>
      <clipPath id="clip1_170428_25101">
        <rect width="14" height="14" fill="white" transform="translate(0.5 0.200684)" />
      </clipPath>
      <clipPath id="clip2_170428_25101">
        <rect width="14" height="14" fill="white" transform="translate(0.5 0.200684)" />
      </clipPath>
    </defs>
  </svg>
);

export const GoogleIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={GoogleLogo} {...props} />
);
