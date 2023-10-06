import React,{useState} from "react"
import {CheckInOut} from "../src/features/CheckInOut/CheckInOut"
import MakeRequests from "../src/features/MakeRequests/MakeRequests"
import Navbar from '../src/components/Navbar/Navbar'
import HandleRequests from '../src/features/HandleRequests/HandleRequests'
import SECTIONS from "../src/utils/enums/sections"
import REQ_TYPES from "../src/utils/enums/requestTypes"
import ManageAccounts from '../src/features/ManageAccounts/ManageAccounts'
import VisualizeEmployeeTimes from "../src/features/VisualizeEmployeeTimes/VisualizeEmployeeTimes"
import EditProfile from '../src/features/EditProfile/EditProfile'
import useAuth from "../src/hooks/useAuth"
import FETCH_STATES from "../src/utils/enums/fetchStates"
import SectionSelector from "../src/features/SectionSelector/SectionSelector"


export default function Home() {
    const [selectedSection, setSelectedSection] = useState(SECTIONS.CHECK_ENTRY_AND_EXIT)
    const {fetchState, User} = useAuth()

  return (
    <>
        {
            fetchState === FETCH_STATES.WAITING ?
                <div>spinner</div>
            : fetchState === FETCH_STATES.SUCSESS ?
                <div className='pageContainer'>
                    <Navbar userData={User} selectOption={(value)=>setSelectedSection(value)}/>
                    <SectionSelector section={selectedSection}/>
                </div>
            : <div>error</div>
        }
    </>
  )
}

