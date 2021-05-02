import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cardd from '../components/Card';

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
import fruitfly from '../assets/artphotos/ff.png';
import { blue } from '@material-ui/core/colors';
import { AutoComplete } from 'material-ui';

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
      <div style={{ height: '50px' }}></div>
      <div style={{ overflowX: 'hidden', overflowY: 'hidden', display: 'flex' }}>
        <div
          style={{
            width: '90vw',
            // maxWidth: '2000px',
            padding: '10vw',
            top: '50%',
          }}
        >
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
        </div>
        <div>
          <img
            src={fruitfly}
            style={{
              width: '150vw',
              maxWidth: '1000px',
              height: 'auto',
              transform: 'translateX(-15%)',

              zIndex: -1,
            }}
          ></img>
        </div>
      </div>

      <Button primary>
        <A href="/projects/blueprint">Blueprint</A>
      </Button>
      <Button primary>
        <A href="/projects/fundrise">Fundrise</A>
      </Button>
      <Button primary>
        <A href="/projects/pillar">Pillar</A>
      </Button>
      <div style={{ height: '30vh' }}></div>
      <div style={{ display: 'flex' }}>
        <Cardd img={fruitfly} title="UW Blueprint Website Redesign"></Cardd>
        <Cardd img={fruitfly} title="Pillar"></Cardd>
        <Cardd img={fruitfly} title="Fundrise"></Cardd>
      </div>
    </div>
  );
}

export default Home;
