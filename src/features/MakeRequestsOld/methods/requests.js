import { db } from "../../../services/firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";
import REQ_STATES from "../../../utils/enums/requestStates";

const sendRequest = async (id,request) => {
    try{
        await addDoc(collection(db, `empleados/${id}/dia_libre`), format(request));
        return{sucsess:'sucsess'}
    }
    catch(error){
        return{error}
    }
}
const format =(request) => {
    return{
        date: request.date,
        requested_date: request.requestedDate,
        reason: request.reason,
    }
}

const getRequest = async(id) => {
    try{
        const docSnap = await getDoc(doc(db, `empleados/${id}`, 'dia_libre'));
        if (docSnap.exists())  return {request: setReqState(docSnap.data())}
        else return {empty:'empty'}
    }
    catch(error){
        return{error}
    }
}

const setReqState = (request) => {
    request.state = REQ_STATES.PENDING
    return request
}

export {sendRequest, getRequest}



