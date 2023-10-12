import React,{useState} from 'react'
import st from './MakeCashflowReports.module.css'
import {Button, VARIANTS} from '../../components/Button/Button'
import DebitSection from './sections/DebitSection/DebitSection'
import CreditSection from './sections/CreditSection/CreditSection'
import TransferSection from './sections/TransferSection/TransferSection'
import ClosesSection from './sections/ClosesSection/ClosesSection'
import SendButton from './components/SendButton/SendButton'
import SelectionBar from './components/SelectionBar/SelectionBar'
import SECTIONS from './utils/enums/sections'

const MakeCashflowReports = ({userData}) => {
    const [section, setSection] = useState(SECTIONS.DEBIT)
    const [debit, setDebit] = useState([])
    const [credit, setCredit] = useState([])
    const [transfer, setTransfer] = useState([])
    const [closes, setCloses] = useState({prisma:null, payway:null, mp:null })

  return (
    <div className={st.spacer}>
        <div className={st.container}>
            <SelectionBar 
                section={section} 
                SECTIONS={SECTIONS}
                setSection={(v)=>setSection(v)}
            />
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
           <SendButton data={{section, debit, transfer, closes, userData}}/>
        </div>
    </div>
  )
}

export default MakeCashflowReports