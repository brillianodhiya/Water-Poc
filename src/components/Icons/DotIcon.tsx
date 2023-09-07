import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HeartSvg = () => (
  <svg width="18" height="18" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="18" height="18" rx="9" fill="white" fillOpacity="0.01" />
    <rect width="18" height="18" rx="9" fill="#FFF7E6" />
    <rect x="2" y="2" width="14" height="14" rx="7" fill="white" fillOpacity="0.01" />
    <rect x="2" y="2" width="14" height="14" rx="7" fill="#FFE7BA" />
    <rect x="4" y="4" width="10" height="10" rx="5" fill="white" fillOpacity="0.01" />
    <rect x="4" y="4" width="10" height="10" rx="5" fill="#FFD591" />
    <rect x="6" y="6" width="6" height="6" rx="3" fill="white" fillOpacity="0.01" />
    <g clipPath="url(#clip0_240_33770)">
      <rect x="6" y="6" width="6" height="6" rx="3" fill="#FA8C16" />
    </g>
    <defs>
      <clipPath id="clip0_240_33770">
        <rect x="6" y="6" width="6" height="6" rx="3" fill="white" />
      </clipPath>
    </defs>
  </svg>

);


const DotIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);


export { DotIcon };
