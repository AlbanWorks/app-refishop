import React,{useState,useEffect} from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import st from './VisualizeEmployeeTimes.module.css'
import FS from '../../utils/enums/fetchStates'
import Table from './components/Table'
import { getEmployeeList } from './utils/methods/EmpTimesMethods'

const VisualizeEmployeeTimes = () => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [employeeList, setEmployeeList] = useState(null)
    const [times, setTimes] = useState(null)

    useEffect(() => {
      fetchEmployees()
    }, [])
    
    const fetchEmployees = async() => {
        const employees = await getEmployeeList()
        if(employees.error){
           alert(employees.error)
        }
        else{
            setEmployeeList(employees)
        }
    }

    const fetchTimes = (id) => {
        console.log(id);
    }
    
  return (
    <div className={st.container}>
        <div className={st.box}>
            <SearchBar 
                employeeList={employeeList}
                fetchTimes={(id)=>fetchTimes(id)}
            /> 
            <Table 
                times={times} 
                fetchState={fetchState}
            />
        </div>
    </div>
  )
}

export default VisualizeEmployeeTimes