import React, { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation({ latitude, longitude });
              },
              (error) => {
                alert('No se pudo obtener la ubicacion, por favor infórmalo a un administrador pues tu ubicación se mostrará indefinida, puedes capturar la pantalla ', error)
              }
            );
        } 
        else {
            alert('Tu navegador no soporta geolocalización, por favor infórmalo a un administrador')
            
        }
       
    
  }, []);


  

  return {location}
};

export default useLocation;
