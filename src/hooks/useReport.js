import React,{useState} from 'react'

const informe = {
    employee: {id:'id', emName:'nombreEmpleado'},
    timestamp: 'timestamp',
    debito:[monto, monto, monto],
    credito:[{monto:0 , numero_ticket:0},{monto:0 , numero_ticket:0}],
    transferencias:[{monto:0 , numero_transferencia:0},{monto:0 , numero_transferencia:0}],
    cierre_prisma: '',
    cierre_mercadopago: '',
    cierre_payway: ''
}

const useAuth = ()=>{
    const [report, setReport] = useState(

    )

    
        return {debit,credit,transfer,closes}
    }

    export default useAuth