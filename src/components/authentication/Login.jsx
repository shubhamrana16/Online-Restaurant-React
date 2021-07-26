import React, {useState} from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

function Login() {

        const [userName, setuserName] = useState(" ");
        const [password, setpassword] = useState("");
        


    return (
        <div>
            <Header />
            <div className="sign-in-main">
                <div className="container d-flex">
                    <div className="sign-in-container py-5 m-auto border">
                        <div className="sign-in-header">
                            <h4 className="font-weight-bold">Login</h4>
                            <p className="sign-in-intro">
                                <span className="text-muted">New to LUNCH BOX please  ? </span>
                                <span className="text-danger font-weight-bold">Sign Up</span>
                            </p>
                             
                        </div>
                        <form noValidate>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input noValidate id = "userName"
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder ="Email"
                                    value = {userName}
                                    onChange = {e=>setuserName(e.target.value)}
                                     
                                    
                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">Password</label>
                                <input noValidate id = "password"
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder ="Password"
                                    value = {password}
                                    onChange = {e=>setpassword(e.target.value)}
                                   
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

export default Login
