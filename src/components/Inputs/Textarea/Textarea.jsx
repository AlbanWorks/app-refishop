import React from 'react'
import st from './Textarea.module.css'

const Textarea = ({placeholder, change}) => {
  return (
    <textarea 
        className={st.textarea}
        onChange={(e)=>change(e.target.value)}
        placeholder={placeholder}
    >
        
    </textarea>
  )
}

export default Textarea