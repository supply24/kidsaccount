import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table} from "react-bootstrap"
import {Link} from "react-router-dom"





const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    const [kredit,setKredit]=useState("")
    const [kopnto, setKonto]=useState([])

    useEffect(()=>{
      getEconomy1()
    }, [])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase
    .from("Accounting")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}

const newTime = accounter.flatMap(item=>item.konto).filter(item =>item.kontox==="112")
console.log(newTime)
const exTime = newTime.map(item=>item)
console.log(exTime)


  return (
    <div>
      <Table> 
        <tr>
          <th>Datum</th>
          <th>Insatt</th>
          <th>Uttag</th>
          <th>Summa</th>
        </tr>

<tbody> 

    

    {exTime.map((comp, index)=>(
      <tr> 
      <td key={index}>
        {comp.datetime}</td><td>{comp.kontox}</td><td>{comp.kredit}</td></tr>
    ))}

</tbody>

      </Table>
    </div>
  )
}

export default Emilia
