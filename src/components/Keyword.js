import React from "react";
import styled from "styled-components";

const List = styled.li`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0.5rem;
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
  }
`;

const Keyword = ({ item }) => {
  return (
    <List>
      <p>{item}</p>
      <i class="fas fa-times"></i>
    </List>
  );
};

export default Keyword;
