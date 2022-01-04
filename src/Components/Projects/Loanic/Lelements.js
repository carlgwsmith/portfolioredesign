import styled from "styled-components";
export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr .4fr .5fr .5fr;
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header Header"
    "Role Role Role"
    "Problem Problem Problem"
    "Process Process Process";
@media screen and (max-width:900px){
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .3fr .5fr .5fr .5fr; 
  grid-template-areas: 
    "Header Header"
    "Role Role"
    "Problem Problem"
    "Process Process";
} 
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .35fr .4fr .4fr; 
  grid-template-areas: 
    "Header"
    "Role"
    "Problem"
    "Process";
} 
`
export const Header = styled.div`
grid-area: Header;
text-align:center;
padding-left:20px;
padding:30px;
background-color:grey;
background-image: url(${props => props.img});
background-position: center;
background-size: cover;
background-position-y: 20%;
    background-size: cover;
`
export const ProjName = styled.h1`
  font-size:5em;
  margin-top:1em;
  font-weight: 600;
  color: #444;
  font-family: "Questrial",sans-serif;

  @media screen and (max-width:600px){
    font-size:2em;
    font-weight:500;
  }
`
export const CarlContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
color: white;
padding: 0px 30px;
grid-template-areas: 
    "MyRole Duration Responsibility";
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  grid-template-areas:
    "MyRole"
    "Duration"
    "Responsibility";
} 
`
export const MyRole = styled.div`
grid-area: MyRole;
text-align:left;
` 

export const Duration = styled.div`
grid-area: Duration;
text-align:left;
`
export const Responsibility = styled.div`
grid-area: Responsibility;
text-align:left;
`
export const Role = styled.div`
grid-area: Role;
line-height: 2;
background-color: #41CC89;
`
export const Problem = styled.div`
grid-area: Problem;
line-height: 2;
`
export const Process = styled.div`
grid-area: Process;
line-height: 2;
`

export const ProblemContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1.5fr 1.5fr;
color: white;
grid-template-areas: 
    "Prob Solution"
    "Prob Solution";
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: 2fr; 
  grid-template-areas:
    "Prob"
    "Solution";
} 
`
export const Prob = styled.div`
grid-area: Prob;
line-height: 2;
padding: 10px 30px;
background-color: #e93d3d;
text-align:left;
`
export const Solution = styled.div`
grid-area: Solution;
line-height: 2;
padding: 10px 30px;
background-color: #98ff98;
color: #00691c;
text-align:left;
`

export const ProcessContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
color: #444;
grid-template-areas: 
    "ProcessImg ProcessImg"
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  grid-template-areas:
    "ProcessImg";
} 
`
export const ProcessImg = styled.img`
grid-area: ProcessImg;
`