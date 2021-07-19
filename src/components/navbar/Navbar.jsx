import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElement' 
  
 
 function Navbar( {toggle}) {
     return (
         <React.Fragment>
             
             <Nav>
                 
                <NavLink to = './'>Lunch Box</NavLink>
                <NavIcon onClick = {toggle} >
                   <h1  >Menu</h1>
                    <Bars />
                </NavIcon>
             </Nav>
         </React.Fragment>
     )
 }
 
 export default Navbar
 
