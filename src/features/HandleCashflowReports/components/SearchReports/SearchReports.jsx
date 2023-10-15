import React,{useState} from 'react'
import st from './SearchReports.module.css'
import DateInput from '../../../../components/Inputs/DateInput/DateInput'
import { Button, VARIANTS } from '../../../../components/Button/Button'

const SearchReports = ({search}) => {
        const [date, setDate] = useState(null)

        const handleDate = (value) => {
            const localTimeDate = value.replace(/-/g, '/')
            setDate(localTimeDate)
        }
        
  return ( 
    <div className={st.searchReports}>
        <div className={st.dateContainer}>
            <DateInput  change={(value)=> handleDate(value)}/>
        </div>
        <div className={st.buttonContainer}>
            <Button 
                text={'Buscar Reportes'} 
                variant={VARIANTS.PRIMARY}
                click={()=>search(date)}
            />
        </div>
    </div>
  )
}

export default SearchReports