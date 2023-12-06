
export default (req, res) => {
    if (req.method === 'POST') {
        res.status(200).json({ message: 'POST METHOD USED' });
    }
    else if (req.method === 'GET') {
        res.status(200).json({ message: 'GET METHOD USED' });
    }
    else{
        res.status(200).json({ message: 'OTHER METHOD USED' });
    }
};