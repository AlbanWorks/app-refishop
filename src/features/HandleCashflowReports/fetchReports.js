import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const fetchReports = async (selectedDate) => {
    try{
        const q = query(collection(db, 'reportes'), where('date', "==", selectedDate));
        const querySnapshot = await getDocs(q);
        let docs =[]
        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        });
        return docs
    }
    catch(error){
        return{error}
    }
}

export default fetchReports