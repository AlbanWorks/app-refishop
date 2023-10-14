import React from 'react'
import { SpinnerCircular } from 'spinners-react';



const Spinner = () => {
  return (
        <SpinnerCircular 
            size={50} 
            thickness={100} 
            speed={100} 
            color="var(--primary)" 
            secondaryColor="rgba(0, 0, 0, 0.2)" 
        />
  )
}

export default Spinner