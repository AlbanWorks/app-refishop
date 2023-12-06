import { firestore } from '../../src/services/firebase/firebaseAdminConfig'

const webPush = require('web-push');
const PUBLIC_KEY = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
const PRIVATE_KEY = process.env.WEB_PUSH_PRIVATE_KEY
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