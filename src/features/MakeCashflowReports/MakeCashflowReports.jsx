import React,{useState, useEffect} from 'react'
import st from './MakeCashflowReports.module.css'
import ReportUI from './components/ReportUI'
import SendReport from './components/SendReport'
import FS from '../../utils/enums/fetchStates'
import useLocation from '../../hooks/useLocation'
import {sendReport, checkEmptyFields} from './methods/Reports'

const emptyGeneral = {
    cash:null,
    debit:null,
    credit:null,
    prisma:null,
    payway:null,
    mercadopago:null
}

const MakeCashflowReports = ({userData}) => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [general, setGeneral] = useState(emptyGeneral)
    const [transfer, setTransfer] = useState([])
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
        const check = checkEmptyFields({general,transfer})
        if(check.error){
            alert(check.error)
            return
        }
        return
        setFetchState(FS.FETCHING)
        const query = await sendReport({general,transfer,userData,location})
        if(query.error) setFetchState(FS.ERROR)
        else setFetchState(FS.SUCSESS)
    }

    const refresh = () => {
        setTransfer([])
        setGeneral(emptyGeneral)
        setFetchState(FS.IDLE)
    }

  return (
    <div className={st.container}>
        <ReportUI 
            general={general}
            setGeneral={value =>setGeneral(value)} 
            transfer={transfer}
            setTransfer = {value => setTransfer(value)}
        />
        <SendReport
            fetchState={fetchState}
            HandleSendReport={HandleSendReport}
            setFetchState = {value => setFetchState(value)}
            refresh={refresh}
        />
    </div>
  )
}

export default MakeCashflowReports