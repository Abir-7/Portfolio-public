import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Router from './Route.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
    <div className='container mx-auto'>

   
    <QueryClientProvider client={queryClient}>
    <Navbar></Navbar>
      <Router></Router>
      </QueryClientProvider>
     
    </div> </BrowserRouter>
  </React.StrictMode>,
)
