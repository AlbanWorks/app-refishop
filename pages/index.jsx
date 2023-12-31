import React,{useState,useEffect} from "react"
import Navbar from '../src/components/Navbar/Navbar'
import SECTIONS from "../src/utils/enums/sections"
import { useRouter } from 'next/navigation'
import useAuth from "../src/hooks/useAuth"
import SectionSelector from "../src/features/SectionSelector/SectionSelector"
import Spinner from "../src/components/Spinner/Spinner"
import {hanldePNPermissions} from '../src/utils/methods/hanldePushNotifications'

export default function Home() {
    
    const [selectedSection, setSelectedSection] = useState(SECTIONS.CHECK_ENTRY_AND_EXIT)
    const {userData, loginState, LOGIN_STATE} = useAuth()
    const router = useRouter()

    useEffect(() => {
      if(loginState === LOGIN_STATE.NO_USER) router.push('/sesion')
      if(loginState === LOGIN_STATE.USER) hanldePNPermissions(userData)
    }, [loginState])
     
  return (
    <>
        {
            loginState === LOGIN_STATE.USER && userData ?
                <div className='pageContainer'>
                <Navbar userData={userData} selectOption={(value)=>setSelectedSection(value)}/>
                <SectionSelector section={selectedSection} userData={userData}/>
                </div> 
            :loginState === LOGIN_STATE.NEW_USER ?
                <div className='blockedInfo'>
                    <h3>Necesita habilitar su cuenta</h3>
                    <span>Informe al administrador para que verifique su cuenta y pueda ingresar al sistema.</span> 
                </div>
            : 
                <div className='spinnerContainer'>
                    <Spinner/>
                </div>
        }
    </>
  )
}

