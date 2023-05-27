import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/Authproviders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProviders>
 <HelmetProvider>
  <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
  </HelmetProvider>
 </AuthProviders>
  </React.StrictMode>,
)
