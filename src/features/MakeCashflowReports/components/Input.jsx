import React from 'react'
import st from '../MakeCashflowReports.module.css'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'

const Input = ({title, handle}) => {
  return (
    <div className={st.inputComponentContainer} >
        <label className={st.label} >{title}</label>
        <div className={st.inputContainer}>
            <BasicInput 
                inputType={'number'}
                change={(value)=>handle(value)}/>
        </div>
    </div>
  )
}

export default Input