import React from 'react'
 import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
  

function Header(props) {

   

   
  return (

    <div className="header d-flex justify-content-center py-2 shadow">

      <NavLink to="/" >
        <h5 className="font-weight-bold text-blue mx-3"> Lunch Box Restaurant</h5>
      </NavLink>

      
      <div className="ml-auto d-flex">
          <NavLink to="/login" >
          <button className="btn btn-success btn-sm mx-2">Login</button>
        </NavLink>

        <NavLink to="/Register">
          <button className="btn btn-success btn-sm mr-5">Sign up</button>
        </NavLink>

      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
      login: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutHandle: (loginInfo) => {
      
     console.log(loginInfo);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
 
