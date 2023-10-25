import React,{useState,useEffect} from 'react'
import Account from './components/Account'
import st from './ManageAccounts.module.css'
import NewAccount from './components/NewAccount/NewAccount'
import {db} from '../../services/firebase/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import FS from '../../utils/enums/fetchStates'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'



const ManageAccounts = () => {
    const [fetchState, setFetchState] = useState(FS.FETCHING)
    const [employees, setEmployees] = useState([])
    const [newAccounts, setNewAccounts] = useState([])

    useEffect(() => {
        fetchUsers('empleados')
        fetchUsers('nuevos')
    }, [])
    
    const fetchUsers = async (docName) => {
        try{
            const querySnapshot = await getDocs(collection(db, docName));
            let users = []
            querySnapshot.forEach((doc) => {
                let user = doc.data()
                user.id = doc.id
                users.push(user)
            });
            setFetchState(FS.SUCSESS)
            if(docName === 'empleados')setEmployees(users)
            else if (docName === 'nuevos') setNewAccounts(users)
        }
        catch(error){
            setFetchState(FS.ERROR)
           alert(error)//pulir
        }
    }

    const refresh = () => {
        setFetchState(FS.FETCHING)
        fetchUsers('empleados')
        fetchUsers('nuevos')
    }

  return (
    <div className={st.container}>
        {
            fetchState === FS.SUCSESS ?
                <>
                    {
                        employees.map((employee, index)=>
                            <Account key={index} employee={employee} refresh={refresh}/>
                        )
                    }
                    {
                        newAccounts.length > 0 ? <h5 className={st.subtitle}>Nuevos Usuarios</h5> : null
                    }
                    {
                        newAccounts.map((account, index)=>
                            <NewAccount key={index} employee={account} refresh={refresh}/>
                        )
                    }
                </>
            :fetchState === FS.ERROR ?
                <div className={st.errorContainer}>
                    <ConfirmCard 
                        info={'Error al traer las cuentas desde la base de datos, revise su conexión y vuelva a intentarlo'}
                        buttonText={'Reintentar'} 
                        nextState={refresh}                            
                    />
                </div>
            : 
                <div className={st.spinnerContainer}>
                    <Spinner/>
                </div>
        }
    </div>
  )
}

export default ManageAccounts