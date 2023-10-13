import { db } from "../../../../services/firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";

const sendReport = async ({debit,credit,transfer,closes,userData}) => {
    const report = {
        timestamp: new Date(),
        username: userData.username,
        userid: userData.id,
        debit,
        credit,
        transfer,
        closes
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