import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js"
import {supabase} from "./data/Export/Supabase.jsx"
import {Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Homing = () => {
  const [accounter, setAccounter]=useState([])


useEffect(()=>{
getAccounters();
 }, [])

async function getAccounters (){
  const {data, error} =await supabase
.from ("Accounting")
.select(`datetime, kredit`)
//.select(", kredit konto->>kredit,  kontox konto->>kontox, debet konto->>debet")
setAccounter(data)
console.log("konton hämtade", data ?data: "ej hämtad data")}


  return (
    <div>
    {accounter.map((comp)=>(
      <Col key={comp.id}>
       {comp.datetime} {comp.kredit}
       
        </Col>
    ))}

    <Link to ="/action">Action</Link>
    </div>
  )
}

export default Homing
