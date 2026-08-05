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

const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('name', name)
      .eq('password', password)
      .single()

    if (error) {
      console.error('Error logging in:', error.message)
    } else {
      console.log('Logged in user:', data)
      navigate('/emlia') // Redirect to the Emilia page after successful login
      navigate("/alex") // Redirect to the Alex page after successful login
    }
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


      < a href="/emlia">Don't have an account? Register here</a>
    </div>
  )
}

export default Login
