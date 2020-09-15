import React, { useContext } from "react";
import Keyword from "./Keyword";
import { Data } from "../Provider";
import styled from "styled-components";

const KeywordsStyled = styled.div`
  position: sticky;
  top: 0;
  background: rgb(28, 28, 28);
  background: linear-gradient(
    0deg,
    rgba(28, 28, 28, 0.10968137254901966) 0%,
    rgba(28, 28, 28, 0.8575805322128851) 20%,
    rgba(28, 28, 28, 1) 66%
  );
`;
const ListOfKeywords = () => {
  const { keywords } = useContext(Data);
  return (
    <KeywordsStyled>
      <ol>
        {keywords.map((keyword) => {
          return <Keyword keyword={keyword} />;
        })}
      </ol>
    </KeywordsStyled>
  );
};

export default ListOfKeywords;
