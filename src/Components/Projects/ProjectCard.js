import React, {useState, useEffect} from 'react';
import { ProjCard, ProjTitle } from './ProjectElements';
import { useHistory } from "react-router-dom";
import { ProjButton } from '../Home/Button';

const ProjectCard = (props) => {
const [hover, setHover] = useState(false)
const [projUrl, setProjUrl] = useState('')

let history = useHistory();

  const onHover = () => {
    setHover(!hover)
  }

const handleMouseEnter = () => {
  setHover(true);
}
const handleMouseLeave = () => {
  setHover(false);
}
function handleClick() {
  history.push(projUrl);
}
const caseBtn = {
  padding: "10px 20px",
  border: "1px solid #cfcfcf",
  textDecoration: "none",
  backgroundColor: "white",
  fontSize: "14px",
  marginTop:"4px",
  borderRadius:"4px"
}
useEffect(() => {
  setProjUrl(props.url)
}, [props.url]);

  return (
    // <ProjCard style={{background: hover ? "linear-gradient(rgba("+props.rgb+", 0.6), rgba("+ props.rgb +", 0.6)),url(" + props.image + ")" : "url(" + props.image + ")"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
    <ProjCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className="fade-in">
      <h3 style={{ margin:"0px", color:"#3f3f3f"}}>{props.title}</h3>
      <p style={{fontWeight:"400", fontSize:"14px", margin:"0px 0px 10px 0px", color:"#3f3f3f"}}>{props.subtitle}</p>
      <img src={props.image} alt={props.title} width="100%"/>
      <ProjButton onClick={handleClick} onMouseEnter={onHover} onMouseLeave={onHover}>View Case Study</ProjButton>
    </ProjCard>
  );
}

export default ProjectCard;
