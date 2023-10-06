import React from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import Textarea from '../../../../components/Inputs/Textarea/Textarea'
import{Button, VARIANTS} from '../../../../components/Button/Button'
import st from './RequestSalaryAdvance.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'

const RequestSalaryAdvance = () => {
  return (
    <DropdownBox title={'Solicitar Adelanto de Sueldo'}>
        <Textarea placeholder={'motivo...'} change={()=>{}}/>
        <div className={st.inferiorContainer}>
            <div className={st.inputAndLabelContainer}>
                <label className={st.label}>monto: $</label>
                <div  className={st.inputContainer}>
                    <BasicInput inputType={'number'} change={()=>{}}/>
                </div>
            </div>
            <div className={st.buttonContainer}>
                <Button text={'Solicitar'} variant={VARIANTS.PRIMARY} click={()=>{}}/>
            </div>
        </div>
    </DropdownBox>
  )
}

export default RequestSalaryAdvance
