import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';

const WaterDefault = () => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.25" width="20" height="20" rx="10" fill="#1890FF" />
    <path
      d="M14.3391 11.7142C14.3085 11.898 14.2779 12.1125 14.2472 12.2964C13.9408 13.9203 12.6845 15.2685 11.0606 15.5749C9.49791 15.8813 8.18036 15.3298 7.16922 14.1042C6.55641 13.3381 6.28064 12.4496 6.25 11.4997C6.25 11.0707 6.37256 10.6418 6.52577 10.2434C6.89345 9.29358 7.41435 8.405 7.96588 7.54706C8.57869 6.5972 9.28343 5.70862 10.0188 4.82004C10.2026 4.60556 10.4171 4.60556 10.601 4.82004C11.5202 5.95375 12.4088 7.11809 13.1442 8.37436C13.5425 9.04846 13.9102 9.72255 14.1553 10.4886C14.2166 10.7337 14.2779 10.9788 14.3391 11.2546C14.3391 11.2852 14.3391 11.3159 14.3698 11.3465C14.3391 11.4691 14.3391 11.5916 14.3391 11.7142ZM10.2946 5.49414C10.2639 5.52478 10.2333 5.55542 10.2333 5.55542C9.58983 6.32144 9.00766 7.14873 8.45613 7.97603C7.96588 8.71141 7.50627 9.44678 7.16922 10.2741C7.01602 10.6724 6.86281 11.1014 6.86281 11.5303C6.86281 12.2964 7.0773 12.9705 7.53691 13.5833C8.39485 14.717 9.52855 15.2379 10.938 14.9621C12.1636 14.717 12.9603 13.951 13.4199 12.8173C13.665 12.2351 13.757 11.6223 13.6038 11.0095C13.5118 10.5192 13.2974 10.0596 13.0829 9.63063C12.4701 8.43564 11.704 7.36322 10.9074 6.2908C10.7235 6.01503 10.5091 5.7699 10.2946 5.49414Z"
      fill="white"
    />
    <path
      d="M10.2943 14.4718C9.52833 14.4718 8.82359 14.2573 8.24142 13.7057C7.81245 13.2768 7.56733 12.7559 7.44476 12.1737C7.38348 11.8673 7.35284 11.5915 7.3222 11.2851C7.29156 11.0707 7.4754 10.9174 7.68989 10.9481C7.81245 10.9787 7.87373 11.04 7.93501 11.1626C8.08822 11.469 8.45591 11.6222 8.79295 11.469C8.94616 11.4077 9.03808 11.3158 9.09936 11.1626C9.16064 11.04 9.25256 10.9481 9.40577 10.9481C9.55897 10.9481 9.65089 11.04 9.71217 11.1626C9.83474 11.3771 10.0186 11.4996 10.2637 11.4996C10.5395 11.4996 10.7233 11.3771 10.8459 11.1626C10.9072 11.0094 11.0297 10.9481 11.1829 10.9481C11.3055 10.9481 11.3974 11.0094 11.4281 11.1319C11.5506 11.3771 11.7345 11.4996 12.0102 11.4996C12.286 11.4996 12.4698 11.3771 12.5924 11.1319C12.6843 10.9787 12.8069 10.9174 12.9601 10.9481C13.1133 10.9787 13.2052 11.1013 13.2052 11.2851C13.2052 11.9899 13.052 12.6333 12.6843 13.2461C12.2247 13.9815 11.5813 14.3492 10.754 14.4411C10.6927 14.4411 10.6314 14.4718 10.5395 14.4718C10.4475 14.4718 10.3863 14.4718 10.2943 14.4718Z"
      fill="white"
    />
  </svg>
);
const WaterFilled = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_171895_21832)">
      <rect y="0.5" width="24" height="24" rx="12" fill="#1890FF" />
      <path
        d="M18.1337 15.0708C18.0877 15.3466 18.0418 15.6683 17.9958 15.9441C17.5362 18.38 15.6518 20.4023 13.2159 20.8619C10.8719 21.3215 8.89554 20.4942 7.37883 18.6558C6.45961 17.5067 6.04596 16.1739 6 14.7491C6 14.1056 6.18384 13.4622 6.41365 12.8647C6.96518 11.4399 7.74652 10.107 8.57382 8.82011C9.49304 7.39531 10.5501 6.06245 11.6532 4.72958C11.929 4.40785 12.2507 4.40785 12.5265 4.72958C13.9053 6.43013 15.2382 8.17665 16.3412 10.0611C16.9387 11.0722 17.4902 12.0833 17.8579 13.2324C17.9499 13.6 18.0418 13.9677 18.1337 14.3814C18.1337 14.4273 18.1337 14.4733 18.1797 14.5193C18.1337 14.7031 18.1337 14.887 18.1337 15.0708ZM12.0669 5.74072C12.0209 5.78668 11.9749 5.83264 11.9749 5.83264C11.0097 6.98167 10.1365 8.22261 9.30919 9.46356C8.57382 10.5666 7.8844 11.6697 7.37883 12.9106C7.14903 13.5081 6.91922 14.1516 6.91922 14.795C6.91922 15.9441 7.24095 16.9552 7.93036 17.8744C9.21727 19.575 10.9178 20.3563 13.032 19.9427C14.8705 19.575 16.0655 18.426 16.7549 16.7254C17.1226 15.8521 17.2604 14.9329 17.0306 14.0137C16.8928 13.2783 16.571 12.5889 16.2493 11.9455C15.3301 10.153 14.1811 8.54434 12.9861 6.9357C12.7103 6.52206 12.3886 6.15437 12.0669 5.74072Z"
        fill="white"
      />
      <path
        d="M12.0668 19.2072C10.9177 19.2072 9.86063 18.8854 8.98738 18.0581C8.34392 17.4147 7.97623 16.6333 7.79239 15.7601C7.70047 15.3005 7.65451 14.8868 7.60855 14.4272C7.56258 14.1055 7.83835 13.8757 8.16008 13.9216C8.34392 13.9676 8.43584 14.0595 8.52777 14.2434C8.75757 14.703 9.3091 14.9328 9.81467 14.703C10.0445 14.6111 10.1824 14.4732 10.2743 14.2434C10.3662 14.0595 10.5041 13.9216 10.7339 13.9216C10.9637 13.9216 11.1016 14.0595 11.1935 14.2434C11.3773 14.5651 11.6531 14.7489 12.0208 14.7489C12.4345 14.7489 12.7102 14.5651 12.8941 14.2434C12.986 14.0136 13.1698 13.9216 13.3996 13.9216C13.5835 13.9216 13.7214 14.0136 13.7673 14.1974C13.9512 14.5651 14.2269 14.7489 14.6406 14.7489C15.0542 14.7489 15.33 14.5651 15.5138 14.1974C15.6517 13.9676 15.8356 13.8757 16.0654 13.9216C16.2952 13.9676 16.4331 14.1515 16.4331 14.4272C16.4331 15.4843 16.2033 16.4495 15.6517 17.3687C14.9623 18.4718 13.9971 19.0233 12.7562 19.1612C12.6643 19.1612 12.5723 19.2072 12.4345 19.2072C12.2966 19.2072 12.2046 19.2072 12.0668 19.2072Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_171895_21832">
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
const WaterPressureFilled = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_171895_21867)">
      <rect y="0.5" width="24" height="24" rx="12" fill="#52C41A" />
      <path
        d="M20.9497 14.9499C20.8997 15.3999 20.8497 15.8999 20.7497 16.3499C20.5497 17.4499 20.0497 18.4999 19.4497 19.4499C19.2497 19.7499 18.8997 19.8499 18.5497 19.6999C18.0497 19.4499 17.5497 19.2499 17.0497 18.9999C16.6997 18.7999 16.5497 18.3999 16.7497 18.0999C16.8997 17.7499 17.2997 17.5999 17.6497 17.7499C17.7997 17.7999 17.9497 17.8999 18.0997 17.9499C18.2497 17.9999 18.3997 18.0999 18.5997 18.1999C18.7997 17.6999 18.9997 17.2499 19.1497 16.7999C19.6997 14.9999 19.6497 13.2499 18.8997 11.4999C18.7997 11.2999 18.7497 11.0999 18.8497 10.8499C18.9497 10.5999 19.1997 10.3999 19.4997 10.3999C19.7997 10.3999 20.0497 10.5499 20.1497 10.8499C20.3497 11.3499 20.5497 11.8999 20.6497 12.3999C20.7497 12.8499 20.7997 13.3499 20.8997 13.7999C20.8997 13.8499 20.8997 13.8999 20.9497 13.9499C20.9497 14.2999 20.9497 14.5999 20.9497 14.9499Z"
        fill="white"
      />
      <path
        d="M11.2998 6.95C8.7998 7.25 6.8998 8.45 5.5498 10.55C5.8998 10.7 6.1998 10.85 6.4998 11C6.7998 11.15 6.9998 11.45 6.8998 11.75C6.7998 12.2 6.3498 12.45 5.9498 12.25C5.6998 12.15 5.3998 12 5.1498 11.85C5.0998 11.8 5.0498 11.8 4.9498 11.75C4.0998 14 4.2498 16.1 5.3498 18.15C5.5998 18 5.8498 17.9 6.1498 17.8C6.2498 17.75 6.3998 17.7 6.4998 17.7C6.7998 17.65 7.0998 17.85 7.1998 18.15C7.2998 18.45 7.1998 18.8 6.8998 18.95C6.3498 19.25 5.8498 19.5 5.2998 19.75C4.9998 19.9 4.6498 19.75 4.4998 19.45C3.7998 18.4 3.3498 17.3 3.1498 16.05C2.3498 11.55 4.9998 7.25 9.3498 5.9C11.4998 5.25 13.5498 5.4 15.5998 6.3C15.9998 6.45 16.1998 6.85 15.9998 7.2C15.8498 7.55 15.4498 7.7 15.0498 7.55C14.4998 7.35 13.8998 7.15 13.2498 7C13.0498 6.95 12.8998 6.95 12.6998 6.95C12.6998 7.3 12.6998 7.65 12.6998 8C12.6998 8.45 12.3498 8.75 11.8998 8.7C11.5498 8.65 11.2998 8.35 11.2998 8C11.2998 7.7 11.2998 7.4 11.2998 7.1C11.2998 7.1 11.2998 7 11.2998 6.95Z"
        fill="white"
      />
      <path
        d="M18.4497 8.74985C18.4497 8.44985 18.3497 8.24985 18.0997 8.09985C17.7997 7.94985 17.5497 7.99985 17.2997 8.14985C15.8997 9.09985 14.4997 10.0998 13.0997 11.0498C12.8997 10.9998 12.6997 10.9498 12.4997 10.8998C12.4497 10.8998 12.3997 10.8498 12.3497 10.8498C12.0997 10.8498 11.7997 10.8498 11.5497 10.8498C11.4997 10.8498 11.4497 10.8998 11.3997 10.8998C9.74966 11.1498 8.49966 12.5498 8.34966 14.1998C8.19966 16.0498 9.49966 17.6998 11.2997 18.0498C13.1497 18.3998 14.8997 17.2498 15.4497 15.4498C15.4997 15.2498 15.5497 15.0498 15.5997 14.8498C15.5997 14.5998 15.5997 14.2998 15.5997 14.0498C15.5497 13.8498 15.5497 13.6998 15.4497 13.4998C15.3997 13.3998 15.3997 13.3498 15.3497 13.2498C16.3497 11.8498 17.2997 10.4498 18.2997 9.04985C18.3997 8.99985 18.4497 8.84985 18.4497 8.74985ZM12.9997 17.0498C12.2497 17.4998 11.2997 17.3998 10.6497 16.7998C9.99966 16.2498 9.74966 15.2998 10.1497 14.5498C10.6997 13.4498 11.3497 12.3998 11.9997 11.2498C12.6497 12.3998 13.2497 13.4498 13.8497 14.5498C13.8997 14.6498 13.9497 14.7998 13.9497 14.9498C14.0997 15.7998 13.7497 16.6498 12.9997 17.0498Z"
        fill="white"
      />
      <path
        d="M12.7 14.1499C12.45 13.7499 12.25 13.3499 12 12.8999C11.6 13.5999 11.2 14.2499 10.85 14.9499C10.6 15.3999 10.85 15.9999 11.3 16.2999C11.75 16.5999 12.35 16.5999 12.75 16.2499C13.15 15.8999 13.3 15.3499 13.1 14.8499C12.95 14.5999 12.8 14.3999 12.7 14.1499Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_171895_21867">
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
const WaterBig = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_171782_104758)">
      <rect width="22" height="22" fill="white" fillOpacity="0.01" />
      <path
        d="M18.4966 14.1422C18.4404 14.4792 18.3842 14.8725 18.3281 15.2095C17.7663 18.1868 15.4632 20.6584 12.4859 21.2202C9.62101 21.7819 7.2055 20.7708 5.35174 18.5238C4.22825 17.1195 3.72268 15.4904 3.6665 13.749C3.6665 12.9625 3.8912 12.1761 4.17207 11.4458C4.84617 9.70441 5.80114 8.07535 6.81228 6.50246C7.93577 4.76105 9.22779 3.13199 10.576 1.50292C10.913 1.1097 11.3062 1.1097 11.6433 1.50292C13.3285 3.58138 14.9576 5.71602 16.3058 8.01917C17.036 9.25501 17.7101 10.4909 18.1595 11.8952C18.2719 12.3446 18.3842 12.794 18.4966 13.2996C18.4966 13.3558 18.4966 13.4119 18.5528 13.4681C18.4966 13.6928 18.4966 13.9175 18.4966 14.1422ZM11.0815 2.73876C11.0254 2.79494 10.9692 2.85111 10.9692 2.85111C9.78953 4.25548 8.72221 5.77219 7.71107 7.2889C6.81228 8.63709 5.96966 9.98528 5.35174 11.502C5.07087 12.2323 4.79 13.0187 4.79 13.8052C4.79 15.2095 5.18322 16.4454 6.02584 17.5688C7.59872 19.6473 9.67718 20.6023 12.2612 20.0967C14.5082 19.6473 15.9687 18.2429 16.8114 16.1645C17.2607 15.0972 17.4293 13.9737 17.1484 12.8502C16.9799 11.9514 16.5867 11.1088 16.1934 10.3223C15.0699 8.13152 13.6656 6.16541 12.205 4.1993C11.868 3.69373 11.4748 3.24434 11.0815 2.73876Z"
        fill="#1890FF"
      />
      <path
        d="M11.0815 19.1978C9.67718 19.1978 8.38517 18.8045 7.31785 17.7934C6.53141 17.0069 6.08201 16.052 5.85731 14.9847C5.74496 14.4229 5.68879 13.9173 5.63261 13.3556C5.57644 12.9624 5.91349 12.6815 6.30671 12.7377C6.53141 12.7939 6.64375 12.9062 6.7561 13.1309C7.03698 13.6926 7.71107 13.9735 8.32899 13.6926C8.60986 13.5803 8.77839 13.4118 8.89074 13.1309C9.00309 12.9062 9.17161 12.7377 9.45248 12.7377C9.73336 12.7377 9.90188 12.9062 10.0142 13.1309C10.2389 13.5241 10.576 13.7488 11.0254 13.7488C11.5309 13.7488 11.868 13.5241 12.0927 13.1309C12.205 12.85 12.4297 12.7377 12.7106 12.7377C12.9353 12.7377 13.1038 12.85 13.16 13.0747C13.3847 13.5241 13.7217 13.7488 14.2273 13.7488C14.7329 13.7488 15.0699 13.5241 15.2946 13.0747C15.4632 12.7939 15.6879 12.6815 15.9687 12.7377C16.2496 12.7939 16.4181 13.0185 16.4181 13.3556C16.4181 14.6476 16.1373 15.8273 15.4632 16.9508C14.6205 18.299 13.4409 18.9731 11.9242 19.1416C11.8118 19.1416 11.6995 19.1978 11.5309 19.1978C11.3624 19.1978 11.2501 19.1978 11.0815 19.1978Z"
        fill="#1890FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_171782_104758">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const WaterIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WaterDefault} {...props} />
);
export const WaterFilledIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WaterFilled} {...props} />
);
export const WaterPressureFilledIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WaterPressureFilled} {...props} />
);
export const WaterBigIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={WaterBig} {...props} />
);
