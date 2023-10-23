import React,{useState} from 'react'
import st from './sesion.module.css'
import { Button, VARIANTS } from '../../../components/Button/Button'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'

const Register = ({goToLogin, tryRegister}) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className={st.container}>
        <div className={st.inputContainer}>
            <BasicInput 
                placeholder={'nombre de usuario'} 
                inputType={'text'} 
                change={(value)=>setUsername(value)}
            />
        </div>
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
                text={'Crear Cuenta'} 
                variant={VARIANTS.PRIMARY} 
                click={()=>tryRegister({email, password, username})}
            />
        </div>
        <span className={st.span}>¿Ya tenés Cuenta?</span>
        <div className={st.extButtonContainer}>
            <Button 
                text={'Iniciar Sesión'} 
                variant={VARIANTS.SECONDARY} 
                click={goToLogin}
            />
        </div>
    </div>
  )
}

export default Register