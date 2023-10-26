import {db} from '../../../../services/firebase/firebaseConfig'
import { doc, setDoc, deleteDoc, getDocs,getDoc, collection } from "firebase/firestore";
import COL from '../enums/collections';

const getStoresFromFB = async () => {
    try {
        const docSnap = await getDoc(doc(db, 'organizacion', 'negocios'))
        const stores = docSnap.data().storeArray 
        return stores.filter((storeName) => storeName !== '');

    } 
    catch (error) {
        return{error}
    }
}


const getAccounts = async() => {
    try{
        const employeeSnapshot = await getDocs(collection(db, COL.EMPLEADOS));
        const newSnapshot = await getDocs(collection(db, COL.NUEVOS));
        let employees=[]
        let newAccounts = []
        employeeSnapshot.forEach((doc) => {
            let user = doc.data()
            user.id = doc.id
            employees.push(user)
        });
        newSnapshot.forEach((doc) => {
            let user = doc.data()
            user.id = doc.id
            newAccounts.push(user)
        });
        return {employees, newAccounts}
    }
    catch(error){
        return{error}
    }
}

const acceptUser = async (employee, newRole, newStore) => {
    try {
        await setDoc(doc(db, COL.EMPLEADOS, employee.id),{
            username:employee.username,
            role: newRole,
            store: newStore,
            profile_picture: '/profile.jpg',
        });
        await deleteDoc(doc(db, COL.NUEVOS, employee.id));
        return{sucsess:'sucsess'}
    } 
    catch (error) {
        return{error}
    }
}

const updateAccount = async (empDoc, role, store) => {
    const fbDoc = parseDoc(empDoc, role, store)
    try {
        await setDoc(doc(db, COL.EMPLEADOS, empDoc.id), fbDoc )
        return{sucsess:'sucsess'}
    } 
    catch (error) {
        return{error}
    }
}

const parseDoc = (empDoc, role, store) => {
    return{
        username: empDoc.username,
        role: invalid(role) ? empDoc.role : role,
        store: invalid(store) ? empDoc.store : store,
        profile_picture: empDoc.profile_picture
    }
}

const invalid = (field) => {
    return (field === '' || field === null)
}

const deleteAccount = async (employee, collection) => {
    /*  
    Para eliminar el usuario de firebase auth se necesitan cloud functions
    o firebase admin 
    */
    try {
        await deleteDoc(doc(db, collection, employee.id))
        return{sucsess:'sucsess'}
    } 
    catch (error) {
        return{error}
    }
}

export {getAccounts,updateAccount,acceptUser, deleteAccount, getStoresFromFB}