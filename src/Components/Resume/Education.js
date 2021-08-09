import React from 'react';
import {ResumeHeader} from './ResumeElements'
import {FaGraduationCap} from 'react-icons/fa'
import School from './School';

const Education = () => {
  return (
    <div>
      <ResumeHeader><FaGraduationCap size="1.1em"/> Education</ResumeHeader>
      <School name="Fort Hays State University" date="2019 - 2021" major ="MPS | Mobile and Web Application Development" />
      <School name="Washburn University" date="2014 - 2017" major ="BFA | Digital Design" />
    </div>
  );
}

export default Education;
