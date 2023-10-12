import React from 'react'
import st from './CreditSection.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'
import AddRowButton from '../../components/AddRowButton/AddRowButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import SECTIONS from '../../utils/enums/sections';
import {addRow, deleteRow } from '../../utils/methods/handleChanges';

const CreditSection = ({credit, setCredit}) => {
    
    const handleChange = (index, propname, value) => {
        let sectionClone = [...credit]
        sectionClone[index][propname] = value
        setCredit(sectionClone)
    }

  return (
    <div>
            {
                credit.map((item, index)=>
                    <div key={item.id} className={st.container}>
                        <div className={st.inputContainer}>
                            <BasicInput 
                                inputType={'number'} 
                                placeholder={'monto'}
                                defbalue={item.monto}
                                change={(value)=>handleChange(index,'monto', value)}
                            />
                        </div>
                        <div className={st.inputContainer}>
                            <BasicInput 
                                inputType={'number'} 
                                defbalue={item.ticket}
                                placeholder={'ticket factura'}
                                change={(value)=>handleChange(index,'ticket', value)}
                            />
                        </div>
                        <DeleteButton deleteRow={()=>setCredit(deleteRow(index, credit))}/>
                    </div>
                )
            }
        <AddRowButton addRow={()=>setCredit(addRow(credit,SECTIONS.CREDIT))}/>     
    </div>
  )
}

export default CreditSection