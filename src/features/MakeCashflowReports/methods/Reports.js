import { db } from "../../../services/firebase/firebaseConfig";
import { collection, addDoc} from "firebase/firestore";

const sendReport = async ({general,transfer,userData,location}) => {
    const report = {
        timestamp: new Date(),
        date: parseDate(),
        username: userData.username,
        store: userData.store,
        userid: userData.id,
        transfer: removeIds(transfer),
        general,
        location
    }
    try{
        await addDoc(collection(db, 'reportes'), report);
        return{sucsess:'sucsess'}
    }
    catch(error){
        return{error}
    }
}

const parseDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const rawmonth = date.getMonth() + 1;
    const rawday = date.getDate()
    let day;
    let month;
    if(rawday < 10) day = `0${rawday}`
    else day = rawday
    if(rawmonth < 10) month = `0${rawmonth}`
    else month = rawmonth
    return  `${year}/${month}/${day}`   
}

const removeIds = (arrayOfObjects) => {
    let arrayObObjectsClone = [...arrayOfObjects]
    arrayObObjectsClone.forEach(obj => delete obj.id);
    return arrayObObjectsClone
}

const checkEmptyFields = ({general, transfer}) => {
    let emptyTransferItems = false;
    for (const property in general) {
        if (nullOrEmpty(general[property])) emptyTransferItems = true 
    }
    transfer.forEach(item => {
        if(nullOrEmpty(item.monto) || nullOrEmpty(item.transf)) emptyTransferItems = true;
    });
    if(emptyTransferItems) return {error: 'Ningún campo debe estar vacío al enviar el reporte, rellene con ceros o borre si es posible los campos vacíos.'}
    return {sucsess: 'sucsess'}
}

const nullOrEmpty = (field) => {
    return (field === null || field === '' || isNaN(field))
}

const emptyGeneral = () => {
    return{
        cash:'',
        fuddo:'',
        cinagos:'',
        debit:'',
        credit:'',
        prisma:'',
        payway:'',
        mercadopago:'',
        qr:''
    }
}

export {sendReport, checkEmptyFields, emptyGeneral}