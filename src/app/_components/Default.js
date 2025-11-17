import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export const Default = (props) => {
  return (
    <Badge
      className="text-[12px] leading-4 text-[#09090B] font-semibold font-sans"
      variant="outline"
    >
      {props.name}
      <ChevronRight />
    </Badge>
  );
};
