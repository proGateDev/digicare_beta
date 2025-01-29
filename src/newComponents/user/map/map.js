import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MemberListCard from '../card/memberListCard';

const center = {
  lat: 51.505,
  lng: -0.09,
};

function Map() {
  return (
   <>
   <MemberListCard/>
    <LoadScript googleMapsApiKey="AIzaSyD5duJO3YyVT3BEWMP1a6Aa_Rfq9v4B9vk">
      <GoogleMap
        mapContainerClassName="w-full h-screen"  // Tailwind CSS for full width and height
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
   </>
  );
}

export default Map;
