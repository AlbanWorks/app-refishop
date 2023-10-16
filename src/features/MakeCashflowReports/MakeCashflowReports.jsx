import React,{useState, useEffect} from 'react'
import st from './MakeCashflowReports.module.css'
import DebitSection from './sections/DebitSection/DebitSection'
import CreditSection from './sections/CreditSection/CreditSection'
import TransferSection from './sections/TransferSection/TransferSection'
import ClosesSection from './sections/ClosesSection/ClosesSection'
import SelectionBar from './components/SelectionBar/SelectionBar'
import SECTIONS from './utils/enums/sections'
import FS from '../../utils/enums/fetchStates'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import sendReport from './utils/methods/sendReport'
import Spinner from '../../components/Spinner/Spinner'
import useLocation from '../../hooks/useLocation'

const MakeCashflowReports = ({userData}) => {
    const [section, setSection] = useState(SECTIONS.DEBIT)
    const [debit, setDebit] = useState([])
    const [credit, setCredit] = useState([])
    const [transfer, setTransfer] = useState([])
    const [closes, setCloses] = useState({prisma:null, payway:null, mp:null })
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const {location} = useLocation()

    useEffect(() => {
        //previene al usuario de recargar la pagina y perder el progreso
        const handleBeforeUnload = (e) => {
          e.preventDefault();
          e.returnValue = ''; 
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    const HandleSendReport = async () => {
        setFetchState(FS.FETCHING)
        const query = await sendReport({debit,credit,transfer,closes,userData, location})
        if(query.error) setFetchState(FS.ERROR)
        else setFetchState(FS.SUCSESS)
    }

    const refresh = () => {
        setDebit([])
        setCredit([])
        setTransfer([])
        setCloses({prisma:null, payway:null, mp:null })
        setFetchState(FS.IDLE)
    }

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
        </div>
        <div className={st.inferiorModule}>
                {
                    fetchState === FS.IDLE ?
                        <ConfirmCard 
                            info={'Revise la informacion antes de enviarla'}
                            buttonText={'Enviar'} 
                            nextState={HandleSendReport}                            
                        />
                    :fetchState === FS.FETCHING ?
                        <div className={st.spinnerContainer}>
                            <Spinner/>
                        </div>
                    :fetchState === FS.ERROR ?
                        <ConfirmCard 
                            info={'Ha ocurrido un error, intentelo nuevamente'}
                            buttonTextt={'Aceptar'} 
                            nextState={()=>setFetchState(FS.IDLE)}                            
                        />
                    :
                        <ConfirmCard 
                            info={'El reporte se subió exitosamente'}
                            buttonText={'Aceptar'} 
                            nextState={refresh}
                        />
                }
            </div>
    </div>
  )
}

export default MakeCashflowReports