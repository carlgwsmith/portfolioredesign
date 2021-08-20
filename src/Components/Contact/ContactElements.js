import styled from "styled-components";

export const ContactContainer = styled.div `
display: grid; 
grid-template-columns: 1fr 2fr 1fr; 
grid-template-rows: 2fr; 
gap: 0px 0px;
padding:30px;
grid-template-areas:
  ". About ."
  ". Side-A ."; 
`
export const About = styled.div`
grid-area: About;
text-align:center;
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
`
export const SideA = styled.div`
grid-area: Side-A;
text-align:left;
`
export const SideB = styled.div`
grid-area: Side-B;
text-align:left;
`