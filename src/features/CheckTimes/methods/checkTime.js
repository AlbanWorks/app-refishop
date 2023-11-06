import TT from "../../../utils/enums/TimeTypes";
import {db} from '../../../services/firebase/firebaseConfig'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import TimeCheck from '../../../utils/classes/TimeCheck'

const fetchPrevious = async (userData, checkType) => {
    try {
        const docRef = doc(db, getRoute(userData,checkType), getDocName())
        const previous = await getDoc(docRef)
        if(previous.exists()) return {exists:'document already exists'}
        return {empty:'no document'}
    } 
    catch (error) {
        return{error}
       
    } // deshabilitada
}

const setCheckTime = async (userData, location, checkType) => {
    try {
        const docRef = doc(db, getRoute(userData,checkType), getDocName())
        const timeCheck = new TimeCheck(new Date(), location, false).plain()
        await setDoc(docRef, timeCheck);
        return{sucsess:'sucsess'}
    } 
    catch (error) {
        return{error}
    }

}

const getRoute = (userData, checkType) => {
    return `empleados/${userData.id}/${ getCollectionName(checkType)}`
}

const getCollectionName = (checkType) => {
    if(checkType === TT.ENTRY) return 'entradas'
    else if (checkType === TT.EXIT) return 'salidas'
    return null
}

const getDocName = () => {
    const date = new Date()  
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    return  `${year}-${month}-${day}`  
}

const getInfo = (location) => {
    const info = {
        location,
        timestamp:new Date()
    }
    return info
}

export {fetchPrevious, setCheckTime}