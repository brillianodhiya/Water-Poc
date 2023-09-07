const WeCurrency = (value = number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

const WeCurrencyWithMin = (value = number) => {
  return (
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value) + ',-'
  );
};

const WeCurrencyWith00 = (value = number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

export { WeCurrency, WeCurrencyWithMin, WeCurrencyWith00 };
