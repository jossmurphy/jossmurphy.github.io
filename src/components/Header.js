import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';

const navLinks = [
  { title: `home`, path: `/` },
  { title: `work`, path: `/work` },
  { title: `about`, path: `/about` },
  { title: `art`, path: `/art` },
  { title: `resume`, path: `/resume` },
];

const NavContainer = styled('div')`
  display: flex;
  flex-direction: row;
  font-weight: lighter;
  padding: 1vh;
  width: 98%;
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
  padding: 10px 15px;
  font-weight: bold;
  text-decoration: none;
  color: #000;

  // font-style: italic;
  font-size: large;
  vertical-align: bottom;

  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #ddd 50%);
  background-position: -0% -1em;
  background-size: 200% auto;
  line-height: 0;
  text-decoration: none;
  transition: background-position 0.5s ease-out;

  &:hover {
    background-position: -99.99% -50%;
  }
`;

const NavName = styled('p')`
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
