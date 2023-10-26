import React,{useState,useEffect} from 'react'
import st from './ManageAccounts.module.css'
import FS from '../../utils/enums/fetchStates'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'
import EmployeeList from './components/EmployeeList'
import { getAccounts, getStoresFromFB } from './utils/methods/FetchAccounts'

//la funcionalidad de refresh es necesaria pero me gustaria mejorarla
const ManageAccounts = () => {
    const [fetchState, setFetchState] = useState(FS.FETCHING)
    const [stores, setStores] = useState([])
    const [employees, setEmployees] = useState([])
    const [newAccounts, setNewAccounts] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        setFetchState(FS.FETCHING)
        const query = await getAccounts()
        if(query.error) setFetchState(FS.ERROR)
        else{
            setEmployees(query.employees)
            setNewAccounts(query.newAccounts)
            fetchStores()
        }
    }
    const fetchStores = async () => {
        const query = await getStoresFromFB()
        if(query.error) setFetchState(FS.ERROR)
        else{
            setStores(query)
            setFetchState(FS.SUCSESS)
        }
    }
  return (
    <div className={st.container}>
        {
            fetchState === FS.FETCHING ?
            <div className={st.spinnerContainer}>
                <Spinner/>
            </div>
            :fetchState === FS.SUCSESS ?
                <EmployeeList 
                    employees={employees} 
                    newAccounts={newAccounts} 
                    stores={stores}
                    refresh={fetchUsers}
                />
            :fetchState === FS.ERROR ?
                <div className={st.errorContainer}>
                    <ConfirmCard 
                        info={'Error al conectarse a la base de datos, revise su conexión y vuelva a intentarlo'}
                        buttonText={'Reintentar'} 
                        nextState={fetchUsers}                            
                    />
                </div>
            :null 
        }
    </div>
  )
}

export default ManageAccounts