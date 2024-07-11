import { Dispatch, SetStateAction } from 'react'
import '../../App.css';
import { SelectionModeData } from './models/selectionModeData';
import { AppColors } from '../../colors';

export default function SelectionTabButton(
  {buttonData, selectionModeState, setSelectionModeState}: 
  {buttonData: SelectionModeData, 
  selectionModeState: SelectionModeData, 
  setSelectionModeState: Dispatch<SetStateAction<SelectionModeData>>}
) {
  
  return (
    <>
        <div>
          <div style={{ backgroundColor : selectionModeState == buttonData ? AppColors.lightGrey : AppColors.darkGrey}} className='selection-tab-button-container'>
            <button onClick={() => {
              setSelectionModeState(buttonData);
            } } className='selection-tab-button'>
              <img className='selection-tab-button-icon' src={buttonData.icon_url} alt={buttonData.icon_alt} />
            </button>
          </div>
        </div>
    </>
  )
}
