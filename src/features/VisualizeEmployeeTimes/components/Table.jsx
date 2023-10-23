import React from 'react'
import st from './EmpTimes.module.css'
import FS from '../../../utils/enums/fetchStates'
import Spinner from '../../../components/Spinner/Spinner'
import Column from './Column'
import ConfirmCard from '../../../components/ConfirmCard/ConfirmCard'


const Table = ({times, username, fetchState, setIdle}) => {
  return (
    <>
        {
            fetchState === FS.FETCHING ?
            <div className={st.spinnerContainer}>
                <Spinner/>
            </div>
            :fetchState === FS.SUCSESS ?
                <div className={st.table}>
                    <h3 className={st.employeeName}>{username}</h3>
                    <div className={st.columnSection}>
                        <Column data={times.entradas} title={'Horarios Entrada'}/>
                        <Column data={times.salidas} title={'Horarios Salida'}/>
                    </div>
                </div>
            :fetchState === FS.ERROR ?
                <div className={st.errorContainer}>
                    <ConfirmCard 
                        info={'Un error ha ocurrido al traer la información del usuario, por favor revise su conexión y reintente'}
                        buttonText={'Aceptar'} 
                        nextState={setIdle}                            
                    />
                </div>
            :null
        }
    </>
  )
}

export default Table