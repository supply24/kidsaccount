import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"




const Alexander = () => {
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

const newTime1 = accounter.flatMap(item=>item).filter(item=>item.kontox_value===562)
const exTime1 = newTime1.map(item=>item)
console.log(exTime1)


  return (
    <div>
      Alexander
    </div>
  )
}

export default Alexander
