import React from 'react'
import st from './TransferSection.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'
import AddRowButton from '../../components/AddRowButton/AddRowButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import SECTIONS from '../../utils/enums/sections';
import {addRow, deleteRow } from '../../utils/methods/handleChanges';

const TransferSection = ({transfer, setTransfer}) => {
    
    const handleChange = (index, propname, value) => {
        let sectionClone = [...transfer]
        sectionClone[index][propname] = parseFloat(value) 
        setTransfer(sectionClone)
    }

  return (
    <div>
            {
                transfer.map((item, index)=>
                    <div key={item.id} className={st.container}>
                        <div className={st.inputContainer}>
                            <BasicInput 
                                inputType={'number'} 
                                placeholder={'monto'}
                                defbalue={transfer[index].monto}
                                change={(value)=>handleChange(index,'monto', value)}
                            />
                        </div>
                        <div className={st.inputContainer}>
                            <BasicInput 
                                inputType={'number'} 
                                placeholder={'n° transf.'}
                                defbalue={transfer[index].transf}
                                change={(value)=>handleChange(index,'transf', value)}
                            />
                        </div>
                        <DeleteButton deleteRow={()=>setTransfer(deleteRow(index, transfer))}/>
                    </div>
                )
            }
        <AddRowButton addRow={()=>setTransfer(addRow(transfer,SECTIONS.TRANSFER))}/>   
    </div>
  )
}

export default TransferSection