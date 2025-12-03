"use client";

import { CarouselDemo } from "./_components/Carousel";
import { MovieSection } from "./_components/MovieSection";

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <CarouselDemo />
      </div>
      <MovieSection category="upcoming" />
      <MovieSection category="popular" />
      <MovieSection category="top_rated" />
    </>
  );
}
