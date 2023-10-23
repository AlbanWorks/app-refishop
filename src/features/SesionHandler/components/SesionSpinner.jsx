import React from 'react'
import Spinner from '../../../components/Spinner/Spinner'
import st from './sesion.module.css'

const SesionSpinner = () => {
  return (
    <div className={st.container}>
        <Spinner/>
    </div>
  )
}

export default SesionSpinner