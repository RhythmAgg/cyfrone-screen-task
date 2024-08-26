import './styles/Screen.css'
import Navbar from './components/Navbar'
import IndentContainer from './components/IndentContainer'
import { useState } from 'react'

function Screen() {
  const [indentType, setIndentType] = useState(-1)
  return (
    <div className='main-container flex flex-row h-full w-full'>
      <Navbar indentType = {indentType} setIndentType = {setIndentType} />
      <IndentContainer indentType = {indentType} setIndentType = {setIndentType} />
    </div>
  )

  
}

export default Screen
