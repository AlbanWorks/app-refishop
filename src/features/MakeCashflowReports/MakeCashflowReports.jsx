import React,{useState} from 'react'
import st from './MakeCashflowReports.module.css'
import {Button, VARIANTS} from '../../components/Button/Button'
import DebitSection from './components/DebitSection/DebitSection'
import CreditSection from './components/CreditSection/CreditSection'
import TransferSection from './components/TransferSection/TransferSection'
import ClosesSection from './components/ClosesSection/ClosesSection'

const SECTIONS ={
    DEBIT: 'debito',
    CREDIT: 'credito',
    TRANSFER: 'transferencia',
    CLOSES: 'cierres'
}

const MakeCashflowReports = () => {
    const [section, setSection] = useState(SECTIONS.DEBIT)
    const [debit, setDebit] = useState(null)
    const [credit, setCredit] = useState(null)
    const [transfer, setTransfer] = useState(null)
    const [closes, setCloses] = useState(null)

    const enviar = () => {
        const reporte = {
            employee: {id:'id', emName:'nombreEmpleado'},
            timestamp: 'timestamp',
            debit,credit,transfer,closes
        }
        console.log(reporte);
    }

  return (
    <div className={st.spacer}>
        <div className={st.container}>
            <div className={st.sectionSelector}>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Débito'} 
                            variant={section === SECTIONS.DEBIT ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                            click={()=>setSection(SECTIONS.DEBIT)}
                        />
                    </div>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Crédito'} 
                            variant={section === SECTIONS.CREDIT ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                            click={()=>setSection(SECTIONS.CREDIT)}
                        />
                    </div>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Transf.'} 
                            variant={section === SECTIONS.TRANSFER ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                            click={()=>setSection(SECTIONS.TRANSFER)}
                        />
                    </div>
                    <div className={st.buttonContainer}>
                        <Button 
                            text={'Cierres'} 
                            variant={section === SECTIONS.CLOSES ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                            click={()=>setSection(SECTIONS.CLOSES)}
                        />
                    </div>
            </div>
            {
                section === SECTIONS.DEBIT ?
                    <DebitSection 
                        debit={debit}
                        setDebit={(value)=> setDebit(value)}
                    />
                :section === SECTIONS.CREDIT ?
                    <CreditSection 
                        credit={credit}
                        setCredit={(value)=> setCredit(value)}
                    />
                :section === SECTIONS.TRANSFER ?
                    <TransferSection 
                        transfer={transfer}
                        setTransfer={(value)=> setTransfer(value)}
                    />
                : 
                    <ClosesSection 
                        closes={closes}
                        setCloses={(value)=> setCloses(value)}
                    />

            }
            <div className={st.inferiorModule}>
                <div className={st.sendButtonContainer}>
                        <Button 
                            text={'Enviar'} 
                            variant={VARIANTS.PRIMARY}
                            click={enviar}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakeCashflowReports