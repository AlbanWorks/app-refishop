import React from 'react'
import ConfirmCard from '../../../components/ConfirmCard/ConfirmCard'
import st from './sesion.module.css'

const ErrorHandler = ({error, setIdle}) => {
  return (
    <div className={st.container}>
        <div className={st.errorContainer}>
            <ConfirmCard 
                info={`Ocurrió un error, revise los datos puestos, su conexión a internet y vuelva a intentarlo, si el error persiste reporte este mensaje: ${error}`}
                buttonText={'Aceptar'} 
                nextState={setIdle}                            
            />
        </div>
    </div>
  )
}

export default ErrorHandler