"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Film } from "lucide-react";
import Image from "next/image";
import { Default } from "./_components/Default";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./_components/ModeToggle";
import { CarouselDemo } from "./_components/Carousel";
import { Introducton } from "./_components/Introduction";
import { MovieCard } from "./_components/MovieCard";
import { Item } from "@radix-ui/react-navigation-menu";
import { Header } from "./_components/Header";
import { Logo } from "./_components/Logo";
import { FooterContent } from "./_components/FooterContent";
import { MovieSection } from "./_components/MovieSection";
import { DiagnosticCategory } from "typescript";

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
