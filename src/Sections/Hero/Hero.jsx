import styled, { keyframes } from 'styled-components';
import pink from "../../assets/blobPink.png";
import White from "../../assets/blobwhite.png";
import Purple from "../../assets/blobpurple.png";
import Arrow from "../../assets/Arrow Right.svg"

import Mobile from "../../assets/mobile.svg"


const move = keyframes`
    0% {transform: translateY(-10px);}
    50% {transform: translateY(10px);}
    100% {transform: translateY(-10px);}

`
const color = keyframes`
    0% {transform: translateX(-5px); 
        background-color:  white ;
    }
    50% {transform: translateX(5px);
        background-color:  var(--purple) ;}
    100% {transform: translateX(-5px);
        background-color:  white ;
    }
`


const Herosection = styled.div`
    width: 100vw;
    height: 45vw;
    background-color: var(--black);
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    position: relative;
    @media only Screen and (max-width:768px){
        height: 70vw;
        display: block;
    }
    @media only Screen and (max-width:420px){
        height: auto;
        padding-bottom: 2rem;
    }


`;

const  Blobs = styled.div`
    width: 10%;
    position: absolute;
    right: 0;
    @media only Screen and (max-width:768px){
     opacity: 0.5;
    }
`;

const  PinkBlob = styled.div`
     /* width:400px  !important; */
     width: calc(70% + 22vw) !important;
     position: absolute;
     right: 0;
     top: calc(5rem + 5vw);
        z-index: 6;

`;
const  WhiteBlob = styled.div`
    width: calc(70% + 33vw) !important;
     position: absolute;
     right: calc(3.5rem + 3.5vw);
     top: calc(2rem + 2vw);
        z-index: 5;

`;
const  PurPleBlob = styled.div`
    
    width: calc(45% + 15vw) !important;
     position: absolute;
     right: 0;
     top: 0;
        z-index: 4;
`;

const MainContent =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw !important;
    color: var(--white);
    @media only Screen and (max-width:768px){
        flex-direction: column;
        width: 100vw !important;
    }
`
const LeftBlock =styled.div`
      display: flex;
      flex-direction: column !important;
      align-items: flex-start;
      width: 50%;
      line-height: 1.5;
      @media only Screen and (max-width:768px){
      width: 80% !important;
      text-align: center;
      align-items: center;
      justify-content: space-around !important;
      margin-top: calc(2.5rem + 2.5vw);
      filter: drop-shadow(2px 4px 6px var(--black));
    }
`
const Topic =styled.div`
      display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--nav);
    font-weight: 600;
    font-size: calc(0.4rem + 0.4vw);
    padding: 0.5rem 1rem;
    border-radius: 20px;

`
const Circle =styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  
    margin-right: 0.5rem;
    animation: ${color} 2.5s ease infinite;
`
const Title =styled.h1`
    font-size: calc(2rem + 1vw);
    line-height: 1.2;
    padding: 0.5rem 0;
`
const SubText =styled.h5`
     font-size: calc(0.5rem + 0.5vw);
    line-height: 1;
    color: var(--nav2);
`
const CTA =styled.button`
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: calc(0.5rem + 0.5vw) !important;
    font-weight: 700 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

 
    &:hover{
        transform: scale(1.1);
    }
    &:active{
        transform: scale(0.9);
    }
    img{
        width: 1.5rem !important;
    }
`
const MobileSvg =styled.img`
    max-width: 100% !important;
    width: calc(30% + 20vw) !important;
    z-index: 7;
    height: auto;
    animation: ${move} 2.5s ease infinite;
    @media only Screen and (max-width:768px){
      align-self: flex-start;
      position: absolute;
      bottom: 0;
      opacity: 0.5;
    }
    @media only Screen and (max-width:600px){
       display: none;
    }
  
`





const Hero = () => {
    return (
        <Herosection id="home">

            <Blobs>
                <PinkBlob>
                    <img src={pink}  alt="pink Blob" width="400" height="400" />
                </PinkBlob>

                <WhiteBlob>
                    <img src={White} alt="White Blob" width="400" height="400" />
                </WhiteBlob>

                <PurPleBlob>
                        <img src={Purple} alt="Purple Blob" width="400" height="400" />
                </PurPleBlob>
            </Blobs>
          
          <MainContent>

            <LeftBlock>
                <Topic>
                    <Circle /> <span>We Build Web</span>
                </Topic>
                <Title> Transforming your digital presence </Title>
                <SubText> we help fast growing companies build award winnig websitng </SubText>
                <CTA>
                    Get in touch &nbsp; <img src={Arrow} alt="CTA" />
                </CTA>
            </LeftBlock>
            <MobileSvg  src={Mobile} alt=" Mobile Svg"  />
          </MainContent>


        </Herosection>
    )
}

export default Hero
