import React from 'react'
import st from './EmpTimes.module.css'
import FS from '../../../utils/enums/fetchStates'
import Spinner from '../../../components/Spinner/Spinner'

const Table = ({times, fetchState}) => {
  return (
    <div className={st.table}>
        {
            fetchState === FS.FETCHING ?
            <Spinner/>
            :fetchState === FS.SUCSESS ?
            <div>tabla</div>
            :null
        }
    </div>
  )
}

export default Table