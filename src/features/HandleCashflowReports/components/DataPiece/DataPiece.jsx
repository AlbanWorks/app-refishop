import React from 'react'
import st from './DataPiece.module.css'

const DataPiece = ({title, data}) => {
  return (
    <div className={st.container}>
          <h5 className={st.title}>{title}</h5>
          <span className={st.data}>{data}</span>
    </div>
  )
}

export default DataPiece