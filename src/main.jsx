import 'regenerator-runtime/runtime';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Components/Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import DarkMode from './Components/Home/DarkMode';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Helmet } from 'react-helmet';
// import App from './App.jsx'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <Toaster/>
 

   <Helmet/>
  <RouterProvider router={router} />
   </QueryClientProvider>
  </AuthProvider>
  </StrictMode>,
)
