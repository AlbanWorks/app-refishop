import React from 'react'
import st from '../ManageAccounts.module.css'
import FS from '../../../utils/enums/fetchStates'
import Spinner from '../../../components/Spinner/Spinner'
import { Button, VARIANTS } from '../../../components/Button/Button'


const ActionButtons = ({fetchState, deleteAccount, updateRole}) => {
  return (
    <div className={st.inferiorModule}>
       
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
                            click={updateRole}
                        />
                    </div>
          
    </div>
  )
}

export default ActionButtons