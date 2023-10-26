import React from 'react'
import st from '../MakeCashflowReports.module.css'
import General from './General'
import Transfer from './Transfer'

const ReportUI = ({general, setGeneral, transfer, setTransfer}) => {
   
  return (
    <div className={st.reportContainer}>
        <General
            general={general}
            setGeneral={value => setGeneral(value)} 
        />
        <Transfer 
            transfer={transfer}
            setTransfer = {value => setTransfer(value)}
        />
    </div>
  )
}

export default ReportUI