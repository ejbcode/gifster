import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import styled from "styled-components";
import { Data } from "../Provider";
import axios from "axios";

const Article = styled.article`
  min-height: 200px;
  border: red solid 1px;
  overflow: auto;
  h2 {
    width: 100%;
    padding-left: 1rem;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 2rem auto;
  }

  span {
    background: ${({ theme }) => theme.colorBackground};
    padding: 0 1rem;
  }

  div {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colorSecundary};
    border-radius: 0.5rem;
  }
`;
const ImageArticle = ({ keyword }) => {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState([]);

  useEffect(() => {
    getDataFromAi();
    // eslint-disable-next-line
  }, [keyword]);

  const getDataFromAi = async () => {
    const BASE_TYPE = keyword === "trending" ? "trending" : "search";
    let BASE_URL = "https://api.giphy.com/v1/gifs";
    const API_KEY = "opl631BQG4c1V6sFnMHB6vqhF2CnBKxn";
    const URL = `${BASE_URL}/${BASE_TYPE}?api_key=${API_KEY}&limit=10&q=${encodeURI(
      keyword
    )}`;
    console.log(URL);
    const res = await axios.get(URL);
    const gifs = res.data.data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImage(gifs);
    setLoading(false);
  };

  return (
    <Article id={keyword}>
      <h2>
        <span>{keyword}</span>
      </h2>
      <div>
        {image.map((img) => (
          <ImageCard key={img.id} {...img} />
        ))}
      </div>
    </Article>
  );
};

export default ImageArticle;
