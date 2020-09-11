import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  margin: 3rem 0;
  h2 {
    width: 95%;
    padding-left: 20px;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 2rem auto;
  }

  span {
    background: ${({ theme }) => theme.colorBackground};
    padding: 0 1rem;
    :last-child {
    }
  }
`;

const DivGallery = styled.div`
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

const ListOfImages = () => {
  return (
    <DivStyled>
      <h2>
        <span>Trending</span>
      </h2>

      <DivGallery>
        <div className="tile">
          <div className="tile__media">
            <img
              className="tile__img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img
              className="tile__img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img
              className="tile__img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img
              className="tile__img"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
              alt=""
            />
          </div>
        </div>
      </DivGallery>
    </DivStyled>
  );
};

export default ListOfImages;
