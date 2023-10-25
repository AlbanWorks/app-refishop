import React from 'react'
import st from './DeleteButton.module.css'
import { Button, VARIANTS } from '../../../../components/Button/Button'


const DeleteButton = ({deleteRow}) => {
  return (
    <div className={st.deleteButtonContainer}>
        <Button text={'x'} variant={VARIANTS.NEGATIVE} click={deleteRow}/>
    </div>
  )
}

export default DeleteButton