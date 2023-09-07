import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, OverlayView } from '@react-google-maps/api';
import { Input, Typography, AutoComplete } from 'antd';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const { Search } = Input;

export default function MapPicker({
  center = { lat: -6.2, lng: 106.816666 },
  onChange = (c) => {},
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAcli1qFFLWrhhlDhVUCWkAJqzEY6Cp9UI',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map c={center} onChange={onChange} />;
}

function Map({ c = { lat: -6.2, lng: 106.816666 }, onChange = (c) => {} }) {
  const center = useMemo(() => c, [c]);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '12px',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Typography style={{ fontSize: '14px', fontWeight: 400, marginTop: '12px' }}>
          Pin Location
        </Typography>
        <PlacesAutocomplete setSelected={onChange} />
      </div>
      <GoogleMap
        onRightClick={(e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          console.log(e, 'E');

          try {
            onChange({ lat: lat, lng: lng });
          } catch (error) {}
        }}
        zoom={16}
        center={center}
        mapContainerClassName="map-container-gateway"
      >
        <Marker
          onDragEnd={(e) => {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            try {
              onChange({ lat: lat, lng: lng });
            } catch (error) {}
          }}
          draggable
          position={center}
        />
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(JSON.parse(address).description, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  const options = data.map(({ place_id, description }) => {
    return {
      label: description,
      value: JSON.stringify({
        place_id: place_id,
        description: description,
      }),
    };
  });

  return (
    <AutoComplete options={options} style={{ width: 200 }} onSelect={handleSelect} value={value}>
      <Search
        disabled={!ready}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Cari Lokasi"
        style={{ width: 200 }}
      />
    </AutoComplete>
  );
};
