import React, {useState} from 'react';
import { ProcessContainer, ProcessImg } from './Lelements';
import Lightbox from 'react-image-lightbox'

const Process = () => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = [
    "/images/CCprocess.svg"
  ];
  const mockup = {
    width:"90%",
    marginLeft:"auto",
    marginRight:"auto",
    padding: "15px"
  }
  return (
    <ProcessContainer>
      <h2>Process</h2>
      <ProcessImg src={process.env.PUBLIC_URL + '/images/CCprocess.svg'} alt="crypto compare process flow" style={mockup} onClick={() => setOpen(true)}></ProcessImg>
      {isOpen && (
          <Lightbox
          mainSrc={images[photoIndex]}
          onCloseRequest={() => setOpen(false)}
          />
      )}
    </ProcessContainer>
  );
}

export default Process;
