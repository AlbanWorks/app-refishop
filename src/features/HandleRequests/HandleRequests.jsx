import React, {useState,useEffect} from 'react'
import st from './HandleRequests.module.css'
import Request from './components/Request/Request'
import FS from '../../utils/enums/fetchStates'
import Spinner from '../../components/Spinner/Spinner'
import { fetchRequests, updateRequestState} from './methods/handleRequests'
import ConfirmCard from '../../components/ConfirmCard/ConfirmCard'

const HandleRequests = () => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [requests, setRequests] = useState(null)

    useEffect(() => {
        getRequests()
    }, [])

    const getRequests = async () => {
        setFetchState(FS.FETCHING)
        const query = await fetchRequests()
        if(query.error) setFetchState(FS.ERROR)
        else{
            setRequests(query.docs)
            setFetchState(FS.SUCSESS)
        }
    }
    const handleUpdate = async (state, reqType, id) => {
        await updateRequestState(state, reqType, id)
    }
    const remove = (index) => {
        const requestsClone = [...requests]
        requestsClone.splice(index,1)
        setRequests(requestsClone)
    }

  return (
    <div className={st.container}> 
    {
        fetchState === FS.SUCSESS ?
            requests.map((request, index)=>
                <Request 
                    key={request.key} 
                    request={request}
                    update = {(state, reqType, id)=>handleUpdate(state, reqType, id)}
                    remove={()=>remove(index)}
                />
            )
        :fetchState === FS.ERROR ?
            <div className={st.errorContainer}>
                <ConfirmCard 
                    info={'Un error ha ocurrido al buscar los pedidos de la base de datos, revise su conexión a internet y vuelva a intentarlo'}
                    buttonText={'Aceptar'}
                    nextState={()=>setFetchState(FS.IDLE)}
                />
            </div>
        : 
            <div className={st.spinnerContainer}>
                <Spinner/>
            </div>
    }
    </div>
  )
}

export default HandleRequests