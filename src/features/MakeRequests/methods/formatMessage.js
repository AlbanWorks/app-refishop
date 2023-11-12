import REQ_TYPES from "../../../utils/enums/requestTypes"

const formatState = (state) => {
    if(state === 'pending') return `Su solicitud fue enviada, el administrador responderá a la brevedad, puede volver a revisar mas tarde.`
    if(state === 'accepted') return `Su solicitud fue aprobada, utilize esta respuesta como comprobante. Para realizar nuevas solicitudes presione "Aceptar" pero tenga en cuenta que esta respuesta se borrará.`
    return `Su solicitud fue denegada, para realizar nuevas solicitudes presione "Aceptar"`
}

const formatTitle = (title) => {
    if(title === REQ_TYPES.FREE_DAY)return 'Día Libre'
    return 'Adelanto de Sueldo'
}

export {formatState, formatTitle}