import React from 'react';
import {SchoolName, GradDate, Major} from './ResumeElements'

const School = (props) => {
  return (
    <div>
      <SchoolName>{props.name}</SchoolName>
      <Major>{props.major}</Major>
      <GradDate>{props.date}</GradDate>
    </div>
  );
}

export default School;
