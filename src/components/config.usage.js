/* eslint-disable no-param-reassign */
import React from 'react';
import { Input } from 'antd';
// import NumberFormat from "react-number-format";
// import "antd/dist/antd.css";
// import { TextField } from "@material-ui/core";
// import InputAdornment from "@material-ui/core/InputAdornment";

const convertNumberSm = (number) => {
  return new Intl.NumberFormat('id-ID').format(number);
};

const convertNumberSmV1 = (number) => {
  // return new Intl.NumberFormat("id-ID").format(number)
  // if (number) {
  //   return number.replace(/[.,]/g, function (x) {
  //     return x == "," ? "." : ",";
  //   });
  // } else {
  //   return "0,000";
  // }
  // return number.toFixed(3).split(".").join(",");
  // eslint-disable-next-line no-param-reassign
  number = parseFloat(number);

  if (isNaN(number)) {
    number = 0;
  }

  let data = new Intl.NumberFormat('id-ID').format(number);
  if (data.split(',').length > 1) {
    if (data.split(',')[1].length < 3) {
      return data.split(',')[0] + ',' + (data.split(',')[1] + '000').slice(0, 3);
    } else {
      return data;
    }
  } else {
    return data + ',000';
  }
  // number = parseFloat(number);
  // if (Number.isInteger(number)) {
  //   return new Intl.NumberFormat("id-ID").format(number) + ",000";
  // } else {
  //   if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length >= 3
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number);
  //   } else if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length == 2
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number) + "0";
  //   }
  //   if (
  //     new Intl.NumberFormat("id-ID").format(number).split(",")[1].length == 1
  //   ) {
  //     return new Intl.NumberFormat("id-ID").format(number) + "00";
  //   } else {
  //     return new Intl.NumberFormat("id-ID").format(number);
  //   }
  // }
};

// const InputNumberSm = ({
//   value,
//   onChange,
//   placeholder,
//   style,
//   className,
//   prefix,
//   suffix,
//   disabled,
//   size,
// }) => {
//   return (
//     <NumberFormat
//       disabled={disabled}
//       className={className}
//       style={style}
//       customInput={Input}
//       thousandSeparator="."
//       decimalSeparator=","
//       placeholder={placeholder}
//       value={value}
//       onValueChange={(e) => onChange(e.floatValue)}
//       prefix={prefix}
//       suffix={suffix}
//       size={size}
//     />
//   );
// };

// const InputNumberSmMaterial = ({
//   value,
//   onChange,
//   placeholder,
//   style,
//   className,
//   // prefix,
//   suffix,
//   disabled,
//   size = "small",
//   variant = "outlined",
//   label,
//   readOnly,
//   helperText,
// }) => {
//   return (
//     <NumberFormat
//       disabled={disabled}
//       className={className}
//       style={style}
//       customInput={TextField}
//       thousandSeparator="."
//       decimalSeparator=","
//       placeholder={placeholder}
//       value={value}
//       onValueChange={(e) => {
//         if (onChange) {
//           onChange(e.floatValue);
//         } else {
//           console.log(e);
//         }
//       }}
//       // prefix={prefix}
//       // suffix={suffix}
//       label={label}
//       size={size}
//       variant={variant}
//       InputProps={{
//         endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
//         readOnly: readOnly,
//       }}
//       InputLabelProps={{
//         shrink: true,
//       }}
//       helperText={helperText}
//     />
//   );
// };

const converNumberSmNotFixed = (number) => {
  return new Intl.NumberFormat('id-ID').format(number);
};

const rupiahFormat = (value) => {
  return value?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};

export {
  convertNumberSm,
  // InputNumberSm,
  // InputNumberSmMaterial,
  converNumberSmNotFixed,
  rupiahFormat,
};
