import React from 'react'
import st from './DateInput.module.css'
const DateInput = ({change}) => {
  return (
    <input type="date" onChange={(e)=>change(e.target.value)}/>
  )
}

export default DateInput