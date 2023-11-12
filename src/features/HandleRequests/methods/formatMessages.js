const formatFreeDay = (request) => {
    return `El día ${parseDate(request.date)}
        ${request.employee} solicitó un día libre para el ${parseDate(request.requested_date)} 
        debido a: ${request.reason}`
}
const formatAdvance = (request) => {
    return `El día ${parseDate(request.date)}
        ${request.employee} solicitó un adelanto de sueldo de $${request.amount}
        para el ${parseDate(request.requested_date)} 
        debido a: ${request.reason}`    
}
const parseDate = (firestoreDate) => {
     return new Date(firestoreDate.seconds * 1000).toLocaleDateString('en-GB');
}

export {formatAdvance, formatFreeDay}