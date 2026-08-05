import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    const [accounter1, setAccounter1]=useState([])
    const [kredit,setKredit]=useState("")
    const [konto, setKonto]=useState([])
    const [other, setOther]=useState(false)

    const handleChange = () => {
      setOther(!other)
    }

    useEffect(()=>{
      getEconomy1()
    getEconomy2() 
    }, [])
    
    
    async function getEconomy1(){
    const {data, error} =await supabase
    .from("new7")
    .select("*")
    setAccounter(data)
    console.log("hämtade", data? data:"ej hämt")
}

async function getEconomy2(){
  const {data, error} =await supabase.from("new1")
  .select("*")
  setAccounter1(data)
  console.log("hämtade", data? data:"ej hämt")
}

const newArray = accounter.reduce((acc,item) =>acc + parseFloat(item.debet_value - item.kredit_value),0); 
console.log("newArray", newArray)
const xray = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112" ||item.kontox1_value==="112")
console.log("xray", xray)
//112
const newTime1 = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112")
const newArr1 = newTime1.reduce((acc, item) => acc + parseFloat(item.debet_value), 0);
//Resurs
const newTime2 = accounter1.flatMap(item=>item).filter(item =>item.kontox_value==="e891")
const newArr2 = newTime2.reduce((acc, item) => acc + parseFloat(item.debet_value - item.kredit_value), 0);


const newKontox1 = accounter.flatMap(item=>item).filter(item =>item.kontox1_value==="112" ||item.kontox1_value==="e891")
const newArr = newKontox1.reduce((acc, item) => acc + parseFloat(item.kredit_value), 0);
const newSumma = newArr1 - newArr
console.log("newSumma", newSumma)

  return (
    <div>
      <Link to="/">Back</Link>
      <Col md={6} lg  ={6} sm={6} xs={6} align="center"> 
      <Table style={{fontSize:12}} striped bordered hover> 
        <thead> 
        <tr>
          <th>Datum</th>
          <th>Text</th>
          <th>Kort</th>
          <th>Insatt</th>
          <th>Uttag</th>
            
        </tr>
        </thead>
<tbody > 
    {newTime1.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)).map((comp, index)=>(
      <tr key={index} style={{marginTop:50}}> 
      <td>
        {comp.datetime}</td>
        <td>{comp.texting}</td>
        <td>{comp.kontox_value}</td>
        <td>{comp.debet_value}</td>
        <td></td>
          </tr>
    ))}

</tbody>



<tbody>

  {newKontox1.map((comp, index)=>(
    <tr key={index}>
      <td>{comp.datetime}</td>
      <td>{comp.texting}</td>
    <td>{comp.kontox1_value}</td>
    <td></td>
        <td>{comp.kredit_value}</td>
           </tr>
  ))}
</tbody>  

      </Table>
      </Col>
      <Col align="left">
         <Col>   INSATT: {newArr1} </Col>
        <Col>UTTAG: {newArr} </Col>
        </Col>
        <hr></hr>


<Button onClick={handleChange}>Emilia</Button>
{other && <Col>

<b>               
TOTAL: {newSumma} </b>
<hr></hr>

<Col>Av:</Col>
<Col>Res:</Col>
</Col>
}


    </div>
  )
}

export default Emilia
