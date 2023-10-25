import React from 'react'
import st from './ClosesSection.module.css'
import BasicInput from '../../../../components/Inputs/BasicInput/BasicInput'

const ClosesSection = ({closes, setCloses}) => {

    const handleChange = (propname, value) => {
        let sectionClone = {...closes}
        sectionClone[propname] = parseFloat(value) 
        setCloses(sectionClone)
    }

  return (
    <div className={st.container}>
        <label className={st.subtitle} >Cierre Prisma</label>
        <div className={st.inputContainer}>
            <BasicInput 
                inputType={'number'}
                defbalue={closes.prisma}
                change={(value)=> handleChange('prisma', value)}/>
        </div>
        <label className={st.subtitle} >Cierre Payway</label>
        <div className={st.inputContainer}>
            <BasicInput 
                inputType={'number'} 
                defbalue={closes.payway}
                change={(value)=> handleChange('payway', value)}/>
        </div>
        <label className={st.subtitle} >Cierre Mercado Pago</label>
        <div className={st.inputContainer}>
            <BasicInput 
                inputType={'number'} 
                defbalue={closes.ml}
                change={(value)=> handleChange('ml', value)}/>
        </div>
    </div>   
  )  
}

export default ClosesSection