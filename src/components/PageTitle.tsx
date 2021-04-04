import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';

const PageTitleStyled = styled('h2')`
  font-family: 'Roboto', sans-serif;

  display: table-cell;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  vertical-align: middle;

  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, #ddd 50%);
  background-position: -0% 0;
  background-size: 200% auto;
  color: #222;
  font-size: 1.75em;
  line-height: 1.15em;
  text-decoration: none;
  transition: background-position 0.5s ease-out;

  &:hover {
    background-position: -99.99% -50%;
  }
`;

const TitleBlock = styled('div')`
  height: 200px;
  display: flex;
  align-content: centre;
`;

export default function PageTitle() {
  return (
    <TitleBlock>
      <PageTitleStyled>Insert Page Title Prop Here</PageTitleStyled>;
    </TitleBlock>
  );
}
