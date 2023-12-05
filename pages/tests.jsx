import React,{useState,useEffect} from "react"


export default function Tests() {
    const SendOrder = async (order)=>{
         const req = await fetch("/api/hello",{method: 'POST',/*body: JSON.stringify(order)*/})
         const res = await req.json();
         return res
     }

  return (
   <div>
        <button onClick={SendOrder}> preess me uh</button>
   </div>
  )
}

