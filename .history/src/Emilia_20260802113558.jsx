import React, {useEffect, useState} from 'react'
import { createClient } from '@supabase/supabase-js'
import {supabase} from "./data/Export/Supabase.jsx"
import {Col, Row, Table} from "react-bootstrap"
import {Link} from "react-router-dom"





const Emilia = () => {
    const [accounter, setAccounter]=useState([])
    const [accounter1, setAccounter1]=useState([])
    const [kredit,setKredit]=useState("")
    const [konto, setKonto]=useState([])

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


const newTime1 = accounter.flatMap(item=>item).filter(item =>item.kontox_value==="112") 
//const newArr1 = newTime1.reduce((acc, curr) => acc + parseFloat(curr.sumx), 0);
const newArr1 = newTime1.reduce((acc, item) => acc + parseFloat(item.debet_value), 0);
console.log("newTime1", newTime1)
console.log("newArr1", newArr1)

const newKontox1 = accounter.flatMap(item=>item).filter(item =>item.kontox1_value==="112")
const textReducer = newKontox1.reduce((prev, curr) => prev + curr, 0);
console.log("textReducer", textReducer)
const newArr = newKontox1.reduce((acc, item) => acc + parseFloat(item.kredit_value), 0);
console.log("newArr",newArr)
const newSumma = newArr1 - newArr
console.log("newSumma", newSumma)












  return (
    <div>
      <Link to="/">Back</Link>
      <Table style={{fontSize:12}}> 
        <thead> 
        <tr>
          <th>Datum</th>
          <th>Text</th>
          <th>Kort</th>
          <th>Insatt</th>
          <th>Uttag</th>
             <th>Summa</th>
        </tr>
        </thead>
<tbody> 
    {newTime1.map((comp, index)=>(
      <tr key={index}> 
      <td>
        {comp.datetime}</td>
        <td>{comp.texting}</td>
        <td>{comp.kontox_value}</td>
        <td>{comp.debet_value}</td>
          </tr>
    ))}

</tbody>

<td style={{marginTop:50}}></td>

<tbody style={{marginTop:50}}>

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
INSATT: {newArr1} <br/>
UTTAG: {newArr} <br/>
TOTAL: {newSumma}
      </Table>
    </div>
  )
}

export default Emilia
