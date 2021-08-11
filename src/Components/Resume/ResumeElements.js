import styled from "styled-components";

export const ResumeContainer = styled.div `
display: grid; 
grid-template-columns: 2fr 2fr; 
/* grid-template-rows: 2fr 2fr;  */
gap: 0px 0px;
padding:20px 40px;
grid-template-areas:
  "About About"
  "Side-A Side-B"
  "Side-A Side-B"
  "Side-A Side-B";
  
@media screen and (max-width:480px){
  grid-template-columns: 2fr; 
  /* grid-template-rows: 2fr; */
  grid-template-areas:
  "About"
  "Side-A"
  "Side-B"; 
}
`
export const About = styled.div`
grid-area: About;
text-align:left;
`
export const AboutMe = styled.p`
font-family:'Work sans', sans-serif;
line-height:1.7em;
margin-bottom:40px;
margin-left:20px;
padding-left:20px;
border-left:4px solid #e3e3ee;
`

export const SideA = styled.div`
grid-area: Side-A;
text-align:left;
`
export const SideB = styled.div`
grid-area: Side-B;
text-align:left;
`
export const ResumeHeader = styled.h2`
font-family: 'Work Sans';
color: #383838;
/* border-bottom: 1px solid; */
/* width:100%; */
letter-spacing: .1em;
font-weight: 600;
text-transform: uppercase;
display: inline-block;
vertical-align: middle;
margin:10px 0;
`
export const SchoolName = styled.p`
font-size:1.2em;
margin-bottom: 4px;
font-family:'Work Sans', sans-serif;
color: #ff9900;
font-weight: 600;
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
font-size:.8em;
font-weight:600;
color:#a3a3a3;
`

export const SkillHead = styled.p`
font-size:1.2em;
margin-bottom: 4px;
font-family:'Work Sans', sans-serif;
font-weight: 500;
color:#3f3f3f;
`
export const SList = styled.ul`
list-style-type: none;
padding-inline-start: 0px !important;
margin-top:10px;
`
export const SItem = styled.li`
font-weight:400;
font-family:'Work Sans', sans-serif;
`
export const JobName = styled.p`
font-size:1.2em;
margin-bottom: 4px;
font-family:'Work Sans', sans-serif;
color: #ff9900;
font-weight: 600;
`
export const JobTitle = styled.p`
font-size:.9em;
margin-bottom: 4px;
font-family:'Work Sans', sans-serif;
font-weight: 600;
color:#3f3f3f;
margin-top:0px;
`
export const JobSkills = styled.p`
margin-bottom:4px;
margin-top:4px;
font-family:'Work Sans', sans-serif;
`
export const JobDate = styled.p`
font-size:.9em;
color: #878787;
margin-top:0px;
font-family:'Work Sans', sans-serif;
font-weight: 400;
`

