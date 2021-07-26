import React, { useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

function Registration(props) {


    const{user, registerHandler} = props;
        console.log("User",user);
        console.log("dispatch",registerHandler);

    const [registration, setregistration] = useState({})

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
                        onSubmit = {()=>{
                            registerHandler({registration})
                            
                        }}
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
                                                setregistration({...registration,...{name}})
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
                                     
                                    onChange={e =>{ 
                                        const userName = e.target.value;
                                        setregistration({...registration,...{userName}})

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
                                   
                                    onChange={e =>  {
                                        const phone = e.target.value;
                                        setregistration({...registration,...{ phone}})
                                    }}

                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="InputPassword1">Password</label>
                                <input    id = "password"
                                    type="password"
                                    className="form-control form-control-sm"
                                    
                                    onChange={e =>  {
                                        const password = e.target.value;
                                        setregistration({...registration,...{password}})
                                    }}

                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    Please do not share your password with anyone else.
                                </small>
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
