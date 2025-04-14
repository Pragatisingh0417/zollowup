import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react';

const Location = () => {
  const [location, setLocation] = useState("Detecting location...");

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            try {
              const response = await axios.get("http://localhost:5000/api/location", {
                params: { lat: String(latitude), lng: String(longitude) },
              });
              setLocation(response.data.city || "City not found");
            } catch (err) {
              setLocation("Error fetching location");
            }
          },
          (err) => {
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
    <div className="hidden md:flex items-center text-sm font-medium px-4 py-2 rounded-full border border-yellow-300 transition ml-20">
      <MapPin size={16} className="mr-1 text-yellow-600" />
      <span>{location}</span>
    </div>
  );
};

export default Location;
