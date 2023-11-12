import {db} from '../../../services/firebase/firebaseConfig'
import { getDocs, collection, updateDoc, doc} from "firebase/firestore";
import REQ_TYPES from '../../../utils/enums/requestTypes';


const fetchRequests = async () => {
    try{
        const docs = []
        const querySnapshot = await getDocs(collection(db,  `solicitudes/${REQ_TYPES.FREE_DAY}/todas`));
        addRequests(querySnapshot, docs, REQ_TYPES.FREE_DAY)
        const querySnapshot2 = await getDocs(collection(db,  `solicitudes/${REQ_TYPES.SALARY_ADVANCE}/todas`));
        addRequests(querySnapshot2, docs, REQ_TYPES.SALARY_ADVANCE)
        return{docs}
    }
    catch(error){
        console.log(error)
        return{error}
    }
}

const addRequests = (docArray, docs, reqType) => {
    docArray.forEach((doc) => {
        let request = doc.data()
        request.id = doc.id
        request.key = doc.id + reqType
        request.reqType = reqType
        if(request.state === 'pending')docs.push(request)
    });
}

const updateRequestState = async (state, reqType, id) => {
    try{
        await updateDoc( doc(db, `solicitudes/${reqType}/todas`, id), {state})
        return{sucsess:'sucsess'}
    }
    catch(error){
        console.log(error)
        return{error}
    }
}
export {fetchRequests, updateRequestState}