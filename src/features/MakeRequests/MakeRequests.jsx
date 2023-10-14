import React,{useState} from 'react'
import RequestDayOff from './components/RequestDayOff/RequestDayOff'
import REQ_TYPES from '../../utils/enums/requestTypes'
import REQ_STATES from '../../utils/enums/requestStates'
import st from './MakeRequests.module.css'
import PendingRequest from './components/PendingRequest/PendingRequest'
import RequestSalaryAdvance from './components/RequestSalaryAdvance/RequestSalaryAdvance'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'

const FS = {
    WAITING:'waiting',
    PENDING_REQUEST:'pending request',
    NO_PENDING_REQUEST:'no request',
    ERROR:'error'
}

const pendingReq = {
    req_type: REQ_TYPES.FREE_DAY,
    state: REQ_STATES.APPROVED
}

const MakeRequests = ({requestType}) => {
    const [fetchState, setFetchState] = useState(FS.PENDING_REQUEST)
    const [requestData, setRequestData] = useState(pendingReq)
  return (
    <div className={st.container}>
        {
            fetchState === FS.PENDING_REQUEST ?
                <PendingRequest data={requestData}/>
            :fetchState === FS.NO_PENDING_REQUEST?
                requestType === REQ_TYPES.FREE_DAY?
                    <RequestDayOff/>
                :   <RequestSalaryAdvance/>
            :fetchState === FS.ERROR ?
                <div className={st.errorContainer}>
                    <ConfirmCard 
                        info={'Un error ha ocurrido, revise su conexión a internet y vuelva a intentarlo'}
                        buttonText={'Reintentar'}
                        nextState={()=>setFetchState(FS.IDLE)}
                    />
                </div>
            :null
        }
    </div>
  )
}

export default MakeRequests