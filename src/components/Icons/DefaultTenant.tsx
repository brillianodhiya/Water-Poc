import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const HeartSvg = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48.0002" fill="white" fillOpacity="0.01" />
    <g clipPath="url(#clip0_928_19733)">
      <path
        d="M35.25 15H18V12.75C18 12.3375 17.6625 12 17.25 12H15.75C15.3375 12 15 12.3375 15 12.75V15H12.75C12.3375 15 12 15.3375 12 15.75V17.25C12 17.6625 12.3375 18 12.75 18H15V35.25C15 35.6625 15.3375 36 15.75 36H17.25C17.6625 36 18 35.6625 18 35.25V18H35.25C35.6625 18 36 17.6625 36 17.25V15.75C36 15.3375 35.6625 15 35.25 15ZM19.5 30H34.5V19.5H19.5V30Z"
        fill="#FAAD14"
      />
    </g>
    <rect
      x="0.5"
      y="0.5"
      width="47"
      height="47.0002"
      rx="23.5"
      stroke="black"
      strokeOpacity="0.06"
    />
    <defs>
      <clipPath id="clip0_928_19733">
        <rect width="24" height="24" fill="white" transform="translate(12 12)" />
      </clipPath>
    </defs>
  </svg>
);
const TenantSvg = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="32" fill="#FAAD14" />
    <g clipPath="url(#clip0_928_29570)">
      <path
        d="M47 20H24V17C24 16.45 23.55 16 23 16H21C20.45 16 20 16.45 20 17V20H17C16.45 20 16 20.45 16 21V23C16 23.55 16.45 24 17 24H20V47C20 47.55 20.45 48 21 48H23C23.55 48 24 47.55 24 47V24H47C47.55 24 48 23.55 48 23V21C48 20.45 47.55 20 47 20ZM26 40H46V26H26V40Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_928_29570">
        <rect width="32" height="32" fill="white" transform="translate(16 16)" />
      </clipPath>
    </defs>
  </svg>
);

const TenantSvgSchedule = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#FAAD14" />
    <g clipPath="url(#clip0_964_31077)">
      <path
        d="M39 12H16V9C16 8.45 15.55 8 15 8H13C12.45 8 12 8.45 12 9V12H9C8.45 12 8 12.45 8 13V15C8 15.55 8.45 16 9 16H12V39C12 39.55 12.45 40 13 40H15C15.55 40 16 39.55 16 39V16H39C39.55 16 40 15.55 40 15V13C40 12.45 39.55 12 39 12ZM18 32H38V18H18V32Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_964_31077">
        <rect width="32" height="32" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
);

const DefaultTenant = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);
const ProfileTenant = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TenantSvg} {...props} />
);

const ProfileTenantSchedule = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={TenantSvgSchedule} {...props} />
);

export { DefaultTenant, ProfileTenant, ProfileTenantSchedule };
