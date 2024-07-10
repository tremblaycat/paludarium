import { useState } from 'react'

export default function TankArea() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='layer-buttons'>
          <button type='button'>Foreground</button>
          <button type='button'>Midground</button>
          <button type='button'>Background</button>
        </div>
        <div className='substrate-buttons'>
          <button type='button'>Boreal</button>
          <button type='button'>Desert</button>
          <button type='button'>Rainforest</button>
        </div>
    </>
  )
}

