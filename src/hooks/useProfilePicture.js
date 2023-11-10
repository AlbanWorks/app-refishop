import {useEffect,useState} from 'react';
import { storage } from "../services/firebase/firebaseConfig"
import {ref, getDownloadURL} from "@firebase/storage"


const useProfilePicture = (userData) => {
    const [propic, setPropic] = useState('/profile.jpg')

    useEffect(() => {
        getPicture()
    }, [userData.profile_picture])

    const getPicture = async () => {
        const query = await getProfilePictureURL(userData.id)
        if(query.error) setPropic('/error.jpg')
        else setPropic(query.ImageURL)
    }
    return propic
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

export default useProfilePicture