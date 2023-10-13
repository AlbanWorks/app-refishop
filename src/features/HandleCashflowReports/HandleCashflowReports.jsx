import React,{useState, useEffect} from 'react'
import st from './HandleCashflowReports.module.css'
import SearchReports from './components/SearchReports/SearchReports'
import FS from '../../utils/enums/fetchStates'
import {db} from '../../services/firebase/firebaseConfig'
import { getDoc } from 'firebase/firestore'
import ReportList from './components/ReportList/ReportList'

const report = {
    username: 'josemaria',
    timestamp: 'dd/mm/aaaa',
    debit:[
        {monto: 123}
    ]
}

const HandleCashflowReports = () => {
    const [reports, setReports] = useState(null)
    const [fetchState, setFetchState] = useState(FS.IDLE)

    useEffect(() => {
        setReports([report])
        setFetchState(FS.SUCSESS)
    }, [])
    

  return (
    <div className={st.spacer}>
        <div className={st.container}>  
            <SearchReports/>
            {
                fetchState === FS.FETCHING ?
                <div>SPINNER</div>
                :fetchState === FS.SUCSESS ?
                    <ReportList reports={reports}/>
                : fetchState === FS.ERROR ?
                <div>error</div>
                :null
            }
        </div>
    </div>
  )
}

export default HandleCashflowReports