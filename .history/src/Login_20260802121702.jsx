import React from 'react'
import { useState } from 'react'
import { supabase } from './data/Export/Supabase.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {(  name="Emilia" && password==="Emilia123" )
        navigate("/emlia")
   try {( name="Alexander" && password==="Alexander123")
        navigate("/alex")
  
      console.log('Logged in user:', user)
    } catch (error) {
      console.error('Error logging in:', error.message)
    }navigate("/emlia")
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
