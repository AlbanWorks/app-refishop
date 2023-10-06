import React,{useState} from 'react'
import st from './DropdownBox.module.css'
import { motion } from 'framer-motion'

const DropdownBox = ({children, title, state}) => {
    const [open, setOpen] = useState(false);

  return (
    <motion.div className={open ? st.boxOpen : st.boxClosed}>
        <div className={st.info}>
            <h5 className={st.title} >{title}</h5>
            <span className={st.state}>{state}</span>
        </div>
        <button  
            className={st.button}
            onClick={()=>setOpen(!open)}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
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
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </button>
        <div className={st.container}>{children}</div>
    </motion.div>
  )
}

export default DropdownBox