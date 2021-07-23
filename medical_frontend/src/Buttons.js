import React from 'react'
import './Buttons.css'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Buttons({title}) {
    return (
        <div className="Button_style">

             <a href="/new" target="_xyz"><LocalHospitalIcon/> {title}</a> 
        </div>
    )
}

export default Buttons
