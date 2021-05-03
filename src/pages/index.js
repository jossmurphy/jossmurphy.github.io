import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cardd from '../components/Card';
import HorizontalCard from '../components/HorizontalCard';

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
import bpsmallpic from '../assets/projects/BlueprintHero.png';
import pillarsmallpic from '../assets/projects/PillarHero.png';
import fundrisesmallpic from '../assets/projects/FundriseHero.png';

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
  bio: `Hi, I'm Jocelyne! I'm a software developer, product designer, and
  `,
  blueprint: `Designing UW Blueprint's website to generate more interest in the organization among Non Profit partners and future members. `,
  pillar: `Empowering women to take control of their wealth through a peer-based financial literacy app.`,
  fundrise: `Reimagining large-scale fundraising intiatives.`,
};

function Home() {
  return (
    <div>
      <Header></Header>
      <div style={{ height: '50px' }}></div>
      <div style={{ overflowX: 'hidden', overflowY: 'hidden', display: 'flex' }}>
        <div
          style={{
            // width: '90vw',
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

      <div style={{ height: '10vh' }}></div>
      {/* <div style={{ padding: '10vw' }}>
        <HorizontalCard
          img={bpsmallpic}
          title="UW Blueprint Website Redesign"
          hreef="/projects/blueprint"
          description={content.blueprint}
        ></HorizontalCard>
        <HorizontalCard
          img={bpsmallpic}
          title="UW Blueprint Website Redesign"
          hreef="/projects/blueprint"
          description={content.blueprint}
        ></HorizontalCard>
        <HorizontalCard
          img={bpsmallpic}
          title="UW Blueprint Website Redesign"
          hreef="/projects/blueprint"
          description={content.blueprint}
        ></HorizontalCard>
      </div> */}

      <PageTitle style={{ padding: '3vh 10vw' }}>Projects</PageTitle>

      <div id="projects" style={{ display: 'flex', padding: '0vw 8vw', flexDirection: 'column' }}>
        <Cardd
          img={bpsmallpic}
          title="UW Blueprint Website Redesign"
          hreef="/projects/blueprint"
          description={content.blueprint}
          date=" UW Blueprint |  January 2021 - May 2021"
        ></Cardd>
        <Cardd
          img={pillarsmallpic}
          title="Pillar"
          hreef="/projects/pillar"
          description={content.pillar}
          date="Side Project  |  February 2021"
        ></Cardd>
        <Cardd
          img={fundrisesmallpic}
          title="Fundrise"
          hreef="/projects/fundrise"
          description={content.fundrise}
          date="Side Project |  August 2019, December 2020"
        ></Cardd>
      </div>
    </div>
  );
}

export default Home;
