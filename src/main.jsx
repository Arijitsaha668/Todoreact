import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoFr from './components/TodoFr.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode basename="/Todoreact/">
     <App />
   </React.StrictMode>,
)
