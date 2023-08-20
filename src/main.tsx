import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FormContextProvider } from './components/context/FormContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormContextProvider>   
      <BrowserRouter> 
        <App />
      </BrowserRouter>  
    </FormContextProvider>
  </React.StrictMode>,
)
