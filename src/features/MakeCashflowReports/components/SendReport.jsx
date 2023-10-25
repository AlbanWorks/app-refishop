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
                    info={'Llene los datos de General y Transferencias antes de enviar el reporte, revise que la informacion esté correcta.'}
                    buttonText={'Enviar'} 
                    nextState={HandleSendReport}                            
                />
            :fetchState === FS.FETCHING ?
                <div className={st.spinnerContainer}>
                    <Spinner/>
                </div>
            :fetchState === FS.ERROR ?
                <ConfirmCard 
                    info={'Ha ocurrido un error, intentelo nuevamente.'}
                    buttonTextt={'Aceptar'} 
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