import React from 'react';
import { SkillHead, SList, SItem } from './ResumeElements';
import {BiChevronRight} from 'react-icons/bi'

const SkillList = (props) => {
  const skills = props.skills
  const listItems = skills.map((skill) =>
  <SItem><BiChevronRight/> {skill}</SItem>
);

  return (
    <div>
      <SkillHead>{props.type}</SkillHead>
      <SList>{listItems}</SList>
    </div>
  );
}

export default SkillList;
