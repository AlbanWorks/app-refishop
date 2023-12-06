import { firestore } from '../../src/services/firebase/firebaseAdminConfig'

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