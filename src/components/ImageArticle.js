import React, { useContext } from "react";
import styled from "styled-components";
import { Data } from "../Provider";

const Article = styled.article`
  height: 20rem;
  h2 {
    width: 95%;
    padding-left: 20px;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 2rem auto;
  }

  span {
    background: ${({ theme }) => theme.colorBackground};
    padding: 0 1rem;
    :last-child {
    }
  }
`;
const ImageArticle = ({ item }) => {
  const { image } = useContext(Data);
  console.log(image);
  return (
    <Article>
      <h2>
        <span>{item}</span>
      </h2>
    </Article>
  );
};

export default ImageArticle;
