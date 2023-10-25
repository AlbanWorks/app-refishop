import React,{useState} from 'react'
import DropdownBox from '../../../components/DropdownBox/DropdownBox'
import ROLES from '../../../utils/enums/roles'
import Select from './Select'
import st from '../ManageAccounts.module.css'
import ActionButtons from './ActionButtons'
import FS from '../../../utils/enums/fetchStates'
import COL from '../utils/enums/collections'
import { acceptUser ,deleteAccount } from '../utils/methods/FetchAccounts'

const STORES=[
    'el pollo',
    'sabor a campo'
]

const NewAccount = ({employee, refresh}) => {
    const [newRole, setNewRole] = useState(null)
    const [newStore, setNewStore] = useState(null)
    const [fetchState, setFetchState] = useState(FS.IDLE)

    const handleUpdate = async () => {
        if(newRole === null || newStore === null){
            alert('Necesita seleccionar el rol y el negocio del nuevo empleado')
            return
        }
        setFetchState(FS.FETCHING)
        const query = await acceptUser(employee, newRole, newStore)
        if(query.error){
            console.log(query.error);
            setFetchState(FS.ERROR)
        }
        else setFetchState(FS.SUCSESS)  
    }

    const handleDelete = async () => {
        if(!confirm('¿Está seguro de eliminar a este empleado? la accion es irreversible'))return
        setFetchState(FS.FETCHING)
        const query = await deleteAccount(employee, COL.NUEVOS)
        if(query.error) setFetchState(FS.ERROR)
        else setFetchState(FS.SUCSESS)
    }

  return (
    <div className={st.container}>
        <DropdownBox  title={employee.username} state={'sin incorporar'}>
            <div className={st.account}>
                <label className={st.label}>Seleccionar Rol</label>
                <Select 
                    objectToMap={ROLES} 
                    action={(value)=>setNewRole(value)}
                />
                <label className={st.label}>Selecconar Negocio</label>
                <Select 
                    objectToMap={STORES} 
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

export default NewAccount