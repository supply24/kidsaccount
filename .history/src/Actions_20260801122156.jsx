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
  const [kredit, setKredit]=useState(0)
  const [debet, setDebet]=useState(0)
  const [kontox, setKontox]=useState("")
  const [accounter, setAccounter]=useState("")
  const [texting, setTexting]=useState("")
 // const [ setSumx ]=useState("")

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
      const handleTexting = (e)=>{
        setTexting(e.target.value)
      }

  
          useEffect(()=>{
        getCounts()
      },[]
      )  

      const payload= [{
    konto :{ debet, kontox}, datetime, texting,
    konto1: {kredit, kontox}
               }]
      const handleSubmit=async(e)=>{
        e.preventDefault()
          const {data, error} = await supabase.from("Accounting").insert(payload);
          if(error)
            console.error("error yes", error)
            else{
              console.error("konto info", data)
      }}

      const payload1 = [{
        konto1 :{ kredit, kontox}
                   }]
      const handleSubmit1=async(e)=>{
        e.preventDefault()
          const {data, error} = await supabase.from("Accounting").insert(payload1);
          if(error)
            console.error("error yes", error)
            else{
              console.error("konto info", data)
      }}

  

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

<Col align="center" md={4} className="mx-auto" style={{marginTop:"20px"}}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Select type ="dropdown" onChange={(e)=>setKontox(e.target.value)}>
    <option value={kontox}>Konto</option>
    {number.map((account)=>(
      <option key={account.id}>{account.kontox}</option>
    ))}
  </Form.Select>
</Form.Group>
</Col>
<input type="date" value={datetime} onChange={handleDatetime} />
<hr></hr>
 <Col>Text:&nbsp;&nbsp;   <input type="text" value={texting} onChange={handleTexting} placeholder='text'/></Col>
 
 <Col>Kredit: <input type="number" value={kredit} onChange={handleKredit} placeholder='kredit'/>&nbsp;
  </Col>

<Col align="center" md  ={4} className="mx-auto" style={{marginTop:"20px"}}>      
  </Col>
  </Col>
  <Button type="submit" style={{marginBottom:20}}>Submit</Button>
</Form>
 </Card>
 </Container>
 <Row> 
 <Container>
      <Card>
        <Form onSubmit={handleSubmit1}>
          <Col md={4} className="mx-auto" style={{marginTop:"20px"}}>

<hr></hr>
<input type="number" value={debet} onChange={handleDebet} placeholder='debet'/>&nbsp;


<Col align="center" md  ={4} className="mx-auto" style={{marginTop:"20px"}}>      
  </Col>
  </Col>
  <Button variant="secondary" type="submit" style={{marginBottom:20}}>Submit</Button>
</Form>
      </Card>
    </Container>
   
  
  </Row>
          </div>
  )
}

export default Actions
