import React from "react";
import styled from "styled-components";

const Form = styled.form`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 15px;
  display: flex;
  border-radius: 5px;
  input {
    width: 85%;
    padding: 15px 20px;
    border: none;
    font-weight: bold;
  }

  .searchbtn {
    background: #ffec00;
    width: 10%;
    border-radius: 0 5px 5px 0;
    position: relative;
    cursor: pointer;
  }

  .searchbtn .fas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
`;

const Search = () => {
  return (
    <Form>
      <input type="text" placeholder="What are you looking for?" />
      <div class="searchbtn">
        <i class="fas fa-search"></i>
      </div>
    </Form>
  );
};

export default Search;
