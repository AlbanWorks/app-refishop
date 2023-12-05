import React,{useState,useEffect} from "react"
import useFcmToken from "../src/hooks/useFcmToken"

export default function Tests() {

const { fcmToken, notificationPermissionStatus } = useFcmToken();

  return (
   <div>
        <button> preess me uh</button>
   </div>
  )
}

