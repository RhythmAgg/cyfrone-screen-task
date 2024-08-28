import './styles/Screen.css'
import Navbar from './components/Navbar'
import IndentContainer from './components/IndentContainer'
import { useState } from 'react'

function Screen() {
  const [tabType, setTabType] = useState(-1)
  const [tabName, setTabName] = useState('Indent');
  const [rowId, setRowId] = useState('')
  return (
    <div className='main-container flex flex-row h-full w-full'>
      <Navbar 
        tabType = {tabType} 
        setTabType = {setTabType} 
        setTabName = {setTabName} 
        rowId = {rowId}
        setRowId = {setRowId}
      />
      <IndentContainer 
        tabType = {tabType} 
        setTabType = {setTabType} 
        tabName = {tabName} 
        setTabName = {setTabName}
        rowId = {rowId}
        setRowId = {setRowId} 
      />
    </div>
  )

  
}

export default Screen
