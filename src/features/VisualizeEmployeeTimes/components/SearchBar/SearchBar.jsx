import React,{useState} from 'react'
import {Button, VARIANTS} from '../../../../components/Button/Button'
import st from './SearchBar.module.css'

const SearchBar = ({list, select}) => {
    const [employees, setEmployees] = useState(null)

  return (
    <div className={st.container}>
        <select 
            className={st.select}
            
        >
            {
                list.map((employee, index)=>
                    <option key={index} value={employee.id}>{employee.username}</option>
                )
            }
                
                
        </select>
        <div className={st.buttonContainer}>
            <Button text={'Buscar'} variant={VARIANTS.PRIMARY} click={()=>{}}/>
        </div>
    </div>
  )
}

export default SearchBar