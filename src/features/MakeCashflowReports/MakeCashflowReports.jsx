import React,{useState, useEffect} from 'react'
import st from './MakeCashflowReports.module.css'
import ReportUI from './components/ReportUI'
import SendReport from './components/SendReport'
import FS from '../../utils/enums/fetchStates'
import useLocation from '../../hooks/useLocation'
import {sendReport, checkEmptyFields, emptyGeneral} from './methods/Reports'

const tato = 'x9Srmxj3HafzM8hmWUd3AU42fNJ2'
const santiago = '8r6mkCXE3sdlL6wVplpPEvJ0gWJ3'


const MakeCashflowReports = ({userData}) => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [general, setGeneral] = useState(emptyGeneral())
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
        console.log({general,transfer});
        if(check.error){
            alert(check.error)
            return
        }
        setFetchState(FS.FETCHING)
        const query = await sendReport({general,transfer,userData,location})
        if(query.error)setFetchState(FS.ERROR)
        else {
            setFetchState(FS.SUCSESS)
            SendNotification()
            
        }
    }

    const refresh = () => {
        setTransfer([])
        setGeneral(emptyGeneral())
        setFetchState(FS.IDLE)
    }

    const SendNotification = async ()=>{
        const order = {
            to: tato,
            title: 'Gestión',
            message: `${userData.username} envió un reporte de ventas de ${userData.store}`
        }
        const res = await fetch("/api/test",{method: 'POST',body: JSON.stringify(order)})
        const movies = await res.json()
        console.log(movies);
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