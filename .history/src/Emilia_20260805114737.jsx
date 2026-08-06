import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {trans} from "./data/Export/Exporting.jsx"

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

//112
const newKontox = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112")
const newKontox1 = accounter.flatMap(item=>item).filter(item =>item.kontox1_value==="112")
console.log(newKontox)
console.log(newKontox1)
const sumInsatt = newKontox.reduce((acc,item)=>acc+parseFloat(item.debet_value),0)
const sumUttag = newKontox1.reduce((acc,item)=>acc+parseFloat(item.kredit_value),0)
const sumSum  = sumInsatt - sumUttag
console.log(sumSum)

//Resurs
const newRes = accounter.flatMap(item=>item).filter(item=>item.kontox_value==="e891")
const newRes1 = accounter.flatMap(item=>item).filter(item=>item.kontox1_value==="e891")


const sumInsattRes = newRes.reduce((acc,item)=>acc+parseFloat(item.debet_value), 0)
const sumUttagRes = newRes1.reduce((acc,item)=>acc+parseFloat(item.kredit_value),0)



  return (
    <div>
      <Link to="/">Back</Link>
      <Col> 
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
    {newKontox.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)).map((comp, index)=>(
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
         <Col>   INSATT: {sumInsatt} </Col>
        <Col>UTTAG: {sumUttag} </Col>
        </Col>
        <hr></hr>


<Button onClick={handleChange}>Emilia</Button>
{other && <Col>

<b>               
TOTAL: {sumSum} </b>
<hr></hr>

<Col>Av:</Col>
<Col>Res:</Col>
</Col>
}

<Table style={{fontSize:12}}> 
  <thead>

    <tr>
      <th>datetime</th>
        <th>datetime</th>
          <th>datetime</th>
            <th>datetime</th>
    </tr>
  </thead>
{newRes.map((comp, index)=>(
  <tr key={index}>
 <td>{comp.datetime}</td>
 <td>{comp.texting}</td>
 <td>{comp.kontox1_value}</td>
 <td>{comp.kredit_value}</td>
 </tr>))}
</Table>
 
 



    </div>
  )
}

export default Emilia
