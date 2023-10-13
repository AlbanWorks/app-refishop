import React from 'react'
import st from './ConfirmCard.module.css'
import { Button, VARIANTS } from '../Button/Button'

const ConfirmCard = ({info, buttonText, nextState}) => {
  return (
    <div className={st.infoContainer}>
        <p className={st.info}>{info}</p>
        <div className={st.sendButtonContainer}>
        <Button 
            text={buttonText} 
            variant={VARIANTS.PRIMARY}
            click={nextState}
        />
    </div>
    </div>
  )
}

export default ConfirmCard