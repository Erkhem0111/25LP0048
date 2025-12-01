"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieProps } from "../_type/MovieSectionProps";
import { MovieCard } from "./MovieCard";
import { ArrowBigLeft, ArrowDownLeftIcon, ArrowRight } from "lucide-react";

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
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
            accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setMovies(data.results.slice(0, 10));
      console.log(data);
    };
    fetchMovies();
  }, [category]);
  return (
    <div className="w-full gap-8 flex flex-col items-center">
      <div className="w-full flex justify-center gap-275 items-center">
        <h2 className="text-2xl font-bold capitalize">
          {category.replace("_", " ")}
        </h2>
        <div className="flex gap-1 items-center cursor-pointer">
          <Link
            href={`/category/${category}`}
            className="text-[#09090B] hover:underline"
          >
            See More
          </Link>
          <ArrowRight className="size-4" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
