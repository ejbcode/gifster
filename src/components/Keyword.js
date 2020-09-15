import React, { useContext } from "react";
import { Data } from "../Provider";
import styled from "styled-components";

const List = styled.li`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0.5rem;
  border-radius: 5px;
  position: relative;
  border: solid 1px ${({ theme }) => theme.colorSecundary};

  :first-child {
    font-weight: bold;
    background: ${({ theme }) => theme.colorSecundary};
  }
  .fas {
    position: absolute;
    top: 0;
    right: 2px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

const Keyword = ({ keyword }) => {
  const { keywords, setKeywords } = useContext(Data);
  const handleDeleteClick = () => {
    // setKeywords((keywords) => keywords.filter((key) => key !== keyword));
    setKeywords(keywords.filter((key) => key !== keyword));
  };

  return (
    <List>
      <p>
        <a href={`#${keyword}`}>{keyword}</a>
      </p>
      <i className="fas fa-times" onClick={handleDeleteClick}></i>
    </List>
  );
};

export default Keyword;
