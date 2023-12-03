import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";
import useSWR from "swr";

// https://api.themoviedb.org/3/movie/now_playing?api_key=305e809e770e39392a1a79bc909fdfc4

const MovieList = ({ type = "now_playing" }) => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=305e809e770e39392a1a79bc909fdfc4`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="movie-list ">
      <Swiper
        slidesPerView={1} // Số phần tử hiển thị trên màn hình
        spaceBetween={10} // Khoảng cách giữa các phần tử
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 2, // Số phần tử hiển thị trên màn hình khi độ rộng >= 768px
          },
          1024: {
            slidesPerView: 3, // Số phần tử hiển thị trên màn hình khi độ rộng >= 1024px
          },
          1280: {
            slidesPerView: 4, // Số phần tử hiển thị trên màn hình khi độ rộng >= 1280px
          },
        }}
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

// import React from "react";
// import { SwiperSlide, Swiper } from "swiper/react";
// import MovieCard from "./MovieCard";
// import { fetcher } from "../../config";
// import useSWR from "swr";

// import "swiper/swiper.min.css"; // Import CSS của Swiper

// const MovieList = ({ type = "now_playing" }) => {
//   const { data, error, isLoading } = useSWR(
//     `https://api.themoviedb.org/3/movie/${type}?api_key=305e809e770e39392a1a79bc909fdfc4`,
//     fetcher
//   );
//   const movies = data?.results || [];

//   return (
//     <div className="movie-list">
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Swiper
//           slidesPerView={1} // Số phần tử hiển thị trên màn hình
//           spaceBetween={10} // Khoảng cách giữa các phần tử
//           grabCursor={true}
//           breakpoints={{
//             768: {
//               slidesPerView: 2, // Số phần tử hiển thị trên màn hình khi độ rộng >= 768px
//             },
//             1024: {
//               slidesPerView: 3, // Số phần tử hiển thị trên màn hình khi độ rộng >= 1024px
//             },
//             1280: {
//               slidesPerView: 4, // Số phần tử hiển thị trên màn hình khi độ rộng >= 1280px
//             },
//           }}
//         >
//           {movies.map((item) => (
//             <SwiperSlide key={item.id}>
//               <MovieCard item={item}></MovieCard>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// };

// export default MovieList;
