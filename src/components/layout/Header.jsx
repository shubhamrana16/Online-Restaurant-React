import React from 'react'
 import {NavLink} from 'react-router-dom'

 

function Header() {
  return (

    <div className="header d-flex justify-content-center py-2 shadow-sm">

      <NavLink to="/" >
        <h5 className="font-weight-bold text-danger mx-3"> Lunch Box Restaurant</h5>
      </NavLink>

      
      <div className="ml-auto d-flex">

        <NavLink to="/login" >
          <button className="btn btn-danger btn-sm mx-2">Login</button>
        </NavLink>

        <NavLink to="/Register">
          <button className="btn btn-danger btn-sm mr-5">Sign up</button>
        </NavLink>
        
        <button
          className="btn btn-danger btn-sm mx-2">Log Out </button>

      </div>
    </div>
  )
}

export default Header
