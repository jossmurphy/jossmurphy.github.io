import React from 'react';
import Header from '../../components/Header';
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
} from '../../styles/global.js';
import about_image from '../../assets/projects/FundriseHero.png';

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
  background: url(${about_image}) repeat #bddeff;
  background-size: cover;
  margin-right: 0;
  margin-left: auto;
  padding: 0;
`;

function FundRISE() {
  return (
    <div>
      <div>
        <BackgroundImage>
          <Header></Header>
        </BackgroundImage>
        {/* <HeroDiv>
          <HeroImage src={about_image}></HeroImage>
        </HeroDiv> */}
        <CaseStudy>
          {/* <img src={Hero} alt="Hero Image" /> */}
          <PageTitle>Fundrise</PageTitle>
          <P>{`Role: ${content.role}`}</P>
          <P>{`Timeline: ${content.timeline}`}</P>

          <SubtitleSection>Summary</SubtitleSection>

          <Subtitle1>Context</Subtitle1>
          <P>{`${content.context}`}</P>
          <BlockQuote>{`${content.contextSummary}`}</BlockQuote>

          <Subtitle1>The Problem</Subtitle1>
          <P>{`${content.problem}`}</P>
          <BlockQuote>{`${content.problemSummary}`}</BlockQuote>

          <Subtitle1>The Solution</Subtitle1>
          <P>{`${content.solution}`}</P>
          <BlockQuote>{`${content.solutionSummary}`}</BlockQuote>

          <SubtitleSection>{'Feature Breakdown & Decisions'}</SubtitleSection>
        </CaseStudy>
      </div>
    </div>
  );
}

export default FundRISE;
