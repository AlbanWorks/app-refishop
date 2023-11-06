import React,{useState, useEffect} from 'react'
import RequestDayOff from './components/RequestDayOff/RequestDayOff'
import REQ_TYPES from '../../utils/enums/requestTypes'
import REQ_STATES from '../../utils/enums/requestStates'
import st from './MakeRequests.module.css'
import PendingRequest from './components/PendingRequest/PendingRequest'
import RequestSalaryAdvance from './components/RequestSalaryAdvance/RequestSalaryAdvance'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import { getRequest, sendRequest } from './methods/requests'

const FS = {
    FETCHING:'fetching',
    PENDING_REQUEST:'pending request',
    NO_PENDING_REQUEST:'no request',
    ERROR:'error'
}

const MakeRequests = ({requestType, userData}) => {
    const [fetchState, setFetchState] = useState(FS.FETCHING)
    const [pendingRequest, setPendingRequest] = useState(null)
    const [request, setRequest] = useState(null)

    useEffect(() => {
        fetchRequest()
      }, [])

    const fetchRequest = async () => {
        const query = await getRequest(userData.id)
        if(query.error)setFetchState(FS.ERROR)
        else if(query.empty) setFetchState(FS.NO_PENDING_REQUEST)
        else{
            setPendingRequest(query.request)
            setFetchState(FS.PENDING_REQUEST)
        }
    }

    useEffect(() => {
      if(request !== null) uploadRequest()
    }, [request])

    const uploadRequest = async () => {
        setFetchState(FS.FETCHING)
        const query = await sendRequest(userData.id, request)
        if(query.error){
            alert('Su solicitud no pudo ser enviada, revise su conexion e intentelo nuevamente, si el problema persiste notifíquelo a un administrador')
            setFetchState(FS.NO_PENDING_REQUEST)
        }
        else fetchRequest()
    }
    

  return (
    <div className={st.container}>
        {
            fetchState === FS.FETCHING ?
                <Spinner/>
            :fetchState === FS.PENDING_REQUEST ?
                <PendingRequest data={pendingRequest}/>
            :fetchState === FS.NO_PENDING_REQUEST?
                requestType === REQ_TYPES.FREE_DAY?
                    <RequestDayOff setRequest={(value)=>setRequest(value)}/>
                :   <RequestSalaryAdvance setRequest={(value)=>setRequest(value)}/>
            :fetchState === FS.ERROR ?
                <div className={st.errorContainer}>
                    <ConfirmCard 
                        info={'Un error ha ocurrido, revise su conexión a internet y vuelva a intentarlo'}
                        buttonText={'Reintentar'}
                        nextState={()=>setFetchState(FS.FETCHING)}
                    />
                </div>
            :null
        }
    </div>
  )
}

export default MakeRequests