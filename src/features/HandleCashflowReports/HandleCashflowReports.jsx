import React,{useState} from 'react'
import st from './HandleCashflowReports.module.css'
import SearchReports from './components/SearchReports/SearchReports'
import FS from '../../utils/enums/fetchStates'
import ReportList from './components/ReportList/ReportList'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import fetchReports from './fetchReports'

const HandleCashflowReports = () => {
    const [reports, setReports] = useState(null)
    const [fetchState, setFetchState] = useState(FS.IDLE)
    
    const fetchReportsHandler = async(selectedDate) => {
        if(selectedDate === null){  
            alert('seleccione una fecha válida')
            return
        } 
        setFetchState(FS.FETCHING)
        const query = await fetchReports(selectedDate)
        if(query.error){
            setFetchState(FS.ERROR)
        }
        else{
            console.log(query);
            setReports(query)
            setFetchState(FS.SUCSESS)
        }
    }

  return (
    <div className={st.spacer}>
        <div className={st.container}>  
            <SearchReports search={(selectedDate) => fetchReportsHandler(selectedDate)}/>
            {
                fetchState === FS.FETCHING ?
                <div className={st.spinnerContainer}>
                    <Spinner/>
                </div>
                :fetchState === FS.SUCSESS ?
                    <ReportList reports={reports}/>
                : fetchState === FS.ERROR ?
                    <div className={st.errorContainer}>
                        <ConfirmCard 
                            info={'Un error ha ocurrido al buscar los reportes de la base de datos, revise su conexión a internet y vuelva a intentarlo'}
                            buttonText={'Aceptar'}
                            nextState={()=>setFetchState(FS.IDLE)}
                        />
                    </div>
                :null
            }
        </div>
    </div>
  )
}

export default HandleCashflowReports