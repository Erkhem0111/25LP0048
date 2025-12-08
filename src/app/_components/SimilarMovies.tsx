"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SimilarMovies = {
  category: string;
};
export const SimilarMovie = ({ category }: SimilarMovies) => {
  return (
    <div className="w-full flex flex-col items-center px-20 pb-8">
      <div className="w-full flex justify-between items-center mt-10 mb-5">
        <h2 className="text-4xl font-bold capitalize">
          {category.replace("_", " ")}
        </h2>
        <div className="flex gap-1 items-center cursor-pointer">
          <Link
            href={`/similar/${category}`}
            className="text-[#09090B] hover:underline text-xl"
          >
            See More
          </Link>
          <ArrowRight className="size-4" />
        </div>
      </div>
    </div>
  );
};
