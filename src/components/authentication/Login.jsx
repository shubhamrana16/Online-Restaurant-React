import React, {useState} from 'react'
import { connect } from 'react-redux'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import {loginAction} from  '../../services/actions/LoginAction'
import { useHistory } from 'react-router'

function Login(props) {

        const [loginInfo, setloginInfo] = useState({})
        const history = useHistory();
      

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
                        <form  onSubmit = {(e)=>{
                            e.preventDefault();
                            props.loginHandle(loginInfo,history);
                        }}>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email address</label>
                                <input noValidate id = "userName"
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder ="Email"
                                    onChange={e => {
                                        const userName = e.target.value;
                                        setloginInfo({...loginInfo,...{userName}})
                                    }  }
                                     
                                    
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
                                    onChange={e => {
                                        const userPassword = e.target.value;
                                        setloginInfo({...loginInfo,...{userPassword}})
                                    }  }
                                   
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

const mapStateToProps = (state) => {
    return {
      login: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loginHandle: (loginInfo,history) => {
       dispatch(loginAction(loginInfo,history))
       console.log(loginInfo);
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
