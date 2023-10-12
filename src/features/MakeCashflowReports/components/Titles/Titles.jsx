import React from 'react'
import st from './Titles.module.css'

const Titles = ({title, columns}) => {
  return (
    <>
        <h4 className={st.title}>{title}</h4>
        <div  className={st.columnTitles}>
            {
                columns.map((item, index)=>
                    <span 
                        className={st.inputContainer}
                        key={index}
                    >
                        {item}
                    </span>
                )   
            }
            <span className={st.buttonContainer}></span>
        </div>
    </>
  )
}

export default Titles