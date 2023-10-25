import React,{useState} from 'react'
import DropdownBox from '../../../components/DropdownBox/DropdownBox'
import ROLES from '../../../utils/enums/roles'
import Select from './Select'
import st from '../ManageAccounts.module.css'
import {db} from '../../../services/firebase/firebaseConfig'
import { doc, setDoc,deleteDoc } from "firebase/firestore";
import ActionButtons from './ActionButtons'
import FS from '../../../utils/enums/fetchStates'
import Profile from './Profile'

const STORES=[
    'el pollo',
    'sabor a campo'
]

const Account = ({employee, refresh}) => {

    const [newRole, setNewRole] = useState(null)
    const [newStore, setNewStore] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [fetchState, setFetchState] = useState(FS.IDLE)

    const updateRole = async () => {
        if(newRole === '' || newRole === null) {
            alert('debe elegir un rol')
            return
        }
        try {
            setFetchState(FS.FETCHING)
            employee.role = newRole
            await setDoc(doc(db, 'empleados', employee.id), employee);
            setFetchState(FS.IDLE)
        } catch (error) {
            alert(error)//pulir
            setFetchState(FS.ERROR)
        }
        
    }

    const deleteAccount = async () => {
        try {
            setFetching(true)
            await deleteDoc(doc(db, 'empleados', employee.id))
            refresh()
        } 
        catch (error) {
            alert(error)//pulir
        }
        setFetching(false)
    }

  return (
    <div className={st.container}>
        <DropdownBox  title={employee.username} state={employee.role}>
            <div className={st.account}>
                <Profile data={employee}/>
                <label className={st.label}>Cambiar Rol</label>
                <Select 
                    objectToMap={ROLES} 
                    action={(value)=>setNewRole(value)}
                />
                <label className={st.label}>Cambiar Negocio</label>
                <Select 
                    objectToMap={STORES} 
                    action={(value)=>setNewStore(value)}
                />
                <ActionButtons 
                    fetchState={fetchState}
                    updateAccount={updateRole}
                    deleteAccount={deleteAccount}
                />
            </div>
        </DropdownBox>
    </div>
  )
}

export default Account