import React from 'react'
import st from './DebitReport.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'

const DebitReport = ({reportData}) => {
  return (
    <div className={st.container}>
        <DropdownBox title={'Débito'} state={'fecha'}>
            {
                <div className={st.row}>
                    <span className={st.element}>{reportData.monto}</span>
                </div>
            }   
        </DropdownBox>
    </div>
  )
}

export default  DebitReport