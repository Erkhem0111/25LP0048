import { useEffect, useState } from "react";
import { MovieProps } from "../_type/MovieSectionProps";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

type MovieSectionProps = {
  category: string;
};
export const SimilarMovies = ({ category }: MovieSectionProps) => {
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
      setMovies(data.results.slice(0, 5));
      console.log(data);
    };
    fetchMovies();
  }, [category]);
  return (
    <div className="w-full flex flex-col items-center px-20 pb-8">
      <div className="w-full flex justify-between items-center mt-10 mb-5">
        <h2 className="text-4xl font-bold capitalize">
          {category?.replace("_", " ")}
        </h2>
        <div className="flex gap-1 items-center cursor-pointer">
          <Link
            href={`/category/${category}`}
            className="text-[#09090B] hover:underline text-xl"
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
