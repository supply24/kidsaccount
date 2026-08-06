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
    <Col>{trans.kredit1_value}</Col>
    </Row>
    </>
  )
} 

