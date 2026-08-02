import React, {useState} from 'react'
import {Col, Row, Button, Form} from "react-bootstrap"

import number from "./data/Export/Numbers.jsx"

const Actions = () => {
  const [konto, setKonto]=useState("")
  const [numbers, setNumbers]=useState("")
  const [datetime, setDatetime]=useState("")
  const [kredit, setKredit]=useState("")
  const [debet, setDebet]=useState("")

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

      const payload= [{
    konto :{ kredit: "kredit", debet: "debet", kontox:"kontox"}, datetime
         


      }]
      const handleSubmit=async(e)=>{
        e.preventDefault()
        
          const {data, error} = await supabase.from("Accounting").insert(payload);
          if(error)
            console.error("error yes", error)
            else{
              console.error("konto info", data)
      }}
      

  return (
    <div>
      <Form onSubmit={handleSubmit}> 
<input type="date" value={datetime} onChange={handleDatetime} />
<input type="text" value={kredit} onChange={handleKredit} placeholder='kredit'/>
<input type="text" value={debet} onChange={handleDebet} placeholder='debet'/>



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
