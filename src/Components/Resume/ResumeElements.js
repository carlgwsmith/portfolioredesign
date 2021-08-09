import styled from "styled-components";

export const ResumeContainer = styled.div `
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr 1fr; 
gap: 0px 0px;
padding:30px;
grid-template-areas: 
  "Side-A Side-A Side-B"
  "Side-A Side-A Side-B"
  "Side-A Side-A Side-B"; 
`
export const SideA = styled.div`
grid-area: Side-A;
text-align:left;
`
export const SideB = styled.div`
grid-area: Side-B;
`
export const ResumeHeader = styled.h2`
font-family: 'Work Sans';
color: #383838;
border-bottom: 1px solid;
width:50%;
letter-spacing: .1em;
font-weight: 600;
text-transform: uppercase;
`
export const SchoolName = styled.p`
font-size:1.2em;
margin-bottom: 4px;
font-family:'Work Sans', sans-serif;
font-weight: 400;
color:#3f3f3f;
`
export const GradDate = styled.p`
font-size:.9em;
color: #878787;
margin-top:0px;
font-family:'Work Sans', sans-serif;
font-weight: 400;
`
export const Major = styled.p`
margin-bottom:4px;
margin-top:4px;
font-family:'Work Sans', sans-serif;
color:#f38e00;

`