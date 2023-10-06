import React,{useState} from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import HamburguerButton from './components/HamburgerButton/HamburgerButton'
import getSections from '../../utils/methods/sectionHandler'
import st from './Navbar.module.css'

const Navbar = ({userData, selectOption}) => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [options, setOptions] = useState(getSections(userData.role))

    const HandleSelection = (value) => {
        setMenuOpen(false)
        selectOption(value)
    }

  return ( 
    <div className={st.navbar}>
        <div className={st.profile}>
            <ProfilePicture img={userData.profile_picture} diameter={'48px'}/>
            <h3 className={st.emName}>{userData.username}</h3>
            <span className={st.position}>{`(${userData.role})`}</span>
        </div>
        <HamburguerButton click={()=>setMenuOpen(!menuOpen)}/>
        <div className={menuOpen ? st.optionsOpen : st.optionsClosed}>
        {
            options.map((option, index)=>
                <button 
                    key={index}
                    className={st.optButton}
                    onClick={()=>HandleSelection(option)} 
                >
                    {option}
                </button>
            )
        }  
        </div>  
    </div>
  )
} 

export default Navbar