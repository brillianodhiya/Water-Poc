import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const HeartSvg = () => (
  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_928_19872)">
      <rect
        x="0.666992"
        y="0.0012207"
        width="48"
        height="48"
        rx="24"
        fill="white"
        fillOpacity="0.01"
      />
      <g clipPath="url(#clip1_928_19872)">
        <path
          d="M35.167 18.0012V16.5012H36.1045C36.4151 16.5012 36.667 16.2494 36.667 15.9387V14.0637C36.667 13.7531 36.4151 13.5012 36.1045 13.5012H34.2295C33.9189 13.5012 33.667 13.7531 33.667 14.0637V15.0012H15.667V14.0637C15.667 13.7531 15.4151 13.5012 15.1045 13.5012H13.2295C12.9189 13.5012 12.667 13.7531 12.667 14.0637V15.9387C12.667 16.2494 12.9189 16.5012 13.2295 16.5012H14.167V31.5012H13.2295C12.9189 31.5012 12.667 31.7531 12.667 32.0637V33.9387C12.667 34.2494 12.9189 34.5012 13.2295 34.5012H15.1045C15.4151 34.5012 15.667 34.2494 15.667 33.9387V33.0012H33.667V33.9387C33.667 34.2494 33.9189 34.5012 34.2295 34.5012H36.1045C36.4151 34.5012 36.667 34.2494 36.667 33.9387V32.0637C36.667 31.7531 36.4151 31.5012 36.1045 31.5012H35.167V18.0012ZM17.167 24.9387V18.5637C17.167 18.2531 17.4189 18.0012 17.7295 18.0012H25.6045C25.9151 18.0012 26.167 18.2531 26.167 18.5637V24.9387C26.167 25.2494 25.9151 25.5012 25.6045 25.5012H17.7295C17.4189 25.5012 17.167 25.2494 17.167 24.9387ZM32.167 29.4387C32.167 29.7494 31.9151 30.0012 31.6045 30.0012H23.7295C23.4189 30.0012 23.167 29.7494 23.167 29.4387V27.0012H26.542C27.1633 27.0012 27.667 26.4975 27.667 25.8762V22.5012H31.6045C31.9151 22.5012 32.167 22.7531 32.167 23.0637V29.4387Z"
          fill="#003A8C"
        />
      </g>
      <rect
        x="1.16699"
        y="0.501221"
        width="47"
        height="47"
        rx="23.5"
        stroke="black"
        strokeOpacity="0.06"
      />
    </g>
    <defs>
      <clipPath id="clip0_928_19872">
        <rect x="0.666992" y="0.0012207" width="48" height="48" rx="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_928_19872">
        <rect width="24" height="24" fill="white" transform="translate(12.667 12.0012)" />
      </clipPath>
    </defs>
  </svg>
);
const InternalSvg = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="32" fill="#003A8C" />
    <g clipPath="url(#clip0_928_29750)">
      <path
        d="M47 20H24V17C24 16.45 23.55 16 23 16H21C20.45 16 20 16.45 20 17V20H17C16.45 20 16 20.45 16 21V23C16 23.55 16.45 24 17 24H20V47C20 47.55 20.45 48 21 48H23C23.55 48 24 47.55 24 47V24H47C47.55 24 48 23.55 48 23V21C48 20.45 47.55 20 47 20ZM26 40H46V26H26V40Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_928_29750">
        <rect width="32" height="32" fill="white" transform="translate(16 16)" />
      </clipPath>
    </defs>
  </svg>
);

const InternalSvgSchedule = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#003A8C" />
    <path
      d="M38 16V14H39.25C39.6642 14 40 13.6642 40 13.25V10.75C40 10.3358 39.6642 10 39.25 10H36.75C36.3358 10 36 10.3358 36 10.75V12H12V10.75C12 10.3358 11.6642 10 11.25 10H8.75C8.33581 10 8 10.3358 8 10.75V13.25C8 13.6642 8.33581 14 8.75 14H10V34H8.75C8.33581 34 8 34.3358 8 34.75V37.25C8 37.6642 8.33581 38 8.75 38H11.25C11.6642 38 12 37.6642 12 37.25V36H36V37.25C36 37.6642 36.3358 38 36.75 38H39.25C39.6642 38 40 37.6642 40 37.25V34.75C40 34.3358 39.6642 34 39.25 34H38V16ZM14 25.25V16.75C14 16.3358 14.3358 16 14.75 16H25.25C25.6642 16 26 16.3358 26 16.75V25.25C26 25.6642 25.6642 26 25.25 26H14.75C14.3358 26 14 25.6642 14 25.25ZM34 31.25C34 31.6642 33.6642 32 33.25 32H22.75C22.3358 32 22 31.6642 22 31.25V28H26.5C27.3284 28 28 27.3284 28 26.5V22H33.25C33.6642 22 34 22.3358 34 22.75V31.25Z"
      fill="white"
    />
  </svg>
);

const DefaultInternal = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);
const ProfileInternal = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={InternalSvg} {...props} />
);

const ProfileInternalSchedule = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={InternalSvgSchedule} {...props} />
);

export { DefaultInternal, ProfileInternal, ProfileInternalSchedule };
