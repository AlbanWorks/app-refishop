import React,{useState} from 'react'
import st from '../MakeRequests.module.css'
import Textarea from '../../../components/Inputs/Textarea/Textarea'
import DateInput from '../../../components/Inputs/DateInput/DateInput'
import{Button, VARIANTS} from '../../../components/Button/Button'
import REQ_TYPES from '../../../utils/enums/requestTypes'
import { localTime } from '../methods/requests'

const FreeDay = ({send}) => {
    const [reason, setReason] = useState('')
    const [requestedDate, setRequestedDate] = useState('')

  return (
    <div className={st.module}>
        <h5 className={st.title}>Día Libre</h5>
            <Textarea placeholder={'motivo...'} change={(value)=>setReason(value)}/>
        <div className={st.dateContainer}>
            <label>Fecha Requerida  ➡ </label>
            <DateInput change={(value)=>setRequestedDate(localTime(value))}/>
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Solicitar'} variant={VARIANTS.PRIMARY} 
                click={()=> send({reason, requestedDate, requestType: REQ_TYPES.FREE_DAY})}
            />
        </div>
    </div>
  )
}

export default FreeDay