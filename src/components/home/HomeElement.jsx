 import styled  from "styled-components";
 import ImgBg from '../../images/main-view.jpg'


  
 export const HomeContainer = styled.div`
 background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
 url(${ImgBg});
 height: 100vh;
 
 background-position: center;
 background-size: cover;
 position: relative;
  
`;


// export const HomeContainer = styled.div`
// min-height: 100vh;
// width: 100%;
// background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)) ,
//  url( $(ImgBg));
// background-position: center;
// background-size: cover;
// position: relative;

// `;


export const HomeContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const HomeH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HomeP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;


export const HomeBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
 
  
   


