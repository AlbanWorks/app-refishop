import { v4 as uuidv4 } from 'uuid';
import SECTIONS from '../enums/sections';

const handleChange = (index, propname, value, sectionData) => {
    let sectionClone = [...sectionData]
    sectionClone[index][propname] = value
    return sectionClone
}

const addRow = (data, section) => {
    let sectionClone = [...data]
    if(section === SECTIONS.DEBIT){
        sectionClone.push({id:uuidv4(), monto:null})
    } 
    else if (section === SECTIONS.CREDIT) {
        sectionClone.push({id:uuidv4(), monto:null, ticket:null})
    } 
    else if (section === SECTIONS.TRANSFER) {
        sectionClone.push({id:uuidv4(), monto:0, transf:0})
    } 
    else if (section === SECTIONS.CLOSES) {
        sectionClone.push({id:uuidv4(), prisma:0, payway:0, mp:0 })
    } 
    return sectionClone
}

const deleteRow = (index,sectionData) => {
    let sectionClone = [...sectionData]
    sectionClone.splice( index, 1)
    return sectionClone
}

export {deleteRow, handleChange, addRow}

