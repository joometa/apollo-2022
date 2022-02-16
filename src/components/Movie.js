import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ id }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <h1>{id}</h1>
      </Link>
    </>
  );
};
