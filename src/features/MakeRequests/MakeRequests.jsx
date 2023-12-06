import React,{useState, useEffect} from 'react'
import st from './MakeRequests.module.css'
import FreeDay from './components/FreeDay'
import PendingRequest from './components/PendingRequest'
import Spinner from '../../components/Spinner/Spinner'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { sendRequest, deleteRequest } from './methods/requests'
import REQ_TYPES from '../../utils/enums/requestTypes'
import Advance from './components/Advance'
import {sendNotification} from '../../utils/methods/hanldePushNotifications'

const REQ_FS = {
    FETCHING: 'fetching',
    NO_REQUEST: 'no_requests',
    PENDING_REQUEST: 'pending_requests'
}

const MakeRequests = ({userData}) => {
    const [freeDayFetchState, setFreeDayFetchState] = useState(REQ_FS.FETCHING)
    const [advanceFetchState, setAdvanceFetchState] = useState(REQ_FS.FETCHING)
    const [advanceReq, setAdvanceReq] = useState(null)
    const [freeDayReq, setFreeDayReq] = useState(null)

    const handleSend = async (data) => {
        await sendRequest(data, userData)
        sendNotification(`${userData.username} envió una solicitud`)
    }
    const handleDelete = async (reqType) => {
        await deleteRequest(reqType, userData.id)
    }
    useEffect(() => {
        const unsubFreeDay = onSnapshot(doc(db, 'solicitudes/dia_libre/todas', userData.id), (doc) => {
            if(doc.data() !== undefined){
                setFreeDayReq(doc.data())
                setFreeDayFetchState(REQ_FS.PENDING_REQUEST)
            }
            else setFreeDayFetchState(REQ_FS.NO_REQUEST)
        })

        const unsubAdvance = onSnapshot(doc(db, 'solicitudes/adelanto/todas', userData.id), (doc) => {
            if(doc.data() !== undefined){
                setAdvanceReq(doc.data())
                setAdvanceFetchState(REQ_FS.PENDING_REQUEST)
            }
            else setAdvanceFetchState(REQ_FS.NO_REQUEST)
        })

        return () =>{ 
            unsubFreeDay()
            unsubAdvance()
        }
    }, [])

    return (
        <div className={st.container}>
            {
                freeDayFetchState === REQ_FS.FETCHING ? 
                    <div className={st.modulePending}>
                        <Spinner/>
                    </div>
                : freeDayFetchState === REQ_FS.PENDING_REQUEST ? 
                    <PendingRequest 
                        title ={REQ_TYPES.FREE_DAY}
                        data={freeDayReq} 
                        deleteReq={()=>handleDelete(REQ_TYPES.FREE_DAY)}
                    />
                :
                    <FreeDay send={(data)=>handleSend(data)}/>
            }   
            {
                advanceFetchState === REQ_FS.FETCHING ? 
                    <div className={st.modulePending}>
                        <Spinner/>
                    </div>
                : advanceFetchState === REQ_FS.PENDING_REQUEST ? 
                    <PendingRequest 
                        title ={REQ_TYPES.SALARY_ADVANCE}
                        data={advanceReq} 
                        deleteReq={()=>handleDelete(REQ_TYPES.SALARY_ADVANCE)}
                    />
                :
                    <Advance send={(data)=>handleSend(data)}/>
            }   
        </div>
    )
}

export default MakeRequests