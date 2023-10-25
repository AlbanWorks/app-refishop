import React from 'react'
import st from '../MakeCashflowReports.module.css'
import { Button, VARIANTS } from '../../../components/Button/Button'

const SectionSelector = ({transferSection, setTransferSection}) => {
  return (
    <div className={st.selector}>
         <div className={st.buttonContainer}>
            <Button 
                text={'General'} 
                variant={ transferSection ? VARIANTS.PRIMARY : VARIANTS.POSSITIVE}
                click={()=>setTransferSection(false)}
            />
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Transferencias'} 
                variant={ transferSection ? VARIANTS.POSSITIVE : VARIANTS.PRIMARY}
                click={()=>setTransferSection(true)}
            />
        </div>
    </div>
  )
}

export default SectionSelector