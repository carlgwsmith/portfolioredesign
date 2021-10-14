import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, StyleGuideContainer } from './ISelements';

const CustomModels = () => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = [
    "/images/styleguide.png"
  ];
  const mockup = {
    width: "80%",
    marginLeft:"10%",
    marginRight:"auto"
  }
  const h2special = {
    margin: "10px 0 0 0",
    fontSize: "2em",
    color:"#3d3d3d"
  }
  return (
    <div>
      <h2 style={h2special}>Challenge 3: Custom Styling</h2>
      <StyleGuideContainer>
      <ProjDetails>
          <Detail>In developing my research, we met with executive stakeholders and decided that a new design system should be created to emphasize the shift in product focus and freshen things up for legacy users. Our goal was to utilize the Quasar design system and makes tweaks to develop a system that more aligns with our brand.</Detail>
        </ProjDetails>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/styleguide.png'} alt="on boarding comparison" style={mockup} onClick={() => setOpen(true)}></img>
        {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        onCloseRequest={() => setOpen(false)}
      />
    )}
        </ProjImage>
      </StyleGuideContainer>
    </div>
  );
}

export default CustomModels;
