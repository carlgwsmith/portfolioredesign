import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
text-decoration:none;
border-radius:30px;
background: ${({ primary }) => (primary ? '#01bf71' : '#ffb80b')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#ffb80b' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
  
}
`