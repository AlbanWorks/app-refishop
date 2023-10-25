import React,{useState} from 'react'
import st from '../MakeCashflowReports.module.css'
import SectionSelector from './SectionSelector'
import General from './General'
import Transfer from './Transfer'

const ReportUI = ({general, setGeneral, transfer, setTransfer}) => {
    const [transferSection, setTransferSection] = useState(true)
   
  return (
    <div className={st.reportContainer}>
        <SectionSelector 
            transferSection={transferSection}
            setTransferSection={(value)=> setTransferSection(value)}
        />
        {
            transferSection ?
                <Transfer 
                    transfer={transfer}
                    setTransfer = {value => setTransfer(value)}
                />
            :
                <General
                    general={general}
                    setGeneral={value => setGeneral(value)} 
                />
        }
    </div>
  )
}

export default ReportUI