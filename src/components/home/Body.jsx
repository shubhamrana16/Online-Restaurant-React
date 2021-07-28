import React  from 'react'
import { Route, Router } from 'react-router';
import Header from '../layout/Header';
import Home from './Home'
import Demo from '../authentication/Demo'

function  Body() {

  

    return (
        <div>
       
        <div className="box">
          <Home />
          <Header />

         

      </div>
       
        </div>
    )
}

export default  Body
