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

//              {`${comp.kontox ? comp.kontox:"-"}`}




  return (
    <div>
      <Row>   <Link to ="/action">Action</Link>      </Row>


    {accounter.map((comp, index)=>{
      return(
      <div key={index}>
  {comp.datetime}

      {konto.map((kont, index)=>{
            return(
              <div key={index}>
              {comp.kontox}

              </div>
            )})}
                        </div>
      )})};
      

     </div>
    )}
   

export default Homing
