import React from 'react'
import Row from '../Row/Row'
import st from './Column.module.css'

 const CT ={
    ENTRY:'entry',
    EXIT: 'exit'
}

const Column = ({columnType , data}) => {
    
  return (
    <div className={st.container}>
        <header 
            className={columnType === CT.ENTRY ? st.headerEntry : st.headerExit}
        >
            {columnType === CT.ENTRY ? 'Horarios de Entrada' : 'Horarios de Salida'}
        </header>
        
       {
         data.map((item, index)=>
            <Row key={index} item={item}/>
         )
       }
    </div>
  )
}

export {Column, CT}