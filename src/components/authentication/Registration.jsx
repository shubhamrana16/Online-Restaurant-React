import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import {Redirect} from 'react-router-dom'
function Registration() {

    const [userInfo, setuserInfo] = useState({});
    const [redirect, setredirect] = useState(false)
    const [confirmPassword, setconfirmPassword] = useState();
    const [IsError, setIsError] = useState("");



  
    
   function registerHandle(e){

    console.log(userInfo);
    console.log( JSON.stringify(userInfo));
     e.preventDefault();
      fetch("http://localhost:8080/registeruser", {
          method: 'POST',
          headers: {
              "Content-Type":"application/json",
              "Accept":"application/json"
          },
          body:JSON.stringify(userInfo)
      }).then((result)=>{
          result.json().then((resp)=>{
            console.log("respsonse",resp);
            setredirect (true);
          })
          
      })
      alert("Registration Suceessful");
  }


    if(redirect){
        return ( <div>   <Redirect to="/login" />   </div>  );
    }


    //password validation
    var prevPass = userInfo.password;
     
   function passValide(x="" ){
       
       console.log("confirm",confirmPassword);
        if( prevPass !== x ){
            setIsError("please");
          
       }
       else{
         setIsError("");
        
       }
   }
    


    return (
        <div>
            <Header />
            <div className="sign-in-main">
                <div className="container d-flex">
                    <div className="sign-in-container py-5 m-auto border">
                        <div className="sign-in-header">
                            <h4 className="font-weight-bold">Sign Up</h4>
                            <p className="sign-in-intro">
                                <span className="text-muted"> Already have an Account ? </span>
                                <span className="text-danger font-weight-bold"> Log in</span>
                            </p>
                               
                        </div>

                        <form 
                        onSubmit = {registerHandle}

                        >

                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="InputName"> Name</label>
                                        <input   id="name"
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Name"
                                            
                                            onChange={e => {
                                                const name = e.target.value;
                                                setuserInfo({...userInfo,...{name}})
                                            }  }


                                        />
                                    </div>


                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input  id ="email"
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Email"
                                     
                                    onChange={e =>{ 
                                        const userName = e.target.value;
                                        setuserInfo({...userInfo,...{userName}})

                                    }}

                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputEmail">Phone</label>
                                <input  id = "phone"
                                    type="number"
                                    className="form-control form-control-sm"
                                    placeholder="Phone Number"
                                   
                                    onChange={e =>  {
                                        const phoneNumber = e.target.value;
                                        setuserInfo({...userInfo,...{ phoneNumber}})
                                    }}

                                />

                            </div>

                            
                            <div className="form-group">
                                <label htmlFor="InputPassword1">Password</label>
                                <input    id = "password"
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    
                                    onChange={e =>  {
                                        const password = e.target.value;
                                        setuserInfo({...userInfo,...{password}})
                                    }}

                                />
                                
                            </div>

                            
                            <button type="submit" className="btn btn-success btn-sm">
                                Submit
                            </button>
                                     

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Registration
