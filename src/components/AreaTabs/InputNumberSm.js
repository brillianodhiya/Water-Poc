import React from 'react';
import { Input } from 'antd';
import { NumericFormat } from 'react-number-format';

export const InputNumberSm = React.forwardRef(
  ({
    value,
    onChange,
    placeholder,
    style,
    className,
    prefix,
    suffix,
    disabled,
    size,
    addOnAfter,
    addOnBefore,
    ref,
  }) => {
    return (
      <NumericFormat
        ref={ref}
        disabled={disabled}
        className={className}
        style={style}
        customInput={Input}
        thousandSeparator="."
        decimalSeparator=","
        placeholder={placeholder}
        value={value}
        onValueChange={(e) => onChange(e.floatValue)}
        prefix={prefix}
        suffix={suffix}
        size={size}
        addonAfter={addOnAfter}
        addonBefore={addOnBefore}
      />
    );
  },
);
