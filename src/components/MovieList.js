import React from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const movies = [
    {
      title: "Mad Max",
      posterSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM",
      genres: ["Action", "Adventure", "Science Fiction", "Thriller"],
    },
    // Add more movie objects here if needed
  ];

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
