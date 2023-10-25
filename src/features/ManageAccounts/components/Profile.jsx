import React from 'react'
import st from '../ManageAccounts.module.css'
import ProfilePicture from '../../../components/ProfilePicture/ProfilePicture'

const Profile = ({data}) => {
  return (
    <div className={st.profile}>
        <ProfilePicture img={data.profile_picture} diameter={'50px'}/>
        <span className={st.employeeInfo}> 
            <b>Nombre: </b> 
            {data.username}
        </span>
        <span className={st.employeeInfo}>
            <b>Rol Actual: </b> 
            empleado
        </span>
        <span className={st.employeeInfo}>
            <b>Negocio Actual: </b> 
            SABOR A CAMPO
        </span>
    </div>
  )
}

export default Profile