import { useState } from 'react'
import '../../App.css';

export default function SelectionTabButton() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <div className='selection-tab-button-container'>
            
            <button className='selection-tab-button'/>
          </div>
        </div>
    </>
  )
}
