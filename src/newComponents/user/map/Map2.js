import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map2 = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "10px",
  };

  const defaultCenter = { lat: 26.8467, lng: 80.9462 }; // Default location (Lucknow, India)
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showInfo, setShowInfo] = useState(false); 

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
          setCurrentLocation(defaultCenter); // Fallback if user denies location
        }
      );
    } else {
      console.error("Geolocation not supported.");
      setCurrentLocation(defaultCenter); // Fallback if geolocation is unavailable
    }
  }, []);

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey="AIzaSyDs7POzbGW-p-9-SLvVxWEug62hPwUR2go">
        {currentLocation && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={currentLocation}
            zoom={14}
          >
            {/* Marker at the user's current location */}
            {currentLocation && (
              <Marker
                position={currentLocation}
                onClick={() => setShowInfo(true)}
              />
            )}
            {showInfo && (
              <InfoWindow
                position={currentLocation}
                onCloseClick={() => setShowInfo(false)}
              >
                <div>
                  <h2>You are here!</h2>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default Map2;
