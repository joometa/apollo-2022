import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router";
import { gql } from "apollo-boost";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    Movies(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  return (
    <>
      <div>Detail</div>
    </>
  );
};
