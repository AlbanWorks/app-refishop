import React from 'react'
import st from './Report.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import Table from '../../../../components/Table/Table'

const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Report = ({title, colTitles, sectionData}) => {

    const getTotal = (section) => {
        let total = 0;
        section.forEach(row => {
            if( typeof row.monto === 'number') total += row.monto
            else return 'error'
        });

        return currency.format(total)
    }

  return (
    <div className={st.container}>
        <DropdownBox title={title} state={getTotal(sectionData)}>
            <Table titles={colTitles} data={sectionData}/>   
        </DropdownBox>
    </div>
  )
}

export default  Report