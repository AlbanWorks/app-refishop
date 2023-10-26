import React from 'react'
import st from './BasicInput.module.css'

const BasicInput = ({placeholder, change, inputType, defbalue, Value}) => {
  return (
    <input 
        className={st.input}
        type={inputType} 
        placeholder={placeholder} 
        defaultValue={defbalue}
        value={Value}
        onChange={(e)=>change(e.target.value)} 
    />
  )
}  

export default BasicInput