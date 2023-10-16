import React, { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if(trigger){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation({ latitude, longitude });
              },
              (error) => {
                console.error("Error al obtener la ubicación: ", error);
              }
            );
        } 
        else {
            console.error("Geolocalización no está soportada en tu navegador.");
        }
        setTrigger(false)
    }
  }, [trigger]);

  const getLocation = () => {
    setTrigger(true)
  }
  

  return {location, getLocation}
};

export default useLocation;
