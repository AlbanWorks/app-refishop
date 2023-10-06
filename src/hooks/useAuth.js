import {useEffect,useState} from 'react';
import FETCH_STATES from '../utils/enums/fetchStates'
//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from '../services/firebase/firebaseConfig'

const userData = {
    profile_picture: '/profile.jpg',
    username: 'Juancito',
    role: 'admin'
}

const useAuth = ()=>{

    const [User, setUser] = useState(userData)
    const [fetchState, setfetchState] = useState(FETCH_STATES.SUCSESS)

    /*useEffect(() => { 
      let suscribed = true;
        const unsuscribe =onAuthStateChanged(auth, user => {
          if(suscribed){
            setUser(user)
            console.log(user)
        }
        })
        return () => {
            unsuscribe()
            suscribed = false;
        }
      }, [])*/
    

      return {fetchState,User}
      
    }

    export default useAuth