import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HeartSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1187_29353)">
      <rect width="14" height="14" transform="translate(0.000488281 0.000488281)" fill="white" fillOpacity="0.01" />
      <g clipPath="url(#clip1_1187_29353)">
        <path d="M7.00049 0.389648C3.13355 0.389648 0.000488281 3.4248 0.000488281 7.1709C0.000488281 10.917 3.13355 13.9521 7.00049 13.9521C10.8674 13.9521 14.0005 10.917 14.0005 7.1709C14.0005 3.4248 10.8674 0.389648 7.00049 0.389648ZM7.00049 3.01465C8.37226 3.01465 9.48436 4.09199 9.48436 5.4209C9.48436 6.7498 8.37226 7.82715 7.00049 7.82715C5.62871 7.82715 4.51662 6.7498 4.51662 5.4209C4.51662 4.09199 5.62871 3.01465 7.00049 3.01465ZM7.00049 12.4209C5.34363 12.4209 3.85896 11.6936 2.86541 10.5561C3.39605 9.58809 4.43476 8.9209 5.64565 8.9209C5.71339 8.9209 5.78113 8.93184 5.84605 8.95098C6.21299 9.06582 6.59686 9.13965 7.00049 9.13965C7.40412 9.13965 7.79081 9.06582 8.15492 8.95098C8.21984 8.93184 8.28759 8.9209 8.35533 8.9209C9.56621 8.9209 10.6049 9.58809 11.1356 10.5561C10.142 11.6936 8.65734 12.4209 7.00049 12.4209Z" fill="#003A8C" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1187_29353">
        <rect width="14" height="14" fill="white" transform="translate(0.000488281 0.000488281)" />
      </clipPath>
      <clipPath id="clip1_1187_29353">
        <rect width="14" height="14" fill="white" transform="translate(0.000488281 0.000488281)" />
      </clipPath>
    </defs>
  </svg>


);

const UserFilledIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

export { UserFilledIcon };
