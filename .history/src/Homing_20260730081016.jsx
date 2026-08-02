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
//console.log(Object.keys(accounter[0]))

//              {`${comp.kontox ? comp.kontox:"-"}`}

/*
const kontoById = Object.fromEntries(
  accounter.map(row=>[row.id , row.konto])
)
console.log(kontoById)
*/


//const kontoMap = new Map(accounter.map(row=>[row.id, row.konto])
//)
//console.log(kontoMap)

//const newMapper = JSON.stringify(accounter)
//console.log(newMapper)

//const newAccount = JSON.stringify(accounter)
//console.log(newAccount)
//console.log(JSON.stringify(accounter, null, 2)) 


//CORRECT FINDING THE DATE. 
const newere = accounter.find(item => item.datetime === "2026-07-16");
console.log(newere)

const newere1 = accounter.find(item=>item.konto===128)
console.log(newere1)

//THIS WORKS FOR FINDING ITEMS INSIDE NESTED DOC. 
const newTime = accounter.flatMap(item=>item.konto).filter(item =>item.kontox==="128")
console.log(newTime)
//NOT GOOD
const newTime100 = accounter.flatMap(item=>item.konto)
console.log(newTime100)
//GOOD
const newTime200 = newTime100.map(item=>item)
console.log(newTime200)
const exTime = newTime.map(item=>item)
console.log(exTime)




  return (
    <div>
      <Row>   <Link to ="/action">Action</Link>      </Row>

    {newTime1.map((comp, index)=>(
            <div key={index}>
        Original2||
  {comp.datetime}||{comp.id}kontox:{comp.kontox}</div>)
    )}
  
  <h3>only 128</h3>
  {exTime.map((comp, index)=>(
    <Col key={index}>{comp.kontox}|| {comp.kredit}</Col>
  ))}

<h3>ALL </h3>
  {anyTime.map((comp, index)=>(
    <Col key={index}>{comp.kontox}</Col>
  ))}



   




</div>

  
      )}
     
  

  

export default Homing
