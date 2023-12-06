
export default (req, res) => {
    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        res.status(200).json({ message: body.to });
    }
    else if (req.method === 'GET') {
        res.status(200).json({ message: 'GET METHOD USED' });
    }
    else{
        res.status(200).json({ message: 'OTHER METHOD USED' });
    }
};