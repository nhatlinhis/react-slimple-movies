import { Fragment } from "react";
import "swiper/scss";
import MovieList from "./components/movies/MovieList";
import { flushSync } from "react-dom";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary cursor-pointer">Home</span>
        <span className="cursor-pointer ">Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Up coming
        </h2>
        <MovieList type="upcoming"></MovieList>
      </section>
      <div className="bg-slate-700">
        <span className="p-2 text-white flex items-center justify-center">
          Design by Nguyen Nhat Linh
        </span>
      </div>
    </Fragment>
  );
}

export default App;
