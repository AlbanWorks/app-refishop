import React from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import Textarea from '../../../../components/Inputs/Textarea/Textarea'
import DateInput from '../../../../components/Inputs/DateInput/DateInput'
import{Button, VARIANTS} from '../../../../components/Button/Button'
import st from './RequestDayOff.module.css'
const CrearSolicitud = () => {
  return (
    <DropdownBox title={'Solicitar Día Libre'}>
        <Textarea placeholder={'motivo...'} change={()=>{}}/>
        <div className={st.inferiorContainer}>
            <DateInput/>
            <div className={st.buttonContainer}>
                <Button text={'Solicitar'} variant={VARIANTS.PRIMARY} click={()=>{}}/>
            </div>
        </div>
    </DropdownBox>
  )
}

export default CrearSolicitud