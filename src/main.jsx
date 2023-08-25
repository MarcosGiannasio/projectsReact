import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar.jsx'
import Cart from './components/CartWidget.jsx'
/* import App from './App.jsx' */
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
 
)

ReactDOM.createRoot(document.getElementById('ok')).render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
 
)