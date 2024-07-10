import { useState } from 'react'
import '../../App.css';
import { SelectionModeData } from './models/selectionModeData';

export default function SelectionTabButton({buttonData}: {buttonData: SelectionModeData}) {
  

  return (
    <>
        <div>
          <div className='selection-tab-button-container'>
            <button className='selection-tab-button'>
              <img className='selection-tab-button-icon' src={buttonData.icon_url} alt={buttonData.icon_alt} />
            </button>
          </div>
        </div>
    </>
  )
}
