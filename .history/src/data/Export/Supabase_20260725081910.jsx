import React from "react";
import {createClient} from '@supabase/supabase-js'

/*
const supabaseUrl = 'https://rfzavnmxfanengjuapns.supabase.co'
//const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmemF2bm14ZmFuZW5nanVhcG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NzUzMzMsImV4cCI6MjEwMDM1MTMzM30.uY-HxfNB9RcQpFpu75w03NXVAMYMurzfTEnpVtIfYG8"
const supabase = createClient(supabaseUrl, supabaseKey)
*/

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_URL
)
    