import React from 'react'
import st from '../MakeCashflowReports.module.css'
import Input from './Input'

const General = ({general, setGeneral}) => {

    const handle = (key, value) => {
        let generalClone = {...general}
        generalClone[key] = parseFloat(value) 
        setGeneral(generalClone)
    }

  return (
    <div className={st.general}>
        <Input title ={'Efectivo'} handle={value=>handle('cash', value)}/>
        <Input title ={'Débito'} handle={value=>handle('debit', value)}/>
        <Input title ={'Crédito'} handle={value=>handle('credit', value)}/>
        <Input title ={'Payway'} handle={value=>handle('payway', value)}/>
        <Input title ={'Prisma'} handle={value=>handle('prisma', value)}/>
        <Input title ={'Mercado Pago'} handle={value=>handle('mercadopago', value)}/>
    </div>
  )
}

export default General