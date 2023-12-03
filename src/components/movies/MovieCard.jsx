import React from "react";

const MovieCard = ({ item }) => {
  const { title, release_date, poster_path, vote_average } = item;

  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none w-[200px]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="w-full h-[250px] object-cover rounded-lg "
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-l font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
