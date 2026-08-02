import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"




const Emilia = () => {
    const [accounter, setAccounter]=useState([])

    useEffect(()=>{
      getEconomy1()
    }, [])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase.from("Accounting")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}

const newTime = accounter.flatMap(item=>item.konto).filter(item=>item.kontox==="112")
console.log(newTime)


  return (
    <div>
      <Table> 
        <tr>
          <th>Datum</th>
          <th>Insatt</th>
          <th>Uttag</th>
          <th>Summa</th>
        </tr>



      </Table>
    {newTime.map((comp, index)=>(
      <Col key={index}>
        {comp.datetime}{comp.debet}{comp.kredit}</Col>
    ))}
    </div>
  )
}

export default Emilia
