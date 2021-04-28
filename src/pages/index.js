import React from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import Resume_pdf from '../assets/JocelyneMurphy_Resume.pdf';

import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  A,
  Button,
  Container,
  CaseStudy,
  Hyperlink,
} from '../styles/global.js';

const BackgroundImage = styled('div')``;
const links = {
  blueprint: (
    <Hyperlink href="https://uwblueprint.org/" target="_blank">
      {' '}
      UW Blueprint
    </Hyperlink>
  ),
  auvik: (
    <Hyperlink href="https://www.auvik.com/" target="_blank">
      {' '}
      Auvik Networks
    </Hyperlink>
  ),
  svpteens: (
    <Hyperlink
      href="https://www.socialventurepartners.org/waterloo-region/news/reflecting-on-the-2019-20-year-for-svp-teens-a-true-step-forward/"
      target="_blank"
    >
      {' '}
      SVP Teens
    </Hyperlink>
  ),
  syde: (
    <Hyperlink href="http://ugradcalendar.uwaterloo.ca/page/ENG-Systems-Design-Engineering" target="_blank">
      {' '}
      Systems Design Engineering{' '}
    </Hyperlink>
  ),
};

const content = {
  bio: ` Hi! I'm Joss. I'm a software developer, product designer, and
  `,
};

function Home() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <PageTitle>Welcome!</PageTitle>
        <P>
          {content.bio} {links.syde} student at the University of Waterloo. Previously developing at {links.auvik},
          designing at {links.blueprint}, and leading at {links.svpteens}.
        </P>
        <Container column>
          <Button primary>
            <A href="/work">Projects</A>
          </Button>
          <Button>
            <A href={Resume_pdf} target="blank">
              Resume
            </A>{' '}
          </Button>
        </Container>
      </CaseStudy>
    </div>
  );
}

export default Home;
