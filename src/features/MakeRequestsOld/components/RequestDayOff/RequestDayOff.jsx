import React,{useState} from 'react'
import REQ_TYPES from '../../../../utils/enums/requestTypes'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import Textarea from '../../../../components/Inputs/Textarea/Textarea'
import DateInput from '../../../../components/Inputs/DateInput/DateInput'
import{Button, VARIANTS} from '../../../../components/Button/Button'
import st from './RequestDayOff.module.css'


 
const CrearSolicitud = ({setRequest}) => {
    const [reason, setReason] = useState('')
    const [requestedDate, setRequestedDate] = useState('')

    const handleDate = (value) => {
        const localTimeDate = value.replace(/-/g, '/')
        setRequestedDate(new Date(localTimeDate))
    }

    const handleSend = () => {
        if(reason === '' || requestedDate === ''){
            alert('Por favor, introduzca fecha y motivo.')
        }
        else{
            setRequest({
                reason, 
                date: new Date(), 
                requestedDate: requestedDate,
                requestType: REQ_TYPES.FREE_DAY
            })
        }
    }

  return ( 
    <DropdownBox title={'Solicitar Día Libre'}>
        <Textarea placeholder={'motivo...'} change={(value)=>setReason(value)}/>
        <div className={st.inferiorContainer}>
            <DateInput change={(value)=> handleDate(value)}/>
            <div className={st.buttonContainer}>
                <Button text={'Solicitar'} variant={VARIANTS.PRIMARY} click={handleSend}/>
            </div>
        </div>
    </DropdownBox>
  )
}

export default CrearSolicitud