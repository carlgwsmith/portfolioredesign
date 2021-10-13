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
  grid-template-rows: .25fr .1fr .25fr .5fr .5fr .5fr .6fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "Header Header"
    "Role Role"
    "Problem Solution"
    "Process Process"
    "Vision Challenge"
    "GS GS"
    "Dashboard Dashboard"
    "View View"
    "Compare Compare";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .3fr .15fr .1fr .1fr .2fr .3fr .3fr .4fr .5fr .4fr .5fr; 
  grid-template-areas: 
    "Header"
    "Role"
    "Problem"
    "Solution"
    "Process"
    "Vision"
    "Challenge"
    "GS"
    "Dashboard"
    "View"
    "Compare";
} 
`

export const Role = styled.div`
grid-area: Role;
padding:20px;
line-height: 2;
padding:30px;
background-color: #00a7ff;
`
export const Process = styled.div`
grid-area: Process;
text-align:left;
padding:20px;
line-height: 2;
padding:30px;
`

export const Vision = styled.div`
grid-area: Vision;
text-align:left;
padding:20px;
line-height: 2;
padding:30px;
`
export const Challenge = styled.div`
grid-area: Challenge;
text-align:left;
padding:20px;
padding:30px;
`
export const Problem = styled.div`
grid-area: Problem;
text-align:left;
padding:20px;
padding:30px;
`
export const Solution = styled.div`
grid-area: Solution;
text-align:left;
padding:20px;
padding:30px;
`
export const Header = styled.div`
grid-area: Header;
text-align:center;
padding:20px;
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
padding:20px;
background-color:#f5f8ff;
padding:30px;
`

export const Compare = styled.div`
grid-area: Compare;
text-align:left;
padding:20px;
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
    "MyRole Duration Responsibility"
}
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .5fr; 
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
