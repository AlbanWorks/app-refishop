import React from 'react'
import {Button, VARIANTS} from '../../components/Button/Button'
import st from './CheckInOut.module.css'

export const CheckInOut = () => {
  return (
    <div className={st.container}>
        <div className={st.buttonContainer}>
            <Button text={'Marcar Entrada'} variant={VARIANTS.POSSITIVE} click={()=>{}}/>
        </div>
        <div className={st.buttonContainer}>
            <Button text={'Marcar Salida'} variant={VARIANTS.NEGATIVE} click={()=>{}}/>
        </div>
    </div>
  )
}
