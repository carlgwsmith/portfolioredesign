import React from 'react';
import {ProjImage, ProjDetails, SupportContainer } from '../ProjectElements';
const AddAccounts = () => {
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
  const detail = {
    fontSize:"1.5em",
    lineHeight:"1.5",
    marginTop:"0"
  }
  return (
    <div>
      <h2 style={h2special}>Challenge 2: Contextual Support </h2>
      <SupportContainer>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/HelpMocks.png'} alt="on boarding comparison" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
          <p style={detail}>Financial planning concepts are not always easy to to understand and software can often be unhelpful when it assumes too much of the user. Making support available can often save users headaches and companies money. </p>
          <p style={detail}>Along a users journey through the software they may find themselves stuck. We developed a floating sidebar for contextual help that is specific to the current feature the user is actively on. If they require more assistance than they may visit the knowledge base where they can have access to specific higher level topics or get help from a real person.</p>
        </ProjDetails>
      </SupportContainer>
    </div>
  );
}

export default AddAccounts;
