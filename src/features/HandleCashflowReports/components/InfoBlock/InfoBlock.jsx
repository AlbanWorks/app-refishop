import React from 'react'
import st from './InfoBlock.module.css'

const InfoBlock = () => {
  return (
    <div className={st.container}>
        <span className={st.infoPiece}>name</span>
        <span className={st.infoPiece}>dd/mm/aa hh:mm</span>
        <button>location</button>
    </div>
  )
}

export default InfoBlock