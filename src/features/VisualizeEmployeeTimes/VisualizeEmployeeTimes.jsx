import React,{useState,useEffect} from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import Column from './components/Column/Column'
import TT from '../../utils/enums/TimeTypes'
import st from './VisualizeEmployeeTimes.module.css'
import FS from '../../utils/enums/fetchStates'

const empEntryTimes = [
    {date:'August 19, 2023 19:19:30', location:'loc'},
    {date:'August 19, 2023 19:17:32', location:'loc'},
    {date:'August 19, 2023 19:14:35', location:'loc'},
]
const empExitTimes = [
    {date:'August 19, 2023 23:19:30', location:'loc'},
    {date:'August 19, 2023 23:17:32', location:'loc'},
    {date:'August 19, 2023 23:14:35', location:'loc'},
]
const ListaEmpleados = [
    {username: 'juan', id:'idFirebase'},
    {username: 'pepe', id:'idFirebase'},
    {username: 'jose', id:'idFirebase'},
    {username: 'santiago', id:'idFirebase'},
    {username: 'maria', id:'idFirebase'}
]
//al iniciar trae una lista con todos los empleados y se la pasa a la
//barra de busqueda, alli se selecciona uno y se traen los datos de ese empleado

const VisualizeEmployeeTimes = () => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [employee, setEmployee] = useState(null)
    const [times, setTimes] = useState(null)
    
  return (
    <div className={st.container}>
        <div className={st.box}>
        {/* <SearchBar /> */}
        {
            fetchState === FS.SUCSESS ?
            <div className={st.table}>
                <Column columnType={TT.ENTRY} data={times.empEntryTimes}/>
                <Column columnType={TT.EXIT} data={times.empExitTimes}/>
            </div>
            :fetchState === FS.ERROR ?
            <div>

            </div>
            : null
                
        }
        </div>
    </div>
  )
}

export default VisualizeEmployeeTimes