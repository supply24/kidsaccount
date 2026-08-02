import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js"
import {supabase} from "./data/Export/Supabase.jsx"

const Homing = () => {
  const [accounter, setAccounter]=useState([])


useEffect(()=>{
getAccounters();
 }, [])

async function getAccounters (){
  const {data, error} =await supabase
.from ("Accounting")
.select("*")
setAccounter(data)
console.log("konton hämtade", data ?data: "ej hämtad data")}


  return (
    <div>

    {accounter.map((comp)=>(
      <Col key={comp.id}>
       {comp.konto}
       
        </Col>
    ))}
    </div>
  )
}

export default Homing
