import React from 'react'
import Buttons from './Buttons'
import './Options.css'


function Options() {
    return (
        <div className="Buttons__style">
            
            <Buttons title="Find by name"/>
            <Buttons title="Get recommendations"/>
            <Buttons title="Data entry"/>
        </div>
    )
}

export default Options
