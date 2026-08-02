import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homing from "./Homing.jsx"
import Actions from "./Actions.jsx"

const router = createBrowserRouter ([
{path:"/", 
  element:<Homing/>
}  ,
{path:"/action", 
  element:<Actions/>
},
{path:"/emilia", element:<Emilia/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
