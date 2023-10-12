import React from 'react'
import st from './SelectionBar.module.css'
import {Button, VARIANTS} from '../../../../components/Button/Button'

const SelectionBar = ({section, SECTIONS, setSection}) => {
  return (
    <div className={st.sectionSelector}>
        <div className={st.buttonContainer}>
            <Button 
                text={'Débito'} 
                variant={section === SECTIONS.DEBIT ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                click={()=>setSection(SECTIONS.DEBIT)}
            />
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Crédito'} 
                variant={section === SECTIONS.CREDIT ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                click={()=>setSection(SECTIONS.CREDIT)}
            />
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Transf.'} 
                variant={section === SECTIONS.TRANSFER ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                click={()=>setSection(SECTIONS.TRANSFER)}
            />
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Cierres'} 
                variant={section === SECTIONS.CLOSES ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                click={()=>setSection(SECTIONS.CLOSES)}
            />
        </div>
    </div>
  )
}

export default SelectionBar