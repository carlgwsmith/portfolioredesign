import styled from "styled-components";

export const ProjImage = styled.div`
grid-area: ProjImage;
text-align:left;
padding-left:20px;
`
export const ProjDetails = styled.div`
grid-area: ProjDetails;
text-align:left;
padding-left:20px;
padding:30px;
`

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
    "Compare Compare"
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
    "Compare"
    "Models";
} 
`
export const Vision = styled.div`
grid-area: Vision;
text-align:left;
padding-left:20px;
line-height: 2;
padding:30px;
`
export const Challenge = styled.div`
grid-area: Challenge;
text-align:left;
padding-left:20px;
padding:30px;
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
export const GS = styled.div`
grid-area: GS;
text-align:center;
padding-left:20px;
background-color:#f5f8ff;
color:#3d3d3d;
padding:30px;
`
export const Dashboard = styled.div`
grid-area: Dashboard;
text-align:left;
padding-left:20px;
background-color:#fff;
color:#3d3d3d;
padding:30px;
`
export const View = styled.div`
grid-area: View;
text-align:left;
padding-left:20px;
background-color:#097cfe;
color:#fff;
padding:30px;
`

export const Compare = styled.div`
grid-area: Compare;
text-align:left;
padding-left:20px;
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