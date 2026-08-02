import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table} from "react-bootstrap"
import {Link} from "react-router-dom"




const Alexander = () => {
    const [accounter, setAccounter]=useState([])
    const [accounter1, setAccounter1]=useState([])

    useEffect(()=>{
      getEconomy1()
      getEconomy2()
    }, [])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase.from("new7")
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

const newTime1 = accounter.flatMap(item=>item).filter(item=>item.kontox_value==="562")
const exTime1 = newTime1.map(item=>item)
console.log(exTime1)

const newTime2 = accounter1.flatMap(item=>item).filter(item=>item.kontox_value==="562")
const exTime2 = newTime2.map(item=>item)
console.log(exTime2)


  return (
    <div>
      <Link to="/">Back</Link>
      <Table> <thead><tr>
        <th>Datum</th>
        <th>Kort</th>
        <th>Insatt</th>
        <th>Uttag</th>
        <th>Summa</th>       
        </tr></thead> 
<tbody>
     {exTime1.map((comp, index)=>(
      <tr key={index}>
        <td>{comp.datetime}</td>
        <td>{comp.kontox_value}</td>
        <td>{comp.debet_value}</td>
        <td>{comp.kredit_value}</td>
      <td>{comp.newsum}</td></tr>
     ))
     }
     </tbody>
  
{exTime2.map((comp, index)=>(
  <tr key={index}>
  TOTAL SUM  <td>{comp.sum}</td>
</tr>))}
    
     </Table>
    </div>
  )
}

export default Alexander
