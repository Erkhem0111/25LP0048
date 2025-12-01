import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Introducton } from "./Introduction";
export const CarouselDemo = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="object-cover mt-5"
    >
      <CarouselContent>
        <CarouselItem className="relative">
          <Card className="py-0 rounded-none">
            <CardContent className="p-0">
              <img
                className="w-full aspect-5/2  object-center"
                src="/Wicked.jpg"
              />
              <Introducton
                name="Now Playing:"
                moviename="Wicked"
                rating="6.9/10"
                description="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
                btn="Watch Trailer"
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="relative">
          <Card className="py-0 rounded-none ">
            <CardContent className="p-0">
              <img
                className="w-full aspect-5/2  object-center relative"
                src="/Gladiator.png"
              />
              <Introducton
                name="Now Playing:"
                moviename="Gladiator 2"
                rating="6.9/10"
                description="Lucius lives with his wife in Numidia but is taken prisoner by the Roman army after they invade his home and kill his wife. He is sold into slavery to become a gladiator in the Colosseum. He seeks revenge against the Romans and their general, Acacius."
                btn="Watch Trailer"
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="relative">
          <Card className="py-0 rounded-none">
            <CardContent className="p-0">
              <img
                className="w-full aspect-5/2  object-center relative"
                src="/Moana.jpg"
              />
              <Introducton
                name="Now Playing:"
                moviename="Moana 2"
                rating="6.9/10"
                description="reunites Moana and Maui three years later for an expansive new voyage alongside a crew of unlikely seafarers. After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced"
                btn="Watch Trailer"
              />
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="w-12 h-12 rounded-full bg-[#F4F4F5] absolute right-6" />
      <CarouselPrevious className="w-12 h-12 rounded-full bg-[#F4F4F5] absolute left-6" />
    </Carousel>
  );
};
