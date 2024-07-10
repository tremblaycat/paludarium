import { useState } from 'react'
import SelectionArea from './components/selection/selectionArea'
import './App.css'
import TankArea from './components/tank/tankArea'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <div className='tank-container'>
          <TankArea />
        </div>
        <div className='selection-container'>
          <SelectionArea />
        </div>
       </div>
    </>
  )
}

export default App
