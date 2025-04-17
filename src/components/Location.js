import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react';

const Location = () => {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const fetchLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;

            try {
              const res = await axios.get("http://localhost:5000/api/location", {
                params: {
                  lat: latitude,
                  lng: longitude,
                },
              });

              const city = res.data.city;
              setLocation(city || "City not found");
            } catch (err) {
              console.error("Location API error:", err);
              setLocation("Unable to fetch location");
            }
          },
          (err) => {
            console.warn("Geolocation permission error:", err);
            setLocation("Permission denied");
          }
        );
      } else {
        setLocation("Geolocation not supported");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full 
    border border-yellow-300 transition ml-20">
      <MapPin size={16} className="mr-1 text-yellow-600" />
      <span>{location}</span>
    </div>
  );
};

export default Location;
