import React from "react"
import {CheckInOut} from "../CheckInOut/CheckInOut"
import MakeRequests from "../MakeRequests/MakeRequests"
import HandleRequests from '../HandleRequests/HandleRequests'
import SECTIONS from "../../utils/enums/sections"
import REQ_TYPES from "../../utils/enums/requestTypes"
import ManageAccounts from '../ManageAccounts/ManageAccounts'
import VisualizeEmployeeTimes from "../VisualizeEmployeeTimes/VisualizeEmployeeTimes"
import EditProfile from '../EditProfile/EditProfile'
import MakeCashflowReports from "../MakeCashflowReports/MakeCashflowReports"

const SectionSelector = ({section}) => {

  return (
    <>
        {
            section === SECTIONS.CHECK_ENTRY_AND_EXIT ?
                <CheckInOut/>
            :section === SECTIONS.REQUEST_FREE_DAY ?
                <MakeRequests requestType={REQ_TYPES.FREE_DAY}/>
            :section === SECTIONS.REQUEST_ADVANCE ?
                <MakeRequests requestType={REQ_TYPES.SALARY_ADVANCE}/> 
            :section === SECTIONS.EDIT_PROFILE?
                <EditProfile/>
            :section === SECTIONS.HANDLE_REQUESTS?
                <HandleRequests/>
            :section === SECTIONS.MANAGE_ACCOUNTS?
                <ManageAccounts/>
            :section === SECTIONS.VISUALIZE_EMPLOYEE_TIMES?
                <VisualizeEmployeeTimes/>
            :section === SECTIONS.MAKE_REPORTS?
                <MakeCashflowReports/>
            :null
        }
    </>
  )
}

export default SectionSelector