import { firestore } from '../../src/services/firebase/firebaseAdminConfig'
const webPush = require('web-push');

const PUBLIC_KEY = 'BPWimmkwnT81UvyNWP-HuxokPW_UA9uahnA6Twd737UgDgGkY5eIOI32O0cdHhSIKMvUWGYd0zmQ7mpABX3TNiw'
const PRIVATE_KEY = 'zkKpFLTnaOc1KW64fpBA4uEJ8thf58oodRarE26x2u0'
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
        res.status(200).json({ message: fb.username });
    }
    else if (req.method === 'GET') {
        res.status(200).json({ message: 'GET METHOD USED' });
    }
    else{
        res.status(200).json({ message: 'OTHER METHOD USED' });
    }
};