import React from 'react'
import st from './ReportList.module.css'
import Report from '../Report/Report'
import InfoBlock from '../InfoBlock/InfoBlock'

const ReportList = ({reports}) => {
  return (
    <>
        {
            reports.map((report, index)=>
                <div className={st.reportContainer} key={index}>
                    <InfoBlock data={report}/>
                    <Report 
                        title={'Transferencias'} 
                        colTitles={['Monto', 'N° Transf.']} 
                        sectionData={report.transfer}
                    />
                </div>
            )
        }
    </>
  )
}
/*
 
*/
export default ReportList