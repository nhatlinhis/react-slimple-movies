import React, { Fragment } from "react";
import MovieList from "../components/movies/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Up coming
        </h2>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
