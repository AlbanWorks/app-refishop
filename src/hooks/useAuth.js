import {useEffect,useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../services/firebase/firebaseConfig'
import { db } from '../services/firebase/firebaseConfig'
import { doc, getDoc } from "firebase/firestore"

const LOGIN_STATE = {
    WAITING: 'w',
    USER: 'u',
    NO_USER: 'nu',
    NEW_USER: 'asdasd'
}

const useAuth = ()=>{

    const [userData, setUserData] = useState(null)
    const [loginState, setLoginState] = useState(LOGIN_STATE.WAITING)

    useEffect(() => { 
        let suscribed = true;
        const unsuscribe = onAuthStateChanged(auth, user => {
            if(suscribed){
                if(user) verifyEmployee(user.uid)
                else setLoginState(LOGIN_STATE.NO_USER)
            }
        })
        return () => {
            unsuscribe()
            suscribed = false;
        }
      }, [])

    const verifyEmployee = async (uid) => {
        let docSnapshot = await getDoc(doc(db, 'empleados', uid));
        if(docSnapshot.data() === undefined) setLoginState(LOGIN_STATE.NEW_USER)
        else{
            let Data = docSnapshot.data()
            Data.id = uid
            setUserData(Data)
            setLoginState(LOGIN_STATE.USER)
        }
    }
        return {userData, loginState, LOGIN_STATE}
    }

    export default useAuth






