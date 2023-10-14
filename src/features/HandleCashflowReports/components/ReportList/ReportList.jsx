import React from 'react'
import st from './ReportList.module.css'
import Report from '../Report/Report'
import InfoBlock from '../InfoBlock/InfoBlock'

const ReportList = ({reports}) => {
  return (
    <div className={st.container}>
        {
            reports.map((report, index)=>
                <div className={st.reportContainer}>
                    <InfoBlock data={report}/>
                    <Report 
                        title={'Débito'} 
                        colTitles={['Monto']} 
                        sectionData={report.debit}
                    />
                    <Report 
                        title={'Crédito'} 
                        colTitles={['Monto', 'Ticket Factura']} 
                        sectionData={report.credit}
                    />
                    <Report 
                        title={'Transferencias'} 
                        colTitles={['Monto', 'N° Transf.']} 
                        sectionData={report.transfer}
                    />
                    <Report 
                        title={'Cierres'} 
                        colTitles={['Payway', 'Prisma', 'Mercado Pago']} 
                        sectionData={[report.closes]}
                    />

                </div>
            )
        }
    </div>
  )
}

export default ReportList