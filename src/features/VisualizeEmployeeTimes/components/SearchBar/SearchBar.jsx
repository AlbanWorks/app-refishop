import React,{useState} from 'react'
import {Button, VARIANTS} from '../../../../components/Button/Button'
import st from './SearchBar.module.css'
import Spinner from '../../../../components/Spinner/Spinner'

const SearchBar = ({employeeList, fetchTimes}) => {
    
  return (
    <div className={st.container}>
        {
            employeeList ?
            <select 
                className={st.select}
                onChange={(e)=>fetchTimes(e.target.value)}
            >
                  <option value={''} disabled selected hidden>Escoger</option>
                {
                    employeeList.map((employee, index)=>
                        <option 
                            key={index} 
                            value={employee.id}
                        >
                            {employee.username}
                        </option>
                    )
                }        
            </select>
        : 
            <div className={st.spinnerContainer}>
                <Spinner/>
            </div>
        }
        <div className={st.buttonContainer}>
            <Button 
                text={'Buscar'} 
                variant={VARIANTS.PRIMARY} 
                click={()=>{}}
            />
        </div>
    </div>
  )
}

export default SearchBar