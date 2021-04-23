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
  CaseStudy,
} from '../styles/global.js';

const BackgroundImage = styled('div')``;

const content = {
  bio: ` A product designer, software developer, and student at the University of Waterloo. 
  Currently designing and developing at UW Blueprint. Most interested in working at the intersection of tech, design, and social good. 
  Previously software developing at Auvik Networks, Designing with Dimagi, Leading at SVP Teens.
  `,
};

function Home() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <PageTitle>Jocelyne Murphy</PageTitle>
        <P>{`${content.bio}`}</P>
      </CaseStudy>
    </div>
  );
}

export default Home;
