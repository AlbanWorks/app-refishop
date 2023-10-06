import React from 'react'
import st from './NewAccount.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import {Button,VARIANTS} from '../../../../components/Button/Button'
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture'
import ROLES from '../../../../utils/enums/roles'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'

const NewAccount = () => {
  return (
    <div className={st.container}>
    <DropdownBox  title={'Nuevo Empleado'} state={'sin Guardar'}>
        <div className={st.superiorModule}>
            <div className={st.profile}>
                <ProfilePicture img={'/profile.jpg'} diameter={'50px'}/>
                <div className={st.emName}>
                    <BasicInput type={'text'} placeholder={'nombre'} change={()=>{}}/>
                </div>
            </div>
            <select className={st.select}>{
                Object.keys(ROLES).map((role, index) => (
                    <option key={index} value={role} >{ ROLES[role] }</option>
                ))
            }
            </select>
        </div>
        <div className={st.inferiorModule}>
            <div className={st.buttonContainer}>
                <Button text={'Guardar'} variant={VARIANTS.PRIMARY}/>
            </div>
        </div>
    </DropdownBox>
</div>
  )
}

export default NewAccount