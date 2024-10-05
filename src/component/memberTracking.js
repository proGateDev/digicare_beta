import { useState, useEffect, useRef } from "react";
import { useUpdateMemberLocation } from "../controllers/member/track";
import { useGeocode } from "../controllers/user/track";

const MemberTrack = ({ memberId }) => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const updateLocationMutation = useUpdateMemberLocation();
  const mapRef = useRef(null);

  // Function to fetch geolocation using browser's Geolocation API
  const fetchGeolocation = async () => {
    if ("geolocation" in navigator) {
      console.log("Attempting to fetch location via browser geolocation...");
      
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          
          console.log('Latitude:', latitude, 'Longitude:', longitude, 'Accuracy:', accuracy);
      
          if (accuracy > 50) {
            console.warn('Low accuracy detected from browser geolocation, falling back to Google API.');
            // await fetchFromGoogleAPI();
          } else {
            console.log('High accuracy detected from browser geolocation.');
            setCoordinates({ latitude, longitude });
            await updateLocationMutation.mutateAsync({ memberId, latitude, longitude });
          }
        },
        async (error) => {
          console.error("Browser Geolocation Error:", error);
          await fetchFromGoogleAPI(); // Fall back to Google API on error
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 } // Request high accuracy location with extended timeout
      );
      
    } else {
      console.warn("Browser geolocation not available, using Google API.");
      // await fetchFromGoogleAPI(); // Fallback to Google API if browser geolocation is not available
    }
  };

  // Function to fetch geolocation using Google API
  const fetchFromGoogleAPI = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
        {
          method: 'POST',
        }
      );

      const data = await response.json();

      if (data.location) {
        const { lat, lng } = data.location;
        console.log("Google Geolocation Data:",  data.location);
        setCoordinates({ latitude: lat, longitude: lng });

        // Update member location with the coordinates from Google API
        await updateLocationMutation.mutateAsync({ memberId, latitude: lat, longitude: lng });
      } else {
        setError("Unable to fetch location from Google API.");
      }
    } catch (err) {
      setError(`Google API Error: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchGeolocation();
  }, []); // Trigger geolocation fetching when the component mounts

  const { geoLocation } = useGeocode(coordinates.latitude, coordinates.longitude);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>
            Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
          </p>
          <p className="bg-[orange]">
            {geoLocation?.formattedAddress}
          </p>
          <div style={{ height: "500px", width: "100%" }} ref={mapRef}></div>
        </>
      )}
    </div>
  );
};

export default MemberTrack;
