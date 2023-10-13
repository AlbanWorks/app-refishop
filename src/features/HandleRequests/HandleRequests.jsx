import React, {useState} from 'react'
import REQ_TYPES from '../../utils/enums/requestTypes'
import st from './HandleRequests.module.css'
import Request from './components/Request/Request'
import FS from '../../utils/enums/fetchStates'


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
    const [fetchState, setfetchState] = useState(FS.SUCSESS)
    const [requests, setRequests] = useState(requestProvisional)

  return (
    <div className={st.container}> 
    {
        fetchState === FS.SUCSESS ?
            requests.map((request, index)=>
                <Request key={index} request={request}/>
            )
        :fetchState === FS.ERROR ?
        <div>err</div>
        :null
    }
    </div>
  )
}

export default HandleRequests