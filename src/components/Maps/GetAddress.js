import Geocode from 'react-geocode';

export const getAddressFromLatLong = async (lat, long) => {
  Geocode.setApiKey('AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI');
  Geocode.setLanguage('en');
  Geocode.setRegion('id');
  // Geocode.setHttpsMode(true);
  // Geocode.enableDebug();
  const address = await Geocode.fromLatLng(lat, long);

  return await address?.results[0].formatted_address;
  // Geocode.fromLatLng(lat, long).then(
  //   (response) => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address, 'ADDRESS');
  //     return address;
  //   },
  //   (error) => {
  //     console.error(error);
  //   },
  // );

  // console.log(address, 'ADD');
};
