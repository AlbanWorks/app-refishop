import React,{useState} from 'react'
import st from './sesion.module.css'
import { Button, VARIANTS } from '../../../components/Button/Button'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'

const Login = ({goToRegister, tryLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className={st.container}>
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
                click={()=>tryLogin({email, password})}
            />
        </div>
        <span className={st.span}>¿Todavía no tenés cuenta?</span>
        <div className={st.extButtonContainer}>
            <Button 
                text={'Crear Cuenta'} 
                variant={VARIANTS.SECONDARY} 
                click={goToRegister}
            />
        </div>
    </div>
  )
}

export default Login