import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {GSpara, CustomButton} from './ISelements'

const GettingStarted = () => {
  const images = [
    "/images/ISinvestmentIA.jpg"
  ];
  

  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <div>
      <h2 style={{fontSize:"2em", fontWeight:'300'}}>User Flow</h2>
      <GSpara>We constructed a user flow of what a basic start to finish journey could be for a user. This helps
us understand how users can interact with components of the product as well as helps us
identify potential initial pain points.

This practice also sets the stage for the initial information architecture of the new features in the application.
</GSpara>
<CustomButton  onClick={() => setOpen(true)} >Click to View Diagram</CustomButton>
    {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        onCloseRequest={() => setOpen(false)}
      />
    )}
    </div>
  );
}

export default GettingStarted;
