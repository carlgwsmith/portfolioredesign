import React from 'react';
import { JobDate, JobName, JobSkills, JobTitle } from './ResumeElements';

const Job = (props) => {
  return (
    <div>
      <JobName>{props.name}</JobName>
      <JobTitle>{props.title}</JobTitle>
      <JobSkills>{props.desc}</JobSkills>
      <JobDate>{props.time}</JobDate>
    </div>
  );
}

export default Job;
