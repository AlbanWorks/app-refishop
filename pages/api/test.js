import { firestore } from '../../src/services/firebase/firebaseAdminConfig'

const webPush = require('web-push');
const PUBLIC_KEY = 'BPWimmkwnT81UvyNWP-HuxokPW_UA9uahnA6Twd737UgDgGkY5eIOI32O0cdHhSIKMvUWGYd0zmQ7mpABX3TNiw'
const PRIVATE_KEY = process.env.WEB_PUSH_PRIVATE_KEY

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

webPush.setVapidDetails('mailto:example@yourdomain.org', PUBLIC_KEY, PRIVATE_KEY)

const getSubscriptionObject = async (id) =>{
    try{
        const route = `empleados/${id}`
        const productoFB = await firestore.doc(route).get()
        console.log(productoFB.data())
        return productoFB.data()
    }
    catch{
        return 'no name'
    }
}

export default async (req, res) => {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        const fb = await getSubscriptionObject(body.to)
        const msj = await webPush.sendNotification(
            fb.push_notifications,
            JSON.stringify({ title: body.title || 'sin titulo', message: body.message || 'sin mensaje' })
        )
        res.status(200).json({ message: fb.username, notification: msj });
    }
    else if (req.method === 'GET') {
        res.status(200).json({ message: 'GET METHOD USED' });
    }
    else{
        res.status(200).json({ message: 'OTHER METHOD USED' });
    }
};