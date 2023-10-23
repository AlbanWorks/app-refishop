import React from 'react'
import Row from '../Row/Row'
import TT from '../../../../utils/enums/TimeTypes'
import st from './Column.module.css'


const Column = ({columnType , data}) => {
    
  return (
    <div className={st.container}>
        <header 
            className={columnType === TT.ENTRY ? st.headerEntry : st.headerExit}
        >
            {columnType === TT.ENTRY ? 'Horarios de Entrada' : 'Horarios de Salida'}
        </header>
        
       {
         data.map((item, index)=>
            <Row key={index} item={item}/>
         )
       }
    </div>
  )
}

export default Column