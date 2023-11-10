import { storage, db } from "../../../services/firebase/firebaseConfig"
import {ref, uploadBytesResumable, getDownloadURL} from "@firebase/storage"
import { doc,updateDoc } from "firebase/firestore";
import imageCompression from 'browser-image-compression'
import COL from "../../ManageAccounts/utils/enums/collections";


const uploadPicture = async (userData,file) =>{
    try {
        const compressedImage = await compressImage(file)
        const storageRef = ref(storage, `${userData.id}/profile_picture`)
        const img = await uploadBytesResumable(storageRef, compressedImage)
        await updateDoc( doc(db, COL.EMPLEADOS, userData.id),{
           profile_picture: !userData.profile_picture
        });
        return {sucsess: img}
    } catch (error) {
        console.log(error)
        return{error}
    }
}
const getProfilePictureURL = async (userData) => {
    try {
        const storageRef = ref(storage, `${userData.id}/profile_picture`)
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
        maxWidthOrHeight: 300,
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

export {uploadPicture, getProfilePictureURL}