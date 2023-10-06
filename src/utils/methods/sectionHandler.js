import ROLES from '../enums/roles'
import SECTIONS from '../enums/sections'

const adminSections = [
    SECTIONS.HANDLE_REQUESTS,
    SECTIONS.MANAGE_ACCOUNTS,
    SECTIONS.VISUALIZE_EMPLOYEE_TIMES,
    SECTIONS.EDIT_PROFILE,
    SECTIONS.CHECK_ENTRY_AND_EXIT
]

const cashierSections = [
    SECTIONS.CHECK_ENTRY_AND_EXIT,
    SECTIONS.REQUEST_FREE_DAY,
    SECTIONS.REQUEST_ADVANCE,
    SECTIONS.EDIT_PROFILE
]

const employeeSections = [
    SECTIONS.CHECK_ENTRY_AND_EXIT,
    SECTIONS.REQUEST_FREE_DAY,
    SECTIONS.REQUEST_ADVANCE,
    SECTIONS.EDIT_PROFILE
]



const getSection = (role) => {
    if (role === ROLES.ADMIN) return adminSections
    else if (role === ROLES.CASHIER) return cashierSections
    else if (role === ROLES.EMPLOYEE) return employeeSections
}

export default getSection