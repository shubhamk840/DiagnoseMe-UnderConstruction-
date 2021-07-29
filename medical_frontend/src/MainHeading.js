import React from 'react';
import './MainHeading.css'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Mainheading = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/homepage' activeStyle className="org_name">
			DiagnoseMe
		</NavLink>
		
        <NavLink to='/datalist' activeStyle>
			Datalist
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/about' activeStyle>
			About 
		</NavLink>
		<NavLink to='/' activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Mainheading;
