"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieProps } from "../_type/MovieSectionProps";
import { MovieList } from "./Movielist";

type MovieSectionProps = {
  category: string;
};
export const MovieSection = ({ category }: MovieSectionProps) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzNhMTIxMDYyNTU4NjBhMWI5YzhmMjgxMmI0MmRmNyIsIm5iZiI6MTc2MzUyMzc4My4wNDQ5OTk4LCJzdWIiOiI2OTFkM2NjNzI4NGU4MTdkMTU3YWQ2YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mfl-GQGp-ReV8ZU3_05ivKG90EVZD8w5trYvvNnpjow`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setMovies(data.results.slice(0, 10));
    };
    fetchMovies();
  }, [category]);
  return (
    <div className="w-full gap-8 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold capitalize">
          {category.replace("_", " ")}
        </h2>
        <Link
          href={`/category/${category}`}
          className="text-blue-500 hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieList key={movie.id} />
        ))}
      </div>
    </div>
  );
};
