import React from 'react';
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const CustomNav = () => {
  return (
    <>
    <Nav>
      <NavLink to="/"><h1>Carl G.W. Smith</h1></NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/resume" activeStyle>Resume</NavLink>
        <NavLink to="/projects" activeStyle>Projects</NavLink>
        <NavLink to="/contact" activeStyle>Contact</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/"></NavBtnLink>
      </NavBtn>
    </Nav>
    </>
  );
}

export default CustomNav;
