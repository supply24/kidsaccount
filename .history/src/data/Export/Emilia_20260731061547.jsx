import React, {useEffect} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"



const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase.from("Accounting")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}
  return (
    <div>
      
    </div>
  )
}

export default Emilia
