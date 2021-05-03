import React from 'react';
import Header from '../components/Header';
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
import Cardd from '../components/Card';
import Carddd from '../components/Carddd';

import bpsmallpic from '../assets/projects/BlueprintHero.png';
import pillarsmallpic from '../assets/projects/PillarHero.png';
import fundrisesmallpic from '../assets/projects/FundriseHero.png';
import styled from '@emotion/styled';
import Lightning_pdf from '../assets/lightningproject.pdf';
import YoutubeEmbed from '../components/YoutubeEmbedd';
import firefighter from '../assets/projects/oldwebsite/tech/IMG_E0831.JPG';
import led from '../assets/projects/oldwebsite/tech/ledscreenshot.png';
import sumobot from '../assets/projects/oldwebsite/tech/IMG_E0816.JPG';
import watercooler from '../assets/projects/oldwebsite/coding/watercooler.png';
import zapped from '../assets/projects/oldwebsite/coding/zapped.png';

const content = {
  bio: `Hi, I'm Jocelyne! I'm a software developer, product designer, and
  `,
  blueprint: `Designing UW Blueprint's website to generate more interest in the organization among Non Profit partners and future members. `,
  pillar: `Empowering women to take control of their wealth through a peer-based financial literacy app.`,
  fundrise: `Reimagining large-scale fundraising intiatives.`,
};

const BackgroundImage = styled('div')`
  width: 100vw;
  height: 400px;
  background-size: cover;
  margin-right: 0;
  margin-left: auto;
  padding: 0;
`;

const ProjContainer = styled('div')`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <div style={{ height: '10vh' }}></div>
        <PageTitle>Projects</PageTitle>
        <Subtitle1>Product Design & UX</Subtitle1>
        <ProjContainer>
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
            // hreef="/projects/pillar"
            hreef="/wip"
            description={content.pillar}
            date="Hack the Globe |  February 2021"
          ></Cardd>
          <Cardd
            img={fundrisesmallpic}
            title="Fundrise"
            // hreef="/projects/fundrise"
            hreef="/wip"
            description={content.fundrise}
            date="Side Project |  August 2019, December 2020"
          ></Cardd>
        </ProjContainer>
        <Subtitle1>Software</Subtitle1>
        <ProjContainer>
          <Cardd
            img={zapped}
            title="Zapped!"
            hreef={Lightning_pdf}
            description="Animated simulator that models the accumulation of charge in storm clouds by updating the state of cells based on their surroundings"
            date="Side Project | March 2020 "
          ></Cardd>
          <Cardd
            img={watercooler}
            title="Watercooler"
            hreef="https://devpost.com/software/watercooler-w1z37x"
            description="Web app that casually connects university students in a pressure-free environment between study sessions"
            date=" Hack the 6ix  |  August 2020"
          ></Cardd>
        </ProjContainer>
        <Subtitle1>Hardware & Electronics</Subtitle1>
        <ProjContainer>
          <Carddd
            img={firefighter}
            title="Firefighter Robot"
            description="Autonomous robot that navigates obstacle-ridden mazes to extinguish a hidden flame"
            date=" September 2019 - January 2020 "
          ></Carddd>
          <Carddd
            img={led}
            title="LED Cube"
            hreef="/wip"
            description="4x4 LED Cube that displays 3D patterns and makes use of pulse width modulation for dimming effect"
            date=" February 2019 - April 2019"
          ></Carddd>
          {/* <video preload autoPlay muted playsinline loop>
            <source src={led} type="video/mp4" />
          </video> */}
          <Carddd
            img={sumobot}
            title="Sumo Bot"
            hreef="/wip"
            description="Self-driving fighter robot that makes use of infrared sensors to detect opponent bots and push them out of a ring"
            date=" April 2019 - June 2019"
          ></Carddd>
        </ProjContainer>

        <Subtitle1>Film & Video Editing</Subtitle1>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <YoutubeEmbed embedId="https://www.youtube.com/embed/NaV6BaJ_g6k"></YoutubeEmbed>

          <YoutubeEmbed embedId="https://www.youtube.com/embed/DsoEhyteT-0"></YoutubeEmbed>
          <YoutubeEmbed embedId="https://www.youtube.com/embed/s2dToa1_WvQ"></YoutubeEmbed>
          <YoutubeEmbed embedId="https://www.youtube.com/embed/PCh4vxUT8MU"></YoutubeEmbed>
        </div>
        <center>
          <Button style={{ margin: '50px' }}>
            <A href="/">Return to Home Page</A>{' '}
          </Button>
        </center>
      </CaseStudy>
    </div>
  );
}
