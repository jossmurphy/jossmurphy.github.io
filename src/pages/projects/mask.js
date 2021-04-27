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
  CaseStudy,
} from '../../styles/global.js';

const BackgroundImage = styled('div')``;

function Mask() {
  return (
    <div>
      <Header></Header>
      <CaseStudy>
        <PageTitle>MASK</PageTitle>
        <Subtitle1>Subtitle1</Subtitle1>
        <Subtitle2>Subtitle2</Subtitle2>
        <SubtitleSection>H4</SubtitleSection>
        <BlockQuote>H5</BlockQuote>
        <Caption>H6</Caption>
        <P>This is body paragraph text.</P>
      </CaseStudy>
    </div>
  );
}

export default Mask;