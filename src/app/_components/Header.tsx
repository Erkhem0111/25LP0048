import { Input } from "@/components/ui/input";
import { Genres } from "./Genres";
import { Logo } from "./Logo";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="w-screen h-9 flex justify-between items-center px-20 py-7 my-3 ">
      <Logo />
      <div className=" flex gap-3">
        <Genres />
        <Input
          className="w-[379px] h-9 text-[14px] leading-5 text-[#71717A] font-normal font-sans"
          type="search"
          placeholder="Search.."
        />
      </div>
      <ModeToggle />
    </div>
  );
};
