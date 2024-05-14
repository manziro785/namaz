import React, { useState } from 'react' 
import {RouterProvider} from 'react-router-dom'
import {router} from './app/api.jsx'
import './global.css'

const App = () => {
 
  return <RouterProvider router={router} />
}

export default App