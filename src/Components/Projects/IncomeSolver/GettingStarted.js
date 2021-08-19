import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {GSpara} from './ISelements'

const GettingStarted = () => {
  const images = [
    "/images/ISwhiteboard.png"
  ];
  
  const imgStyle = {
    borderRadius:"20px",
    border:"5px solid #f3f3f3",
    boxShadow: "4px 6px 6px #094c90",
    width:"60%",
    marginBottom:"25px",
    cursor:"pointer"
  }

  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <div>
      <h2 style={{fontSize:"2em", fontWeight:'300'}}>Getting Started</h2>
      <GSpara>We constructed a user flow of what a basic start to finish journey could be for a user. This helps
us understand how users can interact with components of the product as well as helps us
identify potential initial pain points.</GSpara>
<img src={process.env.PUBLIC_URL + '/images/ISwhiteboard.png'} alt="white board drawing" onClick={() => setOpen(true)} style={imgStyle}></img>
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
