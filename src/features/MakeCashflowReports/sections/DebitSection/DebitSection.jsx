import React from 'react'
import st from './DebitSection.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'
import AddRowButton from '../../components/AddRowButton/AddRowButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import {addRow, deleteRow} from '../../utils/methods/handleChanges'
import SECTIONS from '../../utils/enums/sections';

const DebitSection = ({debit, setDebit}) => {

    const handleChange = (index, propname, value) => {
        let sectionClone = [...debit]
        sectionClone[index][propname] = parseFloat(value)  
        setDebit(sectionClone)
    }

  return (
    <div>
        {
            debit.map((item, index)=>
                <div key={item.id} className={st.container}>
                    <div className={st.inputContainer}>
                        <BasicInput 
                            inputType={'number'} 
                            placeholder={'monto'}
                            change={(value)=> handleChange(index,'monto', value)}/>
                    </div>
                    <DeleteButton deleteRow={()=>setDebit(deleteRow(index, debit))}/>
                </div>
            )
        }
        <AddRowButton addRow={()=>setDebit(addRow(debit,SECTIONS.DEBIT))}/>    
    </div>
  )
}

export default DebitSection