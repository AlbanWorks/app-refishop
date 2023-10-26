import React from 'react'
import st from './InfoBlock.module.css'
import LocationButton from '../../../../components/LocationButton/LocationButton'
import DataPiece from '../DataPiece/DataPiece'

const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const InfoBlock = ({data}) => {

    const parseDate = (firebaseTimestamp) => {
        const date = new Date(firebaseTimestamp.seconds * 1000)
        const hours = date.getHours()
        const rawMinutes = date.getMinutes();
        let minutes;
        if(rawMinutes < 10) minutes = `0${rawMinutes}`
        else minutes = rawMinutes
        return  `${hours}:${minutes}hs`    
    }

  return (
    <div className={st.container}>
        <DataPiece title={'Empleado: '} data={data.username}/>
        <DataPiece title={'Negocio: '} data={data.store}/>
        <DataPiece title={'Enviado: '} data={parseDate(data.timestamp)}/>
        <DataPiece title={'Efectivo: '} data={currency.format(data.general.cash)}/>
        <DataPiece title={'Débito: '} data={currency.format(data.general.cash)}/>
        <DataPiece title={'Crédito: '} data={currency.format(data.general.cash)}/>
        <DataPiece title={'Payway:'} data={currency.format(data.general.cash)}/>
        <DataPiece title={'Prisma:'} data={currency.format(data.general.cash)}/>
        <DataPiece title={'MercadoPago:'} data={currency.format(data.general.cash)}/>
        <div className={st.locationButtonContainer}>
            <LocationButton 
                latitude={data.location.latitude} 
                longitude={data.location.longitude}
            />
        </div>
    </div>
  )
}

export default InfoBlock