import React,{useState,useEffect} from "react"
import useLocation from "../src/hooks/useLocation"

export default function Tests() {
    const {location, getLocation} = useLocation()
    useEffect(() => {
        console.error('probando console error')
      console.log('from page', location);
    }, [location])
    

  return (
   <div>
        <button onClick={getLocation}> preess me uh</button>

        <a href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}  target={"_blank"}> ir </a>
   </div>
  )
}

