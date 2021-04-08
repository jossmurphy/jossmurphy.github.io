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

// fonts and standard styling
export const PageTitle = styled('h1')`
  font-family: 'Avenir', sans-serif;
  font-size: 48px;
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
  font-family: 'proxima-nova', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.7em;
  color: ${colors.c10};
`;

export const CaseStudy = styled('div')`
  margin: 10vw;
`;

export default jossTheme;
