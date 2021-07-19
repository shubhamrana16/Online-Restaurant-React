import React, { useState } from 'react'
import { HomeContainer } from './HomeElement';
import Navbar from '../navbar/Navbar';
import { HomeContent, HomeItems, HomeH1, HomeP, HomeBtn } from './HomeElement';
import Sidebar from '../sidebar/Sidebar';
 


export const Home = () => {



    

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <HomeContainer >


            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HomeContent>
                <HomeItems>
                    <HomeH1> DELICIOUS FOOD Ever</HomeH1>
                    <HomeP>Ready in  2 minuts</HomeP>

                    


                             <HomeBtn>Order Now</HomeBtn>  
                       

                   

                </HomeItems>
            </HomeContent>

        </HomeContainer>
    )
}

export default Home