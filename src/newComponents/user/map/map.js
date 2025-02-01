import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MemberListCard from "../card/memberListCard";

const MapOne = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "480px",
    // borderRadius: "10px",
  };

  const center = {
    lat: 26.8467, // Default location (Lucknow, India)
    lng: 80.9462,
  };

  return (
    <div className="w-full">
      <MemberListCard />
      <LoadScript googleMapsApiKey="AIzaSyDs7POzbGW-p-9-SLvVxWEug62hPwUR2go">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {/* Marker for the center location */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapOne;
