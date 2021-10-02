import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements';
import { Behance, Dribble, Linkedin } from '../Home/BannerElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Resume" onClick={toggle}>
            Resume
          </SidebarLink>
          <SidebarLink to="/Projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="/Contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
          <a href="https://www.behance.net/carlvskansas" target="_blank"><Behance/></a>
          <a href="https://dribbble.com/carlvskansas" target="_blank"><Dribble/></a>
          <a href="https://www.linkedin.com/in/carl-gw-smith/" target="_blank"><Linkedin/></a>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
