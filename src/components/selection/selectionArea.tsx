import { useState } from 'react'
import '../../App.css';
import './selectionListTile'
import './selectionTabButton'
import SelectionListTile from './selectionListTile'
import SelectionTabButton from './selectionTabButton'
import './data/selectionTabButtonData'
import { listTabButtons } from './data/selectionTabButtonData';

export default function SelectionArea() {

  return (
    <>
    <div className='selection-layout-flex'>
      <div className='selection-list-area'></div>
      <div className='selection-tab-button-area'>
        {
          listTabButtons.map((buttonData) => <SelectionTabButton buttonData={buttonData}/>)
        }
      </div>
    </div>
    </>
  )
}