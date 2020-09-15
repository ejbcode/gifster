import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  p {
    background-color: #fc00ff;
    background: -webkit-linear-gradient(
      #fc00ff 0%,
      #ffffff 41%,
      #00dbde 57%,
      #fc00ff 94%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Led", sans-serif;

    text-align: center;
    text-transform: uppercase;
    font-size: 5rem;
    letter-spacing: 0.15em;
  }
  .container {
    position: relative;
  }
  img {
    height: 5rem;
    margin-right: 1.2rem;
    z-index: 8;
    position: relative;
  }

  .shadow {
    background: red;
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border: blue solid 1px;
    border-radius: 50px;
    box-shadow: 0 0 15px ${({ theme }) => theme.colorSecundary};
  }
`;

const Navbar = () => {
  return (
    <Div>
      <div className="container">
        <img
          src="https://b612apk.com/wp-content/uploads/candy-camera-logo.png"
          alt="logo"
        />
        <div className="shadow"></div>
      </div>
      <p>Gifster 84</p>
    </Div>
  );
};

export default Navbar;
