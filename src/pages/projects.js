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
      <Button>
        <A href="/resume">Resume</A>
      </Button>
    </div>
  );
}
