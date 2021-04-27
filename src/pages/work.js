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

export default function Projects() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <PageTitle>Projects</PageTitle>
        <P>Check out the work I&apos;ve done!</P>
        <Container column>
          <Button primary>
            <A href="/projects/blueprint">Blueprint</A>
          </Button>
          <Button>
            <A href="/projects/dimagi">Dimagi</A>
          </Button>
          <Button primary>
            <A href="/projects/fundrise">Fundrise</A>
          </Button>
          <Button primary>
            <A href="/projects/pillar">Pillar</A>
          </Button>
        </Container>
      </CaseStudy>
    </div>
  );
}
