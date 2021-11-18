import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, ProjDetailsContainer, CtaImg } from './ISelements';
const AddAccounts = () => {
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const images = [
    "/images/compareaddaccounts-horzcrop.png"
  ];
  const h2special = {
    margin: "20px 0 20px 0",
    fontSize: "1.75em",
    color:"#3d3d3d"
  }
  return (
    <div>
      <h2 style={h2special}>Challenge 1: Simplify Onboarding</h2>
      <ProjDetailsContainer>
      <ProjImage>
        <CtaImg src={process.env.PUBLIC_URL + '/images/compareaddaccounts-horzcrop.png'} alt="on boarding comparison" onClick={() => setOpen(true)}></CtaImg>
        {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        onCloseRequest={() => setOpen(false)}
      />
    )}
        </ProjImage>
        <ProjDetails>
          <Detail>A key factor into getting access into the greater software and using it for financial advice is the onboarding process. Users are required to set up their accoounts (or households) and input information about themselves and their financial backgrounds.</Detail>
          <Detail><strong>Previously:</strong> users were expected to input client details (Name, Birthdate, Accounts, etc.) by filling out a long tedious form on a single page that had fields which we sometimes irrelevant to their client resulting in overkill in inputs and frustrations in advisors.</Detail>
          <Detail><strong>Solution: </strong>Our team "wizard-ized" the profile into manageable and more streamlined sections, giving it a step-by-step feel as opposed to the previously unguided method. Additional features around adding accounts were added like including an automatic sync feature using <a href="https://plaid.com/">plaid</a>. </Detail>
        </ProjDetails>
      </ProjDetailsContainer>
    </div>
  );
}

export default AddAccounts;
