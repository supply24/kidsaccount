import React, { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js"
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"

const Homing = () => {
  const [accounter, setAccounter]=useState([])
  const [kredit, setKredit]=useState("")
  const [konto, setKonto]=useState([])


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
console.log(Object.keys(accounter[0]))

//              {`${comp.kontox ? comp.kontox:"-"}`}

/*
const kontoById = Object.fromEntries(
  accounter.map(row=>[row.id , row.konto])
)
console.log(kontoById)
*/


const kontoMap = new Map(accounter.map(row=>[row.id, row.konto])
)
console.log(kontoMap)

const kontomapping = accounter[0].konto
console.log(kontomapping)


  return (
    <div>
      <Row>   <Link to ="/action">Action</Link>      </Row>


    {accounter.map((comp, index)=>{
      return(
      <div key={index}>
  {comp.datetime}</div>)}
  
      )}
     
  

     {kontoMap.map((konto, index)=>(
      <Col key={index}>{konto.kontox}</Col>
   ) )}
  
  </div>
  )}

export default Homing
