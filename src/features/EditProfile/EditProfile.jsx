import React,{useState, useEffect} from 'react'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import { Button,VARIANTS } from '../../components/Button/Button'
import st from './EditProfile.module.css'
import { getProfilePictureURL, uploadPicture } from './methods/images'
import FS from '../../utils/enums/fetchStates'
import Spinner from '../../components/Spinner/Spinner'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'

const EditProfile = ({userData}) => {
const [propic, setPropic] = useState('/profile.jpg')
const [picFile, setPicFile] = useState(null)
const [fetchState, setFetchState] = useState(FS.IDLE)

useEffect(() => {
  getPicture()
}, [])

const onFileSelected = (e) => {
    let selectedFile = e.target.files[0]
    let reader = new FileReader()
    reader.onload = function(event) {
      setPropic(event.target.result)
    }
    if(selectedFile) reader.readAsDataURL(selectedFile)
    setPicFile(e.target.files[0])
}

const getPicture = async () => {
    const query = await getProfilePictureURL(userData)
    if(query.error) setPropic('/error.jpg')
    else setPropic(query.ImageURL)
}

const HandleUploadPicture = async () => {
    if(! picFile) return
    setFetchState(FS.FETCHING)
    const query = await uploadPicture(userData, picFile)
    if(query.error) setFetchState(FS.ERROR)
    else setFetchState(FS.SUCSESS)
}

  return (
    <div className={st.container}>
        <h3 className={st.title}>Cambiar Foto</h3>
            <ProfilePicture img={propic} diameter={'90px'}/>
        <label for="file-upload" class="custom-file-upload" className={st.label}>
            Seleccionar Archivo
        </label>
        <input 
            id="file-upload" 
            type="file" 
            className={st.inputFile} 
            onChange={(e)=>onFileSelected(e)}
        />
        <div className={st.inferiorModule}> 
            {
                fetchState === FS.IDLE ?
                    <div className={st.buttonContainer}>
                        <Button 
                            variant={VARIANTS.PRIMARY} 
                            text={'Guardar Cambios'} 
                            click={()=> HandleUploadPicture()} 
                        />
                    </div>
                :fetchState === FS.FETCHING ?
                    <Spinner/>
                :fetchState === FS.ERROR ?
                    <ConfirmCard 
                        info={'No se pudo actualizar la foto de perfil, intentelo nuevamente.'}
                        buttonText={'Aceptar'}
                        nextState={()=>setFetchState(FS.IDLE)}
                    />
                :fetchState === FS.SUCSESS ?
                    <ConfirmCard 
                        info={'La foto de perfil fue actualizada.'}
                        buttonText={'Aceptar'}
                        nextState={()=>setFetchState(FS.IDLE)}
                    />
                :null
            }
        </div>
        
    </div>
  )
}

export default EditProfile