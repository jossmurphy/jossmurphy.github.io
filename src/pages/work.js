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
import bpsmallpic from '../assets/projects/BlueprintHero.png';
import pillarsmallpic from '../assets/projects/PillarHero.png';
import fundrisesmallpic from '../assets/projects/FundriseHero.png';
import styled from '@emotion/styled';
import Lightning_pdf from '../assets/lightningproject.pdf';
import YoutubeEmbed from '../components/YoutubeEmbed';

const content = {
  role: `Product Designer`,
  timeline: `Two Weeks`,
  context:
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  contextSummary: 'context but short',
  problem:
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  problemSummary: 'the problem but short',
  solution:
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  solutionSummary: 'the solution but short',
};

const BackgroundImage = styled('div')`
  width: 100vw;
  height: 400px;
  background-size: cover;
  margin-right: 0;
  margin-left: auto;
  padding: 0;
`;

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <div style={{ height: '10vh' }}></div>
        <PageTitle>Projects</PageTitle>
        <P>Check out the work I&apos;ve done!</P>
        <Subtitle1>Product Design & UX</Subtitle1>
        <div id="projects" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
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
        </div>
        <Subtitle1>Hardware & Electronics</Subtitle1>
        <div id="projects" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Cardd
            img={bpsmallpic}
            title="Firefighter Robot"
            description="Autonomous robot that navigates obstacle-ridden mazes to extinguish a hidden flame"
            date=" September 2019 - January 2020 "
          ></Cardd>
          <Cardd
            img={pillarsmallpic}
            title="LED Cube"
            // hreef="/projects/pillar"
            hreef="/wip"
            description="4x4 LED Cube that displays 3D patterns and makes use of pulse width modulation for dimming effect"
            date=" February 2019 - April 2019"
          ></Cardd>
          <Cardd
            img={fundrisesmallpic}
            title="Sumo Bot"
            // hreef="/projects/fundrise"
            hreef="/wip"
            description="Self-driving fighter robot that makes use of infrared sensors to detect opponent bots and push them out of a ring"
            date=" April 2019 - June 2019"
          ></Cardd>
        </div>

        <Subtitle1>Software</Subtitle1>
        <div id="projects" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Cardd
            img={pillarsmallpic}
            title="Zapped!"
            hreef={Lightning_pdf}
            description="Simulator that models the accumulation of charge in storm clouds by updating the state of cells based on their surroundings"
            date=" March 2020 "
          ></Cardd>
          <Cardd
            img={fundrisesmallpic}
            title="Watercooler"
            hreef="https://devpost.com/software/watercooler-w1z37x"
            description="Web app that casually connects university students in a pressure-free environment between study sessions"
            date=" Hack the 6ix  |  August 2020"
          ></Cardd>
        </div>

        <Subtitle1>Film & Video Editing</Subtitle1>
        <div id="projects" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <YoutubeEmbed embedId="https://www.youtube.com/watch?v=s2dToa1_WvQ"></YoutubeEmbed>
          <Cardd
            img={pillarsmallpic}
            title="Zapped!"
            hreef={Lightning_pdf}
            description="Simulator that models the accumulation of charge in storm clouds by updating the state of cells based on their surroundings"
            date=" March 2020 "
          ></Cardd>
          <Cardd
            img={fundrisesmallpic}
            title="Watercooler"
            hreef="https://devpost.com/software/watercooler-w1z37x"
            description="Web app that casually connects university students in a pressure-free environment between study sessions"
            date=" Hack the 6ix  |  August 2020"
          ></Cardd>
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
