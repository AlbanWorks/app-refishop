import React from 'react'
import st from './InfoBlock.module.css'

const InfoBlock = ({data}) => {
  return (
    <div className={st.container}>
        <span className={st.infoPiece}>{data.username}</span>
        <span className={st.infoPiece}>{data.timestamp}</span>
        <button>location</button>
    </div>
  )
}

export default InfoBlock