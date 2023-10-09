import React,{useState} from 'react'
import BasicInput from '../../components/Inputs/BasicInput/BasicInput'
import {Button,VARIANTS} from '../../components/Button/Button'
import st from './Signup.module.css'
import {auth, db} from '../../services/firebase/firebaseConfig'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'next/navigation'
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const signup = async (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           createUserDocument(userCredential.user.uid)
        })
        .catch((error) => {
          alert(error)//pulir
        });
    }
    const createUserDocument = async (uid) => {
        const user = {
            username
        }
        try {
            await setDoc(doc(db, 'nuevos', uid), user);
        } 
        catch (error) {
            alert(error)//pulir
        }
    }

  return (
    <div className={st.container}>
        <form className={st.form}>
            <div className={st.inputContainer}>
                <BasicInput placeholder={'nombre'} inputType={'text'} change={(value)=>setUsername(value)}/>
            </div>
            <div className={st.inputContainer}>
                <BasicInput placeholder={'email'} inputType={'text'} change={(value)=>setEmail(value)}/>
            </div>
            <div className={st.inputContainer}>
                <BasicInput placeholder={'contraseña'} inputType={'password'} change={(value)=> setPassword(value)}/>
            </div>
            <div className={st.buttonContainer}>
                <Button text={'Crear Cuenta'} variant={VARIANTS.PRIMARY} click={(e)=>signup(e)}/>
            </div>
        </form>
        <div className={st.extButtonContainer}>
                <Button text={'Iniciar Sesión'} variant={VARIANTS.SECONDARY} click={(e)=>router.push('/login')}/>
        </div>
    </div>
  )
   
}

export default Signup