import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { Hyperlink } from '../styles/global';

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `Work`, path: `/work` },
  { title: `About`, path: `/about` },
  { title: `Art`, path: `/art` },
  { title: `Resume`, path: `/resume` },
];

const NavContainer = styled('div')`
  display: flex;
  flex-direction: row;
  font-weight: lighter;
  width: 98%;
  max-width: 1550px;
  margin: 0 auto;
  height: 1.5rem;
`;
const NavList = styled('ul')`
  justify-content: flex-end;
  margin-left: auto;
  font-size: medium;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  color: ${colors.i40};
`;
const NavItems = styled('a')`
  padding: 6px 15px;
  margin-top: 13px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${colors.c10};

  text-decoration: none;

  &:hover {
    color: ${colors.r50};
  }
`;

const NavName = styled('p')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-weight: bold;
  font-size: large;
  padding: 0px 0px;

  text-decoration: none;
  color: #000;
  margin-right: auto;
  letter-spacing: 0.25em;
  margin-left: 15px;
`;

const Header = () => {
  return (
    <NavContainer>
      <NavName>JOCELYNE MURPHY</NavName>
      <NavList>
        {navLinks.map(({ title, path }) => (
          <NavItems href={path} key={title}>
            {title}
          </NavItems>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Header;
