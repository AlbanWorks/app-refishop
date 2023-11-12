import React from 'react'
import st from '../MakeRequests.module.css'
import { Button, VARIANTS } from '../../../components/Button/Button'
import { formatState, formatTitle } from '../methods/formatMessage'

const PendingRequest = ({data, deleteReq, title}) => {
   
  return (
    <div className={st.module}>
        <h5 className={st.title}>{formatTitle(title)}</h5>
        <p className={st.message}>{formatState(data.state)}</p>
       {
         data.state === 'denied' || data.state == 'accepted' ?
            <div className={st.buttonContainer}>
                <Button 
                    text={'Aceptar'} variant={VARIANTS.PRIMARY} 
                    click={deleteReq}
                />
            </div>
            :null
       }
    </div>
  )
}

export default PendingRequest