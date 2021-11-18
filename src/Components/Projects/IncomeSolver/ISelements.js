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
font-size: 1.1em;
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
export const ProjImage2 = styled.div`
grid-area: ProjImage2;
text-align:left;
padding-left:20px;
`
export const ProjDetails2 = styled.div`
grid-area: ProjDetails2;
text-align:left;
padding-left:20px;
padding:30px;
`

export const ModelsContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: .2fr .5fr .2fr .5fr; 
  gap: 0px 0px;
  padding:0px;
  grid-template-areas: 
    "ProjImage ProjImage"
    "ProjDetails ProjDetails"
    "ProjImage2 ProjImage2"
    "ProjDetails2 ProjDetails2";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .4fr .5fr .4fr .5fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails"
    "ProjImage2"
    "ProjDetails2";
} 
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .20fr .8fr .2fr .8fr; 
  grid-template-areas: 
    "ProjImage"
    "ProjDetails"
    "ProjImage2"
    "ProjDetails2";
} 
`

export const URContainer = styled.div`
display: grid;
color:#3d3d3d;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: .2fr .35fr;
grid-template-areas: 
    "ROverview ROverview ROverview ROverview ROverview ROverview"
    "RBlockQuotes1 RBlockQuotes1 RBlockQuotes2 RBlockQuotes2 RBlockQuotes3 RBlockQuotes3";
@media screen and (max-width:600px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr .2fr .2fr .2fr; 
  grid-template-areas:
    "ROverview"
    "RBlockQuotes1"
    "RBlockQuotes2"
    "RBlockQuotes3";
} 
`

export const ROverview = styled.div`
grid-area: ROverview;
text-align:left;
line-height:1.4;
font-size: 1.1em;
padding: 0px 20px;
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
border:1px solid #09b95a;
padding:20px;
/* height:170px; */
position: relative;`

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
  grid-template-rows: .1fr 1fr;
  gap: 0px 0px;
  padding:0px;
  grid-template-areas:
  "ProjDetails ProjDetails"
    "ProjImage ProjImage";
  
@media screen and (max-width:900px){
  grid-template-columns: 1fr; 
  grid-template-rows: .2fr .5fr; 
  grid-template-areas:
  "ProjDetails"
    "ProjImage";
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
width: 85%;
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
line-height:1.5;
&:before {
  content: counter(customlistcounter) ")";
  font-weight: bold;
  float: left;
  width: 1.3em;
}
`
export const CustomButton = styled.button`
    padding: 20px;
    border-radius: 40px;
    font-size: 1em;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    background-color: #09b95a;
    color: white;
    border: 2px solid white;
    &:focus{
      border-radius:40px;
    }
    &:hover{
      border:2px solid #09b95a;
    }
`
export const UserResearch = styled.div`
grid-area: UserResearch;
text-align:left;
margin: 0px;
padding:20px 30px 15px 30px;
background-color:#e7fdf0;
`