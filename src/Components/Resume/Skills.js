import React from 'react';
import {ResumeHeader} from './ResumeElements'
import {GiThorHammer} from 'react-icons/gi'
import SkillList from './SkillList';

const Skills = () => {
  return (
    <div>
      <ResumeHeader><GiThorHammer size="1.1em"/> Skills</ResumeHeader>
      <SkillList type="Software" skills={['Adobe Suite (PS, AI, XD', 'Figma', 'Visual Studio Code', 'Github Desktop']}/>
      <SkillList type="Develop" skills={['HTML', 'CSS', 'JS (React, Vue)']}/>
      <SkillList type="Design" skills={['Wireframing & Prototyping', 'User Testing', 'User Research', 'Interaction Design', 'Visual & Print Design']}/>
    </div>
  );
}

export default Skills;
