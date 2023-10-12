import React,{useState} from 'react'
import { Button, VARIANTS } from '../../../../components/Button/Button'
import st from './SendButton.module.css'

const FS = {
    IDLE: 'idle',
    CONFIRM: 'confirm',
    FETCHING: 'fetching',
    SUCSESS: 'sucsess',
    ERROR: 'error'
}

const SendButton = ({data}) => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [error, setError] = useState(null)

    const enviar = async () => {
        setFetchState(FS.FETCHING)
        const query = await sendReport({
            timestamp: new Date(),
            username: data.userData.username,
            userid: data.userData.id,
            debit: data.debit,
            credit: data.credit,
            transfer: data.transfer,
            closes: data.closes 
        })
        if(query.error){
            setFetchState(FS.ERROR)
            setError(query.error)
        }
        else{
            setFetchState(FS.SUCSESS)
        }
    }

  return (
    <div className={st.inferiorModule}>
        {
            fetchState === FS.IDLE ?
                <div className={st.sendButtonContainer}>
                    <Button 
                        text={'Enviar'} 
                        variant={VARIANTS.PRIMARY}
                        click={()=> setFetchState(FS.CONFIRM)}
                    />
                </div>
            :fetchState === FS.CONFIRM ?
                <div className={st.infoContainer}>
                    <p className={st.info}>
                        Antes de enviar asegurese de que la informacion esté correcta, no se podrá cambiar luego.
                    </p>
                    <div className={st.sendButtonContainer}>
                        <Button 
                            text={'Confirmar'} 
                            variant={VARIANTS.PRIMARY}
                            click={enviar}
                        />
                    </div>
                </div>
            : fetchState === FS.FETCHING ?
                <div>spinner</div>
            : fetchState === FS.ERROR ?
                <div className={st.infoContainer}>
                    <p className={st.info}> Ocurrió un error: {error}, intentelo nuevamente o reportelo a un administrador</p>
                    <div className={st.sendButtonContainer}>
                        <Button 
                            text={'Aceptar'} 
                            variant={VARIANTS.PRIMARY}
                            click={()=>setFetchState(FS.IDLE)}
                        />
                    </div>
                </div>
            :
                <div className={st.infoContainer}>
                    <p className={st.info}>El reporte se guardó exitosamente</p>
                        <div className={st.sendButtonContainer}>
                            <Button 
                                text={'Aceptar'} 
                                variant={VARIANTS.PRIMARY}
                                click={()=>setFetchState(FS.IDLE)}
                            />
                        </div>
                </div>
        }
    </div>
  )
}

export default SendButton