import React from 'react'
import './MainHeading.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Navbar from './Navbar';
function MainHeading() {
    return (
        <div className="MainHeading">
            <>
            <h1><LocalHospitalIcon/> DiagnoseMe
            <LocalHospitalIcon/></h1>
            <Navbar/>
            </>
        </div>
    )
}

export default MainHeading
