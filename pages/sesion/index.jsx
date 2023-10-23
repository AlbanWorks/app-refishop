import React,{useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import SesionSpinner from '../../src/features/SesionHandler/components/SesionSpinner'
import SesionHandler from '../../src/features/SesionHandler/index'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../src/services/firebase/firebaseConfig'
import { login, signup } from '../../src/features/SesionHandler/utils/methods/SesionMethods'
import AUTH_STATES from '../../src/features/SesionHandler/utils/enums/AuthStates'
import ErrorHandler from '../../src/features/SesionHandler/components/ErrorHandler'

const SesionPage = () => {
    const [authState, setAuthState] = useState(AUTH_STATES.FETCHING)
    const [error, setError] = useState('')
    const router = useRouter()

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            if(user) router.push('/')
            else setAuthState(AUTH_STATES.NO_USER)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    const tryLogin = async (data) => {
        const loginUser = await login(data)
        if(loginUser.error){
            setError(loginUser.error)
            setAuthState(AUTH_STATES.ERROR)
        }
    }
    const tryRegister = async (data) => {
        const registerUser = await signup(data)
        if(registerUser.error){
            setError(loginUser.error)
            setAuthState(AUTH_STATES.ERROR)
        }
    }
      
  return (
    <>
        {
            authState === AUTH_STATES.FETCHING ?
                <SesionSpinner/>
            : authState === AUTH_STATES.NO_USER ?
                <SesionHandler
                    tryRegister={(data)=>tryRegister(data)}
                    tryLogin={(data)=>tryLogin(data)}
                />
            : authState === AUTH_STATES.ERROR ?
                <ErrorHandler 
                    error={error} 
                    setIdle={()=>setAuthState(AUTH_STATES.NO_USER)}
                />
            :null
        }
    </>
  )
}

export default SesionPage