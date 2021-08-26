import styled from "styled-components";


export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: .4fr 1fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header Header"
    "Vision Vision Tools";
@media screen and (max-width:900px){
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .3fr .5fr .5fr; 
  grid-template-areas: 
    "Header Header"
    "Vision Vision"
    "Tools Tools";
} 
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .5fr .5fr; 
  grid-template-areas: 
    "Header"
    "Vision"
    "Tools";
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
export const Vision = styled.div`
grid-area: Vision;
text-align:left;
padding-left:20px;
padding:30px;
`
export const Tools = styled.div`
grid-area: Tools;
text-align:left;
padding-left:20px;
padding:30px;
`

// export const Mock = styled.div`
// grid-area: Mock;
// text-align:center;
// padding-left:20px;
// padding:30px;
// `

export const Mock = styled.img`
    width:400px;
    float:left;
    padding:20px;
    @media screen and (max-width:600px){
  width:100%;
} 
    `