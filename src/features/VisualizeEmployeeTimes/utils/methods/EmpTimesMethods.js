import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../services/firebase/firebaseConfig";


const getEmployeeList = async () => {
    try {
        let employeeList = []
        const querySnapshot = await getDocs(collection(db, 'empleados'));
        querySnapshot.forEach((doc) => {
            const docData = doc.data()
            if(docData.username){
                employeeList.push({username: docData.username, id:doc.id })
            }
        });
        return employeeList
    } 
    catch (error) {
        return{error}
    }
}

const getTimes = async (id) => {
    try {
        let salidas = []
        let entradas = []
        const entradasSnap = await getDocs(collection(db, `empleados/${id}/entradas`));
        entradasSnap.forEach((doc) => {
            entradas.push(doc.data())
        });
        const salidasSnap = await getDocs(collection(db, `empleados/${id}/salidas`));
        salidasSnap.forEach((doc) => {
            salidas.push(doc.data())
        });
        return {entradas, salidas}
    } 
    catch (error) {
        return{error}
    }
}

export {getEmployeeList, getTimes}