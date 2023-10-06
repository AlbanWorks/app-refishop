import React from 'react'
import st from './ProfilePicture.module.css'

const ProfilePicture = ({img , diameter}) => {
  return (
    <div 
        className={st.imageContainer}
        style={{width:diameter, height:diameter}}
    >
        <img
            className={st.img}
            src={img}
            alt='profile'
        />
    </div>
  )
}

export default ProfilePicture