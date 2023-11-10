import React from 'react'
import st from '../ManageAccounts.module.css'
import ProfilePicture from '../../../components/ProfilePicture/ProfilePicture'
import usePofilePicture from '../../../hooks/useProfilePicture'

const Profile = ({data}) => {
    const propic = usePofilePicture(data)

  return (
    <div className={st.profile}>
        <ProfilePicture img={propic} diameter={'50px'}/>
        <span className={st.employeeInfo}> 
            <b>Nombre: </b> 
            {data.username}
        </span>
        <span className={st.employeeInfo}>
            <b>Rol Actual: </b> 
            {data.role}
        </span>
        <span className={st.employeeInfo}>
            <b>Negocio Actual: </b> 
            {data.store}
        </span>
    </div>
  )
}

export default Profile