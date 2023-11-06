import React from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import{Button, VARIANTS} from '../../../../components/Button/Button'
import REQ_TYPES from '../../../../utils/enums/requestTypes'
import REQ_STATES from '../../../../utils/enums/requestStates'
import st from './PendingRequest.module.css'



const PendingRequest = ({data}) => {
  return (
    <DropdownBox title={'Solicitud Hecha'} state={data.state}>
        {
            data.state === REQ_STATES.PENDING ?
                <p className={st.message}>Tiene una solicitud pendiente, un administrador le responderá pronto</p>
            :data.state === REQ_STATES.DENIED ?
                <p className={st.message}>Su solicitud fue denegada</p>
            :data.state === REQ_STATES.APPROVED ?
                <p className={st.message}>Su solicitud fue aprobada</p>
            :null
        }
        <div className={st.inferiorContainer}>
            <div className={st.buttonContainer}>
                <Button text={'Aceptar'} variant={VARIANTS.PRIMARY} click={()=>{}}/>
            </div>
        </div>
    </DropdownBox>
  )
}

export default PendingRequest