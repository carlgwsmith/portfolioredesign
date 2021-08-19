import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  /* grid-template-rows: 1fr 1fr;  */
  gap: 40px 40px;
  padding: 30px;
  grid-template-areas:
    "About About"
    "SideA1 SideB1"
    "SideA2 SideB2"; 
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
`

export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .2fr .1fr .5fr .5fr .5fr .6fr .2fr; 
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
export const ProjDetailsContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr .5fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjDetails";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const SupportContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .6fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const ModelsContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .2fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .5fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr .8fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const StyleGuideContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .3fr .3fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .5fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr .8fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const CtaImg = styled.img`
width:100%;
margin-left:auto;
margin-right:auto;
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
`
export const GS = styled.div`
grid-area: GS;
text-align:center;
padding-left:20px;
background-color:#3569ec;
color:#fff;
padding:30px;
`

export const GSpara = styled.p`
width: 65%;
margin-left: auto;
font-size:1.1em;
font-weight: 400;
margin-right: auto;
padding-bottom:10px;
line-height: 1.4;
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
export const ProjImage = styled.div`
grid-area: ProjImage;
text-align:left;
padding-left:20px;
`
export const ProjDetails = styled.div`
grid-area: ProjDetails;
text-align:left;
padding-left:20px;
padding:30px;
`
export const About = styled.div`
grid-area: About;
text-align:left;
padding-left:20px;
border-bottom:2px solid #f4f4f4;
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
border-radius:20px;
background-size: cover !important;
background-position: center !important;
border: 5px solid #f4f4f4;
background-repeat: no-repeat !important;
background: black;
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

export const OLCustom = styled.ol`
list-style-type: none;
margin-left: 0;
padding-inline-start: 0px;
&:first-child{
  counter-reset: customlistcounter;
}
`
export const LiCustom = styled.li`
counter-increment: customlistcounter;
font-size:1rem;
padding-bottom: 10px;
line-height:2;
&:before {
  content: counter(customlistcounter) ")";
  font-weight: bold;
  float: left;
  width: 1.3em;
}
`