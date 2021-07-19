import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

function Registration() {
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
                            <div className="login-social-media py-3">
                                <button className="btn btn-primary btn-block btn-sm">
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                        <form

                        >
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="InputEmail">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="First Name"

                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="InputEmail">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Last Name"

                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"

                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email with anyone else.
                                </small>
                            </div>

                            <div className="form-group">
                            <label htmlFor="InputEmail">Phone</label>
                            <input
                                type="number"
                                className="form-control form-control-sm"

                            />
                            
                        </div>

                            <div className="form-group">
                                <label htmlFor="InputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-sm"

                                />
                                <small id="emailHelp" className="form-text text-muted">
                                    Please do not share your password with anyone else.
                                </small>
                            </div>
                            <button type="submit" className="btn btn-danger btn-sm">
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
