import React from "react"
import CheckTimes from "../CheckTimes/CheckTimes"
import MakeRequests from "../MakeRequests/MakeRequests"
import HandleRequests from '../HandleRequests/HandleRequests'
import SECTIONS from "../../utils/enums/sections"
import REQ_TYPES from "../../utils/enums/requestTypes"
import ManageAccounts from '../ManageAccounts/ManageAccounts'
import VisualizeEmployeeTimes from "../VisualizeEmployeeTimes/VisualizeEmployeeTimes"
import EditProfile from '../EditProfile/EditProfile'
import MakeCashflowReports from "../MakeCashflowReports/MakeCashflowReports"
import HandleCashflowReports from '../HandleCashflowReports/HandleCashflowReports'
import ManageStores from "../ManageStores/ManageStores"

const SectionSelector = ({section, userData}) => {

  return (
    <>
        {
            section === SECTIONS.CHECK_ENTRY_AND_EXIT ?
                <CheckTimes userData={userData}/>
            :section === SECTIONS.MAKE_REQUESTS ?
                <MakeRequests userData={userData}/>
            :section === SECTIONS.EDIT_PROFILE?
                <EditProfile userData={userData}/>
            :section === SECTIONS.HANDLE_REQUESTS?
                <HandleRequests/>
            :section === SECTIONS.MANAGE_ACCOUNTS?
                <ManageAccounts/>
            :section === SECTIONS.VISUALIZE_EMPLOYEE_TIMES?
                <VisualizeEmployeeTimes/>
            :section === SECTIONS.MAKE_REPORTS?
                <MakeCashflowReports userData={userData}/>
            :section === SECTIONS.HANDLE_REPORTS?
                <HandleCashflowReports/>
            :section === SECTIONS.MANAGE_STORES?
                <ManageStores/>
            :null
        }
    </>
  )
}

export default SectionSelector