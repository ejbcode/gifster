import React, { useContext } from "react";
import ImageArticle from "./ImageArticle";
import styled from "styled-components";
import { Data } from "../Provider";

const DivStyled = styled.section`
  margin: 3rem 0;
`;

const DivGallery = styled.section`
  overflow-x: scroll;
  white-space: nowrap;
  width: 100%;

  .tile {
    position: relative;
    display: inline-block;
    width: 250px;
    height: 140.625px;
    margin-right: 10px;
  }
  .tile__img {
    width: 25rem;
    height: 14rem;
    object-fit: cover;
  }
`;

const ImageSection = () => {
  const { keywords } = useContext(Data);
  return (
    <DivStyled>
      {keywords.map((keyword) => (
        <ImageArticle key={keyword} keyword={keyword} />
      ))}
    </DivStyled>
  );
};

export default ImageSection;
