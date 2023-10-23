import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../services/firebase/firebaseConfig";


const getEmployeeList = async () => {
    try {
        let employeeList = []
        const querySnapshot = await getDocs(collection(db, "empleados"));
        querySnapshot.forEach((doc) => {
            const docData = doc.data()
            if(docData.username && docData.id){
                employeeList.push({username: docData.username, id:docData.id })
            }
        });
        return employeeList
    } 
    catch (error) {
        return{error}
    }
}
export {getEmployeeList}