import React from 'react';
import Form from '../Components/Contact/Form';
import {ContactContainer, SideA, About, SideB} from '../Components/Contact/ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
      <About><h1 style={{margin:"0px"}}>Contact Carl</h1>
      </About>
     <SideA><Form/></SideA>
     <SideB></SideB>
    </ContactContainer>
  );
}

export default Contact;
