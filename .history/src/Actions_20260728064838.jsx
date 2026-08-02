import React, {useEffect, useState} from 'react'
import {Col, Row, Button, Form} from "react-bootstrap"
import { createClient } from "@supabase/supabase-js"
import {supabase} from "./data/Export/Supabase.jsx"
import number from "./data/Export/Numbers.jsx"
import {Link} from "react-router-dom"

const Actions = () => {
  const [konto, setKonto]=useState("")
  const [numbers, setNumbers]=useState("")
  const [datetime, setDatetime]=useState("")
  const [kredit, setKredit]=useState("")
  const [debet, setDebet]=useState("")
  const [kontox, setKontox]=useState("")
  const [accounter, setAccounter]=useState("")
  const [ setSum ]=useState("")

  const handleNumbers =(e)=>{
    setNumbers(e.target.value)
  }

  const handleDatetime=(e)=>{
    setDatetime(e.target.value)
      }

      const handleKredit = (e)=>{
        setKredit(e.target.value)
      }
      const handleDebet = (e)=>{
        setDebet(e.target.value)
      }

      const handleKontox = (e)=>{
        setKontox(e.target.value)
      }
      const handleSum = (e)=>{
        setSum(e.target.value)
      }

      const payload= [{
    konto :{ kredit, debet, kontox}, datetime
               }]
      const handleSubmit=async(e)=>{
        e.preventDefault()
          const {data, error} = await supabase.from("Accounting").insert(payload);
          if(error)
            console.error("error yes", error)
            else{
              console.error("konto info", data)
      }}

      useEffect(()=>{
        getCounts()
      },[]
      )

      async function getCounts(){
        const {data, error} = await supabase.from("Accounting").select("*")
        setAccounter(data)
        console.log("konton hämtade", data ? data: "no fetch")
      }

      const sum = (debet) - (kredit)
      

  return (
    <div>
      <Link to="/">Back</Link>
      <Form onSubmit={handleSubmit}> 
<input type="date" value={datetime} onChange={handleDatetime} />
<input type="text" value={kontox} onChange={handleKontox} placeholder='kontox'/>
<input type="text" value={kredit} onChange={handleKredit} placeholder='kredit'/>
<input type="text" value={debet} onChange={handleDebet} placeholder='debet'/>
<input type="number" value={sum} onChange={handleSum} placeholder='sum'/>

        <Form.Group>
          <Form.Select
          type="dropdown"
          onChange={(e)=>setKonto(e.target.value)}>
            <option value={konto}>Välj Konto</option>
            {number.map((account)=>(
              <option key={account.id}>{account.kontox}</option>
            ))}
</Form.Select>
<Form.Control>  
    </Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
        
         </Form>   </div>
  )
}

export default Actions
