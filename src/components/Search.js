import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Data } from "../Provider";

const Form = styled.form`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  z-index: 399;
  padding: 15px;
  display: flex;
  border-radius: 5px;
  input {
    width: 85%;
    padding: 15px 20px;
    border: none;
    font-weight: bold;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 0 6px ${({ theme }) => theme.colorSecundary};
  }

  .searchbtn {
    background: ${({ theme }) => theme.colorSecundary};
    width: 15%;
    border-radius: 0 5px 5px 0;
    position: relative;
    cursor: pointer;
    border: none;
    background-color: #fc00ff;
    background-image: linear-gradient(180deg, #fc00ff 2%, #0dd2d4 93%);

    box-shadow: 0 0 6px ${({ theme }) => theme.colorSecundary};
  }

  .fas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

const Search = () => {
  const { loading, setKeywords, setLoading } = useContext(Data);

  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") return;
    setLoading(true);
    setKeywords((key) => [value, ...key]);
    setValue("");
    console.log(loading);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="What are you looking for?"
          onChange={handleChange}
        />

        <button className="searchbtn">
          <i className="fas fa-search"></i>
        </button>
      </Form>
    </div>
  );
};

export default Search;
