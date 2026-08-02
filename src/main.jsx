import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Homing from "./Homing.jsx"
import Actions from "./Actions.jsx"
import Emilia from "./Emilia.jsx"
import Alexander from "./Alexander.jsx"

const router = createBrowserRouter ([
{path:"/", 
  element:<Homing/>
}  ,
{path:"/action", 
  element:<Actions/>
},
{path:"/emlia", 
  element:<Emilia/>
}, 
{path:"/alex", 
  element:<Alexander/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
