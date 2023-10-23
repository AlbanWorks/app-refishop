import React,{useState} from 'react'
import {Button, VARIANTS} from '../../../components/Button/Button'
import st from './EmpTimes.module.css'
import Spinner from '../../../components/Spinner/Spinner'

const SearchBar = ({employeeList, fetchTimes}) => {
    const [emp, setEmp] = useState(null)

    const handleSend = () => {
        if(emp) fetchTimes(emp)
    }
    const selectEmployee = (index) => {
        setEmp(employeeList[index])
    }
    
  return (
    <div className={st.container}>
        {
            employeeList ?
            <select 
                className={st.select}
                onChange={(e)=>setEmp(employeeList[e.target.value])}
            >
                  <option value={0} disabled selected hidden>Escoger</option>
                {
                    employeeList.map((employee, index)=>
                        <option 
                            key={index} 
                            value={index}
                        >
                            {employee.username}
                        </option>
                    )
                }        
            </select>
        : 
            <div>
                <Spinner/>
            </div>
        }
        <div className={st.buttonContainer}>
            <Button 
                text={'Buscar'} 
                variant={VARIANTS.PRIMARY} 
                click={handleSend}
            />
        </div>
    </div>
  )
}

export default SearchBar