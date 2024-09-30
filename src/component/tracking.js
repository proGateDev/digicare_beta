"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Track() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeMap = async (lat, lng) => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "quarterly",
      });

      const google = await loader.load(); // Load the Google Maps API
      const locationInMap = { lat, lng };

      const mapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      // Add marker
      markerRef.current = new google.maps.Marker({
        position: locationInMap,
        map: map,
      });
    };

    const updateMarker = (lat, lng) => {
      if (markerRef.current) {
        markerRef.current.setPosition({ lat, lng });
      }
    };

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        if (markerRef.current) {
          updateMarker(latitude, longitude);
        } else {
          initializeMap(latitude, longitude); // Initialize map on first position update
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        setError(error.message);
      },
      { enableHighAccuracy: true }
    );

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <div>
      {error ? (
        <p>Error getting location: {error}</p>
      ) : (
        <>
          <p>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
          </p>
          <div style={{ height: "500px", width: "100%" }} ref={mapRef}></div>
        </>
      )}
    </div>
  );
}
