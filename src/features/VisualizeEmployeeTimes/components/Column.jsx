import React from 'react'
import st from './EmpTimes.module.css'
import LocationButton from '../../../components/LocationButton/LocationButton'


const Column = ({data, title}) => {

    const parseDate = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000)
        const parsedDate = date.toLocaleDateString('en-GB');
        const hours = date.getHours()
        const rawMinutes = date.getMinutes();
        let minutes;
        if(rawMinutes < 10) minutes = `0${rawMinutes}`
        else minutes = rawMinutes
        return  `${parsedDate} ${hours}:${minutes}`  
    }
    
  return (
    <div className={st.column}>
        <p className={st.timeTitle}>{title}</p>
        {
            data.map((item, index)=>
                <div className={st.row} key={index}>
                    <span className={st.date}>{parseDate(item.timestamp)}</span>
                    <div className={st.locationButtonContainer}>
                        <LocationButton 
                            latitude={item.location.latitude} 
                            longitude={item.location.longitude}
                        />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Column