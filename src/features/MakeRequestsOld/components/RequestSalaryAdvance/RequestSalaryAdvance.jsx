import React,{useState} from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import REQ_TYPES from '../../../../utils/enums/requestTypes'
import Textarea from '../../../../components/Inputs/Textarea/Textarea'
import{Button, VARIANTS} from '../../../../components/Button/Button'
import st from './RequestSalaryAdvance.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'
import DateInput from '../../../../components/Inputs/DateInput/DateInput'

const RequestSalaryAdvance = () => {
    const [reason, setReason] = useState('')
    const [requestedDate, setRequestedDate] = useState('')
    const [amount, setAmount] = useState(0)

    const handleDate = (value) => {
        const localTimeDate = value.replace(/-/g, '/')
        setRequestedDate(new Date(localTimeDate))
    }

    const handleSend = () => {
        if(reason === '' || requestedDate === ''){
            alert('Por favor, introduzca fecha, monto y motivo.')
        }
        else{
            setRequest({
                reason, 
                date: new Date(), 
                amount,
                requestedDate: requestedDate,
                requestType: REQ_TYPES.SALARY_ADVANCE
            })
        }
    }

  return (
    <DropdownBox title={'Solicitar Adelanto de Sueldo'}>
        <Textarea placeholder={'motivo...'} change={(value)=>setReason(value)}/>
        <div className={st.inferiorContainer}>
            <div className={st.inputAndLabelContainer}>
                <label className={st.label}>monto: $</label>
                <div  className={st.inputContainer}>
                    <BasicInput inputType={'number'} change={(value)=>setAmount(value)}/>
                </div>
            </div>
            <div className={st.inputAndLabelContainer}>
                <label className={st.label}>fecha:</label>
                <div  className={st.inputContainer}>
                    <DateInput change={(value)=>handleDate(value)}/>
                </div>
            </div>
        </div>
        <div className={st.buttonBar}>
            <div className={st.buttonContainer}>
                    <Button text={'Solicitar'} variant={VARIANTS.PRIMARY} click={handleSend}/>
            </div>
        </div>
    </DropdownBox>
  )
}

export default RequestSalaryAdvance
