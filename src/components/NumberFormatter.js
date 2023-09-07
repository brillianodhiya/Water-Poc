/* eslint-disable no-param-reassign */
export const convertNumberSm = (number) => {
  // return new Intl.NumberFormat("id-ID").format(number)
  // if (number) {
  //   return number.replace(/[.,]/g, function (x) {
  //     return x == "," ? "." : ",";
  //   });
  // } else {
  //   return "0,000";
  // }
  // return number.toFixed(3).split(".").join(",");
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
