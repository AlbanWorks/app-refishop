import { db } from "../../../../services/firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";

const sendReport = async (data) => {
    const report = {
        username: data.username,
        userid: data.userid,
        timestamp: data.timestamp,
        debit: data.debit,
        credit: data.credit,
        transfer: data.transfer,
        closes: data.closes
    }
    try{
        const sendReport = await addDoc(collection(db, 'reportes'), report);
        return{error:false}
    }
    catch(err){
        return{error:err}
    }
}

export default sendReport