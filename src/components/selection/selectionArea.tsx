import { Dispatch, SetStateAction} from 'react'
import '../../App.css';
import './components/selectionListTile'
import './components/selectionTabButton'
import SelectionListTile from './components/selectionListTile'
import SelectionTabButton from './components/selectionTabButton'
import './data/selectionTabButtonData'
import { listTabButtons } from './data/selectionTabButtonData';
import './models/selectionModeData';
import { SelectionModeData } from './models/selectionModeData';

// we can pass in parameters to components like this!
// the syntax is functionName({variableName}: {variableName: Type})
// then we can pass them in like I did in App.tsx
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
          // use the "map" property of a list allows us loop through and return a component
          // this is basically "for each buttonData in the listTabButtons list, give that button data to a SelectionTabButton"
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