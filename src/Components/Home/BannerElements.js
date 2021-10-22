import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import {FaBehanceSquare, FaDribbbleSquare, FaLinkedin} from 'react-icons/fa'

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
}
`;

export const HeroH1 = styled.h1`
font-family:'Work Sans', sans-serif;
font-size:2.5rem;
font-weight:500;
text-align:center;
color:#383838;
@media screen and (max-width:600px){
 font-size:1.4rem;
} 
`
export const HeroSpan = styled.span`
font-family:'Work Sans', sans-serif;
font-size:2.5rem;
font-weight:500;
text-align:center;
font-style: italic;
color:#383838;
@media screen and (max-width:600px){
 font-size:1.4rem;
} 
`
export const Name = styled.h1`
  font-weight: 600;
  font-size: 3em;
  -webkit-text-stroke: 1px grey;
  color: #fff;
  font-family: 'Helvetica',sans-serif;
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform:uppercase;
`


export const HeroImg = styled.img`
height: 120px;
border: 4px solid #fff;
box-shadow: 5px 5px 9px 0 rgb(0 0 0 / 15%), -5px -5px 9px 0 rgb(255 255 255 / 13%);
border-radius: 80px;
margin-top:60px;
transition: all 0.2s ease-in-out;
@media screen and (max-width:700px){
margin-top:30px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction: column;
align-items: center;
`
export const HeroSocial = styled.div`
padding:20px;
`
export const Header = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
export const LetterWrap = styled.div`
display:flex;
`
export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding:8px 25px;
display: flex;
flex-direction: column;
align-items: center;
margin-top:6%;
@media screen and (max-width:600px){
margin-top:60px;
padding:
}
`

export const Behance = styled(FaBehanceSquare)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`
export const Dribble = styled(FaDribbbleSquare)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`
export const Linkedin = styled(FaLinkedin)`
font-size:32px;
color:#535353;
transition: all 0.2s ease-in-out;
&:hover{
  color:#ffb80b;
}
`

export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`