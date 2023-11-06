import React from 'react'
import DropdownBox from '../../../components/DropdownBox/DropdownBox'
import Textarea from '../../../components/Inputs/Textarea/Textarea'


const Request = ({setMessage}) => {

  return (
    <DropdownBox title={'Nueva Solicitud'}>
        <Textarea 
            placeholder={'solicitud, motivo y fecha solicitada...'} 
            change={(value)=>setMessage(value)}
        />
        <div className={st.inferiorContainer}>
            <div className={st.buttonContainer}>
                <Button 
                    text={'Solicitar'} 
                    variant={VARIANTS.PRIMARY} click={handleSend}
                />
            </div>
        </div>
    </DropdownBox>
  )
}

export default Request