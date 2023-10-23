import {auth, db} from '../../../../services/firebase/firebaseConfig'
import {signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// estas acciones necesitan ser migradas al backend en un futuro

const login = async ({email, password})=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
        return {sucsess: 'sucsess'}
    } 
    catch (error) {
        return {error}
    }
}

const signup = async ({email, password, username})=>{
    try{
       const userCredential = await createUserWithEmailAndPassword(auth, email, password)
       await createUserDocument(userCredential.user.uid, username)
       return {sucsess: 'sucsess'}
    }
    catch (error){
        return {error}
    }
}
const createUserDocument = async (uid, username) => {
    const user = {username}
    await setDoc(doc(db, 'nuevos', uid), user);
}

export {login, signup}