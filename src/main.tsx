import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Screen from './Screen.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Screen />
  </StrictMode>,
)
