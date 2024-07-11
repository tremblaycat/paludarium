import { useState } from 'react'
import SelectionArea from './components/selection/selectionArea'
import './App.css'
import TankArea from './components/tank/tankArea'
import { SelectionModeData } from './components/selection/models/selectionModeData'


function App() {
  // this is stateful data, when selectionModeState changes, the UI will change
  // this data can only be changed by its partner function, setSelectionModeState
  // to use the state value or the ability to change that value, you have to pass it down
  // also hi I love you :) - boyfriend
  const [selectionModeState, setSelectionModeState] = useState<SelectionModeData>({})

  return (
    <>
      <div className='app-container'>
        <div className='tank-container'>
          <TankArea />
        </div>
        <div className='selection-container'>
          {/* a custom html <tag> like this is called a component 
          we can give components parameters just like functions
          check the selectionArea.tsx file
          */}
          <SelectionArea 
            selectionModeState={selectionModeState} 
            setSelectionModeState={setSelectionModeState}
          />
        </div>
       </div>
    </>
  )
}

export default App
