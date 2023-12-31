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
        <Input title ={'Efectivo'} 
            handle={value=>handle('cash', value)}
            defvalue={general.cash}
        />
        <Input title ={'Fuddo'} 
            handle={value=>handle('fuddo', value)}
            defvalue={general.fuddo}
        />
         <Input title ={'Cinagos'} 
            handle={value=>handle('cinagos', value)}
            defvalue={general.cinagos}
        />
        <Input 
            title ={'Débito'} 
            handle={value=>handle('debit', value)}
            defvalue={general.debit}
        />
        <Input 
            title ={'Crédito'} 
            handle={value=>handle('credit', value)}
            defvalue={general.credit}
        />
        <Input 
            title ={'Payway'} 
            handle={value=>handle('payway', value)}
            defvalue={general.payway}
        />
        <Input 
            title ={'Prisma'} 
            handle={value=>handle('prisma', value)}
            defvalue={general.prisma}
        />
        <Input 
            title ={'Mercado Pago'} 
            handle={value=>handle('mercadopago', value)}
            defvalue={general.mercadopago}
        />
        <Input 
            title ={'QR'} 
            handle={value=>handle('qr', value)}
            defvalue={general.qr}
        />
    </div>
  )
}

export default General