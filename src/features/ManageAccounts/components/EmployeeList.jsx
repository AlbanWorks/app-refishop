import React from 'react'
import st from '../ManageAccounts.module.css'
import Account from './Account'
import NewAccount from './NewAccount'

const EmployeeList = ({employees, newAccounts, stores, refresh={refresh}}) => {

  return (
    <>
        {
            employees.map((employee, index)=>
                <Account 
                    key={index} 
                    employee={employee} 
                    stores={stores} 
                    refresh={refresh}
                />
            )
        }
        {
            newAccounts.length > 0 ? <h5 className={st.subtitle}>Nuevos Usuarios</h5> : null
        }
        {
            newAccounts.map((account, index)=>
                <NewAccount 
                    key={index} 
                    employee={account}
                    stores={stores} 
                    refresh={refresh}
                />
            )
        }
    </>
  )
}

export default EmployeeList