import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=305e809e770e39392a1a79bc909fdfc4`,
    fetcher
  );
  //Hạn chế loading.
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;

  return (
    <div className=" w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0, 0, 0, 0.5)] to-[rgba(0, 0, 0, 0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full object-cover rounded-lg object-center"
      />
      <div className="absolute left-5 bottom-0 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
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
  );
}

export default Banner;
