import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
background:#fff;
display:flex;
padding:0 5rem;
height:500px;
position: relative;
align-items: center;
justify-content: center;
z-index:1;

@media screen and (max-width:700px){
padding-top:40px;
}
`;

export const HeroH1 = styled.h1`
font-family:'Work Sans', sans-serif;
font-size:2.5rem;
font-weight:500;
text-align:center;
color:#383838;
`
export const HeroSpan = styled.span`
font-family:'Work Sans', sans-serif;
font-size:2.5rem;
font-weight:500;
text-align:center;
font-style: italic;
color:#383838;
`

export const HeroImg = styled.img`
height: 120px;
border: 4px solid #fff;
box-shadow: 5px 5px 9px 0 rgb(0 0 0 / 15%), -5px -5px 9px 0 rgb(255 255 255 / 13%);
border-radius: 80px;
transition: all 0.2s ease-in-out;
`
export const HeroBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`
export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 25px;
display: flex;
flex-direction: column;
align-items: center;
`