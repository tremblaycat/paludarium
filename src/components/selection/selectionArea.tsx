import { useState } from 'react'
import '../../App.css';
import './selectionListTile'
import './selectionTabButton'
import SelectionListTile from './selectionListTile'
import SelectionTabButton from './selectionTabButton'

export default function SelectionArea() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='selection-layout-flex'>
      <div className='selection-list-area'></div>
      <div className='selection-tab-button-area'></div>
    </div>
    </>
  )
}