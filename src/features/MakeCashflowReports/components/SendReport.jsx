import React from 'react'
import st from '../MakeCashflowReports.module.css'
import FS from '../../../utils/enums/fetchStates'
import ConfirmCard from '../../../components/ConfirmCard/ConfirmCard'
import Spinner from '../../../components/Spinner/Spinner'

const SendReport = ({fetchState, HandleSendReport, setFetchState, refresh}) => {
  return (
    <div className={st.sendContainer}>
       {
            fetchState === FS.IDLE ?
                <ConfirmCard 
                    info={'Revise que la información sea correcta antes de enviar el reporte.'}
                    buttonText={'Enviar'} 
                    nextState={HandleSendReport}                            
                />
            :fetchState === FS.FETCHING ?
                <div className={st.spinnerContainer}>
                    <Spinner/>
                </div>
            :fetchState === FS.ERROR ?
                <ConfirmCard 
                    info={'Ha ocurrido un error, revise su conexión e intentelo nuevamente.'}
                    buttonText={'Aceptar'} 
                    nextState={()=>setFetchState(FS.IDLE)}                            
                />
            :
                <ConfirmCard 
                    info={'El reporte se subió exitosamente.'}
                    buttonText={'Aceptar'} 
                    nextState={refresh}
                />
        }
    </div>
  )
}

export default SendReport