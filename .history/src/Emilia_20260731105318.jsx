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
    .from("new2")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}


const newTime1 = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112")
console.log(newTime1)
const exTime1 = newTime1.map(item=>item)
console.log(exTime1)


  return (
    <div>
      <Link to="/">Back</Link>
      <Table> 
        <tr>
          <th>Datum</th>
          <th>Kort</th>
          <th>Insatt</th>
          <th>Uttag</th>
       
        </tr>

<tbody> 



    {exTime1.map((comp, index)=>(
      <tr key={index}> 
      <td>
        {comp.datetime}</td>
        <td>{comp.kontox_value}</td>
        <td>{comp.debet}</td>
        <td>{comp.kredit}</td>
      
        </tr>
    ))}

</tbody>

      </Table>
    </div>
  )
}

export default Emilia
