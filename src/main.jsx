import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Kita ganti App dengan Exercise
import Exercise from './Exercise'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Exercise />
  </React.StrictMode>
)