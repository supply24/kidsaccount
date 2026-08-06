import React from 'react'
import { supabase } from './Supabase.jsx'
import {createClient} from "@supabase/supabase-js"
import {Col, Row, Table} from "react-bootstrap"


export function Trans ({trans}){
  return(
    <>
    <Row key={trans.id}><Col>{trans.datetime}</Col>
    <Col>{trans.verifikation}</Col>
    <Col> {trans.kontox_value}</Col>
    </Row>
    </>
  )
} 

