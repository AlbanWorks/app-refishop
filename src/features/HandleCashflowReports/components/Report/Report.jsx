import React from 'react'
import st from './Report.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import Table from '../../../../components/Table/Table'

const Report = ({title, colTitles, sectionData}) => {

    const getTotal = (section) => {
        let total = 0;
        section.forEach(row => {
            if( typeof row.monto === 'number') total += row.monto
            else return 'error'
        });
        return total
    }

  return (
    <div className={st.container}>
        <DropdownBox title={title} state={'$' + getTotal(sectionData)}>
            <Table titles={colTitles} data={sectionData}/>   
        </DropdownBox>
    </div>
  )
}

export default  Report