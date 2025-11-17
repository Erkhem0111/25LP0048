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
const length = [
  {
    image: "/Wicked.jpg",
  },
  {
    image: "/gladiator2.webp",
  },
  {
    image: "/Moana.jpg",
  },
];
const data1 = [{ name: "" }];
const data = [
  {
    name: "Action",
  },
  {
    name: "Adventure",
  },
  {
    name: "Animation",
  },
  {
    name: "Biography",
  },
  {
    name: "Comedy",
  },
  {
    name: "Crime",
  },
  {
    name: "Documentary",
  },
  {
    name: "Drama",
  },
  {
    name: "Family",
  },
  {
    name: "Fantasy",
  },
  {
    name: "Film-Noir",
  },
  {
    name: "Game-Show",
  },
  {
    name: "History",
  },
  {
    name: "Horror",
  },
  {
    name: "Music",
  },
  {
    name: "Musical",
  },
  {
    name: "Mystery",
  },
  {
    name: "News",
  },
  {
    name: "Reality-TV",
  },
  {
    name: "Romance",
  },
  {
    name: "Sci-Fi",
  },
  {
    name: "Short",
  },
  {
    name: "Sport",
  },
  {
    name: "Talk-Show",
  },
  {
    name: "Thriller",
  },
  {
    name: "War",
  },
  {
    name: "Western",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-screen h-9 flex justify-between items-center pr-20 pl-20 my-3">
        <div className="text-[16px] text-[#4338CA] leading-5 font-bold font-sans flex gap-2 items-center">
          <Film />
          Movie Z
        </div>
        <div className=" flex gap-3">
          <NavigationMenu className="w-25 h-9 bg-[#FFFFFF] border border-[#E4E4E7] rounded-md shadow-xs">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent className="pl- border border-[#E4E4E7] rounded-lg w-[577px] h-[333px]">
                <div className="flex flex-col gap-1">
                  <p className="text-[24px] text-[#09090B] leading-6 font-semibold font-sans">
                    Genres
                  </p>
                  <p className="text-[16px] text-[#09090B] leading-6 font-normal font-sans">
                    See lists of movies by genre
                  </p>
                </div>
                <div className="w-[537px] h-[15px] border-b border-[#E4E4E7]"></div>
                <div className="w-[537px] flex flex-wrap gap-4 mt-5">
                  {data.map((item, index) => {
                    return <Default key={index} name={item.name} />;
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
          <Input
            className="w-[379px] h-9 text-[14px] leading-5 text-[#71717A] font-normal font-sans"
            type="search"
            placeholder="Search.."
          />
        </div>
        {data1.map((item, index) => {
          return <ModeToggle key={index} />;
        })}
      </div>
      <div className="w-screen h-[600px]">
        {length.map((item, index) => {
          return <Carousel key={index} />;
        })}
      </div>
    </>
  );
}
