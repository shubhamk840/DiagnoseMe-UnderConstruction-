import React from 'react'
import MainHeading from './MainHeading'
import Options from './Options'
import Buttons from './Buttons'
import './Homepage.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


function Homepage() {
    return (
        <div>
             <MainHeading/>
             <div className="Button_style">
                    <a href="/new" target="_xyz"><LocalHospitalIcon/> Data Entry </a> 
             </div>
             <div className="Button_style">
                    <a href="/searchbyname" target="_xyz"><LocalHospitalIcon/> Find By Name </a> 
             </div>
        </div>
    )
}

export default Homepage;
