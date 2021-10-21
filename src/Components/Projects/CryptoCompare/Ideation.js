import React, {useState} from 'react';
import {ProjImage, Detail, ProjDetails, DashContainer } from './CCelements';
import Lightbox from 'react-image-lightbox';
const Ideation = () => {
  const images = [
    "/images/CCIdeate.png"
  ];
  

  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "10px 0 10px 0",
    fontSize: "2em",
    color:"#3d3d3d",
    textAlign:"center"
  }
  return (
    <div>
      <DashContainer>
        <ProjImage>
        <h2 style={h2special}>Ideation in Lo-Fi &amp; Hi-Fi</h2>
        <img src={process.env.PUBLIC_URL + '/images/CCideate.png'} onClick={() => setOpen(true)} alt="crypto compare dashboard" style={mockup}></img>
        {isOpen && (
          <Lightbox
          mainSrc={images[photoIndex]}
          onCloseRequest={() => setOpen(false)}
          />
          )}
        </ProjImage>
        <ProjDetails>
          <Detail>Initial wireframes are created in low fidelity to determine information architecture</Detail>
          <Detail>After testing and IA is finalized, Lo-Fi wireframes are transformed into high fidelity mockups with colors and close to final product design system included.</Detail>
        </ProjDetails>
      </DashContainer>
    </div>
  );
}

export default Ideation;