import React from 'react';
import Header from '../components/Header';

import styled from '@emotion/styled';
import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  HeroDiv,
  CaseStudy,
  HeroImage,
  Footer,
  Button,
  A,
} from '../styles/global.js';

export default function WIP() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <center>
          <div style={{ marginTop: '30vh', height: '30vh', marginBottom: '30vh' }}>
            <Subtitle1> Thanks for checking out my website! </Subtitle1>
            <Subtitle2> This page is still a work in progress... check back soon!</Subtitle2>
            <Button style={{ marginTop: '20px' }} primary>
              <A href="/">Return to Home Page</A>{' '}
            </Button>
            <Button style={{ marginTop: '20px' }}>
              <A href="/work">Check out more of my Projects</A>
            </Button>
          </div>
        </center>
      </CaseStudy>
    </div>
  );
}
