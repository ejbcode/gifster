import React, { useContext } from "react";
import ImageArticle from "./ImageArticle";
import styled from "styled-components";
import { Data } from "../Provider";

const DivStyled = styled.section`
  margin: 3rem 0;
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
