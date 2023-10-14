import React from 'react'
import st from './Table.module.css'

/*
Este componente muestra informacion contenida en un array de objetos, todos 
ellos con las mismas propiedades, en un formato de tabla.
solo se debe proporcionar aparte un array con los titulos de cada columna, 
idealmente similares al nombre de cada propiedad de los objetos que se desea mostrar
la prop data recibe el array de objetos.
*/

const Table = ({titles, data}) => {
  return (
    <div className={st.tableContainer}>
        {
            titles.map((title, index)=>
                <div className={st.column} key={index}>
                    <span className={st.columnTitle}>{title}</span>
                    {
                        data.map((row, rowIndex)=>
                            <span 
                                className={st.element}
                                key={rowIndex}
                            >
                                {Object.values(row)[index]}
                            </span>
                        )
                    }
                </div>
            )   
        }
    </div>
  )
}

export default Table