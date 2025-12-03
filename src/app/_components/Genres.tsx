"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Default } from "./Default";
import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
};

export const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzNhMTIxMDYyNTU4NjBhMWI5YzhmMjgxMmI0MmRmNyIsIm5iZiI6MTc2MzUyMzc4My4wNDQ5OTk4LCJzdWIiOiI2OTFkM2NjNzI4NGU4MTdkMTU3YWQ2YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mfl-GQGp-ReV8ZU3_05ivKG90EVZD8w5trYvvNnpjow",
            accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    getGenres();
  }, []);

  return (
    <NavigationMenu className="w-fit h-fit bg-[#FFFFFF] border border-[#E4E4E7] rounded-md shadow-xs">
      <NavigationMenuItem>
        <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
        <NavigationMenuContent className="pl- border border-[#E4E4E7] rounded-lg w-[577px] h-fit">
          <div className="flex flex-col gap-1">
            <p className="text-[24px] text-[#09090B] leading-6 font-semibold font-sans">
              Genres
            </p>
            <p className="text-[16px] text-[#09090B] leading-6 font-normal font-sans">
              See lists of movies by genre
            </p>
          </div>
          <div className="w-[537px] h-[15px] border-b border-[#E4E4E7] mb-3"></div>
          <div className="w-[537px] flex flex-wrap gap-4 mb-3">
            {genres.map((item) => {
              return <Default key={item.id} name={item.name} />;
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};
