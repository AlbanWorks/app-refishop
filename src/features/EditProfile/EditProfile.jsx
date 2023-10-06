import React from 'react'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import BasicInput from '../../components/Inputs/BasicInput/BasicInput'
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
        <h3 className={st.title}>Cambiar Nombre</h3>
        <div className={st.inputContainer}>
            <BasicInput type={'text'} placeholder={'nuevo nombre'} change={()=>{}}/>
        </div>
        <p className={st.info}>Este nombre será el que aparece en tu perfil, mensajes y solicitudes, tu nombre de usuario para ingresar al sistema no puede cambiarse.</p>
        <div className={st.buttonContainer}>
            <Button variant={VARIANTS.PRIMARY} text={'Guardar Cambios'} click={()=>{}} />
        </div>
    </div>
  )
}

export default EditProfile