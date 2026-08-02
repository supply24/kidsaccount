import React, { useEffect, useState } from 'react'
import {supabase} from "./data/Export/Supabase.jsx"

const Homing = () => {
  const [accounter, setAccounter]=useState("")


useEffect(()=>{
getAccounters();
 }, [])

async function getAccounters (){
  const {data, error} =await supabase
.from ("accounter")
.select("*")
setAccounter(data)
console.log("konton hämtade", data ?data: "ej hämtad data")}


  return (
    <div>

      Yes I is Homing
    </div>
  )
}

export default Homing
