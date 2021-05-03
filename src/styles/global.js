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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const HeroDiv = styled('div')`
  display: block;
  width: 80%;
  max-width: 1000px;
  margin-top: 10vh;
  height: auto;
  max-height: 400px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 5px;
  // border: 2px solid black;
  // box-shadow: 5px 5px;
  margin-left: auto;
  margin-right: auto;
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
  border: 2px solid ${colors.c40};

  color: ${colors.c10};
  box-shadow: 3px 3px;

  &:hover {
    box-shadow: 5px 5px;
  }
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
  margin: 0px;
`;

export const Subtitle1 = styled('h2')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-top: 2em;
  margin-bottom: 0;
  color: #000000;
`;

export const Subtitle2 = styled('h3')`
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0;
  color: #000000;
  padding-left: 0px;
`;

export const SubtitleSection = styled('h4')`
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: -30px;
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
  font-family: 'Avenir', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: ${colors.c110};
  padding: 24px;
  font-size: 18px;
  border-radius: 3px;
  line-height: 1.4em;
  border-left: 6px solid ${(props) => (props.primary ? colors.primarybutton : colors.m50)};
  //   if (props.primary) {
  //     colors.primarybutton;
  //   } else {
  //     colors.secondarybutton;
  //   }
  // }};
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
  // margin-left: 10vw auto;
  // margin-right: 10vw auto;
  max-width: 1000px;
  margin: 10vw auto;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-left: 10vw;
  padding-right: 10vw;
`;

export default jossTheme;
