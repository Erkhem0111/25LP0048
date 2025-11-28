import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { MovieSection } from "./MovieSection";

export const MovieList = () => {
  return (
    <div className="mt-[52px]">
      <div className="flex items-center justify-between">
        <p className="text-[24px] leading-8 text-[#09090B] font-semibold font-sans">
          Upcoming
        </p>
        <Button className="flex gap-2 items-center">
          <p className="text-[14px] leading-5 text-[#09090B] font-medium font-sans">
            see more
          </p>
          <ArrowBigRight />
        </Button>
      </div>
      <MovieSection />
    </div>
  );
};
