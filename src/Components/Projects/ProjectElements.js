import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  /* grid-template-rows: 1fr 1fr;  */
  gap: 20px 20px;
  padding: 30px;
  grid-template-areas:
    "About About About About About"
    "SideA1 SideB1 SideA2 SideB2"; 
    @media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .35fr 1fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  grid-template-areas: 
    "About"
    "SideA1"
    "SideB1"
    "SideA2"
    "SideB2";
} 
`
export const ProjectContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  /* grid-template-rows: .5fr 1fr;  */
  gap: 20px 20px;
  padding: 30px;
  grid-template-areas:
    "About About About About About"
    "SideA1 SideB1 SideA2 SideB2 SideC1"; 
    @media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .35fr 1fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  grid-template-areas: 
    "About"
    "SideA1"
    "SideB1"
    "SideA2"
    "SideB2"
    "SideC1";
} 
`
export const VisResumeContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  gap: 40px;
  padding: 30px;
  grid-template-areas:
    "About"
    "SideA1";
    @media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr;
  padding: 15px;
  grid-template-areas: 
    "About"
    "SideA1";
} 
`

export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .15fr .065fr .07fr .05fr .01fr .2fr .05fr .3fr .3fr .03fr 0.25fr;
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header"
    "Role Role"
    "Problem Solution"
    "Vision Challenge"
    "UserResearch UserResearch"
    "GS GS"
    "Accounts Accounts"
    "Strategies Strategies"
    "Help Help"
    "Models Models"
    "UI UI";


@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .1fr .15fr .15fr .15fr .15fr .3fr .2fr .2fr .2fr .65fr .3fr .1fr .2fr; 
  grid-template-areas: 
    "Header"
    "Role"
    "Problem"
    "Solution"
    "Vision"
    "Challenge"
    "UserResearch"
    "GS"
    "Accounts"
    "Strategies"
    "Help"
    "Models"
    "UI";
} 
`
export const Vision = styled.div`
grid-area: Vision;
text-align:left;
line-height: 2;
padding:20px 50px 0px 50px;
`
export const Challenge = styled.div`
grid-area: Challenge;
text-align:left;
padding:20px 50px;
`
export const Header = styled.div`
grid-area: Header;
text-align:center;
padding:30px;
background-color:grey;
background-image: url(${props => props.img});
background-position: center;
border-bottom: 5px solid #00a7ff;
box-shadow: 2px 8px 20px #afafaf94;
`
export const GS = styled.div`
grid-area: GS;
text-align:center;
background-image:url('/images/ISIAbg.jpg');
background-size: cover;
color:#fff;
padding:30px;
`
export const Problem = styled.div`
grid-area: Problem;
text-align:left;
margin: 40px 20px 20px 25px;
border-radius: 20px;
line-height:1.4;
padding:30px;
background-color:#ff7171;
`
export const UserResearch = styled.div`
grid-area: UserResearch;
text-align:left;
margin: 40px;
border-radius: 20px;
padding: 0px 50px;
`
export const Solution = styled.div`
grid-area: Solution;
text-align:left;
margin: 40px 25px 20px 20px;
border-radius: 20px;
line-height:1.4;
padding:30px;
background-color:#6effa8;
`
export const Accounts = styled.div`
grid-area: Accounts;
text-align:left;
background-color:#fff;
padding:30px;
`
export const Strategies = styled.div`
grid-area: Strategies;
text-align:left;
background-color:#fff;
padding:30px;
`
export const Role = styled.div`
grid-area: Role;
line-height: 2;
padding: 10px 30px;
background-color: #00a7ff;

`
export const Help = styled.div`
grid-area: Help;
text-align:left;
background-color:#f8f8f8;
padding:30px;
`
export const CustomStyle = styled.div`
grid-area: UI;
text-align:left;
background-color:#ffffff;
padding:30px;
`
export const Models = styled.div`
grid-area: Models;
text-align:left;
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
font-size:1em;
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
export const SideC1 = styled.div`
grid-area: SideC1;
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
// height: 300px;
position:relative;
/* border-radius:20px; */
background-size: 400px  !important;
background-position: center !important;
// border:5px solid #f4f4f4;
background-repeat: no-repeat !important;
/* box-shadow: 4px 6px 12px #d8d8d8; */
overflow: hidden;
transition: all 0.2s ease-out-in;
&:hover {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
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