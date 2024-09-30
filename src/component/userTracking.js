"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useUpdateMemberLocation } from '../controllers/member/track'; // Adjust the import path
import { useGeocode } from "../controllers/user/track";

export default function UserTrack({ userType, userId, location }) {
  const memberId = '66f798ccbcf7a10ea938add6'; // Hardcoded for demonstration, you can replace it with a dynamic value if needed

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [error, setError] = useState(null);

  // Hook for updating location
  const { mutate: updateLocation, isLoading: isUpdatingLocation } = useUpdateMemberLocation();
  const { geoLocation } = useGeocode(location.latitude, location.longitude)
  useEffect(() => {
    const initializeMap = async (lat, lng) => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "quarterly",
      });

      const google = await loader.load();
      const locationInMap = { lat, lng };

      const mapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);

      markerRef.current = new google.maps.Marker({
        position: locationInMap,
        map: map,
      });
    };

    if (location && location.latitude && location.longitude) {
      const { latitude, longitude } = location;
      initializeMap(latitude, longitude);
      updateLocation({ memberId, latitude, longitude }); // Update location using the mutation hook
    } else {
      setError("Location data is not available.");
    }

    }, [location, memberId, updateLocation]); // Added location as a dependency
  // }, []); // Added location as a dependency
  console.log('geoLocation ------------>', geoLocation?.formattedAddress);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {location ? (
            <>
              <p className="bg-[#28282B] rounded-xl mb-4 shadow-lg text-white font-bold p-4">
                {geoLocation?.formattedAddress}
              </p>

              {isUpdatingLocation && <p>Updating location...</p>} {/* Optional loading indicator */}
              <div style={{ height: "500px", width: "100%" }} ref={mapRef}></div>
            </>
          ) : (
            <p>Loading location...</p>
          )}
        </>
      )}
    </div>
  );
}
