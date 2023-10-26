import React from 'react'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import { Button,VARIANTS } from '../../components/Button/Button'
import st from './EditProfile.module.css'

const EditProfile = () => {

  return (
    <div className={st.container}>
        <h3 className={st.title}>Cambiar Foto</h3>
            <ProfilePicture img={'/profile.jpg'} diameter={'90px'}/>
        <label for="file-upload" class="custom-file-upload" className={st.label}>
            Seleccionar Archivo
        </label>
        <input id="file-upload" type="file" className={st.inputFile}/>
        <p className={st.info}>Por el momento la personalización del perfil está desactivada.</p>
        <div className={st.buttonContainer}>
            <Button variant={VARIANTS.PRIMARY} text={'Guardar Cambios'} click={()=>{}} />
        </div>
    </div>
  )
}

export default EditProfile