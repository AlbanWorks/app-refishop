import React from 'react'
import BasicInput from '../../components/Inputs/BasicInput/BasicInput'
import {Button,VARIANTS} from '../../components/Button/Button'
import st from './Login.module.css'

const Login = () => {
  return (
        <form className={st.form}>
            <div className={st.inputContainer}>
                <BasicInput placeholder={'usuario'} inputType={'text'} change={()=>{}}/>
            </div>
            <div className={st.inputContainer}>
                <BasicInput placeholder={'contraseña'} inputType={'password'} change={()=>{}}/>
            </div>
            <div className={st.buttonContainer}>
                <Button text={'Iniciar Sesión'} variant={VARIANTS.PRIMARY} click={()=>{}}/>
            </div>
        </form>
  )
   
}

export default Login