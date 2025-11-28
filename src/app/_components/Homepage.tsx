"use client";

import { useEffect, useState } from "react";
import { MovieProps } from "../_type/MovieSectionProps";
import { MovieList } from "./Movielist";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzNhMTIxMDYyNTU4NjBhMWI5YzhmMjgxMmI0MmRmNyIsIm5iZiI6MTc2MzUyMzc4My4wNDQ5OTk4LCJzdWIiOiI2OTFkM2NjNzI4NGU4MTdkMTU3YWQ2YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mfl-GQGp-ReV8ZU3_05ivKG90EVZD8w5trYvvNnpjow",
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setMovies(data.results);
    };
    getData();
  }, []);
  return (
    <div className="">
      {movies.map((item) => {
        return <MovieList key={item.id} />;
      })}
    </div>
  );
};
