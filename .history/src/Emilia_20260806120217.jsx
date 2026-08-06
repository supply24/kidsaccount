import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table, Button, Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Trans, Trans1} from "./data/Export/Exporting.jsx"

const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    const [accounter1, setAccounter1]=useState([])
    const [kredit,setKredit]=useState("")
    const [konto, setKonto]=useState([])
    const [trans, setTrans]=useState("")
    const [other, setOther]=useState(false)
    const [acc, setAcc]=useState([])

    const handleChange = () => {
      setOther(!other)
    }

    useEffect(()=>{
      getEconomy1()
    getEconomy2() 
    getEc()
    }, [])
    
    async function getEc(){
      const {data, error} = await supabase.from("Accounting").selct("*")
      setAcc(data)
      
    }
    
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
const xcalibur = acc.flatMap(item=>item)
const newKontox = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112")
const newKontox1 = accounter.flatMap(item=>item).filter(item =>item.kontox1_value==="112")
console.log(newKontox)
console.log(newKontox1)
const sumInsatt = newKontox.reduce((acc,item)=>acc+parseFloat(item.debet_value),0)
const sumUttag = newKontox1.reduce((acc,item)=>acc+parseFloat(item.kredit_value),0)
console.log(sumUttag)
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

      <h1>Kort</h1>

<Card style={{fontSize:10}}><b>
   <Row style={{fontSize:10}}> 
<Col>Datum</Col>
<Col>Text</Col>
<Col>Konto</Col> 
<Col>+</Col>
  <Col>-</Col> </Row> </b>
    
  

    {newKontox.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)).map((trans, index)=>(
      <Trans trans={trans}/> 


    ))}


      {xcalibur > 0 ? xcalibur.sort((a,b)=>new date(b.datetime) - new Date(a.datetime)).map((trans1,index)=>(
        <Trans1 trans1={trans1}/>
      )):"not more"}
      <Row align="center">
         <Col>   INSATT: {sumInsatt} </Col>
        <Col>UTTAG: {sumUttag} </Col>
        </Row>

        </Card> 
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
<br></br>
<h1>RESURS</h1>

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
