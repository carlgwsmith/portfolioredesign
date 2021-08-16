import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: grid; 
  /* grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr;  */
  gap: 40px 40px;
  padding: 30px;
  grid-template-areas:
    "About About"
    "SideA1 SideB1"
    "SideA2 SideB2"; 
`
export const About = styled.div`
grid-area: About;
text-align:left;
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
margin-top:20%;
color:transparent;
`
export const ProjCard = styled.div`
height: 300px;
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