import React, {useState} from 'react';
import { ProjCard, ProjTitle } from './ProjectElements';

const ProjectCard = (props) => {
const [hover, setHover] = useState(false)

const handleMouseEnter = () => {
  setHover(true);
}
const handleMouseLeave = () => {
  setHover(false);
}

  return (
    <ProjCard style={{background: hover ? "linear-gradient(rgba("+props.rgb+", 0.6), rgba("+ props.rgb +", 0.6)),url(" + props.image + ")" : "url(" + props.image + ")"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <ProjTitle>
       <h1>{props.title}</h1>
       <p>Case Study</p>
     </ProjTitle>
    </ProjCard>
  );
}

export default ProjectCard;
