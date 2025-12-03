"use client";

import Link from "next/link";
import { MovieProps } from "../_type/MovieSectionProps";
import { Star } from "lucide-react";

type MovieCardProps = {
  movie: MovieProps;
};
export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link rel="preload" href={`/movie/${movie.id}`}>
      <div className="w-full aspect-2/3">
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
        <div className="w-full h-[100px] pl-3 bg-gray-100 rounded-b-lg">
          <div className="flex gap-2 items-center pt-2">
            <Star className="text-[#FDE047] fill-[#FDE047] size-4" />
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
  );
};
