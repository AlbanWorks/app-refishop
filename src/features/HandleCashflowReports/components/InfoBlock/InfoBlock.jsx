import React from 'react'
import st from './InfoBlock.module.css'
import LocationButton from '../../../../components/LocationButton/LocationButton'

const InfoBlock = ({data}) => {

    const parseDate = (firebaseTimestamp) => {
        const date = new Date(firebaseTimestamp.seconds * 1000)
        const parsedDate = date.toLocaleDateString('en-GB');
        const hours = date.getHours()
        const minutes = date.getMinutes();
        return  `${parsedDate} ${hours}:${minutes}`  
    }

  return (
    <div className={st.container}>
        <span className={st.infoPiece}>{data.username}</span>
        <span className={st.infoPiece}>{parseDate(data.timestamp)}</span>
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