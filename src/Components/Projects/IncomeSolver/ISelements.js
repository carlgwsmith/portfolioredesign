import styled from "styled-components";

export const ProjDetailsContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: .7fr .7fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
  
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr 1fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const CtaImg = styled.img`
width:100%;
margin-left:auto;
margin-right:auto;
`
export const Detail = styled.p`
font-size:1.5em;
line-height:1.5;
margin-top:0;
color:"#3d3d3d";
@media screen and (max-width:600px){
  font-size:1em !important;
}`

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

export const ModelsContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .2fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .5fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr .8fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const SupportContainer = styled.div`
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
export const StyleGuideContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .3fr .3fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .5fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr .8fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails";
} 
`
export const GSpara = styled.p`
width: 65%;
margin-left: auto;
font-size:1.1em;
font-weight: 400;
margin-right: auto;
padding-bottom:10px;
line-height: 1.4;
@media screen and (max-width:600px){
  width:90% !important;
}`
export const OLCustom = styled.ol`
list-style-type: none;
margin-left: 0;
padding-inline-start: 0px;
&:first-child{
  counter-reset: customlistcounter;
}
`
export const LiCustom = styled.li`
counter-increment: customlistcounter;
font-size:1rem;
padding-bottom: 10px;
line-height:2;
&:before {
  content: counter(customlistcounter) ")";
  font-weight: bold;
  float: left;
  width: 1.3em;
}
`