import ROLES from '../enums/roles'
import SECTIONS from '../enums/sections'

const adminSections = [
    SECTIONS.MANAGE_ACCOUNTS,
    SECTIONS.HANDLE_REQUESTS,
    SECTIONS.HANDLE_REPORTS,
    SECTIONS.VISUALIZE_EMPLOYEE_TIMES,
    SECTIONS.CHECK_ENTRY_AND_EXIT,
    SECTIONS.MANAGE_STORES,
    SECTIONS.EDIT_PROFILE,
]

const cashierSections = [
    SECTIONS.CHECK_ENTRY_AND_EXIT,
    SECTIONS.MAKE_REPORTS,
    SECTIONS.MAKE_REQUESTS,
    SECTIONS.EDIT_PROFILE
]

const employeeSections = [
    SECTIONS.CHECK_ENTRY_AND_EXIT,
    SECTIONS.MAKE_REQUESTS,
    SECTIONS.EDIT_PROFILE
]



const getSection = (role) => {
    if (role === ROLES.ADMIN) return adminSections
    else if (role === ROLES.CASHIER) return cashierSections
    else if (role === ROLES.EMPLOYEE) return employeeSections
}

export default getSection