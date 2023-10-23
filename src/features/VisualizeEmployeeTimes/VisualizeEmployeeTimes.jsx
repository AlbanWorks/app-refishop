import React,{useState,useEffect} from 'react'
import SearchBar from './components/SearchBar'
import st from './VisualizeEmployeeTimes.module.css'
import FS from '../../utils/enums/fetchStates'
import Table from './components/Table'
import { getEmployeeList, getTimes } from './utils/methods/EmpTimesMethods'

const VisualizeEmployeeTimes = () => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [employeeList, setEmployeeList] = useState(null)
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [times, setTimes] = useState(null)

    useEffect(() => {
      fetchEmployees()
    }, [])
    
    const fetchEmployees = async() => {
        const employees = await getEmployeeList()
        if(employees.error){
           alert('error al conectarse al servidor, por favor revise su conexión y reintente')
        }
        else{
            setEmployeeList(employees)
        }
    }

    const fetchTimes = async(employee) => {
        setFetchState(FS.FETCHING)
        const dbtimes = await getTimes(employee.id)
        if(dbtimes.error){
            setFetchState(FS.ERROR)
            
        }
        else{
            setTimes(dbtimes)
            setSelectedEmployee(employee.username)
            setFetchState(FS.SUCSESS)
        }
    }
    
  return (
    <div className={st.container}>
        <div className={st.box}>
            <SearchBar 
                employeeList={employeeList}
                fetchTimes={(employee)=>fetchTimes(employee)}
            /> 
            <Table 
                times={times} 
                fetchState={fetchState}
                username={selectedEmployee}
                setIdle ={()=>setFetchState(FS.IDLE)}
            />
        </div>
    </div>
  )
}

export default VisualizeEmployeeTimes