import {db} from '../../../services/firebase/firebaseConfig'
import { doc, setDoc, deleteDoc} from "firebase/firestore";
import REQ_TYPES from '../../../utils/enums/requestTypes';


const sendRequest = async (data, userData) => {
    const request = formatRequest(data, userData)
    if(request.formatError) return
    try{
        await setDoc(doc(db, `solicitudes/${data.requestType}/todas`, userData.id), request)
        return{sucsess:'sucsess'}
    }
    catch(error){
        console.log(error)
        return{error}
    }
}

const formatRequest = (data, userData) => {
    let request;
    if(data.requestType === REQ_TYPES.FREE_DAY) request = formatFreeDay(data, userData)
    else request = formatAdvance(data, userData)
    return request
}

const formatFreeDay = ({reason, requestedDate}, userData) => {
    if(reason === '' || requestedDate === ''){
        alert('Por favor, introduzca fecha y motivo.')
        return {formatError:'fe'}
    }
    return{
        reason,
        employee: userData.username,
        requested_date: requestedDate,
        date: new Date(),
        state: 'pending'
    }
}

const formatAdvance = ({reason, requestedDate, amount}, userData) => {
    if(reason === '' || requestedDate === '' || amount === 0 || isNaN(amount)){
        alert('Por favor, introduzca fecha, motivo y cantidad de dinero pretendido.')
        return {formatError:'fe'}
    }
    return{
        reason,
        amount,
        employee: userData.username,
        requested_date: requestedDate,
        date: new Date(),
        state: 'pending'
    }
}

const deleteRequest = async (reqType, id) => {
    try{
        await deleteDoc(doc(db, `solicitudes/${reqType}/todas`, id))
        return{sucsess:'sucsess'}
    }
    catch(error){
        console.log(error)
        return{error}
    }
}

const localTime = (value) => {
    const localTimeDate = value.replace(/-/g, '/')
    return new Date(localTimeDate)
}


export {sendRequest, localTime, deleteRequest}