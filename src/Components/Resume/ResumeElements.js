import styled from "styled-components";

export const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #28a92b;
  font-weight: 600;
  color: #fff;
`

export const ResumeContainer = styled.div `
display: grid; 
grid-template-columns: 2fr 1.5fr 2fr; 
grid-template-rows: 1fr 2fr; 
gap: 0px 40px;
padding:20px 40px;
grid-template-areas:
  "About About AboutImg"
  "Side-A Side-B Side-C"
  "Side-A Side-B Side-C"
  "Side-A Side-B Side-C";
  
  @media screen and (max-width:1100px){
    grid-template-columns: 1fr .5fr; 
    grid-template-rows: .2fr .7fr 1fr .7fr 1fr;
    grid-template-areas:
    "About AboutImg"
    "Side-A Side-A"
    "Side-B Side-B"
    "Side-C Side-C"; 
  }
  @media screen and (max-width:1000px){
    grid-template-columns: 1fr; 
    grid-template-rows: .2fr 1fr 1fr .7fr ;
    grid-template-areas:
    "About"
    "AboutImg"
    "Side-A"
    "Side-B"
    "Side-C"; 
  }

@media screen and (max-width:520px){
  grid-template-columns: 2fr; 
  grid-template-rows: .5fr .3fr .65fr .55fr .65fr;
  grid-template-areas:
  "About"
  "AboutImg"
  "Side-A"
  "Side-B"
  "Side-C"; 
}
`
export const About = styled.div`
grid-area: About;
text-align:left;

`
export const AboutImg = styled.div`
grid-area: AboutImg;
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
export const SideC = styled.div`
grid-area: Side-C;
text-align:left;
`
export const ResumeHeader = styled.h2`
font-family: 'Work Sans', sans-serif;
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
export const ResumeH1 = styled.h1`
font-family: 'Helvetica', sans-serif;
font-size:5em;
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
@media screen and (max-width:600px){
font-size:3em;
}
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
color:#4a5460;
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

