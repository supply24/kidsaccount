import React from 'react'
import {Col, Row, Button, Form} from "react-bootstrap"
import Number from "./data/Export/Numbers.jsx"

const Actions = () => {
  const [konto, setKonto]=useState("")


  return (
    <div>
        <Form.Group>
          <Form.Select
          type="dropdown"
          onChange={(e)=>setNumber(e.target.value)}>
            <option value={konto}>Välj Konto</option>
            {number.map((account)=>(
              <option key={account.id}>{account.numb}</option>
            ))}
               
              
           
          </Form.Select>
<Form.Control>

   
    </Form.Control>



        </Form.Group>
      
    </div>
  )
}

export default Actions
