import React, { useState } from 'react'
import { HomeContainer } from './HomeElement';
import Navbar from '../navbar/Navbar';
import { HomeContent, HomeItems, HomeH1, HomeP, HomeBtn } from './HomeElement';
import Sidebar from '../sidebar/Sidebar';
import {Redirect} from 'react-router-dom'

 


export const Home = () => {



    const [redirect, setredirect] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    if(redirect){
        return ( <div>   <Redirect to="/login" />   </div>  );
    }


    return (

            



        <HomeContainer >


            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HomeContent>
                <HomeItems>
                    <HomeH1> DELICIOUS FOOD Ever</HomeH1>
                    <HomeP>Ready in  2 minuts</HomeP>               
                    <HomeBtn onClick = {e=>(setredirect(true))}>ORDER NOW</HomeBtn>
                </HomeItems>
            </HomeContent>
              
        </HomeContainer>
    )


    
}

export default Home