import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
type DefaultProps = {
  name: string;
};

export const Default = ({ name }: DefaultProps) => {
  return (
    <Badge
      className="text-[12px] leading-4 text-[#09090B] font-semibold font-sans cursor-pointer"
      variant="outline"
    >
      {name}
      <ChevronRight />
    </Badge>
  );
};
