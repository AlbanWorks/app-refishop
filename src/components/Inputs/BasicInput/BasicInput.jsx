import React from 'react'
import st from './BasicInput.module.css'

const BasicInput = ({placeholder, change, inputType}) => {
  return (
    <input 
        className={st.input}
        type={inputType} 
        placeholder={placeholder} 
        onChange={(e)=>change(e.target.value)} 
    />
  )
}  

export default BasicInput