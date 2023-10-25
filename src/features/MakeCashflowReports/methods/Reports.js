const sendReport = async ({general,transfer,userData,location}) => {
    const report = {
        timestamp: new Date(),
        date: parseDate(),
        username: userData.username,
        store: userData.store,
        userid: userData.id,
        transfer: removeIds(transfer),
        general,
        location
    }
    try{
        await addDoc(collection(db, 'reportes'), report);
        return{sucsess:'sucsess'}
    }
    catch(error){
        return{error}
    }
}

const parseDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    return  `${year}/${month}/${day}`  
}

const removeIds = (arrayOfObjects) => {
    let arrayObObjectsClone = [...arrayOfObjects]
    arrayObObjectsClone.forEach(obj => delete obj.id);
    return arrayObObjectsClone
}

const checkEmptyFields = ({general, transfer}) => {
    let emptyTransferItems = false;
    for (const property in general) {
        if (nullOrEmpty(general[property])) emptyTransferItems = true
    }
    transfer.forEach(item => {
        if(nullOrEmpty(item.monto) || nullOrEmpty(item.transfer)) emptyTransferItems = true;
    });
    if(emptyTransferItems) return {error: 'rellene o borre los campos vacíos'}
    return {sucsess: 'sucsess'}
}

const nullOrEmpty = (field) => {
    return (field === null || field === '' || isNaN(field))
}

export {sendReport, checkEmptyFields}