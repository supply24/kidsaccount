import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js"
import {supabase} from "./data/Export/Supabase.jsx"
import {Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Homing = () => {
  const [accounter, setAccounter]=useState([])
  const [kredit, setKredit]=useState("")


useEffect(()=>{
getAccounters();
 }, [])

async function getAccounters (){
  const {data, error} =await supabase
.from ("Accounting")
.select("*")
//.select(", kredit konto->>kredit,  kontox konto->>kontox, debet konto->>debet")
setAccounter(data)
console.log("konton hämtade", data ?data: "ej hämtad data")}




  return (
    <div>
    {accounter.map((comp)=>{
      return(
      <Col key={comp.id}>
       {comp.datetime} {`${comp.kontox ? comp.kontox:"-"}`}
       {comp.konto}
       
        </Col>
        
      )
    })}

    <Link to ="/action">Action</Link>
    </div>
  )
}

export default Homing
