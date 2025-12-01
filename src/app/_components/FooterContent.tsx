import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

export const FooterContent = () => {
  return (
    <div className="w-full h-[280px] bg-[#4338CA]">
      <div className="flex justify-between px-20 py-10 text-[14px] leading-5 text-[#FAFAFA] font-normal font-sans">
        <div>
          <Logo />
          <p className="pt-3">© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-24">
          <div>
            <p>Contact Information</p>
            <div className="flex gap-3 pt-3">
              <Mail />
              <p>Email: support@movieZ.com</p>
            </div>
            <div className="flex gap-3 pt-3">
              <Phone />
              <p>Phone: +976 (11) 123-4567</p>
            </div>
          </div>
          <div>
            <p>Follow us</p>
            <div className="flex gap-3 pt-3">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
