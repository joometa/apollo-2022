import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Header, Movie } from "../components";

const GET_MOVIE = gql`
  {
    Movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(GET_MOVIE);

  return (
    <>
      <Header />
      {loading && <h1>loading</h1>}
      {data && data.Movies && data.Movies.map((m) => <Movie id={m.id} />)}
    </>
  );
};

export default Home;
