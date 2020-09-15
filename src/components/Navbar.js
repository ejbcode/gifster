import React from "react";
import styled from "styled-components";

const Div = styled.div`
  p {
    font-size: 5rem;
  background: -webkit-linear-gradient(pink, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Navbar = () => {
  return (
    <Div>
      <p>Gifster</p>
    </Div>
  );
};

export default Navbar;
