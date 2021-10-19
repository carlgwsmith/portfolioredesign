import React, {useState} from 'react';
import { GiGearStickPattern } from 'react-icons/gi'
import Lightbox from 'react-image-lightbox'

const Ccprocess = () => {
  const images = [
    "/images/CCprocess.svg"
  ];
  

  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const mockup = {
    width:"100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  return (
    <div>
      <h2 style={{color:"#3d3d3d"}}><GiGearStickPattern/> Process</h2>
      <img src={process.env.PUBLIC_URL + '/images/CCprocess.svg'} alt="crypto compare process flow" style={mockup}></img>
      {isOpen && (
          <Lightbox
          mainSrc={images[photoIndex]}
          onCloseRequest={() => setOpen(false)}
          />
      )}
    </div>
  );
}

export default Ccprocess;
