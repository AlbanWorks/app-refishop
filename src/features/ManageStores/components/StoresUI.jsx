import React from 'react'
import st from '../ManageStores.module.css'
import Store from './Store'
import SaveChanges from './SaveChanges'

const StoresUI = ({stores, setStores, updateState, setUpdateState, updateStores}) => {

    const updateName = (value, index) => {
        let storesClone = [...stores]
        storesClone[index]= value
        setStores(storesClone)
    }

  return (
    <div className={st.storesUIContainer}>
        {
            stores.map((store, index)=>
                <Store 
                    store={store}
                    index={index}  
                    updateName={value=>updateName(value, index)}
                />
            )           
        }
        <SaveChanges 
            updateState={updateState} 
            setUpdateState={value => setUpdateState(value)}
            updateStores={updateStores}
        />
    </div>
  )
}

export default StoresUI


