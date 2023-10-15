import { db } from "../../../../services/firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";

const sendReport = async ({debit,credit,transfer,closes,userData}) => {
    const report = {
        timestamp: new Date(),
        date: parseDate(),
        username: userData.username,
        userid: userData.id,
        debit : removeIds(debit),
        credit: removeIds(credit),
        transfer: removeIds(transfer),
        closes: removeIds([closes])
    }
    try{
        const sendReport = await addDoc(collection(db, 'reportes'), report);
        return{error:false}
    }
    catch(err){
        return{error:err}
    }
}

const parseDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    return  `${year}/${month}/${day}`  
}

const removeIds = (arrayOfObjects) => {
    let arrayObObjectsClone = [...arrayOfObjects]
    arrayObObjectsClone.forEach(obj => delete obj.id);
    return arrayObObjectsClone
}

export default sendReport