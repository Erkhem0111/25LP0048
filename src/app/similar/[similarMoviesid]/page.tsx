"use client";
import { MovieDetail } from "@/app/_type/MovieDetail";
import { Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SimilarMoviesPage = () => {
  const { similarMoviesid } = useParams();
  const [movies, setMovies] = useState<MovieDetail[]>([]);

  useEffect(() => {
    if (!similarMoviesid) return;
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${similarMoviesid}/similar?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      console.log(similarMoviesid);

      setMovies(data.results);
    };
    fetchData();
  }, [similarMoviesid]);
  return (
    <div className="px-20 pb-8">
      <div className="w-full flex mb-8 mt-13">
        <p className="text-4xl font-bold capitalize">More like this</p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies?.map((movie) => (
          <Link rel="preload" href={`/movie/${movie.id}`}>
            <div className="w-full aspect-2/3 cursor-pointer">
              <img
                className="rounded-t-2xl"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              />
              <div className="w-full h-[100px] pl-3 bg-gray-100 rounded-b-2xl">
                <div className="flex gap-2 items-center pt-2">
                  <Star className="text-[#FDE047] size-4" />
                  <p className="text-[16px] leading-5 font-medium items-center">
                    {movie.vote_average}
                  </p>
                </div>
                <p className="text-[20px] leading-7 font-normal">
                  {movie.original_title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SimilarMoviesPage;
