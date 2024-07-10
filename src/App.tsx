import { useState } from 'react'
import SelectionArea from './components/selection/selectionArea'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <div className='tank-container'></div>
        <div className='selection-container'>
          <SelectionArea />
        </div>
       </div>
    </>
  )
}

export default App
