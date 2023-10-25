import React from 'react'
import { Button, VARIANTS } from '../../../../components/Button/Button'
import st from './AddRowButton.module.css'

const AddRowButton = ({addRow}) => {
  return (
    <div className={st.addRowContainer}>
        <div className={st.addRowButtonContainer}>
                <Button 
                    text={'Agregar Fila'} 
                    variant={VARIANTS.POSSITIVE}
                    click={addRow}
                />
        </div>
    </div>
  )
}

export default AddRowButton