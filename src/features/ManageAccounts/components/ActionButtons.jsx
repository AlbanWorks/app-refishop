import React from 'react'
import st from '../ManageAccounts.module.css'
import FS from '../../../utils/enums/fetchStates'
import Spinner from '../../../components/Spinner/Spinner'
import { Button, VARIANTS } from '../../../components/Button/Button'
import ConfirmCard from '../../../components/ConfirmCard/ConfirmCard'

const ActionButtons = ({fetchState, deleteAccount, updateAccount, handleSucsess, handleError}) => {
  return (
    <div className={st.inferiorModule}>
        {
            fetchState === FS.IDLE ?
                <>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Eliminar'} 
                            variant={VARIANTS.NEGATIVE}
                            click={deleteAccount}
                        />
                    </div>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Guardar'} 
                            variant={VARIANTS.PRIMARY}
                            click={updateAccount}
                        />
                    </div>
                </>
            :fetchState === FS.FETCHING ?
                <div className={st.actionButtonsSpinnerContainer}>
                    <Spinner/>
                </div>
            :fetchState === FS.ERROR ?
                <ConfirmCard 
                    info={'Un error ha ocurrido, revise su conexión a internet y vuelva a intentarlo'}
                    buttonText={'Aceptar'}
                    nextState={handleError}
                />
            :fetchState === FS.SUCSESS ?
                <ConfirmCard 
                    info={'Cambios guardados exitosamente'}
                    buttonText={'Aceptar'}
                    nextState={handleSucsess}
                />
            :null
        }
    </div>
  )
}

export default ActionButtons