import React, { useContext, useEffect } from "react";
import ImageArticle from "./ImageArticle";
import styled from "styled-components";
import axios from "axios";
import { Data } from "../Provider";

const DivStyled = styled.div`
  margin: 3rem 0;
  border: red 1px solid;
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
  const { keywords, loading, setLoading, image, setImage } = useContext(Data);

  useEffect(() => {
    getDataFromAi();
    // eslint-disable-next-line
  }, [loading]);

  const getDataFromAi = async () => {
    const BASE_TYPE = "search";
    const BASE_URL = "https://api.giphy.com/v1/gifs";
    const API_KEY = "opl631BQG4c1V6sFnMHB6vqhF2CnBKxn";
    const URL = `${BASE_URL}/${BASE_TYPE}?api_key=${API_KEY}&limit=1&q=${encodeURI(
      keywords[0]
    )}`;
    const res = await axios.get(URL);
    setImage((img) => [...img, { id: res.data.data[0].url }]);
    setLoading(false);
  };

  return (
    <DivStyled>
      {keywords.map((item) => (
        <ImageArticle item={item} />
      ))}
    </DivStyled>
  );
};

export default ImageSection;
