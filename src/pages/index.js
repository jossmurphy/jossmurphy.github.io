import React from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';
import { photos.scene_space } from '../assets/photos';

const BackgroundImage = styled('div')`
  background: lightblue url(${scene_space}) no-repeat fixed center;
`;

function Home() {
  return (
    <BackgroundImage>
      <Header></Header>
    </BackgroundImage>
  );
}

export default Home;
