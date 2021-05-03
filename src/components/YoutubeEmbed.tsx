import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const Stylediframe = styled('div')`
  border-radius: 20px;
`;

const YoutubeEmbed = (embedId: any) => (
  <div>
    <Stylediframe className="video-responsive">
      <iframe
        width="400"
        height="240"
        src="https://www.youtube.com/embed/s2dToa1_WvQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{ borderRadius: '8px', margin: '20px' }}
      />
    </Stylediframe>
    <h1> {embedId}</h1>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
