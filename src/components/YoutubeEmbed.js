import React from "react";
import styled from 'styled-components'


const YoutubeEmbed = ({ embedId }) => (
  <Wrapper>
    <Video
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  margin: 8px 0;
`;
  

const Video = styled.iframe`
  position: block;
`;

export default YoutubeEmbed;