import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

const getStoresFromFB = async () => {
    try {
        const docSnap = await getDoc(doc(db, 'organizacion', 'negocios'))
        return docSnap.data().storeArray 
    } 
    catch (error) {
        return{error}
    }
}
const setStoresInFB = async (storeArray) => {
    try {
        await setDoc(doc(db, 'organizacion', 'negocios'),{storeArray})
        return{sucsess: 'sucsess'}
    } 
    catch (error) {
        return{error}
    }
}

export {getStoresFromFB, setStoresInFB}

