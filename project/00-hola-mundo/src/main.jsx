import React from 'react'  //importando react desde react
import ReactDOM from 'react-dom/client'    //el dom
import { App } from './assets/App'
import './assets/App.css'

const root =  ReactDOM.createRoot(document.getElementById('root'))



root.render(   //es el elemento donde queremos que se renderice
 <App />
)