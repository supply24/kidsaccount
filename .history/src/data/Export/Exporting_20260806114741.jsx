import React from 'react'
import { supabase } from './Supabase.jsx'
import {createClient} from "@supabase/supabase-js"
import {Col, Row, Table} from "react-bootstrap"


export function Trans ({trans}){
  return(
    <>
    <Row align="center" key={trans.id}>
      <Col>{trans.datetime}</Col>
    <Col>{trans.texting}</Col>
    <Col> {trans.kontox_value}</Col>
    <Col>{trans.debet_value}</Col>
    <Col></Col>
   
    </Row>
    </>
  )
} 

export function Trans1 ({trans1}){
  <Row align="center" key={trans1.id} style={{fontSize:12}}>
    <Col>{trans1.datetime}</Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col>{trans1.kredit_value}</Col>
  </Row>
}

