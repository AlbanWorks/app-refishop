import React,{useState, useEffect} from 'react'
import st from './Request.module.css'
import DropdownBox from '../../../../components/DropdownBox/DropdownBox'
import { Button, VARIANTS } from '../../../../components/Button/Button'
import REQ_TYPES from '../../../../utils/enums/requestTypes'
import { db } from '../../../../services/firebase/firebaseConfig'
import { doc, onSnapshot } from "firebase/firestore";
import { formatAdvance, formatFreeDay } from '../../methods/formatMessages'

const Request = ({request, update, remove}) => {
  
    const updateState = (state) => {
        update(state,request.reqType,request.id)
    }

    useEffect(() => {
        const unsub = onSnapshot(doc(db, `solicitudes/${request.reqType}/todas`, request.id), (doc) => {
            if(doc.data() !== undefined){
                if(doc.data().state !== 'pending') remove()
            }
        })
        return () => unsub()
    }, [])

  return (
    <div className={st.container}>
        <DropdownBox 
            title={request.reqType === REQ_TYPES.FREE_DAY ? 'Día Libre' : 'Adelanto'} 
            state={request.employee}
        >
            {
                request.reqType === REQ_TYPES.FREE_DAY ?
                    <p className={st.requestBody}>{formatFreeDay(request)}</p>
                :
                    <p className={st.requestBody}>{formatAdvance(request)}</p>
            } 
            <div className={st.inferiorModule}>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Denegar'} 
                        variant={VARIANTS.NEGATIVE} 
                        click={()=> updateState('denied')}
                    />
                </div>
                <div className={st.buttonContainer}>
                    <Button 
                        text={'Aceptar'} 
                        variant={VARIANTS.POSSITIVE} 
                        click={()=> updateState('accepted')}
                    />
                </div>
            </div> 
        </DropdownBox>
    </div>
  )
}

export default Request