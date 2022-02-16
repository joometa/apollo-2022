import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrap>
      <h1>Apollo Movie</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  align-content: center;
  justify-content: center;
  font-size: 100px;
  background-color: lightcoral;
`;
