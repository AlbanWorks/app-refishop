import React,{useState} from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import {Button,VARIANTS} from '../../../../components/Button/Button'
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture'
import ROLES from '../../../../utils/enums/roles'
import st from './Account.module.css'
import {db} from '../../../../services/firebase/firebaseConfig'
import { doc, setDoc,deleteDoc } from "firebase/firestore";
import Spinner from '../../../../components/Spinner/Spinner'

const FS = {
    IDLE: 'idle',
    WAITING: 'waiting',
    SUCSESS: 'sucsess',
    ERROR: 'error'
}

const Account = ({employee, refresh}) => {

    const [newRole, setNewRole] = useState(null)
    const [fetching, setFetching] = useState(false)

    const updateRole = async () => {
        if(newRole === '' || newRole === null) {
            alert('debe elegir un rol')
            return
        }
        try {
            setFetching(true)
            employee.role = newRole
            await setDoc(doc(db, 'empleados', employee.id), employee);
        } catch (error) {
            alert(error)//pulir
        }
        setFetching(false)
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
            <div className={st.superiorModule}>
                <div className={st.profile}>
                    <ProfilePicture img={employee.profile_picture} diameter={'50px'}/>
                    <span className={st.emName}>{employee.username}</span>
                </div>
                <select className={st.select} onChange={(e)=>setNewRole(e.target.value)}>
                    <option value="" disabled selected hidden>Elegir</option>
                    {
                        Object.keys(ROLES).map((role, index) => (
                            <option key={index} value={ROLES[role]}>{ROLES[role]}</option>
                        ))
                    }
                </select>
            </div>
            {
                fetching ?
                    <div className={st.inferiorModule}>
                        <Spinner/>
                    </div>
                :
                    <div className={st.inferiorModule}>
                        <div className={st.buttonContainer}>
                            <Button 
                                text={'Eliminar'} 
                                variant={VARIANTS.NEGATIVE}
                                click={deleteAccount}
                            />
                        </div>
                        <div className={st.buttonContainer}>
                            <Button 
                                text={'Guardar'} 
                                variant={VARIANTS.PRIMARY}
                                click={updateRole}
                            />
                        </div>
                    </div>
            }
        </DropdownBox>
    </div>
  )
}

export default Account