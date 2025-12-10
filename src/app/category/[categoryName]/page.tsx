"use client";
import { MovieDetail } from "@/app/_type/MovieDetail";
import { Star } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, settotalPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=${currentPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);

      setMovies(data.results);
      settotalPage(data.total_pages);
    };
    fetchData();
  }, [categoryName, currentPage]);
  const nextPage = () => {
    setcurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setcurrentPage((prev) => prev - 1);
  };
  const jumpPage = () => {
    setcurrentPage((prev) => prev + 4);
  };
  return (
    <div className="px-20 pb-8">
      <div className="w-full flex mb-8 mt-13">
        <p className="text-4xl font-bold capitalize">{categoryName}</p>
      </div>
      <div className="grid grid-cols-5 gap-8">
        {movies?.map((movie) => (
          <Link rel="preload" href={`/movie/${movie.id}`}>
            <div key={movie.id} className="w-full aspect-2/3 cursor-pointer">
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
      <div className="mt-8">
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft /> Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button variant="outline">{currentPage}</Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={nextPage}
                disabled={currentPage > totalPage - 2}
              >
                {currentPage}
              </Button>
            </PaginationItem>
            <div>...</div>
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={jumpPage}
                disabled={currentPage > totalPage ? totalPage : void}
              >
                {currentPage}
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                onClick={nextPage}
                disabled={currentPage > totalPage - 1}
              >
                Next <ChevronRight />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default CategoryPage;
