import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../styles/colors';

export const Stylediframe = styled('div')`
  border-radius: 20px;
  margin: 1vw;
  width: 100%;
`;

const YoutubeEmbed = ({ embedId }) => (
  <div>
    <Stylediframe className="video-responsive">
      <iframe
        width="100%"
        height="400px"
        src={embedId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{ borderRadius: '8px', width: '100%' }}
      />
    </Stylediframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
