import React,{useState} from 'react'
import Login from './components/Login'
import Register from './components/Register'

const SesionHandler = ({tryLogin, tryRegister}) => {
    const [register, setRegister] = useState(false)

  return (
    <>
        {
            register ? 
                <Register 
                    goToLogin={()=>setRegister(false)}
                    tryRegister = {(data)=> tryRegister(data)}
                />
            :
                <Login 
                    goToRegister={()=>setRegister(true)}
                    tryLogin = {(data)=> tryLogin(data)}
                />
        }
    </>
  )
}

export default SesionHandler