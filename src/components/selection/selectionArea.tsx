import { Dispatch, SetStateAction} from 'react'
import '../../App.css';
import './selectionListTile'
import './selectionTabButton'
import SelectionListTile from './selectionListTile'
import SelectionTabButton from './selectionTabButton'
import './data/selectionTabButtonData'
import { listTabButtons } from './data/selectionTabButtonData';
import './models/selectionModeData';
import { SelectionModeData } from './models/selectionModeData';

export default function SelectionArea({
  selectionModeState,
  setSelectionModeState,
}: {
  selectionModeState: SelectionModeData;
  setSelectionModeState: Dispatch<SetStateAction<SelectionModeData>>;
}) {

  return (
    <>
    <div className='selection-layout-flex'>
      <div className='selection-list-area'></div>
      <div className='selection-tab-button-area'>
        {
          listTabButtons.map((buttonData) => <SelectionTabButton 
            buttonData={buttonData} 
            selectionModeState={selectionModeState} 
            setSelectionModeState={setSelectionModeState}/>
          )
        }
      </div>
    </div>
    </>
  )
}