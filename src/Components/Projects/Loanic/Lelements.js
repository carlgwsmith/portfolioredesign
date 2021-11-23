import styled from "styled-components";
export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: .55fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header Header"
    "Role Role Role";
@media screen and (max-width:900px){
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .3fr .5fr; 
  grid-template-areas: 
    "Header Header"
    "Role Role";
} 
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .5fr ; 
  grid-template-areas: 
    "Header"
    "Role";
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
  grid-template-rows: .5fr .5fr .5fr; 
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
padding: 10px 30px;
background-color: #41CC89;
`