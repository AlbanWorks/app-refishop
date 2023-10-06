import React,{useState} from 'react'
import Account from './components/Account/Account'
import st from './ManageAccounts.module.css'
import ROLES from '../../utils/enums/roles'

const FS = {
    WAITING:'waiting',
    SUCSESS:'sucsess',
    ERROR:'error'
}

const employeesProvisional = [
    {
        profile_picture: '/profile.jpg',
        username: 'Juancito',
        role: ROLES.ADMIN
    },
    {
        profile_picture: '/profile.jpg',
        username: 'Pepe',
        role: ROLES.EMPLOYEE
    }
]

const ManageAccounts = () => {
    const [fetchState, setfetchState] = useState(FS.SUCSESS)
    const [employees, setEmployees] = useState(employeesProvisional)
  return (
    <div className={st.container}>
    {
        fetchState === FS.SUCSESS ?
        employees.map((employee, index)=>
            <Account key={index} employee={employee}/>
        )
        :fetchState === FS.ERROR ?
        <div>err</div>
        :null
    }
    </div>
  )
}

export default ManageAccounts