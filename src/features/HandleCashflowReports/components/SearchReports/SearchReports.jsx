import React from 'react'
import st from './SearchReports.module.css'
import DateInput from '../../../../components/Inputs/DateInput/DateInput'
import { Button, VARIANTS } from '../../../../components/Button/Button'

const SearchReports = () => {
  return ( 
    <div className={st.searchReports}>
        <div className={st.dateContainer}>
            <DateInput  change={()=>{}}/>
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Buscar Reportes'} 
                variant={VARIANTS.PRIMARY}
                click={()=>{}}
            />
        </div>
    </div>
  )
}

export default SearchReports