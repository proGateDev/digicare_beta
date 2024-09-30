import { useState ,useEffect } from "react";
import { useUpdateMemberLocation } from "../controllers/member/track";

const GoogleGeolocationComponent = ({ memberId }) => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const updateLocationMutation = useUpdateMemberLocation();

  const fetchGeolocation = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`,
        {
          method: 'POST',
        }
      );

      const data = await response.json();

      if (data.location) {
        setCoordinates({
          latitude: data.location.lat,
          longitude: data.location.lng,
        });

        // Call the update location function with memberId and coordinates
        await updateLocationMutation.mutateAsync({ memberId, latitude: data.location.lat, longitude: data.location.lng });
      } else {
        setError('Unable to fetch location from Google API');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchGeolocation();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}
    </div>
  );
};

export default GoogleGeolocationComponent;