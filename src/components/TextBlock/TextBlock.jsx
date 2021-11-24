
import  styled, { keyframes }  from 'styled-components';

const LeftBlock =styled.div`
display: flex;
flex-direction: column !important;
align-items: flex-start;
width: 50% ;
line-height: 1.5;
color: var(--white) ;

@media only Screen and (max-width:768px){
width: 100% !important;
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





const TextBlock = ({topic ,title,subText,children}) => {
    
    return (
        <LeftBlock>
        <Topic>
            <Circle /> 
            <span>{topic}</span>
        </Topic>
        <Title>{title}</Title>
        <SubText>{subText} </SubText>
        {children}
    </LeftBlock>
    )
}

export default TextBlock
