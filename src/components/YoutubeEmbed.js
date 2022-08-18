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
  margin: 8px 0;
  width: 100%;
  height: 100%;
`;
  

const Video = styled.iframe`
  position: block;
  border-radius: 4px;
`;

export default YoutubeEmbed;