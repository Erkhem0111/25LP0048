"use client";

import { MovieDetail } from "@/app/_type/MovieDetail";
import { getData } from "@/app/_utils/getData";
import { use, useEffect, useState } from "react";

const MovieDetailPage = ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = use(params);
  const [movie, setMovies] = useState<MovieDetail[]>([]);
  const [video, setVideo] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`/movie/${movieId}?language=en-US`);
      const videoData = await getData(
        `/movie/${movieId}/videos?language=en-US`
      );

      setMovies(data);
      setVideo(videoData?.results[1]?.key);
    };

    fetchData();
  }, []);
  return (
    <div>
      <img src={`${process.env.TMDB_IMAGE_SERVICE_URl}/original/${movie}`} />
    </div>
  );
};
export default MovieDetailPage;
