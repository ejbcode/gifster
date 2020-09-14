import React from "react";
import styled from "styled-components";

const DivImage = styled.div`
  img {
    height: 200px;
    margin: 1rem;
  }
`;

const ImageCard = ({ title, url }) => {
  return (
    <DivImage>
      <img src={url} alt={title} />
    </DivImage>
  );
};

export default ImageCard;
