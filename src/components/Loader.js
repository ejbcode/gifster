import React from "react";
import styled from "styled-components";

const LoaderStyled = styled.div`
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  ul li {
    list-style: none;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    animation: grow 1.6s ease-in-out infinite;
  }
  @keyframes grow {
    0%,
    40%,
    100% {
      transform: scale(0.2);
    }
    20% {
      transform: scale(1);
    }
  }

  ul li:nth-child(1) {
    animation-delay: -1.4s;
    background: #ba68c8;
    box-shadow: 0 0 10px #ba68c8;
  }
  ul li:nth-child(2) {
    animation-delay: -1.2s;
    box-shadow: 0 0 10px #4fc3f7;
    background: #4fc3f7;
  }
  ul li:nth-child(3) {
    animation-delay: -1s;
    background: #f06292;
    box-shadow: 0 0 10px #f06292;
  }
  ul li:nth-child(4) {
    animation-delay: -0.8s;
    background: #76ff03;
    box-shadow: 0 0 10px #76ff03;
  }
  ul li:nth-child(5) {
    animation-delay: -0.6s;
    background: #ffff00;
    box-shadow: 0 0 10px #ffff00;
  }
  ul li:nth-child(6) {
    animation-delay: -0.4s;
    background: #f57c00;
    box-shadow: 0 0 10px #f57c00;
  }
  ul li:nth-child(7) {
    animation-delay: -0.2s;
    background: #673ab7;
    box-shadow: 0 0 10px #673ab7;
  }
`;
const Loader = () => {
  return (
    <LoaderStyled>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </LoaderStyled>
  );
};

export default Loader;
