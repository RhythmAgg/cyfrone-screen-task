import './styles/Screen.css'
import Navbar from './components/Navbar'
import IndentContainer from './components/IndentContainer'

function Screen() {
  return (
    <div className='container flex flex-row h-full w-full'>
      <Navbar />
      <IndentContainer />

    </div>
  )

  
}

export default Screen
