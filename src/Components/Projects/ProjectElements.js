import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  /* grid-template-rows: 1fr 1fr;  */
  gap: 20px 20px;
  padding: 30px;
  grid-template-areas:
    "About About About About"
    "SideA1 SideB1 SideA2 SideB2"; 
    @media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .6fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  grid-template-areas: 
    "About"
    "SideA1"
    "SideB1"
    "SideA2"
    "SideB2";
} 
`
// export const VisResumeContainer = styled.div`
//   display: grid; 
//   grid-template-columns: 1fr; 
//   grid-template-rows: 1fr; 
//   gap: 40px;
//   padding: 30px;
//   grid-template-areas:
//     "About"
//     "SideA1";
// `

export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .25fr .1fr .5fr .5fr .5fr .6fr .2fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header"
    "Vision Challenge"
    "GS GS"
    "Accounts Accounts"
    "Help Help"
    "UI UI"
    "Models Models";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .15fr .3fr .4fr .5fr .4fr .5fr .5fr; 
  grid-template-areas: 
    "Header"
    "Vision"
    "Challenge"
    "GS"
    "Accounts"
    "Help"
    "UI"
    "Models";
} 
`
export const Vision = styled.div`
grid-area: Vision;
text-align:left;
padding-left:20px;
line-height: 2;
padding:30px;
`
export const Challenge = styled.div`
grid-area: Challenge;
text-align:left;
padding-left:20px;
padding:30px;
`
export const Header = styled.div`
grid-area: Header;
text-align:center;
padding-left:20px;
padding:30px;
background-color:grey;
background-image: url(${props => props.img});
background-position: center;
border-bottom: 5px solid #68aff6;
box-shadow: 2px 8px 20px #afafaf94;
`
export const GS = styled.div`
grid-area: GS;
text-align:center;
padding-left:20px;
background-color:#3569ec;
color:#fff;
padding:30px;
`
export const Accounts = styled.div`
grid-area: Accounts;
text-align:left;
padding-left:20px;
background-color:#fff;
padding:30px;
`
export const Help = styled.div`
grid-area: Help;
text-align:left;
padding-left:20px;
background-color:#f8f8f8;
padding:30px;
`
export const CustomStyle = styled.div`
grid-area: UI;
text-align:left;
padding-left:20px;
background-color:#ffffff;
padding:30px;
`
export const Models = styled.div`
grid-area: Models;
text-align:left;
padding-left:20px;
background-color:#f3f3f3;
padding:30px;
`
export const About = styled.div`
grid-area: About;
text-align:left;
padding-left:20px;
border-bottom:2px solid #f4f4f4;
font-family: 'Helvetica', sans-serif;
font-size:2em;
-webkit-text-stroke:1px grey;
/* background-color:white; */
color: #fff;
/* border-bottom: 1px solid; */
/* width:100%; */
letter-spacing: .1em;
font-weight: 600;
text-transform: uppercase;
display: inline-block;
vertical-align: middle;
margin:10px 0;
@media screen and (max-width:600px){
padding-left:10px;
}
`
export const SideA1 = styled.div`
grid-area: SideA1;
`
export const SideA2 = styled.div`
grid-area: SideA2;
`
export const SideB1 = styled.div`
grid-area: SideB1;
`
export const SideB2 = styled.div`
grid-area: SideB2;

`
export const ProjTitle = styled.div`
font-size:1em;
top:50%;
left:50%;
transform: translate(-50%, -50%);
position:absolute;
color:transparent;
`
export const ProjCard = styled.div`
height: 300px;
position:relative;
/* border-radius:20px; */
background-size: 400px  !important;
background-position: center !important;
border:5px solid #f4f4f4;
background-repeat: no-repeat !important;
background: black;
/* box-shadow: 4px 6px 12px #d8d8d8; */
overflow: hidden;
transition: all 0.2s ease-out-in;
&:hover {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 5px solid #ffb80b;
}
&:hover ${ProjTitle}{
  transition: all 0.2s ease-in-out;
  color: white;
}
`

export const Button = styled.a`
text-decoration:none;
border-radius:30px;
margin-bottom:30px;
font-family: 'Work Sans', sans-serif;
background: ${({ primary }) => (primary ? '#d19709' : '#ffb80b')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#ffb80b' : '#383838')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:3px solid #d19709;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#fff' : '#f2f2f2')};
  color:#383838;
  border:3px solid #ffb80b;
}
`