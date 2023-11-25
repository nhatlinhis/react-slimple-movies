import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "./components/movies/MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import "Swiper/scss";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className=" w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)] rounded-lg"></div>
          <img
            src="https://genk.mediacdn.vn/139269124445442048/2020/2/14/1-15816746144451193748082.jpg"
            alt=""
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-0 w-full text-white">
            <h2 className="font-bold text-3xl mb-3">Avenger: End game</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border botder-white rounded-md">
                Action
              </span>
              <span className="py-2 px-4 border botder-white rounded-md">
                Aventure
              </span>
              <span className="py-2 px-4 border botder-white rounded-md">
                Drama
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Wath now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Now playing
        </h2>
        <div className="movie-list">
          <Swiper grabCurser={"True"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard></MovieCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Top rated movies
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA-1.jpg?height=1039&width=711&fit=bounds"
              className="w-f h-[250px] object-cover rounded-lg mb-5"
              alt=""
            />
            <h3 className="text-l font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-2xl front-bold">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA-1.jpg?height=1039&width=711&fit=bounds"
              className="w-f h-[250px] object-cover rounded-lg mb-5"
              alt=""
            />
            <h3 className="text-l font-bold mb-3">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
