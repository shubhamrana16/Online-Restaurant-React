import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './WelcomeElement' 

function WelcomeBody({toggle}) {
    return (
        <React.Fragment>
             
        <Nav>
            
           
           <NavIcon onClick = {toggle} >
              <h1  >Menu</h1>
               <Bars />
           </NavIcon>
        </Nav>
    </React.Fragment>
    )
}

export default WelcomeBody
