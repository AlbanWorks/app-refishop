import React from 'react'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import {Button,VARIANTS} from '../../../../components/Button/Button'
import ProfilePicture from '../../../../components/ProfilePicture/ProfilePicture'
import ROLES from '../../../../utils/enums/roles'
import st from './Account.module.css'

const Account = ({employee}) => {

  return (
    <div className={st.container}>
        <DropdownBox  title={employee.username} state={employee.role}>
            <div className={st.superiorModule}>
                <div className={st.profile}>
                    <ProfilePicture img={employee.profile_picture} diameter={'50px'}/>
                    <span className={st.emName}>{employee.username}</span>
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
                    <Button text={'Eliminar'} variant={VARIANTS.NEGATIVE}/>
                </div>
                <div className={st.buttonContainer}>
                    <Button text={'Guardar'} variant={VARIANTS.PRIMARY}/>
                </div>
            </div>
        </DropdownBox>
    </div>
  )
}

export default Account