import React from 'react';
import { NavBrand, NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const CustomNav = ({ toggle }) => {
  return (
    <>
    <Nav>
      <NavBrand to="/"><img src={process.env.PUBLIC_URL + '/images/cgwslogo.svg'} alt='logo' height="60px"></img></NavBrand>
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
