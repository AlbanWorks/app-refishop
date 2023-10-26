import React from 'react'
import st from '../ManageStores.module.css'
import FS from '../../../utils/enums/fetchStates'
import ConfirmCard from '../../../components/ConfirmCard/ConfirmCard'
import Spinner from '../../../components/Spinner/Spinner'

const SaveChanges = ({updateState, setUpdateState, updateStores}) => {
  return (
    <div className={st.saveChanges}>
        {
            updateState === FS.IDLE ?
                <ConfirmCard 
                    info={'Guardar cambios realizados.'}
                    buttonText={'Guardar'} 
                    nextState={()=>updateStores()}                            
                />
            :updateState === FS.FETCHING ?
                <Spinner/>
            :updateState === FS.ERROR ?
                <ConfirmCard 
                    info={'Un error ha ocurrido, revise su conexión e inténtelo nuevamente.'}
                    buttonText={'Aceptar'} 
                    nextState={()=>setUpdateState(FS.IDLE)}                            
                />
            :updateState == FS.SUCSESS ?
                <ConfirmCard 
                    info={'Cambios guardados exitosamente.'}
                    buttonText={'Aceptar'} 
                    nextState={()=>setUpdateState(FS.IDLE)}                            
                />
            :null

        }
    </div>
  )
}

export default SaveChanges