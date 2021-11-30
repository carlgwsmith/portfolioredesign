import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, ProjDetailsContainer, CtaImg } from './ISelements';
const AddAccounts = () => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = [
    "/images/compareaddaccounts-horzcrop.png",
    "/images/oldISProfile.png",
    "/images/newISProfile1.png"
  ];
  const h2special = {
    margin: "20px 0 20px 0",
    fontSize: "2em",
    color:"#3d3d3d",
    borderBottom:'2px solid #e5e5e5'
  }
  return (
    <div>
      <h2 style={h2special}>Simplify Onboarding</h2>
      <ProjDetailsContainer>
      <ProjImage>
        <CtaImg src={process.env.PUBLIC_URL + '/images/compareaddaccounts-horzcrop.png'} alt="on boarding comparison" onClick={() => setOpen(true)}></CtaImg>
        {isOpen && (
      <Lightbox
        mainSrc={images[0]}
        onCloseRequest={() => setOpen(false)}
      />
    )}
        </ProjImage>
        <ProjDetails>
          <Detail>A key factor into getting access into the greater software and using it for financial advice is the onboarding process. Users are required to set up their accounts (or households) and input information about themselves and their financial backgrounds.</Detail>
          <CtaImg src={process.env.PUBLIC_URL + '/images/oldISProfile.png'} alt="on boarding comparison" onClick={() => setOpen(true)}></CtaImg>
          {isOpen && (
          <Lightbox
          mainSrc={images[1]}
          onCloseRequest={() => setOpen(false)}/>)}
          <Detail><strong>Previously:</strong> users were expected to input client details (Name, Birthdate, Accounts, etc.) by filling out a long tedious form on a single page that had fields which are sometimes irrelevant to their client resulting in overkill in inputs and frustrations in advisors.</Detail>
          <CtaImg width="400px" src={process.env.PUBLIC_URL + '/images/newISProfile1.png'} alt="on boarding comparison" onClick={() => setOpen(true)}></CtaImg>
          {isOpen && (
          <Lightbox
          mainSrc={images[2]}
          onCloseRequest={() => setOpen(false)}/>)}
          <Detail><strong>Solution: </strong>Our team "wizard-ized" the profile into manageable and more streamlined sections, giving it a step-by-step feel as opposed to the previously unguided method. Additional features around adding accounts were added such as an automatic sync feature using <a href="https://plaid.com/">plaid</a> and drop-off prevention landing page to allow busy advisors to pickup where they left off in inputing a client's detailed information. </Detail>
        </ProjDetails>
      </ProjDetailsContainer>
    </div>
  );
}

export default AddAccounts;
