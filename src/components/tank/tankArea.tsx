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
    </>
  )
}

