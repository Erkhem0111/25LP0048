"use client";

import { MovieDetail } from "@/app/_type/MovieDetail";
import { getData } from "@/app/_utils/getData";
import { Badge } from "@/components/ui/badge";
import { Fullscreen, Star } from "lucide-react";
import { use, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  const [movie, setMovies] = useState<MovieDetail>();
  const [video, setVideo] = useState<string>("");
  const [genre, setGenres] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const Data = await fetch(`/movie/${movieId}?language=en-US`);
      const data = await getData(`/movie/${movieId}?language=en-US`);

      const videoData = await getData(
        `/movie/${movieId}/videos?language=en-US`
      );

      const trailer = videoData.results.find(
        (item: any) => item.type === "Trailer"
      );

      const genre = await fetch(`/genre/movie/list?language=en`);

      setMovies(data);
      setVideo(trailer?.key);
    };

    fetchData();
  }, []);
  return (
    <div className="px-45">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[36px] leading-10 text-[#09090B] font-bold">
            {movie?.title}
          </p>
          <p className="text-[18px] leading-7 text-[#09090B] font-normal">
            {movie?.release_date} &#8226; {movie?.runtime} mins
          </p>
        </div>
        <div>
          <p className="text-[16px] leading-4 font-semibold font-sans text-[#09090B]">
            Rating:
          </p>
          <p className="flex gap-1 text-[14px] leading-6 text-[#09090B] font-medium font-sans pt-1">
            <Star className="leading-10 size-7 text-[#FDE047] fill-[#FDE047]" />
            {movie?.vote_average} /10
          </p>
          <p className="text-[14px] leading-4 text-[#71717A] font-medium pt-1">
            {movie?.vote_count}k
          </p>
        </div>
      </div>
      <div className="w-full h-[720px] flex justify-between gap-8 mt-8">
        <img
          className="w-[480px]"
          src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
        />
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${video}`}
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="mt-8">
        <div className="flex gap-3">
          {movie?.genres?.map((movie) => (
            <Badge
              className="text-[16px] leading-4 text-[#09090B] font-semibold font-sans p-2"
              variant="outline"
              key={movie.name}
            >
              {movie.name}
            </Badge>
          ))}
        </div>
        <div className="text-[18px] leading-6 text-[#09090B] font-normal font-sans mt-5">
          {movie?.overview}
        </div>
      </div>
    </div>
  );
};
export default MovieDetailPage;
