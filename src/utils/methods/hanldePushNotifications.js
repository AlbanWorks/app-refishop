import { db } from "../../services/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const hanldePushNotifications = async (userData) => {
    const permission = await Notification.requestPermission()
    if(permission === 'denied') {
        alert('Por favor, active las notificaciones para estar al tanto de sus solicitudes')
        return
    }
    // next-pwa se encarga de que ya haya un sw registrado (?)
    const SW = await navigator.serviceWorker.ready
    const subscription = await SW.pushManager.getSubscription()
    if(!subscription){
        const subscribe = await SW.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey:process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
        })
        //esto tiene que pasar por el backend en versiones futuras
        try {
            await updateDoc(doc(db, 'empleados', userData.id), {
                push_notifications: JSON.parse(JSON.stringify(subscribe))
            });
        } 
        catch (error) {
            alert('ocurrió un error actualizando sus notificaciones, por favor reporte este mensaje ', error)
            //quiza sea mejor desuscribir si falla la carga de datos a firebase
        }
    } 
}

const base64ToUint8Array = base64 => {
    const padding = '='.repeat((4 - (base64.length % 4)) % 4)
    const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = window.atob(b64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  const format = (suscribe) => {
    return {
        endpoint: suscribe.endpoint,
        expiration_time: suscribe.expiration_time,
        keys: suscribe.keys
    }
  }

export default hanldePushNotifications