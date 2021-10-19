import styled from "styled-components";

export const ProjImage = styled.div`
grid-area: ProjImage;
text-align:left;
padding:20px;
`
export const ProjDetails = styled.div`
grid-area: ProjDetails;
text-align:left;
padding:20px;
padding:30px;

`
export const Detail = styled.p`
font-size:1.5em;
line-height:1.5;
margin-top:0;
color:"#3d3d3d";
@media screen and (max-width:600px){
  font-size:1em !important;
} 
`

export const ProjectOverview = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .1fr .08fr .1fr .18fr .25fr .2fr .3fr .6fr .2fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header"
    "Role Role"
    "Problem Solution"
    "Process Process"
    "UserResearch UserResearch"
    "Vision Challenge"
    "GS GS"
    "Dashboard Dashboard"
    "View View"
    "Compare Compare";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .15fr .15fr .1fr .1fr .15fr .3fr .3fr 2fr .4fr .5fr .4fr .2fr;
  grid-template-areas: 
    "Header"
    "Role"
    "Problem"
    "Solution"
    "Process"
    "Vision"
    "Challenge"
    "UserResearch"
    "GS"
    "Dashboard"
    "View"
    "Compare";
} 
`
export const ProjName = styled.h1`
  font-size:4em;
  margin-top:1em;
  font-weight: 400;
  color:#3d3d3d;

  @media screen and (max-width:600px){
    font-size:2em;
    font-weight:500;
  }
`

export const Role = styled.div`
grid-area: Role;
line-height: 2;
padding: 10px 30px;
background-color: #00a7ff;
`
export const Process = styled.div`
grid-area: Process;
text-align:left;
line-height: 2;
padding:30px;
background-color: #f5f8ff;
`

export const Vision = styled.div`
grid-area: Vision;
text-align:left;
line-height: 2;
padding:30px;
`
export const Challenge = styled.div`
grid-area: Challenge;
text-align:left;
padding:30px;
`
export const Problem = styled.div`
grid-area: Problem;
text-align:left;
margin: 40px;
border-radius: 20px;
padding:30px;
background-color:#ff7171;
`
export const UserResearch = styled.div`
grid-area: UserResearch;
text-align:left;
margin: 0px;
padding:30px;
`
export const Solution = styled.div`
grid-area: Solution;
text-align:left;
margin: 40px;
border-radius: 20px;
padding:30px;
background-color:#6effa8;
`
export const Header = styled.div`
grid-area: Header;
text-align:center;
padding:30px;
background-color:grey;
background-image: url(${props => props.img});
background-position: center;
background-size:cover;
border-bottom:5px solid #415b66;
box-shadow:2px 8px 20px #afafaf94;;
`
export const GS = styled.div`
grid-area: GS;
text-align:center;
padding:20px;
background-color:#f5f8ff;
color:#3d3d3d;
padding:30px;
`
export const Dashboard = styled.div`
grid-area: Dashboard;
text-align:left;
padding:20px;
background-color:#fff;
color:#3d3d3d;
padding:30px;
`
export const View = styled.div`
grid-area: View;
text-align:left;
background-color:#f5f8ff;
padding:30px;
`

export const Compare = styled.div`
grid-area: Compare;
text-align:left;
background-color:#fff;
color:#3d3d3d;
padding:30px;
`

export const DashContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .6fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const ViewContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .6fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const CompareContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .6fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const GSContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .6fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
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
export const URContainer = styled.div`
display: grid;
color:#3d3d3d;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: .2fr .5fr .8fr .7fr;
grid-template-areas: 
    "ROverview ROverview ROverview ROverview ROverview ROverview"
    "RBlockQuotes1 RBlockQuotes1 RBlockQuotes2 RBlockQuotes2 RBlockQuotes3 RBlockQuotes3"
    "Persona1 Persona1 Persona1 Persona1 Persona1 Persona1"
    "Persona2 Persona2 Persona2 Persona2 Persona2 Persona2";
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr .2fr .2fr .2fr .5fr .2fr; 
  grid-template-areas:
    "ROverview"
    "RBlockQuotes1"
    "RBlockQuotes2"
    "RBlockQuotes3"
    "Persona1"
    "Persona2";
} 
`

export const ROverview = styled.div`
grid-area: ROverview;
text-align:left;
`
export const RBlockQuotes1 = styled.div`
grid-area: RBlockQuotes1;
text-align:left;
padding:20px;
`
export const RBlockQuotes2 = styled.div`
grid-area: RBlockQuotes2;
text-align:left;
padding:20px;
`
export const RBlockQuotes3 = styled.div`
grid-area: RBlockQuotes3;
text-align:left;
padding:20px;
`
export const Persona1 = styled.div`
grid-area: Persona1;
text-align:left;
`
export const Persona2 = styled.div`
grid-area: Persona2;
text-align:left;
`
export const QuoteBox = styled.div`
border:1px solid #f3f3f3;
padding:20px;
/* height:170px; */
position: relative;

@media screen and (max-width:600px){
  /* height:220px; */
}
`

export const PersonaContainer = styled.div`
display: grid;
color:#3d3d3d;
border:1px solid #ababab;
padding:15px;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: .3fr .3fr .3fr .5fr .5fr .5fr;
grid-template-areas: 
    "PersonaName PersonaName PersonaName"
    "PersonaImg PersonaQuote PersonaQuote"
    "PersonaImg PersonaDetails PersonaDetails"
    "PersonaImg ProblemStatement ProblemStatement"
    "PersonaImg PersonaGoal PersonaFrus"
    "UserNeeds UserNeeds UserNeeds";

@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr .5fr .2fr .35fr .25fr .25fr .3fr .3fr; 
  grid-template-areas:
    "PersonaName"
    "PersonaImg"
    "PersonaQuote"
    "PersonaDetails"
    "ProblemStatement"
    "PersonaGoal"
    "PersonaFrus"
    "UserNeeds";
} 
`
export const PersonaName = styled.div`
grid-area: PersonaName;
`
export const PersonaQuote = styled.div`
grid-area: PersonaQuote;
`
export const PersonaImg = styled.div`
grid-area: PersonaImg;
`
export const PersonaDetails = styled.div`
grid-area: PersonaDetails;
`
export const PersonaGoal = styled.div`
grid-area: PersonaGoal;
`
export const PersonaFrus = styled.div`
grid-area: PersonaFrus;
`
export const ProblemStatement = styled.div`
grid-area: ProblemStatement;
`
export const UserNeeds = styled.div`
grid-area: UserNeeds;
padding:20px;
border:2px solid orange;
background-color: #ffeac5;
`
export const JourneyMap = styled.div`
&:hover{
  cursor:pointer;
} 
`
export const JourneyContainer = styled.div`
border:1px solid #ababab;
width:100%;
`