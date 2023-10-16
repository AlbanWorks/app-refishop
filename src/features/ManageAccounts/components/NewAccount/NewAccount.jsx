import React,{useState} from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import {Button,VARIANTS} from '../../../../components/Button/Button'
import ROLES from '../../../../utils/enums/roles'
import st from './NewAccount.module.css'
import {db} from '../../../../services/firebase/firebaseConfig'
import { doc, setDoc,deleteDoc } from "firebase/firestore";

const FS = {
    IDLE: 'idle',
    WAITING: 'waiting',
    SUCSESS: 'sucsess',
    ERROR: 'error'
}

const NewAccount = ({employee, refresh}) => {

    const [newRole, setNewRole] = useState(null)
    const [saveButtonText, setSaveButtonText] = useState('Aceptar Usuario')

    const acceptUser = async () => {
        if(newRole === '' || newRole === null) {
            alert('debe elegir un rol')
            return
        }
        setSaveButtonText('Espere...')
        try {
            await setDoc(doc(db, 'empleados', employee.id),{
                username:employee.username,
                role: newRole,
                profile_picture: '/profile.jpg',
            });
            await deleteDoc(doc(db, 'nuevos', employee.id));
            refresh()
        } 
        catch (error) {
            alert('Hubo un error al añadir al nuevo usuario, por favor repórtelo '+ error)//pulir
            setSaveButtonText('Aceptar Usuario')
        }
    }

    const deleteAccount = async () => {
        try {
            await deleteDoc(doc(db, 'nuevos', employee.id))
            refresh()
        } 
        catch (error) {
            alert(error)//pulir
        }
    }

  return (
    <div className={st.container}>
        <DropdownBox  title={employee.username} state={'sin autorizar'}>
            <div className={st.superiorModule}>
                <span className={st.emName}>{employee.username}</span>
                <select className={st.select} onChange={(e)=>setNewRole(e.target.value)}>
                    <option value="" disabled selected hidden>Elegir</option>
                    {
                        Object.keys(ROLES).map((role, index) => (
                            <option key={index} value={ROLES[role]}>{ROLES[role]}</option>
                        ))
                    }
                </select>
            </div>
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
                        text={saveButtonText} 
                        variant={VARIANTS.PRIMARY}
                        click={acceptUser}
                    />
                </div>
            </div>
        </DropdownBox>
    </div>
  )
}

export default NewAccount