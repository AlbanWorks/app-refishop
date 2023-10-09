import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4OcGyCHFea-MRB_nCfQtIH9HW06pltcc",
    authDomain: "tato-gestion.firebaseapp.com",
    projectId: "tato-gestion",
    storageBucket: "tato-gestion.appspot.com",
    messagingSenderId: "423140627597",
    appId: "1:423140627597:web:5cf7a187100ad45e2dfec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app)
const auth = getAuth(app);


export {db, storage, auth}