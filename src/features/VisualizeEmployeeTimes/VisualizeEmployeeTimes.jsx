import React,{useState} from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import {Column, CT} from './components/Column/Column'
import st from './VisualizeEmployeeTimes.module.css'

const FS = {
    WAITING:'waiting',
    SUCSESS:'sucsess',
    ERROR:'error'
}
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
    const [fetchState, setFetchState] = useState(FS.SUCSESS)
    const [employeeList, setEmployeeList] = useState(ListaEmpleados)
    const [times, setTimes] = useState({empEntryTimes, empExitTimes})
    
  return (
    <div className={st.container}>
        <div className={st.box}>
            <SearchBar list={employeeList} select={()=>{}}/>
        {
            fetchState === FS.SUCSESS ?
            <div className={st.table}>
                <Column columnType={CT.ENTRY} data={times.empEntryTimes}/>
                <Column columnType={CT.EXIT} data={times.empExitTimes}/>
            </div>
            :fetchState === FS.ERROR ?
            <div>error</div>
            :null
        }
        </div>
    </div>
  )
}

export default VisualizeEmployeeTimes