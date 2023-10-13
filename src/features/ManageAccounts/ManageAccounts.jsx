import React,{useState,useEffect} from 'react'
import Account from './components/Account/Account'
import st from './ManageAccounts.module.css'
import NewAccount from './components/NewAccount/NewAccount'
import {db} from '../../services/firebase/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
import FS from '../../utils/enums/fetchStates'



const ManageAccounts = () => {
    const [fetchState, setfetchState] = useState(FS.FETCHING)
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
            setfetchState(FS.SUCSESS)
            if(docName === 'empleados')setEmployees(users)
            else if (docName === 'nuevos') setNewAccounts(users)
        }
        catch(error){
            setfetchState(FS.ERROR)
           alert(error)//pulir
        }
    }

    const refresh = () => {
        setfetchState(FS.FETCHING)
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
                <div>err</div>
            : 
                <div>SPINNER</div>
        }
    </div>
  )
}

export default ManageAccounts