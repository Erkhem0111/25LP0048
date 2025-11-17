import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
export const NavigationMenu = () => {
  return (
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
          <div className="w-[537px] flex flex-wrap gap-4">
            {data.map((item, index) => {
              return <Default key={index} name={item.name} />;
            })}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};
