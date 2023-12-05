
// usamos el paquete web-push para facilitar el envio de las notificaciones push y para generar las claves VAPID que son
// necesarias para el proceso.
const webPush = require('web-push');
// si no las tengo genero vapid keys con el comando ./node_modules/.bin/web-push generate-vapid-keys en la consola 
const PUBLIC_KEY = process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
const PRIVATE_KEY = process.env.WEB_PUSH_PRIVATE_KEY

webPush.setVapidDetails('mailto:example@yourdomain.org', PUBLIC_KEY, PRIVATE_KEY)

// El cliente me enviará un metodo POST con la informacion de la suscripcion del cliente a su serviceworker.
// esta info es necesaria para validar el envio de las notificaciones push, tambien informacion personalizada
//del cliente para enviar la notificacion adecuada.

import { firestore } from '../../src/services/firebase/firebaseAdminConfig'

/*
para enviar notificaciones a todos los dispositivos, debemos guardar el PushNotification Object que nos envia el cliente cuando se suscribe.
hay que traer la lista de objetos desde Firebase y recorrerla para enviar la notificacion a todos.
*/

const getSubscriptionObject = async (id) =>{
    try{
        const route = `empleados/${id}`
        const productoFB = await firestore.doc(route).get()
        console.log(productoFB.data().push_notifications)
        return productoFB.data().push_notifications
    }
    catch{
        return null
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(200).json({ message: 'Only POST requests allowed' })
        return
    }
    const body = JSON.parse(req.body)
    const subscriptionObject = await getSubscriptionObject(body.to)
    if(!subscriptionObject){
        res.status(200).json({ message: `no conseguimos en firebase de${body.to}` })
        return
    }
    webPush.sendNotification(
        subscriptionObject,
        JSON.stringify({ title: body.title || 'sin titulo', message: body.message || 'sin mensaje' })
      )
      .catch(err => {
        res.status(400).json({ message: 'error al enviar notificaciones' })
        return
    })
    res.status(200).json({ message: 'proceso concluido' })
}

/*
Public Key:
BPWimmkwnT81UvyNWP-HuxokPW_UA9uahnA6Twd737UgDgGkY5eIOI32O0cdHhSIKMvUWGYd0zmQ7mpABX3TNiw

Private Key:
zkKpFLTnaOc1KW64fpBA4uEJ8thf58oodRarE26x2u0
*/

  