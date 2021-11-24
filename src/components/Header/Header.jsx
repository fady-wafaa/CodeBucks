import logo from "../../assets/logo.svg"
import  styled  from 'styled-components';
import { useRef, useState ,useEffect} from "react";
import  gsap  from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 3rem;
background-color: var(--nav);
color: var(--white) !important;
position: relative;
z-index: 500;
@media only Screen and (max-width: 64em){
    padding: 0.8rem 3rem;

}
@media only Screen and (max-width: 40em){
    padding: 0.8rem 1.5rem;

}
`

const Logo = styled.a`
display: flex;
align-items: center;
width: 2rem;
height: auto;
cursor: pointer;

img{
    margin-right: 0.5rem;
}
h3{
    letter-spacing: 0.5px;
}
span{
    color: #ff0909;
}
@media only Screen and (max-width: 27em){
    width: 1.1rem;
    h3{
    letter-spacing: 0.5px;
    font-size: 0.8rem;
}
}

`
const Nav = styled.nav`
width: 25rem;
max-width: 40rem;
display: flex;
@media only Screen and (max-width: 48em) {
    display: none;
  }
align-items: center;
justify-content: space-between;
a{
    font-weight: 500;
    color: var(--white);
    line-height: 1.5;
  
    &::after{
        content: "";
        display: block;
        height: 1.5px;
        background: transparent;
        transition: width 0.5s;
    
    }
    &:not(:last-child):hover::after{
        background: #ff0000 !important;
        animation: nameNav 0.5s forwards ease-out;
    }
    @keyframes nameNav{
       0%{
        width: 0%;
        background: var(--purple);
       }
    
       100%{
        width: 100%;
        background: var(--purple);
       }
     
    }

 
}

`
const Button = styled.button`
background-color: var(--purple) ;
padding: 0.5rem 1rem ;
border-radius: 20px;
color: var(--white);
font-size: 0.8rem;
font-weight: 600;
cursor: pointer;
transition: all 0.4s ease-out;
&:hover{
    transform: scale(1.1);
    background-color: #fafafa ;
    color: #181D31;
}
&::focus{
    transform: scale(0.9);
}
`
const HamburgrBtn = styled.button`
    display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
    &::before,&::after{
        content: "";
        background-color: var(--white);
        display: inline-block;
        width: 2rem;
    height: 2px;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
    }
    &::before{
        top: ${(props) => (props.clicked ? "0" : "-0.5rem" )} ;
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)" )} ;
    }
    &::after{
        top: ${(props) => (props.clicked ? "0" : "0.5rem" )};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)" )};
    }
    @media only Screen and (max-width: 27em){
        width: 1.5rem;
        height: 1.5px;
        &::before,&::after{
        content: "";
        background-color: var(--white);
        display: inline-block;
        width: 1rem;
    height: 1px;
        }
    }

`
const MobileMenu = styled.div`
  display: none !important;
  @media only Screen and (max-width: 48em) {
    display: flex !important;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden !important;
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible " : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
  @media only Screen and (max-width: 27em){
    a {
    letter-spacing: 0.8px;
    font-weight: 500;
    font-size: 1.1rem;
    margin: 1rem;
 
  }
  }

`




const Header = () => {

    const [click, setClick] = useState(false);
    const  handleClick = () => setClick(!click);
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const ele = ref.current;
        const mq = window.matchMedia("(max-width:40em)");
        if(mq.matches){
            gsap.to(ele,{
                position: "fixed",
                top: "0",
                left:"0" ,
                right: "0" ,
                borderRadius:"0 0 50px 50px",
                padding: "1.5rem 2rem",
                border: " 1px  solid var(--white)",
                duration:1,
                ease:"power1.out",
    
                scrollTrigger:{
                    trigger:ele,
                    start:"bottom+=200 top",
                    end:"+=100",
                    scrub:true,
                    // markers:true,
                },
            })
        }else{
            
            gsap.to(ele,{
                position: "fixed",
                top: "1rem",
                left:"3rem" ,
                right: "3rem" ,
                borderRadius:"50px",
                padding: "1.5rem 2rem",
                border: "2px solid var(--white)",
                duration:1,
                ease:"power1.out",
    
                scrollTrigger:{
                    trigger:ele,
                    start:"bottom+=300 top",
                    end:"+=250",
                    scrub:true,
                    // markers:true,
                },
            })
        }

    }, []);


    return (
        <Headers ref={ref} id="header">
            <Logo >
                <img src={logo} alt="CodeBucks" />
                <h3>Code<span>B</span>ucks</h3>
            </Logo>
           <Nav>
               <a href="#home">Home</a>
               <a href="#about">About Us</a>
               <a href="#services">Services</a>
               <a href="#contact">
                   <Button>
                   Contact US
                   </Button>
               </a>
           </Nav>
           <HamburgrBtn onClick={() => setClick(!click)} clicked={click} >
               <span  />
           </HamburgrBtn>
           <MobileMenu clicked={click}>
                 <a href="#home" onClick={() => handleClick} >Home</a>
               <a href="#about" onClick={() => handleClick} >About Us</a>
               <a href="#services" onClick={() => handleClick} >Services</a>
               <a href="#contact" onClick={() => handleClick} >
                   <Button>
                   Contact US
                   </Button>
               </a>
           </MobileMenu>
        </Headers>
    )
}

export default Header
