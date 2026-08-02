import React, {useEffect, useState} from 'react'
import {Col, Row, Button, Form, Container, Card} from "react-bootstrap"
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
  const [ setSumx ]=useState("")

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
      const handleSumx = (e)=>{
        setSumx(e.target.value)
      }

            const sumx = (debet) - (kredit)

      const payload= [{
    konto :{ kredit, debet, kontox, sumx}, datetime
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

      function Break () {
        return (
          <div style={{marginTop:"20px"}}></div>)
      }

      

  return (
    <div>
      <Link to="/">Back</Link>

        <Container>



          <Card>
            <Form onSubmit={handleSubmit}>
              <Col md={4} className="mx-auto" style={{marginTop:"20px"}}>
<input type="date" value={datetime} onChange={handleDatetime} /><Break/>
<input type="number" value={kredit} onChange={handleKredit} placeholder='kredit'/>&nbsp;
<input type="number" value={debet} onChange={handleDebet} placeholder='debet'/>&nbsp;
<input type="number" value={sumx} onChange={handleSumx} placeholder='sumx'/>&nbsp;

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Select
          type="dropdown"
          onChange={(e)=>setKontox(e.target.value)}>
            <option value={kontox}>Välj Konto</option>
            {number.map((account)=>(
              <option key={account.id}>{account.kontox}</option>
            ))}
</Form.Select>
        </Form.Group>
        


        <Button type="submit">Submit</Button></Col>
        
         </Form> </Card></Container>  </div>
  )
}

export default Actions
