import React,{useState} from 'react'
import FS from '../../utils/enums/fetchStates'

const MakeRequests = ({userData}) => {
    const [fetchState, setFetchState] = useState(FS.IDLE)
    const [message, setMessage] = useState('')

    return (
        <div>

        </div>
    )
}

export default MakeRequests