import React,{useState, useEffect} from 'react'
import DropdownBox from '../../../components/DropdownBox/DropdownBox'
import ROLES from '../../../utils/enums/roles'
import Select from './Select'
import st from '../ManageAccounts.module.css'
import ActionButtons from './ActionButtons'
import FS from '../../../utils/enums/fetchStates'
import Profile from './Profile'
import { updateAccount ,deleteAccount } from '../utils/methods/FetchAccounts'
import { db } from '../../../services/firebase/firebaseConfig'
import { doc, onSnapshot } from "firebase/firestore";
import COL from '../utils/enums/collections'


const Account = ({employee, stores, refresh}) => {
    const [Employee, setEmployee] = useState(employee)
    const [newRole, setNewRole] = useState(null)
    const [newStore, setNewStore] = useState(null)
    const [fetchState, setFetchState] = useState(FS.IDLE)

    useEffect(() => {
        const unsub = onSnapshot(doc(db, COL.EMPLEADOS, employee.id), (doc) => {
            if(doc.data() !== undefined) setEmployee(doc.data())
        })
        return () => unsub()
    }, [])

    const handleUpdate = async () => {
        setFetchState(FS.FETCHING)
        const query = await updateAccount(employee, newRole, newStore)
        if(query.error)setFetchState(FS.ERROR)
        else setFetchState(FS.SUCSESS)  
    }

    const handleDelete = async () => {
        if(!confirm('¿Está seguro de eliminar a este empleado? la accion es irreversible'))return
        setFetchState(FS.FETCHING)
        const query = await deleteAccount(employee, COL.EMPLEADOS)
        if(query.error) setFetchState(FS.ERROR)
        else setFetchState(FS.SUCSESS)
    }

  return (
    <div className={st.container}>
        <DropdownBox  title={Employee.username} state={Employee.role}>
            <div className={st.account}>
                <Profile data={Employee}/>
                <label className={st.label}>Cambiar Rol</label>
                <Select 
                    objectToMap={ROLES} 
                    action={(value)=>setNewRole(value)}
                />
                <label className={st.label}>Cambiar Negocio</label>
                <Select 
                    objectToMap={stores} 
                    action={(value)=>setNewStore(value)}
                />
                <ActionButtons 
                    fetchState={fetchState}
                    updateAccount={handleUpdate}
                    deleteAccount={handleDelete}
                    handleSucsess={refresh}
                    handleError={()=>{setFetchState(FS.IDLE)}}
                />
            </div>
        </DropdownBox>
    </div>
  )
}

export default Account