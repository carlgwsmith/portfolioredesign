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
  grid-template-rows: 1fr 1fr 1.6fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header"
    "Vision Challenge"
    "GS GS"; 
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
width: 60%;
margin-left: auto;
font-size:1.1em;
font-weight: 400;
margin-right: auto;
padding-bottom:10px;
line-height: 1.4;
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