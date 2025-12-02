"use client";

import { Input } from "@/components/ui/input";
import { ModeToggle } from "./_components/ModeToggle";
import { CarouselDemo } from "./_components/Carousel";
import { Header } from "./_components/Header";
import { Logo } from "./_components/Logo";
import { FooterContent } from "./_components/FooterContent";
import { MovieSection } from "./_components/MovieSection";

export default function Home() {
  return (
    <>
      <div className="w-screen h-9 flex justify-between items-center pr-20 pl-20 my-3">
        <Logo />
        <div className=" flex gap-3">
          <Header />
          <Input
            className="w-[379px] h-9 text-[14px] leading-5 text-[#71717A] font-normal font-sans"
            type="search"
            placeholder="Search.."
          />
        </div>
        <ModeToggle />
      </div>
      <div className="w-screen h-[600px]">
        <CarouselDemo />
      </div>
      <MovieSection category="upcoming" />
      <MovieSection category="popular" />
      <MovieSection category="top_rated" />
      <FooterContent />
    </>
  );
}
