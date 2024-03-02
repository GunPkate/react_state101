import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter,RouterProvider,createBrowserRouter } from 'react-router-dom'
import FormInput from './FormInput.jsx'

const router = createBrowserRouter([

  {
    path: "/",
    element: <FormInput/>
  },
  {
    path: "/home",
    element: <h2>Home</h2>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
