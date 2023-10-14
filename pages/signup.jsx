import React,{useEffect} from "react"
import useAuth from "../src/hooks/useAuth"
import { useRouter } from 'next/navigation'
import Signup from "../src/features/SignUp/Signup";
import Spinner from "../src/components/Spinner/Spinner";
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
                <Signup/>
            : 
                <div className='spinnerContainer'>
                    <Spinner/>
                </div>
        }
    </div>
  )
}
