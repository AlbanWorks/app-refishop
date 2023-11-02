import { storage } from "../../../services/firebase/firebaseConfig"
import {ref, uploadBytesResumable, getDownloadURL, deleteObject, refFromURL } from "@firebase/storage"
import imageCompression from 'browser-image-compression'


const uploadPicture = async (id,file) =>{
    try {
        const compressedImage = await compressImage(file)
        const storageRef = ref(storage, `${id}/profile_picture`)
        const img = await uploadBytesResumable(storageRef, compressedImage)
        return {sucsess: img}
    } catch (error) {
        return{error}
    }
}
const getProfilePictureURL = async (id) => {
    try {
        const storageRef = ref(storage, `${id}/profile_picture`)
        const ImageURL = await getDownloadURL(storageRef)
        return {ImageURL: ImageURL}
    } 
    catch (error) {
        return{error}
    }
}
const compressImage = async (image) => {
    //using npm browser-image-compression 
    const options = {
        maxSizeMB: 0.3,
        maxWidthOrHeight: 640,
        fileType:'image/jpeg',
        useWebWorker: true
    }
    try {
        const compressedImage = await imageCompression(image, options);
        return compressedImage
    } 
    catch {
      return image
    }
}

const getImageURL = async (file)=>{
    const storageRef = ref(storage, pic_route(file.name))
    try {
        let ImageURL = await getDownloadURL(storageRef)
        return ImageURL
    } catch (error) {
        console.log("error al descargar imagen", err)
        return{error}
    }
}

const deleteImage = async (Name)=>{
    try {
        console.log(pic_route(Name))
        const storageRef = ref(storage, pic_route(Name))
        console.log(pic_route(Name))
        //await deleteObject(storageRef)
        return{sucsess:"is dead"}
    } catch (error) {
        return{error}
    }
}
export {uploadPicture, getProfilePictureURL}