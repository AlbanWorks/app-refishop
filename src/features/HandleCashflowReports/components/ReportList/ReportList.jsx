import React from 'react'
import st from './ReportList.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import DebitReport from '../DebitReport/DebitReport'
import InfoBlock from '../InfoBlock/InfoBlock'

const ReportList = ({reports}) => {
  return (
    <div className={st.container}>
        {
            reports.map((report, index)=>
                <div className={st.reportContainer}>
                    <InfoBlock/>
                    <DebitReport reportData={report}/>
                    <DebitReport reportData={report}/>
                    <DebitReport reportData={report}/>
                    <DebitReport reportData={report}/>
                </div>
            )
        }
    </div>
  )
}

export default ReportList