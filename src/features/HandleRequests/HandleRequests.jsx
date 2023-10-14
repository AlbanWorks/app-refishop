import React, {useState,useEffect} from 'react'
import REQ_TYPES from '../../utils/enums/requestTypes'
import st from './HandleRequests.module.css'
import Request from './components/Request/Request'
import FS from '../../utils/enums/fetchStates'
import Spinner from '../../components/Spinner/Spinner'


const requestProvisional = [
    {
        req_type: REQ_TYPES.FREE_DAY, 
        employee: 'juan',
        origin_date:'August 19, 2023 23:15:30', 
        requested_date: 'August 21, 2023 23:15:30',
        amount:0,
        reason: 'razones de fuerza mayor'
    },
    {
        req_type: REQ_TYPES.SALARY_ADVANCE, 
        employee: 'pablo',
        origin_date:'August 19, 2023 23:15:30', 
        requested_date: 'August 19, 2023 23:15:30',
        amount:1200,
        reason: 'familiar se enfermó'
    },
]
const HandleRequests = () => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [requests, setRequests] = useState(null)

    useEffect(() => {
      fetchRequests()
    }, [])

    const fetchRequests = async () => {
        setFetchState(FS.FETCHING)
        setRequests( requestProvisional)
        setFetchState(FS.SUCSESS)
    }
    

  return (
    <div className={st.container}> 
    {
        fetchState === FS.SUCSESS ?
            requests.map((request, index)=>
                <Request key={index} request={request}/>
            )
        :fetchState === FS.ERROR ?
            <div className={st.errorContainer}>
                <ConfirmCard 
                    info={'Un error ha ocurrido al buscar los pedidos de la base de datos, revise su conexión a internet y vuelva a intentarlo'}
                    buttonText={'Aceptar'}
                    nextState={()=>setFetchState(FS.IDLE)}
                />
            </div>
        : 
            <div className={st.spinnerContainer}>
                <Spinner/>
            </div>
    }
    </div>
  )
}

export default HandleRequests