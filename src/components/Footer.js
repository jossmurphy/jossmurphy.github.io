import React from 'react';
import styled from '@emotion/styled';
import { PageTitle, Subtitle1, Subtitle2, SubtitleSection, BlockQuote, Caption, P } from '../styles/global.js';
import colors from '../styles/colors';
import ImageCenterFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
import { AutoComplete } from 'material-ui';

const Footer = () => {
  return (
    <div style={{ flex: 1 }}>
      <hr></hr>
      <center>
        <P
          style={{
            marginTop: '1rem',
            // position: sticky,
            bottom: 0,
            left: 0,
            width: '100%',
          }}
        >
          {' '}
          © Jocelyne Murphy 2021
        </P>
      </center>
    </div>
  );
};

export default Footer;
