import React from 'react'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux'



function WelcomeHeader(props) {
    const {isLogin} = props
         
        const {name} = props
         
          
   
    console.log("welcomr page header", name);




    return (
        <div className="header d-flex justify-content-center py-2 shadow">
      
        <NavLink to="/" >
          <h5 className="font-weight-bold text-blue mx-3"> Welcome To The Lunch Box</h5>
        </NavLink>
        <h3 style = {{color:"red"}}>{ name}</h3>
       
        
        <div className="ml-auto d-flex">
        
            <NavLink to="/" >
            <button className="btn btn-success btn-sm mx-2">Log Out</button>
          </NavLink>
  
          
  
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin:state.login.isLogin,
        name: state.login.state.data.user.name
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      logoutHandle: (loginInfo) => {
        
       console.log(loginInfo);
      },
    };
  };
   
  
  export default connect(mapStateToProps,mapDispatchToProps)(WelcomeHeader);
