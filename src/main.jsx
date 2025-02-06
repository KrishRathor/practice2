import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Rapper from './components/Rapper.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <Rapper> */}
      <App />
    {/* </Rapper> */}
  // </BrowserRouter>
)
