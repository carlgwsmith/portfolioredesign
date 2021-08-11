import React from 'react';
import { ResumeHeader } from './ResumeElements';
import {BsFillBriefcaseFill} from 'react-icons/bs'
import Job from './Job';

const Experience = () => {
  return (
    <div>
      <ResumeHeader><BsFillBriefcaseFill size="1.15em" style={{display: 'inline-block', verticalAlign: "bottom"}}/> Work Experience</ResumeHeader>
      <Job name="Social Security Solutions" title="Senior UX/UI Designer" desc="Managing and contributing to a team of creatives in developing wireframes, rapid prototyping, user research and testing. Engineering UI in conjunction with development team. 'Full-stack' product design on award winning retirement, investment, social security applications." time="2019 - Current"/>
      <Job name="Legacy Financial Partners" title="Lead Web Developer / Visual Designer" desc="Managing, coordinating, and working alongside a small team of creatives handling web projects for independent financial advisors across the country." time="2012-2019"/>
      <Job name="Freelance" title="Freelance Web Developer" desc="Managing, coordinating, and working alongside a small team of creatives handling projects for independent financial advisors across the country." time="2010 - 2019"/>
    </div>
  );
}

export default Experience;
