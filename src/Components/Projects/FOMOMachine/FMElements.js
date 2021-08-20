import styled from "styled-components";


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
    "Dashboard Dashboard"
    "View View"
    "Help Help"
    "Models Models";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .15fr .3fr .4fr .5fr .4fr .5fr .5fr; 
  grid-template-areas: 
    "Header"
    "Vision"
    "Challenge"
    "GS"
    "Dashboard"
    "View"
    "UI"
    "Models";
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
`