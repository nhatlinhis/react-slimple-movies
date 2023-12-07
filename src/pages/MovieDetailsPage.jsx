import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  // console.log("data ~ ", data);
  // console.log("Movie Card:", movieId);

  return <div>Nguyen Nhat Linh</div>;
};

export default MovieDetailsPage;
