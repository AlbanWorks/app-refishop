import React,{useEffect} from "react"
import useAuth from "../src/hooks/useAuth"
import { useRouter } from 'next/navigation'
import Login from '../src/features/Login/Login'
export default function LoginPage() {

const {loginState, LOGIN_STATE} = useAuth();
const router = useRouter()

useEffect(() => {
    if(loginState === LOGIN_STATE.USER || loginState === LOGIN_STATE.NEW_USER ) router.push('/')
}, [loginState])

return (
    <div className='login'>
        {
            loginState === LOGIN_STATE.NO_USER ?
            <Login/>
            : <div>spinner</div>
        }
    </div>
  )
}