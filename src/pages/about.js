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
  Hyperlink,
  HeroDiv,
  HeroImage,
  Footer,
} from '../styles/global.js';
import about_image from '../assets/projects/about.png';

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
  bio: ` Nice to meet you!
  `,
};

// function HeroImage(image) {
//   const HeroDiv = styled('div')`
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//     margin-top: 10vh;
//     height: 30vw;
//     width: 80%;
//     overflow: hidden;
//   `;

//   return (
//     <HeroDiv>
//       <img src={image}></img>
//     </HeroDiv>
//   );
// }

function About() {
  return (
    <div>
      <Header></Header>
      <HeroDiv>
        <HeroImage src={about_image}></HeroImage>
      </HeroDiv>
      <CaseStudy>
        <Subtitle1>Welcome!</Subtitle1>
        <P>
          I&apos;m a student at the University of Waterloo studying Systems Design Engineering. I&apos;m a curious
          problem solver who loves collaboration and empowering others.
        </P>
        <P>Outside of school I design and develop for UW Blueprint and have had the opportunity to work on several</P>
        {/* <P>When I'm not coding or designing (and when the pandemic ), I can be found playing hockey,</P> */}
        <P>
          By the numbers: Languages: 2, canoe trips: 8, spotify playlists: 73, yearly strawberry consumption: 1,000+,
          kilometres travelled on foot since lockdown started: 300 and counting`
        </P>
      </CaseStudy>
    </div>
  );
}

export default About;
