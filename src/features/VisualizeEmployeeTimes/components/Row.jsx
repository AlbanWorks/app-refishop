import React from 'react'
import st from './Row.module.css'

const parseDate = (dateString) => {
    const date = new Date(dateString)
    const parsedDate = date.toLocaleDateString('en-GB');
    const hours = date.getHours()
    const minutes = date.getMinutes();
    return  `${parsedDate} ${hours}:${minutes}`  
}

const Row = ({item}) => {
    
  return (
    <div className={st.container}>
        <p className={st.date}>{parseDate(item.date)}</p>
        <button className={st.location}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24"  
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={st.svg}
            >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        </button>
    </div>
  )
}

export default Row