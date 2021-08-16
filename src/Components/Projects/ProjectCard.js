import React, {useState, useEffect} from 'react';
import { ProjCard, ProjTitle } from './ProjectElements';
import { useHistory } from "react-router-dom";

const ProjectCard = (props) => {
const [hover, setHover] = useState(false)
const [projUrl, setProjUrl] = useState('')

let history = useHistory();

const handleMouseEnter = () => {
  setHover(true);
}
const handleMouseLeave = () => {
  setHover(false);
}
function handleClick() {
  history.push(projUrl);
}

useEffect(() => {
  setProjUrl(props.url)
}, [props.url]);
  return (
    <ProjCard style={{background: hover ? "linear-gradient(rgba("+props.rgb+", 0.6), rgba("+ props.rgb +", 0.6)),url(" + props.image + ")" : "url(" + props.image + ")"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
     <ProjTitle>
       <h1>{props.title}</h1>
       <p style={{fontWeight:"700", fontSize:"20px"}}>{props.subtitle}</p>
     </ProjTitle>
    </ProjCard>
  );
}

export default ProjectCard;
