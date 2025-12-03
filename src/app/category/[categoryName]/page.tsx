"use client";
import { MovieDetail } from "@/app/_type/MovieDetail";
import { Star } from "lucide-react";
import { use, useEffect, useState } from "react";

const CategorySectionDetail = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.results);

      setMovies(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="px-20 pb-8">
      <div className="w-full flex mb-8 mt-13">
        <p className="text-4xl font-bold capitalize">{categoryName}</p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="w-full aspect-2/3">
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            <div className="w-full h-[100px] pl-3 bg-gray-100 rounded-b-lg">
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
        ))}
      </div>
    </div>
  );
};
export default CategorySectionDetail;
