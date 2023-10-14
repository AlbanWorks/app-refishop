import React,{useState} from 'react'
import BasicInput from '../../components/Inputs/BasicInput/BasicInput'
import {Button,VARIANTS} from '../../components/Button/Button'
import st from './Login.module.css'
import {auth} from '../../services/firebase/firebaseConfig'
import {signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'next/navigation'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const login = async (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            alert('Ocurrió un error al intentar iniciar sesión, por favor revise sus datos e intentelo nuevamente, si el error persiste notifiquelo a un administrador o a soporte técnico')
        });
    }

  return (
    <div className={st.container}>
        <form className={st.form}>
            <div className={st.inputContainer}>
                <BasicInput 
                    placeholder={'email'} 
                    inputType={'text'} 
                    change={(value)=>setEmail(value)}
                />
            </div>
            <div className={st.inputContainer}>
                <BasicInput 
                    placeholder={'contraseña'} 
                    inputType={'password'} 
                    change={(value)=> setPassword(value)}
                />
            </div>
            <div className={st.buttonContainer}>
                <Button 
                    text={'Iniciar Sesión'} 
                    variant={VARIANTS.PRIMARY} 
                    click={(e)=>login(e)}
                />
            </div>
        </form>
        <div className={st.extButtonContainer}>
                <Button 
                    text={'Crear Cuenta'} 
                    variant={VARIANTS.SECONDARY} 
                    click={()=>router.push('/signup')}
                />
        </div>
    </div>
  )
   
}

export default Login