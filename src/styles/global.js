import React from 'react';
import styled from '@emotion/styled';
import colors from './colors.js';

const jossTheme = {
  fonts: {
    main: "'Proxima Nova', sans-serif",
    backup: 'sans-serif',
  },

  fontSizes: [11, 13, 16, 18, 24, 35],

  spacings: [0, 4, 8, 16, 32, 64, 128, 256],
};

export const HeroImage = styled('img')`
  display: block;
  margin-left: 10vw;
  margin-right: auto;
  width: 80%;
  max-width: 800px;
`;

export const HeroDiv = styled('div')`
  display: block;
  width: 100%;
  margin-top: 10vh;
  height: auto;
  max-height: 300px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? colors.primarybutton : colors.secondarybutton)};
  width: auto;
  margin-right: 1.5vw;
  padding: 8px 24px;
  border-radius: 10px;
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.c10};
  outline: none;
  box-shadow: 5px 5px;
`;

export const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.row && 'row',
}));

export const A = styled('a')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  color: ${colors.c10};
  text-decoration: none;
`;

// fonts and standard styling
export const PageTitle = styled('h1')`
  font-family: 'Avenir', sans-serif;
  font-size: 48px;
  padding: 0px;
`;

export const Subtitle1 = styled('h2')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  margin-top: 0.4em;
  margin-bottom: 0;
  color: #000000;
`;

export const Subtitle2 = styled('h3')`
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0;
  color: #000000;
`;

export const SubtitleSection = styled('h4')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 0;
  color: ${colors.m30};
`;

export const Caption = styled('h5')`
  font-family: 'Proxima Nova', sans-serif;
  font-style: italic;
  font-size: 14px;
  font-weight: 500;
  text-align: centre;
  text-transform: uppercase;
`;

export const BlockQuote = styled('h6')`
  font-family: 'proxima-nova', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: ${colors.c110};
  padding: 24px;
  font-size: 24px;
  border-radius: 3px;
  line-height: 1.4em;
  border-left: 6px solid ${colors.m50};
  margin: 40px 0;
`;

export const P = styled('p')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.7em;
  color: ${colors.c10};
`;

export const Hyperlink = styled('a')`
  font-style: normal;
  font-weight: 400;
  color: ${colors.c10};
  text-decoration: none;

  background-position: 0% -90%;
  background-image: linear-gradient(to top, ${colors.c130} 50%, ${colors.highlight} 50%);
  background-size: auto 200%;
  transition: background-position 0.3s ease-out;

  &:hover {
    background-position: 0% -0%;
    cursor: pointer;
  }
`;

export const CaseStudy = styled('div')`
  margin: 10vw;
`;

export default jossTheme;
