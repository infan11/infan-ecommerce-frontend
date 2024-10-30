import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <Toaster/>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
