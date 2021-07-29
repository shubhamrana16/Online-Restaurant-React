import { WelcomeContainer } from './WelcomeElement';
import WelcomeHeader from './WelcomeHeader'
import React, { useState, useEffect } from "react"
import WelcomeBody from './WelcomeBody';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Home from '../home/Home';
import Header from '../layout/Header';
import { Redirect } from 'react-router-dom'


function Welcome(props) {

    const { login } = props
    console.log("welcome page", login);



    return (
        login ?

            (<div>


                <React.Fragment>
                    <WelcomeContainer>
                        <WelcomeHeader />
                    </WelcomeContainer>
                </React.Fragment>
            </div>)

            :

            (<div>
                <Redirect to="/" />
            </div>)


    )





}



const mapStateToProps = (state) => {
    return {
        login: state.login.isLogin,
    };
};

export default connect(mapStateToProps)(Welcome)
