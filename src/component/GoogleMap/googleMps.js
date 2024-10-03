"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
    const mapRef = useRef(null);
    const [marker, setMarker] = useState(null); // State to hold the marker

    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'quarterly',
            });

            const google = await loader.load(); 
            const locationInMap = {
                lat: 26.846067,
                lng: 81.061365,
            };

            const mapOptions = {
                center: locationInMap,
                zoom: 15,
                mapId: 'NEXT_MAPS_TUTS',
            };

            const map = new google.maps.Map(mapRef.current, mapOptions); 

            const newMarker = new google.maps.Marker({
                position: locationInMap,
                map: map,
                title: "Click to move me!", 
            });

            setMarker(newMarker); 
            google.maps.event.addListener(map, "click", (event) => {
                const newPosition = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                };
                newMarker.setPosition(newPosition); 
                map.setCenter(newPosition); 
            });
        };

        initializeMap();
    }, []);

    return (
        <div style={{ height: "500px", width: "100%" }} ref={mapRef} className="rounded-md shadow-sm mt-4">
        </div>
    );
}
