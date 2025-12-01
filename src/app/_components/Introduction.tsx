import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Star } from "lucide-react";
import { BenefitProps } from "../_type/BenefitProps";

export const Introducton = (props: BenefitProps) => {
  return (
    <>
      <Card className="w-[430px] h-fit border:none bg-transparent absolute top-80 left-45 z-10">
        <CardHeader>
          <CardTitle>
            <h1 className="text-[28px] leading-6 text-[#FFFFFF] font-normal font-sans">
              {props.name}
            </h1>
            <h2 className="text-[56px] leading-10 text-[#FFFFFF] font-extrabold font-sans pt-4">
              {props.moviename}
            </h2>
            <div className="flex pt-6 items-center gap-2">
              <Star className="w-7 h-7 text-[#FDE047]" />
              <h3 className="text-[28px] leading-7 text-[#FFFFFF] font-semibold font-sans">
                {props.rating}
              </h3>
            </div>
          </CardTitle>
          <CardDescription className="text-[18px] text-justify text-[#FAFAFA] leading-5 font-normal font-sans mt-4">
            {props.description}
            <Button
              variant="outline"
              className="w-fit h-14 flex gap-2 items-center justify-center bg-[#F4F4F5] py-0 mt-6 cursor-pointer"
            >
              <Play className="text-[#18181B] text-[48px]" />
              <p className="text-[24px] leading-5 text-[#18181B] font-medium font-sans">
                {props.btn}
              </p>
            </Button>
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};
