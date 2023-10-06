import React from 'react'
import st from './Request.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import { Button, VARIANTS } from '../../../../components/Button/Button'
import REQ_TYPES from '../../../../utils/enums/requestTypes'

const formatFreeDay = (request) => {
    const msj = `El día ${parseDate(request.origin_date)}
                ${request.employee} solicitó un día libre para el ${parseDate(request.requested_date)} 
                debido a: ${request.reason}`
    return msj
}
const formatAdvance = (request) => {
    const msj = `El día ${parseDate(request.origin_date)}
                ${request.employee} solicitó un adelanto de sueldo de $${request.amount}
                para el ${parseDate(request.requested_date)} 
                debido a: ${request.reason}`
    return msj
}
const parseDate = (dateString) => {
    const result1 = new Date(dateString).toLocaleDateString('en-GB');
    return result1
}

const Request = ({request}) => {

  return (
    <div className={st.container}>
        <DropdownBox 
            title={request.req_type === REQ_TYPES.FREE_DAY ? 'Día Libre' : 'Adelanto'} 
            state={request.employee}
        >
            {
                request.req_type === REQ_TYPES.FREE_DAY ?
                    <p className={st.requestBody}>{formatFreeDay(request)}</p>
                :
                    <p className={st.requestBody}>{formatAdvance(request)}</p>
            }
            <div className={st.inferiorModule}>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Denegar'} 
                        variant={VARIANTS.NEGATIVE} 
                        click={()=>{}}
                    />
                </div>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Aceptar'} 
                        variant={VARIANTS.POSSITIVE} 
                        click={()=>{}}
                    />
                </div>
            </div>
        </DropdownBox>
    </div>
  )
}

export default Request