"use client";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useGeocode } from "../controllers/user/track";
import { useUserMembersLocationById } from "../controllers/user/member";

export default function UserTrack() {
  const router = useRouter();
  const [memberId, setMemberId] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (router?.query?.memberId) {
      setMemberId(router.query.memberId);
    }
  }, [router.isReady, router.query?.memberId]);

  const { data, isPending } = useUserMembersLocationById(memberId);
  console.log('--------- DATA ---------------->', data);

  // Extract latitude and longitude from data safely
  const lat = data?.[1];
  const lng = data?.[0];

  const { geoLocation } = useGeocode(lat, lng);

  useEffect(() => {
    // Initialize map only if lat, lng, and mapRef are available
    const initializeMap = async (lat, lng) => {
      if (!lat || !lng || !mapRef.current) {
        return;
      }

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

    // Call initializeMap only if data is ready
    if (!isPending && lat !== undefined && lng !== undefined) {
      initializeMap(lat, lng);
    }
  }, [lat, lng, isPending]); // Dependencies updated

  if (isPending) {
    return <div>Pending...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className="bg-[#8dbaee] rounded-xl mb-4 shadow-lg text-white font-bold p-4">
        {geoLocation?.formattedAddress}
      </p>
      <div style={{ height: "500px", width: "100%" }} ref={mapRef} className="rounded-lg shadow-5"></div>
    </div>
  );
}
