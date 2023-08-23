import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente}  from './PrimerComponente'
import { ContadorApp } from './ContadorApp'
import Listado from './Listado'
import { UsersApp } from './UsersApp'

//Lee el div del index.html y renderiza con REACT
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp/>
  </React.StrictMode>,
)

 