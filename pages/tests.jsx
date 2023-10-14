import React,{useState,useEffect} from "react"
import Table from "../src/components/Table/Table"

const data = [
    {a:'a1', b: 'b1'},
    {a:'a2', b: 'b2'},
    {a:'a3', b: 'b3'},
    {a:'a4', b: 'b4'},
    {a:'a5', b: 'b5'},
    {a:'a6', b: 'b6'},
]

export default function Tests() {
    
  return (
   <div>
        <Table titles={['aes', 'beses']} data={data}/>
        
   </div>
  )
}

