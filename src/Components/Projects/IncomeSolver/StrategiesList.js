import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, ProjImage2, Detail, ProjDetails, ProjDetails2, CtaImg, StratIdeasContainer } from './ISelements';

export default function StrategiesList() {
    const [isOpen, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const images = [
      "/images/ISstratIteration.png",
      "/images/newISProfile1.png"
    ];
    const h2special = {
      margin: "20px 0 20px 0",
      fontSize: "2em",
      color:"#3d3d3d",
      borderBottom:'2px solid #e5e5e5'
    }
    return (
      <StratIdeasContainer>
        <ProjDetails>
        <h2 style={h2special}>Selecting Strategies</h2>
          <Detail>One of the most attractive features of the software to consumers is the ability to choose from plenty of system generated drawdown strategies based on the account input and present that to clients in a meeting. Through iteration we tested and tried various designs that delivered large amounts of strategy ideas in lists. Strategies are ranked by ending portfolio value or other filters that the user can choose.</Detail>
        </ProjDetails>
        <ProjImage style={{textAlign:'center'}}>
        <CtaImg src={process.env.PUBLIC_URL + '/images/ISstratIteration.png'} alt="on boarding comparison" onClick={() => setOpen(true)}></CtaImg>
          <p style={{textAlign:"center", marginTop:'0px', color:'#8b8b8b'}}>(Strategies Ideas Iteration)</p>
          {isOpen && (
          <Lightbox
          mainSrc={images[0]}
          onCloseRequest={() => setOpen(false)}/>)}
        </ProjImage>
        <ProjImage2 style={{textAlign:'center'}}>
        <img src={process.env.PUBLIC_URL + '/images/stratideasmock.gif'} alt="final mock" height="400px"/>
        <p style={{textAlign:"center", marginTop:'0px', color:'#8b8b8b'}}>(Production Version)</p>
        </ProjImage2>
        <ProjDetails2>
        <Detail>With the vastness of the strategies section we ran into issues of clients wanting typical "industry-standard" (For Example: Best Roth Strategy, Best Non-Roth, Lowest Paid Taxes) types of strategies to be more easily located. A special section titled "Strategies to Consider", which our stakeholders have deemed as popular styles, are highlighted and showcased above the fold and also within the greater strategy list.</Detail>
        </ProjDetails2>
      </StratIdeasContainer>
    )
}
