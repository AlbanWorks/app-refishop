import { useEffect, useState } from "react"
import { db } from "../services/firebase/firebaseConfig"
import { doc, updateDoc } from "firebase/firestore";






const usePushNotifications = (userData) => {

const [subscription, setSubscription] = useState(null)
    useEffect(() => {
        if(userData) hanldePermission(userData)
    }, [])
    const hanldePermission = async (userData) => {
        const permission = await Notification.requestPermission()
        if(permission === 'denied') {
            alert('No podra recibir notificaciones')
            return
        }
        // next-pwa se encarga de que ya haya un sw registrado (?)
        const SW =  await navigator.serviceWorker.ready
        const subscription = await SW.pushManager.getSubscription()
        console.log('Esta es la suscripcion existente : ', subscription )
        if(!subscription){
            const subscribe = await SW.pushManager.subscribe()
            //enviar a firebase las credenciales
            console.log('Esta es la suscripcion recien creada : ', subscribe )
            await updateDoc(doc(db, 'empleados', ''), {
                push_suscription: subscribe
              });

        } 
    }
    return subscription
}


export default usePushNotifications

/*
 const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY)
    })
    // TODO: you should call your API to save subscription data on server in order to send web push notification from server
    setSubscription(sub)
    setIsSubscribed(true)
    console.log('web push subscribed!')
    console.log(sub)
*/