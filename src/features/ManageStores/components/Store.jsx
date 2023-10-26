import React from 'react'
import st from '../ManageStores.module.css'
import BasicInput from '../../../components/Inputs/BasicInput/BasicInput'

const Store = ({store,index, updateName}) => {
  return (
    <div className={st.store}>
        <label className={st.label}>{`Negocio ${index + 1}`}</label>
        <div className={st.inputContainer}>
            <BasicInput 
                inputType={'text'} 
                placeholder={''}
                defbalue={store}
                change={value => updateName(value)}
            />
        </div>
    </div>
  )
}

export default Store

/*
 <span>{data}</span>
        <div className={st.deleteButtonContainer}>
            <Button 
                text={'x'} 
                variant={VARIANTS.NEGATIVE} 
                click={deleteStore}
            />
        </div>
*/