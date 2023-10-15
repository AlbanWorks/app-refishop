import React,{useState, useEffect} from 'react'
import st from './HandleCashflowReports.module.css'
import SearchReports from './components/SearchReports/SearchReports'
import FS from '../../utils/enums/fetchStates'
import {db} from '../../services/firebase/firebaseConfig'
import { getDoc } from 'firebase/firestore'
import ReportList from './components/ReportList/ReportList'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import fetchReports from './fetchReports'

const report = [{
    username: 'jose maria',
    timestamp: 'dd/mm/aaaa',
    debit:[
        {monto: 123},
        {monto: 123},
        {monto: 123},
        {monto: 123},
    ],
    credit:[
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
    ],
    transfer:[
        {monto: 12312, transf:43434},
        {monto: 12312, transf:43434},
    ],
    closes: {mp:111, payway:123, prisma:21321}
}]

const rrreport = [
    {
      username: "Santiago Lizardo",
      credit: [
        {
          monto: "123",
          ticket: "123"
        }
      ],
      closes: [
        {
          mp: null,
          prisma: "123",
          payway: "1231",
          ml: "23"
        }
      ],
      transfer: [
        {
          monto: "0123",
          transf: 0,
          ticket: "123"
        }
      ],
      debit: [
        {
          monto: "123"
        }
      ],
      date: "2023/10/15",
      userid: "8r6mkCXE3sdlL6wVplpPEvJ0gWJ3",
      timestamp: {
        seconds: 1697381382,
        nanoseconds: 415000000
      }
    }]

const HandleCashflowReports = () => {
    const [reports, setReports] = useState(null)
    const [fetchState, setFetchState] = useState(FS.IDLE)
    
    const fetchReportsHandler = async(selectedDate) => {
        if(selectedDate === null){  
            alert('seleccione una fecha válida')
            return
        } 
        setFetchState(FS.FETCHING)
        const query = await fetchReports(selectedDate)
        if(query.error){
            setFetchState(FS.ERROR)
        }
        else{
            setReports(query)
            setFetchState(FS.SUCSESS)
        }
    }

  return (
    <div className={st.spacer}>
        <div className={st.container}>  
            <SearchReports search={(selectedDate) => fetchReportsHandler(selectedDate)}/>
            {
                fetchState === FS.FETCHING ?
                <div className={st.spinnerContainer}>
                    <Spinner/>
                </div>
                :fetchState === FS.SUCSESS ?
                    <ReportList reports={reports}/>
                : fetchState === FS.ERROR ?
                    <div className={st.errorContainer}>
                        <ConfirmCard 
                            info={'Un error ha ocurrido al buscar los reportes de la base de datos, revise su conexión a internet y vuelva a intentarlo'}
                            buttonText={'Aceptar'}
                            nextState={()=>setFetchState(FS.IDLE)}
                        />
                    </div>
                :null
            }
        </div>
    </div>
  )
}

export default HandleCashflowReports