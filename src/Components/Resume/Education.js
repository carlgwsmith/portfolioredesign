import React from 'react';
import {ResumeHeader} from './ResumeElements'
import {FaGraduationCap} from 'react-icons/fa'
import School from './School';

const Education = () => {
  return (
    <div>
      <ResumeHeader><FaGraduationCap size="1.15em" style={{display: 'inline-block', verticalAlign: "bottom"}} /> Education</ResumeHeader>
      <School name="Fort Hays State University" date="2019 - 2021" major ="MPS | Mobile and Web Application Development" />
      <School name="Washburn University" date="2014 - 2017" major ="BFA | Digital Design" />
      <School name="UX Design Professional" date="2021" major ="Google Certification" />
    </div>
  );
}

export default Education;
