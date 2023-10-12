import React from 'react'
import st from './ClosesSection.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'
import Titles from '../../components/Titles/Titles';
import AddRowButton from '../../components/AddRowButton/AddRowButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import {addRow, deleteRow} from '../../utils/methods/handleChanges'
import SECTIONS from '../../utils/enums/sections';



const ClosesSection = () => {

    const handleChange = (index, propname, value) => {
        let sectionClone = [...debit]
        sectionClone[index][propname] = value
        setDebit(sectionClone)
    }

  return (
    <div>
    <Titles title={'Cierres'} columns={[]}/>
    {
        debit.map((item, index)=>
            <div key={item.id} className={st.container}>
                <div className={st.inputContainer}>
                    <BasicInput 
                        inputType={'number'} 
                        defbalue={item.monto}
                        change={(value)=> handleChange(index,'monto', value)}/>
                </div>
                <DeleteButton deleteRow={()=>deleteRow(index, debit)}/>
            </div>
        )
    }
    <AddRowButton addRow={()=>setDebit(addRow(debit,SECTIONS.DEBIT))}/>    
</div>
  )  
}

export default ClosesSection