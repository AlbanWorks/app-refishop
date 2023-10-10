import React from 'react'
import st from './DebitSection.module.css'
const DebitSection = ({debit, setDebit}) => {
  return (
    <div>
        {  
         debit.map((item, index)=>{
            <div key={index}>{item.monto}</div>
         })
        }
    </div>
  )
}

export default DebitSection