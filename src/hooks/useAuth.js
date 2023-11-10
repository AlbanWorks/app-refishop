import {useEffect,useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase/firebaseConfig'
import { db } from '../services/firebase/firebaseConfig'
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import COL from '../features/ManageAccounts/utils/enums/collections';

const LOGIN_STATE = {
    WAITING: 'waiting',
    USER: 'user',
    NO_USER: 'no_user',
    NEW_USER: 'new_user'
}

const useAuth = ()=>{
 
    const [userData, setUserData] = useState(null)
    const [loginState, setLoginState] = useState(LOGIN_STATE.WAITING)
    const [userID, setUserID] = useState(null)

    useEffect(() => { 
        const unsuscribe = onAuthStateChanged(auth, user => {
            if(user) setUserID(user.uid)  //verifyEmployee(user.uid)
            else setLoginState(LOGIN_STATE.NO_USER)
        })
        return () => unsuscribe() 
      }, [])

    useEffect(() => {
        if(userID){
            const unsub = onSnapshot(doc(db, COL.EMPLEADOS , userID), (doc) => {
                let data = doc.data()
                if( data === undefined){ // cambiar a metodo exists()
                    setLoginState(LOGIN_STATE.NEW_USER)
                } 
                else{
                    data.id = userID 
                    console.log(data)
                    setUserData(data)   
                    setLoginState(LOGIN_STATE.USER)
                } 
            })
            return () => unsub()
        }
    }, [userID])

        return {userData, loginState, LOGIN_STATE}
}

    export default useAuth






