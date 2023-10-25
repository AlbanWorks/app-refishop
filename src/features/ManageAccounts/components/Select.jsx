import React from 'react'
import st from '../ManageAccounts.module.css'

const Select = ({action, objectToMap}) => {
  return (
    <select className={st.select} onChange={(e)=>action(e.target.value)}>
        <option value={''} disabled selected hidden>Elegir</option>
        {
            Object.values(objectToMap).map((item, index)=>
                <option key={index} value={item}>{item}</option>
            )
        }
    </select>
  )
}

export default Select

