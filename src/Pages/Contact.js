import React from 'react';
import Form from '../Components/Contact/Form';
import {ContactContainer, SideA, SideB} from '../Components/Contact/ContactElements'

const Contact = () => {
  return (
    <ContactContainer className="fade-in-bottom">
     <SideA><Form/></SideA>
    </ContactContainer>
  );
}

export default Contact;
