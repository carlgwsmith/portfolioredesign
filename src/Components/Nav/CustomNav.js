import React from 'react';
import { NavBrand, NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const CustomNav = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavBrand to="/"><h1 className="brand">Carl G.W. Smith</h1></NavBrand>
      <Bars onClick={ toggle }/>
      <NavMenu>
        <NavLink to="/resume" activeStyle>Resume</NavLink>
        <NavLink to="/projects" activeStyle>Projects</NavLink>
        <NavLink to="/contact" activeStyle>Contact</NavLink>
      </NavMenu>
      {/* <NavBtn>
        <NavBtnLink to="/"></NavBtnLink>
      </NavBtn> */}
    </Nav>
    </>
  );
}

export default CustomNav;
