import React, { useEffect, useState, useContext } from "react";
import ImageCard from "./ImageCard";
import { Data } from "../Provider";
import Loader from "./Loader";
import styled from "styled-components";
import axios from "axios";

const Title = styled.h2`
  width: 100%;
  padding-left: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
  line-height: 0.1em;
  margin: 1rem auto;

  span {
    background: ${({ theme }) => theme.colorBackground};
    padding: 0 1rem;
  }
`;

const Article = styled.article`
  min-height: 200px;
  position: relative;
  overflow: auto;

  overflow-x: scroll;
  white-space: nowrap;
  margin-bottom: 6rem;
  p {
    margin: 2rem;
  }

  div {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #fc00ff;
    background: -webkit-radial-gradient(
      circle,
      #fc00ff 0%,
      #ffffff 41%,
      #00dbde 57%,
      #fc00ff 94%
    );
    border-radius: 0.5rem;
  }
`;
const ImageArticle = ({ keyword }) => {
  const { loading, setLoading } = useContext(Data);
  const [image, setImage] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    getDataFromAi();
    // eslint-disable-next-line
  }, [keyword]);

  const getDataFromAi = async () => {
    const BASE_TYPE = keyword === "trending" ? "trending" : "search";
    let BASE_URL = "https://api.giphy.com/v1/gifs";
    const API_KEY = process.env.REACT_APP_API;
    console.log(process.env.REACT_APP_API);
    const URL = `${BASE_URL}/${BASE_TYPE}?api_key=${API_KEY}&limit=10&q=${encodeURI(
      keyword
    )}`;
    try {
      const res = await axios.get(URL);
      const gifs = res.data.data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        };
      });
      setImage(gifs);
      const total = res.data.pagination.total_count;
      setTotal(total);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <Title>
        <span>
          {keyword} ( {total} )
        </span>
      </Title>
      <Article id={keyword}>
        <div>
          {loading && !total ? <Loader /> : null}
          {!loading && total === 0 ? (
            <p>Not images found, try again</p>
          ) : (
            image.map((img) => <ImageCard key={img.id} {...img} />)
          )}
        </div>
      </Article>
    </>
  );
};

export default ImageArticle;
