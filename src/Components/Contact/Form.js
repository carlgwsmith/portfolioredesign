import {useForm} from '@formcarry/react';
import React from 'react';

const Form = () => {
  const {state, submit} = useForm({
    id: 'cO4NwKHhECf'
  });
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }

  return (
    <form onSubmit={submit} className="contactForm">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name"/>

      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email"/>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"/>

      <button type="submit" className="submitBtn">Get in Touch</button>
    </form>
  );
}

export default Form;
