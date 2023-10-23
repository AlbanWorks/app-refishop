import React from 'react'
import st from './LocationButton.module.css'

const LocationButton = ({latitude, longitude}) => {

    const redirectToGoogleMaps = () => {
        if(window !== undefined){
            window.open(`http://www.google.com/maps/place/${latitude},${longitude}`, '_blank');
        }
    }

  return (
    <button 
        className={st.location}
        onClick={redirectToGoogleMaps}
    >
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20"  
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={st.svg}
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
</button>
  )
}

export default LocationButton