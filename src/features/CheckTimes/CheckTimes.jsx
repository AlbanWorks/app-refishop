import React,{useState} from 'react'
import {Button, VARIANTS} from '../../components/Button/Button'
import st from './CheckTimes.module.css'
import useLocation from '../../hooks/useLocation'
import FS from '../../utils/enums/fetchStates'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import Spinner from '../../components/Spinner/Spinner'
import TT from '../../utils/enums/TimeTypes'
import {fetchPrevious, setCheckTime} from './methods/checkTime'

const ERR = {
    ALREADY_EXISTS: 'document already exists',
    OTHER: 'other errors'
}

 const CheckTimes = ({userData}) => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [errorType, setErrorType] = useState(null)
    const {location} = useLocation()

    const handler = async (checkType) => {
        setFetchState(FS.FETCHING)
       const previousCheck = await fetchPrevious(userData, checkType)
       if(previousCheck.error){
            setErrorType(ERR.OTHER)
            setFetchState(FS.ERROR)
            return
       }
       const setCheck = await setCheckTime(userData, location, checkType)
       if(setCheck.error){
            setErrorType(ERR.OTHER)
            setFetchState(FS.ERROR)
            return
       }
       setFetchState(FS.SUCSESS)
    }

  return (
    <div className={st.container}>
        {
            fetchState === FS.IDLE ?
            <>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Marcar Entrada'} 
                        variant={VARIANTS.POSSITIVE} 
                        click={()=>handler(TT.ENTRY)}
                    />
                </div>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Marcar Salida'} 
                        variant={VARIANTS.NEGATIVE} 
                        click={()=>handler(TT.EXIT)}
                    />
                </div>
            </>
            : fetchState === FS.FETCHING ?
                <>
                    <Spinner/>
                    <span className={st.span}>Guardando...</span>
                </>
            : fetchState === FS.ERROR ?
                <ConfirmCard 
                    info={
                        errorType === ERR.ALREADY_EXISTS ?
                            'Ya se marcó un horario para esta fecha.'
                        :errorType === ERR.OTHER ?
                            'Un error ha ocurrido, revise su conexión e intentelo nuevamente. Recuerde tener activada la ubicación y autorizar a la app acceso a ella.'
                        : null
                    }
                    buttonText={'Aceptar'}
                    nextState={()=>setFetchState(FS.IDLE)}
                />
            : fetchState === FS.SUCSESS ? 
                <ConfirmCard 
                    info={'Horario Marcado Correctamente'}
                    buttonText={'Aceptar'}
                    nextState={()=>setFetchState(FS.IDLE)}
                />
            :null
        }
    </div>
  )
}
export default CheckTimes
