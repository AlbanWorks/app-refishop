import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const report = {
    username: 'jose maria',
    timestamp: 'dd/mm/aaaa',
    debit:[
        {monto: 123},
        {monto: 123},
        {monto: 123},
        {monto: 123},
    ],
    credit:[
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
    ],
    transfer:[
        {monto: 12312, transf:43434},
        {monto: 12312, transf:43434},
    ],
    closes: {mp:111, payway:123, prisma:21321}
}

const report2 = {
    username: 'pepe',
    timestamp: '15/07/23 17:30',
    debit:[
        {monto: 123},
        {monto: 123},
        {monto: 123},
        {monto: 123},
    ],
    credit:[
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
        {monto:1231, ticket:123123},
    ],
    transfer:[
        {monto: 12312, transf:43434},
        {monto: 12312, transf:43434},
    ],
    closes: {mp:111, payway:123, prisma:21321}
}

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
    //return [report, report2]
}


export default fetchReports