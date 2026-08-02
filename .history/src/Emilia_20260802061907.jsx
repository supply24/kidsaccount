import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table} from "react-bootstrap"
import {Link} from "react-router-dom"





const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    const [accounter1, setAccounter1]=useState([])
    const [kredit,setKredit]=useState("")
    const [konto, setKonto]=useState([])

    useEffect(()=>{
      getEconomy1()
    getEconomy2()   }, [])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase
    .from("new7")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}

async function getEconomy2(){
  const {data, error} =await supabase.from("new1")
  .select("*")
  setAccounter1(data)
  console.log("hämtade", data? data:"ej hämt")
}


const newTime1 = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112") 
console.log(newTime1)
const exTime1 = newTime1.map(item=>item)
console.log(exTime1)


const newTime2 = accounter1.flatMap(item=>item).filter(item =>item.kontox_value==="112")
console.log(newTime2)
const exTime2 = newTime2.map(item=>item)
console.log(exTime2)

const newTime3 = accounter1.flatMap(item=>item).filter(item =>item.kontox1_value==="112") 
console.log(newTime3)
const exTime3 = newTime3.map(item=>item)
console.log(exTime3)





  return (
    <div>
      <Link to="/">Back</Link>
      <Table> 
        <thead> 
        <tr>
          <th>Datum</th>
          <th>Text</th>
          <th>Kort</th>
          <th>Insatt</th>
          <th>Uttag</th>
             <th>Summa</th>
        </tr>
        </thead>
<tbody> 
    {newTime1.map((comp, index)=>(
      <tr key={index}> 
      <td>
        {comp.datetime}</td>
        <td>{comp.texting}</td>
        <td>{comp.kontox_value}</td>
        <td>{comp.debet_value}</td>
        <td>{comp.kredit_value}</td>
    
        <td>{comp.newsum}</td>
      
        </tr>
    ))}

</tbody>
<tbody>
  {nexTime2.map((comp, index)=>(
    <tr key={index}>
      TOTAL SUMMA - kredit<td>{comp.newsum}</td>
   TOTAL SUMMA - debet   <td>{comp.sumx}</td>
   T sum = <td>{comp.sumx-comp.newsum}</td>
     
    </tr>
  ))}
</tbody>

      </Table>
    </div>
  )
}

export default Emilia
