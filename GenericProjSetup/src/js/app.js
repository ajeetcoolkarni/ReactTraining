import  '../css/styles.css'

import {button,header} from './fetchSelector'

button.addEventListener('click',onToggleButtonClick);
var displayFlag = true;
function onToggleButtonClick(){
    header.style.display = (displayFlag?'none':'block');
    displayFlag = !displayFlag;
}