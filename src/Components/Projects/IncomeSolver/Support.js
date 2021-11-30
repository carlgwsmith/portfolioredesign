import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, SupportContainer } from './ISelements';
const AddAccounts = () => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = [
    "/images/HelpMocks.png"
  ];
  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "20px 0 20px 0",
    fontSize: "2em",
    color:"#3d3d3d",
    borderBottom:'1px solid #e5e5e5'
  }
  return (
    <div>
      <h2 style={h2special}>Contextual Support </h2>
      <SupportContainer>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/HelpMocks.png'} alt="on boarding comparison" style={mockup} onClick={() => setOpen(true)}></img>
        {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        onCloseRequest={() => setOpen(false)}
      />
    )}
        </ProjImage>
        <ProjDetails>
          <Detail>Financial planning concepts are not always easy to to understand and software can often be unhelpful when it assumes too much of the user. Making support available can often save users headaches and companies money. </Detail>
          <Detail><strong>Previously:</strong> support wasn't available in any form outside of consumer telephone calls, training seminars, and PDFs. A user would have be given a packet of goods upon onboarding/purchase that they could reference. If that onboarding material was unhelpful, the user would have to contact our staff directly.</Detail>
          <Detail><strong>Solution:</strong> taking note from successful brands we decided to implement a contextual help module. Along a users journey through the software they may find themselves stuck. We developed a floating tab for particularly challenging pages. Upon clicking the tab, a panel slides out from the right and page specific topic becomes available to the user. If they require more assistance than they may visit the knowledge base where they can have access to specific higher level topics or get help from a real person.</Detail>
        </ProjDetails>
      </SupportContainer>
    </div>
  );
}

export default AddAccounts;
