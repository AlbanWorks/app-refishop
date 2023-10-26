import React,{useState, useEffect} from 'react'
import st from './ManageStores.module.css'
import FS from '../../utils/enums/fetchStates'
import StoresUI from './components/StoresUI'
import Spinner from '../../components/Spinner/Spinner'
import {getStoresFromFB, setStoresInFB} from './methods/Stores'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'

const ManageStores = () => {
    const [stores, setStores] = useState([])
    const [fetchState, setFetchState] = useState(FS.FETCHING)
    const [updateState, setUpdateState] = useState(FS.IDLE)

    useEffect(() => {
        fetchStores()
    }, [])
    
    const fetchStores = async () => {
        setFetchState(FS.FETCHING)
        const query = await getStoresFromFB()
        if(query.error)setFetchState(FS.ERROR)
        else{
            setStores(query)
            setFetchState(FS.IDLE)
        }
    }
    const updateStores = async() => {
        setUpdateState(FS.FETCHING)
        const query = await setStoresInFB(stores)
        if(query.error) setUpdateState(FS.ERROR)
        else setUpdateState(FS.SUCSESS)
    }
    
  return (
    <div className={st.container}>
        {
            fetchState === FS.FETCHING ?
                <Spinner/>
            :fetchState === FS.IDLE ?
                <StoresUI 
                    stores={stores}
                    setStores={value=>setStores(value)}
                    updateState={updateState}
                    setUpdateState={value=>setUpdateState(value)}
                    updateStores={updateStores}
                />
            : fetchState === FS.ERROR ?
                <ConfirmCard 
                    info={'Un error ha ocurrido, revise su conexión e inténtelo nuevamente.'}
                    buttonText={'Reintentar'} 
                    nextState={fetchStores}                            
                />
            :null
        }  
    </div>
  )
}

export default ManageStores