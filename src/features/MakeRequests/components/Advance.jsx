import React,{useState} from 'react'
import st from '../MakeRequests.module.css'
import Textarea from '../../../components/Inputs/Textarea/Textarea'
import DateInput from '../../../components/Inputs/DateInput/DateInput'
import{Button, VARIANTS} from '../../../components/Button/Button'
import REQ_TYPES from '../../../utils/enums/requestTypes'
import { localTime } from '../methods/requests'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'

const Advance = ({send}) => {
    const [reason, setReason] = useState('')
    const [requestedDate, setRequestedDate] = useState('')
    const [amount, setAmount] = useState(0)

  return (
    <div className={st.module}>
        <h5 className={st.title}>Adelanto de Sueldo</h5>
        <Textarea placeholder={'motivo...'} change={(value)=>setReason(value)}/>
        <div className={st.dateContainer}>
            <label className={st.label}>Fecha Requerida  ➡ </label>
            <DateInput change={(value)=>setRequestedDate(localTime(value))}/>
        </div>
        <div className={st.inputContainer}>
            <BasicInput 
                placeholder={'Cantidad Pretendida'} 
                inputType={'number'} 
                change={(value)=>setAmount( parseFloat(value))} 
            />
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Solicitar'} variant={VARIANTS.PRIMARY} 
                click={()=> send({reason, requestedDate, amount, requestType: REQ_TYPES.SALARY_ADVANCE})}
            />
        </div>
    </div>
  )
}

export default Advance