import React from 'react'
import st from '../MakeCashflowReports.module.css'
import AddRowButton from './AddRowButton'
import DeleteButton from './DeleteButton'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'
import { v4 as uuidv4 } from 'uuid';

const Transfer = ({transfer, setTransfer}) => {

const handle = (index, key, value) => {
    let transfClone = [...transfer]
    transfClone[index][key] = parseFloat(value)
    setTransfer(transfClone)
}
const deleteRow = (index) => {
    let transfClone = [...transfer]
    transfClone.splice(index,1)
    setTransfer(transfClone)
}
const addRow = () => {
    let transfClone = [...transfer]
    transfClone.push({monto:null, transf:null, id:uuidv4()})
    setTransfer(transfClone)
}

  return (
    <div className={st.transferContainer}>
        {
            transfer.map((item, index)=>
                <div key={item.id} className={st.row}>
                    <div className={st.transferInput}>
                        <BasicInput 
                            inputType={'number'} 
                            placeholder={'monto'}
                            defbalue={transfer[index].monto}
                            change={ value =>handle(index, 'monto', value)}
                        />
                    </div>
                    <div className={st.transferInput}>
                        <BasicInput 
                            inputType={'number'} 
                            placeholder={'n° transf.'}
                            defbalue={transfer[index].transf}
                            change={ value =>handle(index, 'transf', value)}
                        />
                    </div>
                    <DeleteButton deleteRow={()=>deleteRow(index)}/>
                </div>
            )
        }
        <AddRowButton addRow={addRow}/>   
    </div>
  )
}

export default Transfer