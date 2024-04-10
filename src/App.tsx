import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <div className='tank-container'></div>
        <div className='selection-container'></div>
       </div>
    </>
  )
}

export default App
