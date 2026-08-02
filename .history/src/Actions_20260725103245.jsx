import React, {useState} from 'react'
import {Col, Row, Button, Form} from "react-bootstrap"

import number from "./data/Export/Numbers.jsx"

const Actions = () => {
  const [konto, setKonto]=useState("")
  const [numbers, setNumbers]=useState("")
  const [datetime, setDatetime]=useState("")

  const handleNumbers =(e)=>{
    setNumbers(e.target.value)
  }

  const handleDatetime=(e)=>{
    setDatetime(e.target.value)
      }

  return (
    <div>
<input type="date" value="datetime" onChange={(e)=>setDatetime(e.target.value)}/>



        <Form.Group>
          <Form.Select
          type="dropdown"
          onChange={(e)=>setKonto(e.target.value)}>
            <option value={konto}>Välj Konto</option>
            {number.map((account)=>(
              <option key={account.id}>{account.konto}</option>
            ))}
</Form.Select>
<Form.Control>  
    </Form.Control>
        </Form.Group>
    </div>
  )
}

export default Actions
